# Agrillano-style site (Next.js)

A Next.js rebuild of the layout and sections from Agrillano — same structure and feel, with **all copy and nav driven from one file** so you can swap in your own brand later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin panel (Supabase)

An authenticated admin area is available at `/admin` with:

- Login via Supabase Auth (`/admin/login`)
- Protected admin dashboard shell
- Content Manager with JSON CRUD against Supabase (`/admin/content`)
- Scaffold areas for pages/navigation/media/settings/users

### 1) Environment variables

Create/update `.env` with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 2) Create admin content table

Run SQL from:

- `supabase/admin-schema.sql`

This creates `public.admin_content` + RLS policies for authenticated users.

### 3) Create an admin user

In Supabase dashboard:

- Authentication → Users → create/add user
- Sign in at `/admin/login`

## Switching content later

1. **Edit `src/content/site.ts`** — company name, tagline, nav, brands, produce cards, news, footer, image URLs, etc.
2. **Colours** — tweak CSS variables in `src/app/globals.css` (`--color-primary`, `--color-cream`, …).
3. **Real logos** — drop images in `public/brands/` and map them in content or replace the text blocks in `BrandsSection.tsx`.
4. **Inner pages** — many inner routes now have dedicated pages; remaining paths use `src/app/[...slug]/page.tsx` placeholder until you replace them.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Images: Unsplash URLs (allowed in `next.config.ts`); add your hostnames when you self-host assets.

## Note

This is a **design/layout clone** for your own project, not affiliated with Agrillano. Replace all trademarks and copy before publishing publicly.
