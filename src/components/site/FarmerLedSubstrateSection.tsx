import Image from "next/image";
import { farmerLedSubstrateSection } from "@/content/site";

export function FarmerLedSubstrateSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[300px] md:min-h-[360px] lg:min-h-[400px]">
          <Image
            src={farmerLedSubstrateSection.image}
            alt={farmerLedSubstrateSection.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex min-h-[300px] items-center justify-center bg-[#c5e2d5] px-7 text-center md:min-h-[360px] md:px-10 lg:min-h-[400px] lg:px-14">
          <p className="max-w-[28rem] font-[family-name:var(--font-inter)] text-[1.45rem] font-medium leading-[1.14] text-[var(--header-bg)] md:text-[1.7rem] lg:text-[2rem]">
            {farmerLedSubstrateSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
