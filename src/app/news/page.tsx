import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agrillano News",
  description:
    "Read the latest Agrillano news, updates, community initiatives, and farming innovation stories.",
  path: "/news",
  image: "/gen-farm-sunrise.png",
});

const fallbackNewsCards = [
  {
    title: "Agrillano launches 2026 community grants across regional growers",
    excerpt:
      "Applications are now open for Agrillano's annual grants supporting local community initiatives in key farming regions.",
    href: "/news",
    image: "/news/community-grants.png",
  },
  {
    title: "Agrillano Berries recognised in national employer awards",
    excerpt:
      "Agrillano Berries has been acknowledged for people-first hiring pathways and strong regional workforce development.",
    href: "/news",
    image: "/news/berries-employer.png",
  },
  {
    title: "Agrillano mini melons arrive in major retail stores",
    excerpt:
      "New season mini melons are now available in selected stores, delivering sweetness, consistency, and quality.",
    href: "/news",
    image: "/news/mini-melons.png",
  },
  {
    title: "New protected cropping trials boost tomato flavour outcomes",
    excerpt:
      "Ongoing greenhouse innovation programs are improving flavour, shelf life, and growing efficiency across sites.",
    href: "/news",
    image: "/social/social-1.png",
  },
  {
    title: "Agrillano expands sustainability initiatives in packaging and waste",
    excerpt:
      "Recent progress includes improved recoverability, higher recycled content, and stronger circular economy practices.",
    href: "/news",
    image: "/social/social-8.png",
  },
  {
    title: "Graduate and seasonal programs open for upcoming intake",
    excerpt:
      "Agrillano's early-career and harvest pathway opportunities are now open for applicants across multiple regions.",
    href: "/news",
    image: "/social/social-3.png",
  },
];

async function getNewsCards() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("news_posts")
    .select("title,excerpt,href,image_url,status,display_order")
    .eq("status", "published")
    .order("display_order", { ascending: true })
    .limit(6);

  if (error || !data || data.length === 0) return fallbackNewsCards;
  return data.map((row) => ({
    title: row.title,
    excerpt: row.excerpt,
    href: row.href,
    image: row.image_url,
  }));
}

export default async function GeneratedPage() {
  const newsCards = await getNewsCards();

  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <section className="bg-[var(--header-bg)] px-4 pb-16 pt-[8rem] md:px-8 md:pb-20 md:pt-[10rem] lg:px-10 lg:pb-24 lg:pt-[12rem] -mt-[4.5rem] lg:-mt-[5rem]">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10 text-center md:mb-14">
              <h1 className="font-[family-name:var(--font-inter)] text-[2.6rem] font-bold leading-[0.95] tracking-tight text-white md:text-[3.7rem] lg:text-[4.4rem]">
                Agrillano News
              </h1>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-[1.05rem] text-white/90 md:text-[1.25rem]">
                Latest updates, stories, and announcements from Agrillano.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {newsCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                >
                  <Link href={card.href} className="block">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="font-[family-name:var(--font-inter)] text-[1.2rem] font-semibold leading-[1.25] text-[var(--header-bg)] md:text-[1.32rem]">
                        {card.title}
                      </h2>
                      <p className="mt-3 font-[family-name:var(--font-inter)] text-[0.98rem] leading-[1.45] text-[var(--header-bg)]/85 md:text-[1.02rem]">
                        {card.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
