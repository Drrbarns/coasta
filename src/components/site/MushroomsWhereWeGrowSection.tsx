import Image from "next/image";
import { mushroomsWhereWeGrowSection } from "@/content/site";

export function MushroomsWhereWeGrowSection() {
  return (
    <section className="w-full">
      <div className="bg-[var(--header-bg)] px-4 py-7 md:px-8 md:py-8 lg:px-10">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-[4rem]">
          {mushroomsWhereWeGrowSection.heading}
        </h2>
      </div>

      <div className="relative min-h-[30rem] w-full overflow-hidden md:min-h-[38rem]">
        <Image
          src={mushroomsWhereWeGrowSection.image}
          alt={mushroomsWhereWeGrowSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex min-h-[30rem] items-end px-6 pb-8 md:min-h-[38rem] md:px-10 md:pb-12 lg:px-14 lg:pb-16">
          <p className="max-w-[36rem] font-[family-name:var(--font-inter)] text-[1.35rem] leading-[1.23] text-white md:text-[1.6rem]">
            {mushroomsWhereWeGrowSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
