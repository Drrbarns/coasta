import Image from "next/image";
import { careersAdventureSection } from "@/content/site";

export function CareersAdventureSection() {
  return (
    <section id="harvest-trail" className="w-full bg-[#f2df83]">
      <div className="bg-[#f2df83] px-4 py-8 md:px-8 md:py-9 lg:px-10 lg:py-10">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-[3.45rem] font-bold leading-[1.02] tracking-tight text-[var(--header-bg)] md:text-[4.25rem] lg:text-[4.7rem]">
          {careersAdventureSection.heading}
        </h2>
      </div>

      <div className="relative min-h-[18rem] w-full overflow-hidden rounded-br-[3.5rem] md:min-h-[24rem] md:rounded-br-[5.25rem] lg:min-h-[30rem] lg:rounded-br-[6.5rem]">
        <Image
          src={careersAdventureSection.image}
          alt={careersAdventureSection.imageAlt}
          fill
          className="object-cover object-[52%_34%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/18" aria-hidden />

        <div className="absolute right-6 top-14 z-10 max-w-[23rem] text-white md:right-10 md:top-16 md:max-w-[29rem] lg:right-14 lg:top-20 lg:max-w-[33rem]">
          <p className="font-[family-name:var(--font-inter)] text-[2rem] leading-[1.06] tracking-tight md:text-[2.35rem] lg:text-[2.7rem]">
            {careersAdventureSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
