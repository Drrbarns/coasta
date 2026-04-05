import Image from "next/image";
import { ourCostaWayFoodSafetySection } from "@/content/site";

export function OurCostaWayFoodSafetySection() {
  return (
    <section className="w-full bg-[#d8ebe0]">
      <div className="relative min-h-[15rem] w-full overflow-hidden rounded-br-[56px] md:min-h-[23rem] md:rounded-br-[84px] lg:min-h-[29rem] lg:rounded-br-[108px]">
        <Image
          src={ourCostaWayFoodSafetySection.image}
          alt={ourCostaWayFoodSafetySection.imageAlt}
          fill
          className="object-cover object-[50%_36%]"
          sizes="100vw"
        />
      </div>

      <div className="bg-[var(--header-bg)] px-4 pb-6 pt-14 md:px-8 md:pb-8 md:pt-16 lg:px-10 lg:pt-18">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-6xl lg:text-[4.2rem]">
          {ourCostaWayFoodSafetySection.heading}
        </h2>
        <p className="mt-6 text-center font-[family-name:var(--font-inter)] text-[1.25rem] text-white/95 md:text-[1.4rem]">
          {ourCostaWayFoodSafetySection.strapline}
        </p>
        <p className="mx-auto mt-8 max-w-[56rem] text-center font-[family-name:var(--font-inter)] text-[1.3rem] leading-[1.2] text-white md:text-[1.55rem]">
          {ourCostaWayFoodSafetySection.body}
        </p>
      </div>
    </section>
  );
}
