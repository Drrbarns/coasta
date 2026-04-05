import Image from "next/image";
import { bananasIntroSection } from "@/content/site";

export function BananasIntroSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#c6e3d6] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[34rem] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
            {bananasIntroSection.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.35rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.55rem]">
            {bananasIntroSection.body}
          </p>
        </div>
      </div>

      <div className="relative flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#f0dce9] md:min-h-[34rem]">
        <div className="relative h-[14rem] w-[14rem] md:h-[17rem] md:w-[17rem]">
          <Image
            src={bananasIntroSection.image}
            alt={bananasIntroSection.imageAlt}
            fill
            className="object-contain"
            sizes="272px"
          />
        </div>
      </div>
    </section>
  );
}
