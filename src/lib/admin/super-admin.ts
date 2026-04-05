import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function getAllowedEmails() {
  const raw = process.env.ADMIN_SUPER_EMAILS ?? process.env.ADMIN_SUPER_EMAIL ?? "";
  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isSuperAdminEmail(email: string | null | undefined) {
  if (!email) return false;
  const allowed = getAllowedEmails();
  if (allowed.length === 0) return false;
  return allowed.includes(email.toLowerCase());
}

async function isSuperAdmin(supabase: Awaited<ReturnType<typeof createClient>>, email: string | null | undefined) {
  // Fast path: explicit env allowlist.
  if (isSuperAdminEmail(email)) return true;

  // Fallback path: DB-backed check via `public.is_super_admin()`.
  // This lets admin access work even when the env allowlist is not set.
  try {
    const { data, error } = await supabase.rpc("is_super_admin");
    if (error) return false;
    return Boolean(data);
  } catch {
    return false;
  }
}

export async function requireSuperAdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const allowed = await isSuperAdmin(supabase, user.email);
  if (!allowed) {
    redirect("/admin/login?error=unauthorized");
  }

  return { supabase, user };
}

export async function requireSuperAdminApi() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return {
      supabase,
      user: null,
      unauthorized: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  const allowed = await isSuperAdmin(supabase, user.email);
  if (!allowed) {
    return {
      supabase,
      user: null,
      unauthorized: NextResponse.json({ error: "Forbidden" }, { status: 403 }),
    };
  }

  return { supabase, user, unauthorized: null as NextResponse<unknown> | null };
}

