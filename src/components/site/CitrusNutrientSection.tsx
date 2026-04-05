import Image from "next/image";
import { citrusNutrientSection } from "@/content/site";

export function CitrusNutrientSection() {
  return (
    <section className="relative grid w-full grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={citrusNutrientSection.image}
          alt={citrusNutrientSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#BFDBCC] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
            {citrusNutrientSection.heading}
          </h3>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.25rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.42rem]">
            {citrusNutrientSection.body}
          </p>
        </div>
      </div>

      {/* Continuing decorative dashed journey line */}
      <svg
        viewBox="0 0 1200 700"
        className="pointer-events-none absolute inset-0 h-full w-full text-white/90"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="22 22"
        aria-hidden
      >
        <path d="M520 -20 C430 110 430 250 520 360 C620 480 710 570 790 620" />
      </svg>
    </section>
  );
}
