import Image from "next/image";
import { introSection } from "@/content/site";

export function IntroSection() {
  return (
    <section className="grid min-h-0 w-full grid-cols-1 md:grid-cols-2" aria-labelledby="intro-heading">
      <div className="flex min-h-[min(28rem,70vw)] items-center justify-center bg-[var(--header-bg)] px-6 py-16 md:min-h-[32rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="text-center">
          <h2
            id="intro-heading"
            className="font-[family-name:var(--font-inter)] text-[1.75rem] font-bold leading-[1.2] text-[var(--intro-text)] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[2.75rem]"
          >
            {introSection.lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>
      <div className="relative min-h-[min(28rem,70vw)] md:min-h-[32rem]">
        <Image
          src={introSection.image}
          alt={introSection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}
