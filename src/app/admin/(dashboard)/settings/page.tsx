import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminSettingsPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("admin_config").select("id,super_admin_email,updated_at").order("id");

  return (
    <AdminEntityManager
      entity="settings"
      title="Settings"
      description="Manage DB-backed admin settings. Keep environment variable ADMIN_SUPER_EMAIL in sync."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "super_admin_email", label: "Super admin email", required: true },
      ]}
    />
  );
}
