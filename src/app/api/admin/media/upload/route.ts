import { NextResponse } from "next/server";
import { requireSuperAdminApi } from "@/lib/admin/super-admin";

export async function POST(request: Request) {
  const { supabase, user, unauthorized } = await requireSuperAdminApi();
  if (!user) return unauthorized;

  const formData = await request.formData();
  const file = formData.get("file");
  const altText = String(formData.get("altText") ?? "");
  const tagsRaw = String(formData.get("tags") ?? "");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required." }, { status: 400 });
  }

  const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
  const bucketPath = `${Date.now()}-${safeName}.${ext}`;

  const { error: uploadError } = await supabase.storage.from("admin-media").upload(bucketPath, file, {
    upsert: false,
    contentType: file.type || undefined,
  });
  if (uploadError) return NextResponse.json({ error: uploadError.message }, { status: 400 });

  const { data: publicData } = supabase.storage.from("admin-media").getPublicUrl(bucketPath);
  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const { data, error } = await supabase
    .from("media_assets")
    .insert({
      name: file.name,
      alt_text: altText,
      bucket_path: bucketPath,
      public_url: publicData.publicUrl,
      tags,
      updated_by: user.id,
      updated_at: new Date().toISOString(),
    })
    .select("id,name,alt_text,bucket_path,public_url,tags,updated_at")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}

