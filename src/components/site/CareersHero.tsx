import Image from "next/image";
import { careersHero } from "@/content/site";

export function CareersHero() {
  return (
    <section className="relative -mt-[4.5rem] h-[62vh] min-h-[400px] sm:h-[68vh] sm:min-h-[460px] w-full overflow-hidden lg:-mt-[5rem] lg:h-[min(82vh,900px)] lg:min-h-[560px]">
      <Image
        src={careersHero.image}
        alt={careersHero.imageAlt}
        fill
        priority
        className="object-cover object-[50%_42%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/28" aria-hidden />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <h1 className="max-w-[20ch] text-center font-[family-name:var(--font-inter)] text-[2.25rem] font-bold sm:text-[2.9rem] leading-[0.95] tracking-[-0.02em] text-white md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
          {careersHero.title}
        </h1>
      </div>
    </section>
  );
}
