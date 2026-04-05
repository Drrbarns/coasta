import { createClient } from "@/lib/supabase/server";
import { AdminContentManager } from "@/components/admin/AdminContentManager";

type ContentRow = {
  id: string;
  key: string;
  value: unknown;
  description: string | null;
  updated_at: string;
};

export default async function AdminContentPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("admin_content")
    .select("id,key,value,description,updated_at")
    .order("updated_at", { ascending: false });

  const rows = (data ?? []) as ContentRow[];

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#d8e7de] bg-[#f9fcfb] p-4 md:p-5">
        <h1 className="font-[family-name:var(--font-inter)] text-[1.7rem] font-bold tracking-tight text-[#0f3e2c] md:text-[2rem]">
          Content Manager
        </h1>
        <p className="mt-1 text-sm text-[#5f786c]">
          Create and edit structured JSON content entries stored in Supabase.
        </p>
      </div>
      <AdminContentManager initialRows={rows} />
    </div>
  );
}
