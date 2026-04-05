import Image from "next/image";
import { ourCostaWayHero } from "@/content/site";

export function OurCostaWayHero() {
  return (
    <section className="relative -mt-[4.5rem] h-[66vh] min-h-[450px] sm:h-[72vh] sm:min-h-[540px] w-full overflow-hidden lg:-mt-[5rem] lg:h-[84vh] lg:min-h-[700px]">
      <Image
        src={ourCostaWayHero.image}
        alt={ourCostaWayHero.imageAlt}
        fill
        priority
        className="object-cover object-[58%_46%]"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/8" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center justify-center px-4 md:px-8 lg:px-10">
        <div className="flex aspect-square w-[min(22rem,88vw)] sm:w-[min(27rem,88vw)] flex-col items-center justify-center rounded-full bg-[#d7e9df] p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:w-[min(33rem,78vw)] md:p-10 lg:w-[36rem] lg:p-12">
          <h1 className="font-[family-name:var(--font-inter)] text-[2.7rem] font-bold sm:text-[3.4rem] leading-[0.94] tracking-tight text-[var(--header-bg)] md:text-[4.7rem] lg:text-[4.95rem]">
            {ourCostaWayHero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[20rem] font-[family-name:var(--font-inter)] text-[0.95rem] sm:mt-6 sm:max-w-[24rem] sm:text-[1.05rem] leading-[1.25] text-[var(--header-bg)] md:mt-8 md:text-[1.28rem] lg:text-[1.58rem]">
            {ourCostaWayHero.body}
          </p>
        </div>
      </div>
    </section>
  );
}
