import Image from "next/image";
import { farmerLedFoodSafetyImageSection } from "@/content/site";

export function FarmerLedFoodSafetyImageSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative min-h-[17rem] overflow-hidden rounded-br-[64px] md:min-h-[23rem] md:rounded-br-[86px] lg:min-h-[29rem] lg:rounded-br-[108px]">
        <Image
          src={farmerLedFoodSafetyImageSection.image}
          alt={farmerLedFoodSafetyImageSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3f30]/80 via-[#0a3f30]/50 to-transparent" />

        <div className="relative z-10 flex min-h-[17rem] items-center px-8 py-8 md:min-h-[23rem] md:px-14 md:py-10 lg:min-h-[29rem] lg:px-20 lg:py-12">
          <p className="max-w-[17rem] font-[family-name:var(--font-inter)] text-[1.65rem] leading-[1.14] text-white md:max-w-[25rem] md:text-[2.35rem] lg:max-w-[33rem] lg:text-[2.95rem]">
            {farmerLedFoodSafetyImageSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
