import Image from "next/image";
import { careersLifeSection } from "@/content/site";

const paperTextureStyle = {
  backgroundColor: "#f7f4ec",
  backgroundImage: [
    'radial-gradient(circle at 18% 24%, rgba(203, 194, 171, 0.18) 0, rgba(203, 194, 171, 0) 34%)',
    'radial-gradient(circle at 78% 70%, rgba(214, 205, 183, 0.2) 0, rgba(214, 205, 183, 0) 30%)',
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.085'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.09' stroke='%23d9d1be' stroke-width='0.7'%3E%3Cpath d='M0 18h240M0 54h240M0 93h240M0 131h240M0 169h240M0 206h240'/%3E%3C/g%3E%3C/svg%3E")`,
  ].join(", "),
  backgroundBlendMode: "normal, normal, multiply, overlay",
  backgroundSize: "auto, auto, 280px 280px, 240px 240px",
} as const;

export function CareersLifeSection() {
  return (
    <section id="we-put-people-first" className="w-full bg-white">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 md:items-stretch">
        <div id="life" className="relative order-2 flex flex-col justify-between px-6 py-14 md:order-1 md:min-h-[44rem] md:px-12 md:py-16 lg:px-16 xl:px-20">
          <button
            type="button"
            aria-label="Previous story"
            className="absolute left-2 top-1/2 z-[1] hidden -translate-y-1/2 text-[var(--header-bg)] md:left-4 md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next story"
            className="absolute right-2 top-1/2 z-[1] hidden -translate-y-1/2 text-[var(--header-bg)] md:right-4 md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="mx-auto flex w-full max-w-[32rem] flex-1 flex-col gap-10 pl-2 pr-2 text-left md:min-h-0 md:justify-between md:gap-0 md:pl-10 md:pr-10 md:pb-4 md:pt-4">
            <div>
              <h2 className="font-[family-name:var(--font-inter)] text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[var(--header-bg)] md:text-[3.5rem] lg:text-[4.1rem]">
                {careersLifeSection.heading}
              </h2>

              <p className="mt-10 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.28] text-[var(--header-bg)] md:mt-12 md:text-[1.25rem] md:leading-[1.3]">
                {careersLifeSection.intro}
              </p>

              <p className="mt-8 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.28] text-[var(--header-bg)] md:mt-10 md:text-[1.25rem] md:leading-[1.3]">
                {careersLifeSection.quoteLead}
              </p>
            </div>

            <p className="font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.28] text-[var(--header-bg)] md:text-[1.25rem] md:leading-[1.3]">
              {careersLifeSection.quoteTail}
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[min(22rem,70vw)] md:order-2 md:min-h-[44rem]">
          <Image
            src={careersLifeSection.image}
            alt={careersLifeSection.imageAlt}
            fill
            className="object-cover object-[48%_42%]"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            aria-hidden
          />
          <p className="absolute bottom-6 left-5 z-[2] max-w-[16rem] font-[family-name:var(--font-inter)] text-[1.05rem] font-bold leading-tight text-white md:bottom-8 md:left-8 md:max-w-[18rem] md:text-[1.15rem] lg:text-[1.2rem]">
            {careersLifeSection.imageCaption}
          </p>
        </div>
      </div>

      <div
        className="h-14 w-full md:h-20"
        style={paperTextureStyle}
        aria-hidden
      />
    </section>
  );
}
