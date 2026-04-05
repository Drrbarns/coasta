import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden -mt-[4.5rem] lg:-mt-[5rem]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gen-farm-sunrise.webp"
          alt="Agrillano Farm Sunrise"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* 30% Overlay */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      </div>

      {/* Top Text Area - pulled up under header tongue */}
      <div className="relative z-10 px-4 pt-[8rem] pb-16 md:px-8 md:pt-[10rem] md:pb-24 lg:px-10 lg:pt-[12rem] lg:pb-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <h1 className="font-[family-name:var(--font-inter)] text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem]">
            We&apos;re on a mission to honour our rich heritage and nourish the world.
          </h1>
        </div>
      </div>

    </section>
  );
}
