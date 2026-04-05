import { NextResponse } from "next/server";
import { requireSuperAdminApi } from "@/lib/admin/super-admin";
import { adminEntityConfig, type AdminEntity } from "@/lib/admin/entities";

type RouteContext = {
  params: Promise<{ entity: string; id: string }>;
};

function resolveConfig(entity: string) {
  const config = adminEntityConfig[entity as AdminEntity];
  if (!config) return null;
  return config;
}

function buildUpdatePayload(
  payload: Record<string, unknown>,
  updatableFields: string[],
  userId: string,
  includeUpdatedBy: boolean,
) {
  const record: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };
  if (includeUpdatedBy) record.updated_by = userId;

  for (const field of updatableFields) {
    if (field in payload) {
      record[field] = payload[field];
    }
  }
  return record;
}

export async function PATCH(request: Request, context: RouteContext) {
  const { entity, id } = await context.params;
  const config = resolveConfig(entity);
  if (!config) return NextResponse.json({ error: "Unknown entity." }, { status: 404 });

  const { supabase, user, unauthorized } = await requireSuperAdminApi();
  if (!user) return unauthorized;

  const payload = (await request.json()) as Record<string, unknown>;
  const record = buildUpdatePayload(
    payload,
    config.updatableFields,
    user.id,
    config.includeUpdatedBy !== false,
  );

  const { data, error } = await supabase
    .from(config.table)
    .update(record)
    .eq("id", id)
    .select(config.select)
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ data });
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { entity, id } = await context.params;
  const config = resolveConfig(entity);
  if (!config) return NextResponse.json({ error: "Unknown entity." }, { status: 404 });

  const { supabase, user, unauthorized } = await requireSuperAdminApi();
  if (!user) return unauthorized;

  const { error } = await supabase.from(config.table).delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ success: true });
}

