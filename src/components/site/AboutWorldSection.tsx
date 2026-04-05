import Image from "next/image";
import { aboutWorldSection } from "@/content/site";

export function AboutWorldSection() {
  return (
    <section id="around-the-world" className="relative overflow-hidden bg-[#f4f6f5] px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-18 lg:px-10 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-[var(--header-bg)] md:text-5xl lg:text-[4rem]">
            {aboutWorldSection.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-4xl font-[family-name:var(--font-inter)] text-base leading-snug text-[var(--header-bg)] md:text-lg">
            {aboutWorldSection.subtitle}
          </p>
        </div>

        <div className="relative mt-10 h-[48vh] min-h-[280px] w-full md:h-[52vh] md:min-h-[340px] lg:h-[56vh] lg:min-h-[420px] rounded-3xl overflow-hidden">
          <Image
            src="/gen-globe-bg.png"
            alt="Globe Background"
            fill
            className="object-cover opacity-80 mix-blend-multiply"
            sizes="100vw"
          />

          <div className="absolute inset-x-0 bottom-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 px-4 md:bottom-7 md:gap-x-9 z-10 bg-white/40 backdrop-blur-sm py-4 rounded-full max-w-[90%] mx-auto">
            {aboutWorldSection.produceLabels.map((item) => (
              <span
                key={item}
                className="font-[family-name:var(--font-inter)] text-sm font-bold text-[var(--header-bg)] md:text-base"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
