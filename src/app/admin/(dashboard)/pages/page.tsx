import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminPagesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("page_blocks")
    .select("id,page_slug,block_key,title,body,content,is_published,display_order,updated_at")
    .order("display_order", { ascending: true });

  return (
    <AdminEntityManager
      entity="pages"
      title="Pages"
      description="Create structured page blocks for editable page sections."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "page_slug", label: "Page slug", required: true },
        { key: "block_key", label: "Block key", required: true },
        { key: "title", label: "Title" },
        { key: "body", label: "Body", type: "textarea" },
        { key: "content", label: "JSON content", type: "json" },
        { key: "display_order", label: "Display order", type: "number" },
        { key: "is_published", label: "Published", type: "checkbox" },
      ]}
    />
  );
}
