import Image from "next/image";
import { citrusVarietiesSection } from "@/content/site";

const textureStyle = {
  backgroundColor: "#f7f4ec",
  backgroundImage: [
    'radial-gradient(circle at 20% 26%, rgba(204, 195, 173, 0.16) 0, rgba(204, 195, 173, 0) 34%)',
    'radial-gradient(circle at 78% 68%, rgba(214, 205, 183, 0.16) 0, rgba(214, 205, 183, 0) 30%)',
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' seed='9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
  ].join(", "),
};

export function CitrusVarietiesSection() {
  return (
    <section className="relative w-full px-4 py-14 md:px-8 md:py-20 lg:px-10" style={textureStyle}>
      <div className="mx-auto max-w-[1300px]">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
          {citrusVarietiesSection.heading}
        </h2>

        <div className="relative mt-10 md:mt-12">
          <button
            type="button"
            aria-label="Previous varieties"
            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--header-bg)] md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next varieties"
            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--header-bg)] md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 md:px-16">
            {citrusVarietiesSection.items.map((item, idx) => (
              <article key={`${item.name}-${idx}`} className="text-center">
                <div className="relative mx-auto h-[11.5rem] w-[11.5rem] overflow-hidden rounded-full bg-white md:h-[14rem] md:w-[14rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-6 md:p-7"
                    sizes="224px"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-inter)] text-4xl font-bold text-[var(--header-bg)] md:text-5xl">
                  {item.name}
                </h3>
                <p className="mx-auto mt-5 max-w-md font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.3] text-[var(--header-bg)] md:text-[1.2rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center text-center md:mt-20">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold leading-[1.05] tracking-tight text-[var(--header-bg)] md:text-6xl">
            {citrusVarietiesSection.brandCallout}
          </h3>

          <div className="mt-8 inline-flex items-center gap-4 text-[var(--header-bg)]">
            <svg
              viewBox="0 0 64 84"
              className="h-20 w-14 md:h-24 md:w-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {/* Rays */}
              <path d="M32 4v10M18 10l4 8M46 10l-4 8M10 20l8 4M54 20l-8 4" />
              {/* Citrus outline */}
              <path d="M32 78c-13 0-22-10-22-24 0-14 9-24 14-34 2-4 4-8 8-8s6 4 8 8c5 10 14 20 14 34 0 14-9 24-22 24z" />
              {/* Seed */}
              <ellipse cx="32" cy="56" rx="8" ry="9" />
            </svg>

            <div className="text-left">
              <p className="font-[family-name:var(--font-inter)] text-6xl font-black leading-none tracking-tight md:text-7xl">
                LOVACADO
              </p>
              <p className="mt-1 font-[family-name:var(--font-inter)] text-[1.45rem] font-medium md:text-[1.55rem]">
                Aussie avos. From Agrillano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
