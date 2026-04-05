import Image from "next/image";
import { farmerLedFlavourFirstSection } from "@/content/site";

export function FarmerLedFlavourFirstHeroSection() {
  return (
    <section id="farmer-led-flavour-first" className="w-full bg-[#d8ebe0]">
      <div className="mx-auto max-w-[1600px]">
        <div className="px-4 pb-10 pt-12 md:px-8 md:pb-12 md:pt-14 lg:px-10 lg:pb-14 lg:pt-16">
          <h1 className="mx-auto max-w-[820px] text-center font-[family-name:var(--font-inter)] text-[3rem] font-bold leading-[0.92] tracking-tight text-[var(--header-bg)] md:text-[4.2rem] lg:text-[4.9rem]">
            {farmerLedFlavourFirstSection.heading}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex min-h-[300px] items-end bg-white px-6 pb-8 md:min-h-[360px] md:px-10 md:pb-10 lg:min-h-[400px] lg:px-14 lg:pb-12">
            <p className="max-w-[32rem] font-[family-name:var(--font-inter)] text-[1.55rem] leading-[1.18] text-[var(--header-bg)] md:text-[1.85rem] lg:text-[2.1rem]">
              {farmerLedFlavourFirstSection.lead}
            </p>
          </div>

          <div className="relative min-h-[300px] md:min-h-[360px] lg:min-h-[400px]">
            <Image
              src={farmerLedFlavourFirstSection.image}
              alt={farmerLedFlavourFirstSection.imageAlt}
              fill
              className="object-cover object-[55%_38%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
