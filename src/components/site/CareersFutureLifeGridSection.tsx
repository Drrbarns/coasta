import Image from "next/image";
import { careersFutureSection } from "@/content/site";

const cellMin =
  "min-h-[min(26rem,72vw)] md:min-h-[22rem] lg:min-h-[24rem] xl:min-h-[26rem]";

export function CareersFutureLifeGridSection() {
  return (
    <section
      className="grid w-full grid-cols-1 bg-white md:grid-cols-2"
      aria-label="Sustainable farming at Agrillano"
    >
      <div className={`relative ${cellMin}`}>
        <Image
          src={careersFutureSection.image}
          alt={careersFutureSection.imageAlt}
          fill
          className="object-cover object-[35%_48%] md:object-[32%_45%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div
        className={`flex items-center justify-center bg-[#009640] px-8 py-14 md:rounded-br-[5.5rem] md:px-12 md:py-16 lg:rounded-br-[6.5rem] lg:px-14 lg:py-20 xl:rounded-br-[7.5rem] ${cellMin}`}
      >
        <p className="mx-auto max-w-[32rem] text-center font-[family-name:var(--font-inter)] text-[1.12rem] font-normal leading-[1.45] text-white md:text-[1.25rem] md:leading-[1.4] lg:text-[1.35rem]">
          {careersFutureSection.body}
        </p>
      </div>
    </section>
  );
}
