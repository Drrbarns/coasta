import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/content/site";

export function NewsSection() {
  return (
    <section className="relative bg-[var(--header-bg)] py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-10">
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Agrillano news
          </h2>
          <p className="mt-4 font-[family-name:var(--font-inter)] text-xl font-medium md:text-2xl">
            Discover the latest developments
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.href} className="group flex flex-col">
              <Link href={item.href} className="block w-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <hr className="my-6 border-t-2 border-white" />
                <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold leading-snug lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 line-clamp-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-white/90 md:text-base">
                  {item.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center md:mt-24">
          <Link
            href="/news"
            className="inline-block rounded-full bg-white px-10 py-3.5 font-[family-name:var(--font-inter)] text-base font-bold text-[var(--header-bg)] shadow-sm transition hover:bg-neutral-50 lg:py-4 lg:text-lg"
          >
            View more articles
          </Link>
        </div>
      </div>

      {/* Dark green tongue extending down into the social section */}
      <svg
        className="pointer-events-none absolute left-0 top-full z-10 w-[13rem] md:w-[15rem]"
        viewBox="0 0 240 80"
        fill="currentColor"
        style={{ color: "var(--header-bg)", marginTop: "-1px" }}
        aria-hidden
      >
        {/* Draws a smooth curve that mimics the tongue down to the left */}
        <path d="M0,0 L240,0 Q180,0 120,30 Q60,60 0,80 Z" />
      </svg>
    </section>
  );
}
