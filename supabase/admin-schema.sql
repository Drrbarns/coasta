-- Run this in Supabase SQL editor
-- This schema creates a full, single-super-admin CMS surface.

create extension if not exists pgcrypto;

create table if not exists public.admin_config (
  id int primary key default 1,
  super_admin_email text not null,
  updated_at timestamptz not null default now()
);

insert into public.admin_config (id, super_admin_email)
values (1, 'admin@example.com')
on conflict (id) do nothing;

create or replace function public.is_super_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) =
         lower(coalesce((select super_admin_email from public.admin_config where id = 1), ''));
$$;

create table if not exists public.admin_content (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value jsonb not null default '{}'::jsonb,
  description text,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text not null,
  job_type text not null,
  closing_date text not null,
  category text not null,
  location text,
  apply_url text default '#',
  info_url text default '#',
  is_published boolean not null default true,
  is_featured boolean not null default false,
  display_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.news_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  excerpt text not null,
  href text not null default '/news',
  image_url text not null,
  status text not null default 'published' check (status in ('draft', 'published', 'archived')),
  publish_at timestamptz,
  display_order int not null default 100,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  alt_text text default '',
  bucket_path text not null unique,
  public_url text not null,
  tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.page_blocks (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  block_key text not null,
  title text,
  body text,
  content jsonb not null default '{}'::jsonb,
  is_published boolean not null default true,
  display_order int not null default 100,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null,
  unique (page_slug, block_key)
);

create table if not exists public.navigation_links (
  id uuid primary key default gen_random_uuid(),
  area text not null check (area in ('main', 'footer')),
  parent_label text,
  label text not null,
  href text not null,
  display_order int not null default 100,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id) on delete set null
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  role text not null default 'super_admin',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_email text not null,
  entity text not null,
  entity_id text,
  action text not null,
  detail jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.admin_config enable row level security;
alter table public.admin_content enable row level security;
alter table public.jobs enable row level security;
alter table public.news_posts enable row level security;
alter table public.media_assets enable row level security;
alter table public.page_blocks enable row level security;
alter table public.navigation_links enable row level security;
alter table public.admin_users enable row level security;
alter table public.admin_activity_logs enable row level security;

drop policy if exists "admin_config_super_admin_all" on public.admin_config;
create policy "admin_config_super_admin_all"
on public.admin_config
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "admin_content_super_admin_all" on public.admin_content;
create policy "admin_content_super_admin_all"
on public.admin_content
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "jobs_super_admin_all" on public.jobs;
create policy "jobs_super_admin_all"
on public.jobs
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "jobs_public_read_published" on public.jobs;
create policy "jobs_public_read_published"
on public.jobs
for select
to anon, authenticated
using (is_published = true);

drop policy if exists "news_posts_super_admin_all" on public.news_posts;
create policy "news_posts_super_admin_all"
on public.news_posts
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "news_posts_public_read_published" on public.news_posts;
create policy "news_posts_public_read_published"
on public.news_posts
for select
to anon, authenticated
using (status = 'published');

drop policy if exists "media_assets_super_admin_all" on public.media_assets;
create policy "media_assets_super_admin_all"
on public.media_assets
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "media_assets_public_read" on public.media_assets;
create policy "media_assets_public_read"
on public.media_assets
for select
to anon, authenticated
using (true);

drop policy if exists "page_blocks_super_admin_all" on public.page_blocks;
create policy "page_blocks_super_admin_all"
on public.page_blocks
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "page_blocks_public_read_published" on public.page_blocks;
create policy "page_blocks_public_read_published"
on public.page_blocks
for select
to anon, authenticated
using (is_published = true);

drop policy if exists "navigation_links_super_admin_all" on public.navigation_links;
create policy "navigation_links_super_admin_all"
on public.navigation_links
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "navigation_links_public_read" on public.navigation_links;
create policy "navigation_links_public_read"
on public.navigation_links
for select
to anon, authenticated
using (true);

drop policy if exists "admin_users_super_admin_all" on public.admin_users;
create policy "admin_users_super_admin_all"
on public.admin_users
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

drop policy if exists "admin_activity_logs_super_admin_all" on public.admin_activity_logs;
create policy "admin_activity_logs_super_admin_all"
on public.admin_activity_logs
for all
to authenticated
using (public.is_super_admin())
with check (public.is_super_admin());

insert into public.admin_content (key, value, description)
values
  ('site.meta', '{}'::jsonb, 'Global site metadata'),
  ('homepage.hero', '{}'::jsonb, 'Homepage hero slider content'),
  ('produce.hero', '{}'::jsonb, 'Produce hero section content'),
  ('careers.hero', '{}'::jsonb, 'Careers hero section content')
on conflict (key) do nothing;

insert into public.jobs (title, summary, job_type, closing_date, category, location, display_order)
values
  ('Task Leader (Technical) - Glasshouse Operations', 'Lead technical greenhouse operations to support quality, yield, and team performance.', 'Full time', 'Friday 1 May 2026', 'Tomato', 'New South Wales, Guyra', 10),
  ('Forklift Operator - Corindi', 'Move and stage produce safely while supporting harvest and dispatch operations.', 'Casual / Seasonal', 'Thursday 16 April 2026', 'Berries', 'Corindi', 20)
on conflict do nothing;

insert into public.news_posts (title, excerpt, href, image_url, status, display_order)
values
  ('Agrillano launches 2026 community grants across regional growers', 'Applications are now open for Agrillano''s annual grants supporting local community initiatives in key farming regions.', '/news/community-grants', '/news/community-grants.png', 'published', 10),
  ('Agrillano Berries recognised in national employer awards', 'Agrillano Berries has been acknowledged for people-first hiring pathways and strong regional workforce development.', '/news/berries-employer-awards', '/news/berries-employer.png', 'published', 20)
on conflict do nothing;

insert into public.navigation_links (area, parent_label, label, href, display_order)
values
  ('main', null, 'About', '/about-us', 10),
  ('main', null, 'Produce', '/produce', 20),
  ('main', null, 'Our Agrillano Way', '/our-costa-way', 30),
  ('main', null, 'News', '/news', 40),
  ('main', null, 'Careers', '/careers', 50),
  ('main', null, 'Contact', '/contact-us', 60),
  ('footer', null, 'Privacy Policy', '/privacy', 10),
  ('footer', null, 'Terms and Conditions', '/terms', 20)
on conflict do nothing;

insert into storage.buckets (id, name, public)
values ('admin-media', 'admin-media', true)
on conflict (id) do nothing;

drop policy if exists "admin_media_public_read" on storage.objects;
create policy "admin_media_public_read"
on storage.objects
for select
to public
using (bucket_id = 'admin-media');

drop policy if exists "admin_media_super_admin_insert" on storage.objects;
create policy "admin_media_super_admin_insert"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'admin-media' and public.is_super_admin());

drop policy if exists "admin_media_super_admin_update" on storage.objects;
create policy "admin_media_super_admin_update"
on storage.objects
for update
to authenticated
using (bucket_id = 'admin-media' and public.is_super_admin())
with check (bucket_id = 'admin-media' and public.is_super_admin());

drop policy if exists "admin_media_super_admin_delete" on storage.objects;
create policy "admin_media_super_admin_delete"
on storage.objects
for delete
to authenticated
using (bucket_id = 'admin-media' and public.is_super_admin());
