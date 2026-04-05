import { ourCostaWayReportsSection } from "@/content/site";

export function OurCostaWayReportsSection() {
  return (
    <section className="bg-[#c5e2d5] px-4 pb-20 pt-14 md:px-8 md:pb-24 md:pt-16 lg:px-10 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold leading-[0.98] tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
          {ourCostaWayReportsSection.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center font-[family-name:var(--font-inter)] text-[1.4rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.65rem]">
          {ourCostaWayReportsSection.subtitle}
        </p>

        <div className="mx-auto mt-10 grid max-w-[980px] grid-cols-1 gap-x-14 gap-y-5 md:mt-14 md:grid-cols-2">
          <ul className="space-y-3">
            {ourCostaWayReportsSection.leftItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.2] text-[var(--header-bg)] md:text-[1.28rem]"
              >
                <span className="mt-1.5 text-[0.8em]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {ourCostaWayReportsSection.rightItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.2] text-[var(--header-bg)] md:text-[1.28rem]"
              >
                <span className="mt-1.5 text-[0.8em]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
