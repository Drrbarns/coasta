"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminSignOutButton } from "@/components/admin/AdminSignOutButton";

const links = [
  { href: "/admin", label: "Dashboard", hint: "Overview" },
  { href: "/admin/jobs", label: "Jobs", hint: "Recruitment" },
  { href: "/admin/news", label: "News", hint: "Publishing" },
  { href: "/admin/content", label: "Content", hint: "JSON blocks" },
  { href: "/admin/pages", label: "Pages", hint: "Page sections" },
  { href: "/admin/navigation", label: "Navigation", hint: "Menus + footer" },
  { href: "/admin/media", label: "Media", hint: "Asset library" },
  { href: "/admin/settings", label: "Settings", hint: "Platform" },
  { href: "/admin/users", label: "Users", hint: "Admin access" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#e6f3ec_0%,#f5f7f6_34%,#f3f5f4_100%)]">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-5 px-4 pb-5 pt-5 md:px-8 md:pb-8 md:pt-8 xl:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="relative overflow-hidden rounded-[28px] border border-[#0f5a3b]/20 bg-[linear-gradient(165deg,#0a3f30_0%,#07563b_44%,#08774f_100%)] p-4 text-white shadow-[0_22px_50px_rgba(7,62,44,0.28)]">
          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-40 rounded-full bg-[#7ff0bb]/20 blur-2xl" />

          <div className="relative rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <Link href="/admin" className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xl font-bold">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#9dffd0]" />
              Agrillano Admin
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/70">Control Center</p>
          </div>

          <nav className="relative mt-4 space-y-1.5" aria-label="Admin">
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center justify-between rounded-xl px-3 py-2.5 transition ${
                    isActive ? "bg-white text-[#0b4f35] shadow-sm" : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="font-[family-name:var(--font-inter)] text-sm font-semibold">{item.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                      isActive ? "bg-[#dff5ea] text-[#0b6a44]" : "bg-white/10 text-white/80 group-hover:bg-white/15"
                    }`}
                  >
                    {item.hint}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="min-w-0">
          <header className="mb-5 rounded-[24px] border border-[#d4e4dc] bg-white/90 p-4 shadow-[0_8px_26px_rgba(0,0,0,0.05)] backdrop-blur md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5d7468]">Agrillano Platform</p>
                <h1 className="font-[family-name:var(--font-inter)] text-[1.35rem] font-bold text-[#083b29] md:text-[1.55rem]">
                  Management Workspace
                </h1>
              </div>
              <AdminSignOutButton />
            </div>
          </header>

          <main className="min-w-0 rounded-[24px] border border-[#d4e4dc] bg-white/88 p-4 shadow-[0_14px_35px_rgba(0,0,0,0.07)] backdrop-blur md:p-6">
            {children}
          </main>
        </section>
      </div>
    </div>
  );
}
