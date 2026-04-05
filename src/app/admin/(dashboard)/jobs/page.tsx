import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminJobsPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("jobs")
    .select("id,title,summary,job_type,closing_date,category,location,apply_url,info_url,is_published,is_featured,display_order,updated_at")
    .order("display_order", { ascending: true });

  return (
    <AdminEntityManager
      entity="jobs"
      title="Jobs"
      description="Create, publish, and reorder careers vacancies shown on the public jobs page."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "title", label: "Title", required: true },
        { key: "summary", label: "Summary", type: "textarea", required: true },
        { key: "job_type", label: "Job type", required: true },
        { key: "closing_date", label: "Closing date", required: true },
        { key: "category", label: "Category", required: true },
        { key: "location", label: "Location" },
        { key: "apply_url", label: "Apply URL" },
        { key: "info_url", label: "Info URL" },
        { key: "display_order", label: "Display order", type: "number" },
        { key: "is_published", label: "Published", type: "checkbox" },
        { key: "is_featured", label: "Featured", type: "checkbox" },
      ]}
    />
  );
}

