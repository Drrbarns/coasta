import Image from "next/image";
import { citrusBrandsSection } from "@/content/site";

export function CitrusBrandsSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#BFDBCC] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
            {citrusBrandsSection.title}
          </h3>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.28rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.45rem]">
            {citrusBrandsSection.description}
          </p>
        </div>
      </div>

      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={citrusBrandsSection.image}
          alt={citrusBrandsSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
