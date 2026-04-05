import Image from "next/image";
import { contactHero } from "@/content/site";

export function ContactHero() {
  return (
    <section className="relative -mt-[4.5rem] h-[66vh] min-h-[420px] sm:h-[75vh] sm:min-h-[500px] w-full overflow-hidden lg:-mt-[5rem] lg:h-[min(85vh,1000px)] lg:min-h-[600px]">
      <Image
        src={contactHero.image}
        alt={contactHero.imageAlt}
        fill
        priority
        className="object-cover object-[50%_60%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold sm:text-[2.9rem] leading-[1.05] tracking-[-0.02em] text-white md:text-[5rem] lg:text-[6rem]">
          {contactHero.title.split('\\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-4 font-[family-name:var(--font-inter)] text-[0.98rem] font-bold sm:text-lg text-white md:mt-6 md:text-2xl lg:text-3xl tracking-tight">
          {contactHero.subtitle}
        </p>
      </div>
    </section>
  );
}
