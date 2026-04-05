import Image from "next/image";
import { proudlyGrownImageBandSection } from "@/content/site";

export function ProudlyGrownImageBandSection() {
  return (
    <section id="proudly-grown-the-costa-way" className="w-full bg-[#c5e2d5]">
      <div className="relative min-h-[185px] w-full overflow-hidden rounded-br-[58px] md:min-h-[245px] md:rounded-br-[84px] lg:min-h-[300px] lg:rounded-br-[108px]">
        <Image
          src={proudlyGrownImageBandSection.image}
          alt={proudlyGrownImageBandSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="px-4 pb-11 pt-8 text-center md:px-8 md:pb-13 md:pt-10 lg:px-10 lg:pb-15 lg:pt-12">
        <h2 className="mx-auto max-w-[700px] font-[family-name:var(--font-inter)] text-[2.8rem] font-bold leading-[0.94] tracking-tight text-[var(--header-bg)] md:text-[4rem] lg:text-[4.75rem]">
          {proudlyGrownImageBandSection.heading}
        </h2>
      </div>
    </section>
  );
}
