import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { count: contentCount } = await supabase
    .from("admin_content")
    .select("id", { count: "exact", head: true });
  const { count: jobsCount } = await supabase.from("jobs").select("id", { count: "exact", head: true });
  const { count: newsCount } = await supabase.from("news_posts").select("id", { count: "exact", head: true });
  const { count: mediaCount } = await supabase.from("media_assets").select("id", { count: "exact", head: true });

  const { data: recentJobs } = await supabase
    .from("jobs")
    .select("id,title,updated_at")
    .order("updated_at", { ascending: false })
    .limit(5);

  const totalManaged = (contentCount ?? 0) + (jobsCount ?? 0) + (newsCount ?? 0) + (mediaCount ?? 0);
  const moduleCards = [
    { label: "Content blocks", value: contentCount ?? 0, href: "/admin/content", accent: "from-emerald-500 to-emerald-600" },
    { label: "Live jobs", value: jobsCount ?? 0, href: "/admin/jobs", accent: "from-cyan-500 to-cyan-600" },
    { label: "News posts", value: newsCount ?? 0, href: "/admin/news", accent: "from-blue-500 to-blue-600" },
    { label: "Media assets", value: mediaCount ?? 0, href: "/admin/media", accent: "from-violet-500 to-violet-600" },
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-2xl border border-[#cfe2d8] bg-[linear-gradient(130deg,#0b4f35_0%,#0f6f4a_40%,#13925f_100%)] p-5 text-white md:p-7">
        <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#abffd9]/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Executive Dashboard</p>
          <h1 className="mt-2 font-[family-name:var(--font-inter)] text-[2rem] font-bold tracking-tight md:text-[2.4rem]">
            Welcome back{user?.email ? `, ${user.email}` : ""}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-white/90 md:text-base">
            Monitor publishing, recruitment, and media operations from one premium control center.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {moduleCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wide text-white/80">{card.label}</p>
                <p className="mt-1 text-3xl font-bold">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-[#d7e6dd] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#678074]">Platform Snapshot</p>
              <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-[#103f2d]">Managed records</h2>
            </div>
            <span className="rounded-full bg-[#ecf8f1] px-3 py-1 text-sm font-semibold text-[#0e7148]">
              Total: {totalManaged}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {moduleCards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="group rounded-xl border border-[#d9e8df] bg-[#fbfdfc] p-4 transition hover:-translate-y-0.5 hover:border-[#b8d7c8] hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#234f3d]">{card.label}</p>
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${card.accent}`} />
                </div>
                <p className="mt-2 text-3xl font-bold text-[#0b4f35]">{card.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#5f786c] group-hover:text-[#0f6a45]">Open module</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#d7e6dd] bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#678074]">Quick Launch</p>
          <h2 className="mt-1 font-[family-name:var(--font-inter)] text-xl font-bold text-[#103f2d]">Primary actions</h2>
          <div className="mt-4 space-y-2.5">
            <Link href="/admin/jobs" className="block rounded-xl bg-[#0f6f4a] px-4 py-3 text-sm font-semibold text-white hover:opacity-95">
              Manage jobs
            </Link>
            <Link href="/admin/news" className="block rounded-xl border border-[#cce0d4] px-4 py-3 text-sm font-semibold text-[#0e5a3c] hover:bg-[#f2faf6]">
              Publish news
            </Link>
            <Link href="/admin/media" className="block rounded-xl border border-[#cce0d4] px-4 py-3 text-sm font-semibold text-[#0e5a3c] hover:bg-[#f2faf6]">
              Upload media
            </Link>
            <Link href="/admin/navigation" className="block rounded-xl border border-[#cce0d4] px-4 py-3 text-sm font-semibold text-[#0e5a3c] hover:bg-[#f2faf6]">
              Update navigation
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#d7e6dd] bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#678074]">Activity Feed</p>
            <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-[#103f2d]">Recent job updates</h2>
          </div>
          <Link href="/admin/jobs" className="rounded-lg border border-[#cce0d4] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0e5a3c] hover:bg-[#f2faf6]">
            View all jobs
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-3">
          {(recentJobs ?? []).map((job) => (
            <li key={job.id} className="rounded-xl border border-[#d8e7de] bg-[#fbfdfc] px-4 py-3">
              <p className="font-semibold text-[#0e553a]">{job.title}</p>
              <p className="mt-0.5 text-xs text-[#70877c]">{new Date(job.updated_at).toLocaleString()}</p>
            </li>
          ))}
          {(!recentJobs || recentJobs.length === 0) && (
            <li className="rounded-xl border border-dashed border-[#cce0d4] px-4 py-8 text-center text-sm text-[#6f877b]">
              No recent updates yet.
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
