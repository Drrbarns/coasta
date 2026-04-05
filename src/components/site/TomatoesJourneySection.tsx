import Image from "next/image";
import { tomatoesJourneySection } from "@/content/site";

export function TomatoesJourneySection() {
  return (
    <section className="w-full bg-[var(--header-bg)]">
      <div className="px-4 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem]">
          {tomatoesJourneySection.heading}
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#fcfaf5] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[34rem] text-center">
            <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
              {tomatoesJourneySection.title}
            </h3>
            <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.28rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.45rem]">
              {tomatoesJourneySection.body}
            </p>
          </div>
        </div>

        <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
          <Image
            src={tomatoesJourneySection.image}
            alt={tomatoesJourneySection.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />

          {/* Decorative dashed journey line */}
          <svg
            viewBox="0 0 300 400"
            className="pointer-events-none absolute -left-[68px] bottom-[8%] h-[58%] w-[210px] text-white/85"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="18 18"
            aria-hidden
          >
            <path d="M255 20 C120 40 70 140 105 220 C130 280 118 340 78 380" />
          </svg>
        </div>
      </div>
    </section>
  );
}
