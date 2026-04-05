export type AdminEntity =
  | "content"
  | "jobs"
  | "news"
  | "media"
  | "pages"
  | "navigation"
  | "users"
  | "settings";

export type EntityConfig = {
  table: string;
  select: string;
  defaultOrder: { column: string; ascending?: boolean };
  updatableFields: string[];
  includeUpdatedBy?: boolean;
};

export const adminEntityConfig: Record<AdminEntity, EntityConfig> = {
  content: {
    table: "admin_content",
    select: "id,key,value,description,updated_at",
    defaultOrder: { column: "updated_at", ascending: false },
    updatableFields: ["key", "value", "description"],
    includeUpdatedBy: true,
  },
  jobs: {
    table: "jobs",
    select:
      "id,title,summary,job_type,closing_date,category,location,apply_url,info_url,is_published,is_featured,display_order,updated_at",
    defaultOrder: { column: "display_order", ascending: true },
    updatableFields: [
      "title",
      "summary",
      "job_type",
      "closing_date",
      "category",
      "location",
      "apply_url",
      "info_url",
      "is_published",
      "is_featured",
      "display_order",
    ],
    includeUpdatedBy: true,
  },
  news: {
    table: "news_posts",
    select: "id,title,excerpt,href,image_url,status,publish_at,display_order,updated_at",
    defaultOrder: { column: "display_order", ascending: true },
    updatableFields: ["title", "excerpt", "href", "image_url", "status", "publish_at", "display_order"],
    includeUpdatedBy: true,
  },
  media: {
    table: "media_assets",
    select: "id,name,alt_text,bucket_path,public_url,tags,updated_at",
    defaultOrder: { column: "updated_at", ascending: false },
    updatableFields: ["name", "alt_text", "bucket_path", "public_url", "tags"],
    includeUpdatedBy: true,
  },
  pages: {
    table: "page_blocks",
    select: "id,page_slug,block_key,title,body,content,is_published,display_order,updated_at",
    defaultOrder: { column: "display_order", ascending: true },
    updatableFields: ["page_slug", "block_key", "title", "body", "content", "is_published", "display_order"],
    includeUpdatedBy: true,
  },
  navigation: {
    table: "navigation_links",
    select: "id,area,parent_label,label,href,display_order,updated_at",
    defaultOrder: { column: "display_order", ascending: true },
    updatableFields: ["area", "parent_label", "label", "href", "display_order"],
    includeUpdatedBy: true,
  },
  users: {
    table: "admin_users",
    select: "id,email,full_name,role,is_active,updated_at",
    defaultOrder: { column: "updated_at", ascending: false },
    updatableFields: ["email", "full_name", "role", "is_active"],
    includeUpdatedBy: false,
  },
  settings: {
    table: "admin_config",
    select: "id,super_admin_email,updated_at",
    defaultOrder: { column: "id", ascending: true },
    updatableFields: ["super_admin_email"],
    includeUpdatedBy: false,
  },
};

