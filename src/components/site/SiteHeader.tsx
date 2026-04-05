"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, type NavLink } from "@/content/site";
import { CostaLogo } from "@/components/site/CostaLogo";

const navClass =
  "font-[family-name:var(--font-inter)] text-[0.9375rem] font-medium text-white/95 transition hover:text-white";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [navItems, setNavItems] = useState<NavLink[]>(mainNav);

  useEffect(() => {
    let mounted = true;
    async function loadNavigation() {
      try {
        const res = await fetch("/api/public/navigation");
        if (!res.ok) return;
        const payload = (await res.json()) as { mainNav?: NavLink[] };
        if (mounted && payload.mainNav?.length) {
          setNavItems(payload.mainNav);
        }
      } catch {
        // Keep static fallback nav.
      }
    }
    void loadNavigation();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <header className="relative z-50 overflow-visible">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-[var(--header-bg)]"
      >
        Skip to content
      </a>

      {/* Green bar + left tongue (curve dips into hero); extra pb gives tongue height */}
      <div className="relative z-10 w-full pb-[5rem] lg:pb-[5.35rem]">
        <div
          className="pointer-events-none absolute inset-0 bg-[var(--header-bg)]"
          style={{
            boxShadow: "0 1px 0 rgba(0,0,0,0.08)",
            clipPath: "url(#header-tongue-clip)",
          }}
          aria-hidden
        />
        <svg className="absolute size-0" aria-hidden>
          <defs>
            <clipPath id="header-tongue-clip" clipPathUnits="objectBoundingBox">
              {/* Bar top; bar bottom at ~0.54; slightly deeper left tongue like reference */}
              <path d="M 0 0 L 1 0 L 1 0.54 L 0.12 0.54 Q 0.06 1 0 0.54 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="relative z-[2] mx-auto flex min-h-[5.25rem] min-w-0 max-w-[1600px] flex-1 items-stretch justify-between lg:min-h-[5.5rem]">
          <div className="flex min-w-0 flex-1 items-center py-3 pl-5 pr-2 sm:pl-6 md:pl-8 lg:pl-10">
            <CostaLogo />
          </div>

          <nav
            className="hidden items-center gap-0.5 pr-6 lg:flex xl:pr-12"
            aria-label="Main"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative self-center"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`${navClass} flex items-center px-3 py-2 xl:px-4`}
                >
                  {item.label}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute left-1/2 top-full z-[80] min-w-[215px] -translate-x-1/2"
                    role="menu"
                  >
                    <div className="rounded-b-[10px] bg-white py-2 shadow-[0_12px_28px_rgba(0,0,0,0.20)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 font-[family-name:var(--font-inter)] text-[1.02rem] font-medium text-[var(--header-bg)] hover:bg-neutral-50"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center pr-3 sm:pr-5 lg:pr-8">
            <button
              type="button"
              className="rounded-md p-2.5 text-white hover:bg-white/10 lg:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-5.25rem)] overflow-y-auto border-t border-white/15 bg-[var(--header-bg)] lg:hidden">
          <nav className="px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-3 last:border-0">
                <Link
                  href={item.href}
                  className="font-[family-name:var(--font-inter)] text-base font-semibold text-white"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 space-y-1 border-l border-white/20 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-1.5 font-[family-name:var(--font-inter)] text-sm text-white/85"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
