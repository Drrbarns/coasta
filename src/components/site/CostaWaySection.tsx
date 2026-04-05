import Image from "next/image";
import Link from "next/link";
import { costaWay } from "@/content/site";

export function CostaWaySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--costa-way-bg)]">
      {/* Aerial image banner */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] lg:h-[80vh]">
        <Image
          src={costaWay.image}
          alt="Agrillano Farm Aerial"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Yellow Content Area */}
      <div className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24 lg:py-32">
        {/* Faded Watermark Logo */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-x-[20%] -translate-y-[45%] opacity-[0.15]"
          aria-hidden
        >
          <svg
            viewBox="0 0 100 100"
            className="h-[350px] w-[350px] text-white md:h-[500px] md:w-[500px] lg:h-[700px] lg:w-[700px]"
          >
            <path fill="currentColor" d="M50 85A35 35 0 1 1 85 50A35.04 35.04 0 0 1 50 85ZM50 25A25 25 0 1 0 75 50A25.03 25.03 0 0 0 50 25Z" />
            <path fill="currentColor" d="M45.5 62a4.97 4.97 0 0 1-3.5-1.5L30 48.5l7-7l8.5 8.5L68.5 27l7 7l-26.5 33a5 5 0 0 1-3.5 1.5Z" />
            <path fill="currentColor" d="M45 0h10v15H45z" />
            <path fill="currentColor" transform="rotate(-45 25 15)" d="M20 7h10v15H20z" />
            <path fill="currentColor" transform="rotate(45 75 15)" d="M70 7h10v15H70z" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center pb-8 md:pb-16">
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-[var(--costa-way-text)] md:text-5xl lg:text-6xl">
            {costaWay.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-inter)] text-lg font-medium leading-relaxed text-[var(--costa-way-text)] md:mt-10 md:text-xl lg:text-2xl">
            {costaWay.headline}
          </p>
          <Link
            href={costaWay.ctaHref}
            className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 font-[family-name:var(--font-inter)] text-base font-bold text-[var(--costa-way-text)] shadow-sm transition hover:bg-neutral-50 md:mt-12 lg:px-10 lg:py-4 lg:text-lg"
          >
            {costaWay.ctaLabel}
          </Link>
        </div>
      </div>

      {/* Wavy bottom divider matching dark green News bg */}
      <div className="absolute bottom-0 left-0 z-10 w-full leading-none text-[var(--header-bg)]">
        <svg
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
          className="block h-[60px] w-full md:h-[120px]"
        >
          <path d="M0,60 C400,0 1000,120 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
