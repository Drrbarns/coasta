import Image from "next/image";
import { citrusImageBandSection } from "@/content/site";

export function CitrusImageBandSection() {
  return (
    <section className="w-full">
      <div className="relative h-[34vh] min-h-[220px] w-full overflow-hidden md:h-[42vh] md:min-h-[280px] lg:h-[48vh] lg:min-h-[340px] lg:rounded-br-[5rem]">
        <Image
          src={citrusImageBandSection.image}
          alt={citrusImageBandSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
