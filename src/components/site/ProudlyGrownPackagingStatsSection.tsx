import Link from "next/link";
import { proudlyGrownPackagingStatsSection } from "@/content/site";

export function ProudlyGrownPackagingStatsSection() {
  return (
    <section className="w-full bg-[#c5e2d5] px-4 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:gap-18">
        <div className="flex flex-col justify-center">
          <p className="max-w-[35rem] font-[family-name:var(--font-inter)] text-[1.45rem] leading-[1.14] text-[var(--header-bg)] md:text-[1.75rem] lg:text-[2.05rem]">
            {proudlyGrownPackagingStatsSection.intro}
          </p>

          <Link
            href={proudlyGrownPackagingStatsSection.actionHref}
            className="mt-10 inline-block font-[family-name:var(--font-inter)] text-[1.5rem] leading-none text-[var(--header-bg)] underline underline-offset-4 md:text-[1.75rem] lg:text-[2rem]"
          >
            {proudlyGrownPackagingStatsSection.actionLabel}
          </Link>
        </div>

        <ul className="space-y-5 md:space-y-6">
          {proudlyGrownPackagingStatsSection.stats.map((stat) => (
            <li key={stat.value + stat.label} className="flex items-start gap-3">
              <span className="font-[family-name:var(--font-inter)] text-[2.7rem] font-bold leading-[0.9] text-[var(--header-bg)] md:text-[3.1rem] lg:text-[3.5rem]">
                {stat.value}
              </span>
              <span className="max-w-[20rem] pt-1 font-[family-name:var(--font-inter)] text-[1.2rem] leading-[1.06] text-[var(--header-bg)] md:text-[1.4rem] lg:text-[1.6rem]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
