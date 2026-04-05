import Image from "next/image";
import { proudlyGrownGlasshouseSection } from "@/content/site";

export function ProudlyGrownGlasshouseSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[280px] md:min-h-[360px] lg:min-h-[430px]">
          <Image
            src={proudlyGrownGlasshouseSection.image}
            alt={proudlyGrownGlasshouseSection.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex min-h-[280px] items-center justify-center bg-[#78c798] px-7 text-center md:min-h-[360px] md:px-10 lg:min-h-[430px] lg:px-14">
          <p className="max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.75rem] leading-[1.14] text-white md:text-[2.05rem] lg:text-[2.6rem]">
            {proudlyGrownGlasshouseSection.body}
          </p>
        </div>
      </div>
    </section>
  );
}
