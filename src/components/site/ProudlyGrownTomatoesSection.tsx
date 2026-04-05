import Image from "next/image";
import { proudlyGrownTomatoesSection } from "@/content/site";

export function ProudlyGrownTomatoesSection() {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[280px] items-end justify-center rounded-tl-[88px] bg-white px-7 pb-8 text-center md:min-h-[360px] md:px-10 md:pb-10 md:rounded-tl-[116px] lg:min-h-[430px] lg:px-14 lg:pb-12 lg:rounded-tl-[132px]">
          <p className="max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.45rem] leading-[1.14] text-[var(--header-bg)] md:text-[1.75rem] lg:text-[2.15rem]">
            {proudlyGrownTomatoesSection.body}
          </p>
        </div>

        <div className="relative min-h-[280px] md:min-h-[360px] lg:min-h-[430px]">
          <Image
            src={proudlyGrownTomatoesSection.image}
            alt={proudlyGrownTomatoesSection.imageAlt}
            fill
            className="object-cover object-[72%_48%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
