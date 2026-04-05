import { NextResponse } from "next/server";
import { requireSuperAdminApi } from "@/lib/admin/super-admin";

type ContentPayload = {
  key?: string;
  value?: unknown;
  description?: string | null;
};

export async function GET() {
  const { supabase, user, unauthorized } = await requireSuperAdminApi();
  if (!user) return unauthorized;

  const { data, error } = await supabase
    .from("admin_content")
    .select("id,key,value,description,updated_at")
    .order("updated_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const { supabase, user, unauthorized } = await requireSuperAdminApi();
  if (!user) return unauthorized;

  const payload = (await request.json()) as ContentPayload;
  const key = payload.key?.trim();

  if (!key) {
    return NextResponse.json({ error: "A content key is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("admin_content")
    .upsert(
      {
        key,
        value: payload.value ?? {},
        description: payload.description ?? null,
        updated_at: new Date().toISOString(),
        updated_by: user.id,
      },
      { onConflict: "key" },
    )
    .select("id,key,value,description,updated_at")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}
