import { createClient } from "@/lib/supabase/server";
import { AdminEntityManager } from "@/components/admin/AdminEntityManager";

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("admin_users")
    .select("id,email,full_name,role,is_active,updated_at")
    .order("updated_at", { ascending: false });

  return (
    <AdminEntityManager
      entity="users"
      title="Users"
      description="Maintain admin profile records (single-super-admin mode stays enforced in app auth)."
      initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>}
      fields={[
        { key: "email", label: "Email", required: true },
        { key: "full_name", label: "Full name" },
        { key: "role", label: "Role", type: "select", options: ["super_admin"] },
        { key: "is_active", label: "Active", type: "checkbox" },
      ]}
    />
  );
}
