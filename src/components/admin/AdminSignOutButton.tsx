"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AdminSignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="inline-flex items-center gap-2 rounded-xl border border-[#c6d9cf] bg-white px-3.5 py-2 text-sm font-semibold text-[#0b4f35] shadow-sm transition hover:-translate-y-0.5 hover:border-[#9ec4b2] hover:bg-[#f4fbf7]"
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#1ab06f]" />
      Sign out
    </button>
  );
}
