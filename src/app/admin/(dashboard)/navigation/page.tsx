import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminNavigationPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("navigation_links")
    .select("id,area,parent_label,label,href,display_order,updated_at")
    .order("display_order", { ascending: true });

  return (
    <AdminEntityManager
      entity="navigation"
      title="Navigation"
      description="Manage public header and footer navigation links."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "area", label: "Area", type: "select", options: ["main", "footer"] },
        { key: "parent_label", label: "Parent label (optional)" },
        { key: "label", label: "Label", required: true },
        { key: "href", label: "Href", required: true },
        { key: "display_order", label: "Display order", type: "number" },
      ]}
    />
  );
}
