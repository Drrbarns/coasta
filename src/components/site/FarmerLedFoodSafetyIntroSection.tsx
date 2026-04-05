import Image from "next/image";
import { farmerLedFoodSafetyIntroSection } from "@/content/site";

export function FarmerLedFoodSafetyIntroSection() {
  return (
    <section className="w-full bg-[var(--header-bg)]">
      <div className="grid h-[4.6rem] grid-cols-2 md:h-[5.6rem] lg:h-[6.3rem]">
        <div className="relative overflow-hidden">
          <Image
            src={farmerLedFoodSafetyIntroSection.topImage}
            alt={farmerLedFoodSafetyIntroSection.topImageAlt}
            fill
            className="object-cover object-[50%_45%]"
            sizes="50vw"
          />
        </div>
        <div className="bg-[#c5e2d5] rounded-br-[64px] md:rounded-br-[86px] lg:rounded-br-[108px]" />
      </div>

      <div className="px-4 pb-10 pt-10 text-center md:px-8 md:pb-12 md:pt-12 lg:px-10 lg:pb-14 lg:pt-14">
        <h2 className="font-[family-name:var(--font-inter)] text-[3rem] font-bold leading-[0.94] tracking-tight text-white md:text-[4.1rem] lg:text-[5rem]">
          {farmerLedFoodSafetyIntroSection.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-[58rem] font-[family-name:var(--font-inter)] text-[1.28rem] text-white md:text-[1.7rem]">
          {farmerLedFoodSafetyIntroSection.strapline}
        </p>
      </div>
    </section>
  );
}
