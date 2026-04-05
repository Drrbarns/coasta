import { citrusPageSection } from "@/content/site";

export function CitrusPageSection() {
  return (
    <section className="bg-[var(--header-bg)] px-4 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1200px] text-center text-white">
        <h2 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight md:text-6xl lg:text-[4.1rem]">
          {citrusPageSection.heading}
        </h2>
        <p className="mx-auto mt-8 max-w-5xl font-[family-name:var(--font-inter)] text-[1.2rem] leading-[1.3] md:text-[1.35rem]">
          {citrusPageSection.description}
        </p>
        <h3 className="mt-14 font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight md:text-6xl lg:text-[4.1rem]">
          {citrusPageSection.brandsHeading}
        </h3>
      </div>
    </section>
  );
}
