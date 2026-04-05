import { createClient } from "@/lib/supabase/server";
import { AdminMediaManager } from "@/components/admin/AdminMediaManager";

export default async function AdminMediaPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("media_assets")
    .select("id,name,alt_text,bucket_path,public_url,tags,updated_at")
    .order("updated_at", { ascending: false });

  return (
    <AdminMediaManager initialRows={(data ?? []) as Array<{ id: string; [key: string]: unknown }>} />
  );
}
