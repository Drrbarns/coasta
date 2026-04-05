import Image from "next/image";
import { berriesinternationalVitorSection } from "@/content/site";

export function BerriesInternationalVitorSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
        <Image
          src={berriesinternationalVitorSection.image}
          alt={berriesinternationalVitorSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#59c697] px-6 py-16 md:min-h-[34rem] md:rounded-br-[5rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h3 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem]">
            {berriesinternationalVitorSection.title}
          </h3>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.28rem] leading-[1.24] text-white md:text-[1.45rem]">
            {berriesinternationalVitorSection.description}
          </p>
        </div>
      </div>
    </section>
  );
}
