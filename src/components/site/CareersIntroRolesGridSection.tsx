import Image from "next/image";
import { careersIntroSection, careersRolesSection } from "@/content/site";

const cellMin =
  "min-h-[min(26rem,72vw)] md:min-h-[22rem] lg:min-h-[24rem] xl:min-h-[26rem]";

export function CareersIntroRolesGridSection() {
  return (
    <section id="why-work-with-us"
      className="grid w-full grid-cols-1 md:grid-cols-2"
      aria-label="Careers introduction and roles"
    >
      <div
        className={`flex items-center justify-center bg-[#d9ead3] px-8 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20 ${cellMin}`}
      >
        <div className="mx-auto max-w-[36rem] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.35rem] font-bold leading-[1.05] tracking-tight text-[var(--header-bg)] md:text-[2.75rem] lg:text-[3.15rem]">
            {careersIntroSection.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[32rem] font-[family-name:var(--font-inter)] text-[1.12rem] font-normal leading-[1.32] text-[var(--header-bg)] md:mt-8 md:text-[1.22rem] md:leading-[1.3] lg:text-[1.32rem]">
            {careersIntroSection.body}
          </p>
        </div>
      </div>

      <div className={`relative ${cellMin}`}>
        <Image
          src={careersIntroSection.image}
          alt={careersIntroSection.imageAlt}
          fill
          className="object-cover object-[52%_42%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className={`relative ${cellMin}`}>
        <Image
          src={careersRolesSection.image}
          alt={careersRolesSection.imageAlt}
          fill
          className="object-cover object-[45%_35%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div
        className={`flex items-center justify-center bg-[#82c09a] px-8 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20 ${cellMin}`}
      >
        <div className="mx-auto max-w-[34rem] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.35rem] font-bold leading-[1.05] tracking-tight text-white md:text-[2.75rem] lg:text-[3.15rem]">
            {careersRolesSection.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.12rem] font-normal leading-[1.32] text-white md:mt-8 md:text-[1.22rem] md:leading-[1.3] lg:text-[1.32rem]">
            {careersRolesSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
