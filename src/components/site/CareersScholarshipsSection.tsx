import Image from "next/image";
import { careersScholarshipsSection } from "@/content/site";

export function CareersScholarshipsSection() {
  return (
    <section id="scholarships" className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={careersScholarshipsSection.image}
          alt={careersScholarshipsSection.imageAlt}
          fill
          className="object-cover object-[48%_42%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[var(--header-bg)] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[36rem] text-center">
          <h2 className="mx-auto max-w-[24rem] font-[family-name:var(--font-inter)] text-[3.2rem] font-bold leading-[1.02] tracking-tight text-white md:text-[4rem] lg:text-[4.25rem]">
            {careersScholarshipsSection.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.15] text-white md:text-[1.45rem] md:leading-[1.12]">
            {careersScholarshipsSection.paragraph1}
          </p>
          <p className="mx-auto mt-6 max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.15] text-white md:mt-7 md:text-[1.45rem] md:leading-[1.12]">
            {careersScholarshipsSection.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
}
