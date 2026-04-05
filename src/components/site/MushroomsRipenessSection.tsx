import Image from "next/image";
import { mushroomsRipenessSection } from "@/content/site";

export function MushroomsRipenessSection() {
  return (
    <section className="relative grid w-full grid-cols-1 md:grid-cols-2">
      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#3f933f] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem]">
            {mushroomsRipenessSection.heading}
          </h3>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.25rem] leading-[1.24] text-white md:text-[1.42rem]">
            {mushroomsRipenessSection.body}
          </p>
        </div>
      </div>

      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={mushroomsRipenessSection.image}
          alt={mushroomsRipenessSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
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
        <path d="M760 -40 C690 70 690 175 720 270 C760 385 660 540 500 700" />
      </svg>
    </section>
  );
}
