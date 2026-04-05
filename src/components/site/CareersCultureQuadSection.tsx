import Image from "next/image";
import { careersCultureQuadSection, careersCultureSection } from "@/content/site";

const cellMin =
  "min-h-[min(26rem,72vw)] md:min-h-[22rem] lg:min-h-[24rem] xl:min-h-[26rem]";

export function CareersCultureQuadSection() {
  return (
    <section
      className="grid w-full grid-cols-1 md:grid-cols-2"
      aria-label="Life at Agrillano"
    >
      <div
        className={`flex items-center justify-center bg-[var(--header-bg)] px-8 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20 ${cellMin}`}
      >
        <div className="mx-auto max-w-[34rem] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.35rem] font-bold leading-[1.05] tracking-tight text-white md:text-[2.85rem] lg:text-[3.35rem]">
            {careersCultureSection.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[32rem] font-[family-name:var(--font-inter)] text-[1.12rem] font-normal leading-[1.32] text-white/95 md:mt-8 md:text-[1.22rem] lg:text-[1.32rem]">
            {careersCultureSection.body}
          </p>
        </div>
      </div>

      <div className={`relative ${cellMin}`}>
        <Image
          src={careersCultureSection.image}
          alt={careersCultureSection.imageAlt}
          fill
          className="object-cover object-[52%_40%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className={`relative ${cellMin}`}>
        <Image
          src={careersCultureQuadSection.bottomLeftImage}
          alt={careersCultureQuadSection.bottomLeftAlt}
          fill
          className="object-cover object-[50%_28%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div
        className={`bg-[#00a651] ${cellMin}`}
        aria-hidden
      />
    </section>
  );
}
