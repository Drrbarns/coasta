import Image from "next/image";
import Link from "next/link";
import { produceHero, produceItems } from "@/content/site";

const iconCircleColors = [
  "#f3f4f1",
  "#f3f4f1",
  "#f3f4f1",
  "#a694f2",
  "#f2ebc8",
  "#f3f4f1",
  "#f3f4f1",
  "#f3f4f1",
];

export function ProduceHero() {
  return (
    <section className="relative -mt-[4.5rem] h-[68vh] min-h-[500px] sm:h-[74vh] sm:min-h-[560px] w-full overflow-hidden lg:-mt-[5rem] lg:h-[86vh]">
      <Image
        src={produceHero.image}
        alt={produceHero.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/40" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between px-4 pb-8 pt-28 md:px-8 md:pb-10 md:pt-36 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-5xl text-center text-white">
          <h1 className="font-[family-name:var(--font-inter)] text-[2.15rem] font-bold sm:text-[2.6rem] leading-[1.05] tracking-tight md:text-[4.2rem] lg:text-[5.1rem]">
            {produceHero.title}
          </h1>
        </div>

        <div className="mx-auto w-full max-w-[1200px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6 md:grid-cols-4 md:gap-x-10 md:gap-y-10">
            {produceItems.map((item, idx) => (
              <Link
                key={item.title}
                href={`/produce/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="relative h-[6.1rem] w-[6.1rem] sm:h-[7.1rem] sm:w-[7.1rem] rounded-full md:h-[8.5rem] md:w-[8.5rem]"
                  style={{ backgroundColor: iconCircleColors[idx] ?? "#f3f4f1" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-0 scale-[1.08] transition-transform duration-300 group-hover:scale-[1.14]"
                    sizes="136px"
                  />
                </div>
                <span className="mt-2 font-[family-name:var(--font-inter)] text-[0.98rem] font-semibold sm:text-[1.12rem] text-white md:text-[1.35rem]">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
