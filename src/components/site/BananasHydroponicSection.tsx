import Image from "next/image";
import { bananasHydroponicSection } from "@/content/site";

export function BananasHydroponicSection() {
  return (
    <section className="relative grid w-full grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={bananasHydroponicSection.image}
          alt={bananasHydroponicSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#59c697] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem]">
            {bananasHydroponicSection.heading}
          </h3>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.25rem] leading-[1.24] text-white md:text-[1.42rem]">
            {bananasHydroponicSection.body}
          </p>
        </div>
      </div>

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
        <path d="M700 -30 C580 60 520 150 500 260 C478 380 560 520 700 640" />
      </svg>
    </section>
  );
}
