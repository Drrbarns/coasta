import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminNewsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("news_posts")
    .select("id,title,excerpt,href,image_url,status,publish_at,display_order,updated_at")
    .order("display_order", { ascending: true });

  return (
    <AdminEntityManager
      entity="news"
      title="News"
      description="Manage article cards displayed on the public News page."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "title", label: "Title", required: true },
        { key: "excerpt", label: "Excerpt", type: "textarea", required: true },
        { key: "href", label: "Link URL", required: true },
        { key: "image_url", label: "Image URL", required: true },
        { key: "status", label: "Status", type: "select", options: ["draft", "published", "archived"] },
        { key: "publish_at", label: "Publish at (ISO)" },
        { key: "display_order", label: "Display order", type: "number" },
      ]}
    />
  );
}

