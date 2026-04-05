import Image from "next/image";
import Link from "next/link";
import { produceItems } from "@/content/site";

const PRODUCE_CIRCLE_COLORS = [
  "var(--produce-circle-1)",
  "var(--produce-circle-2)",
  "var(--produce-circle-3)",
  "var(--produce-circle-4)",
  "var(--produce-circle-5)",
  "var(--produce-circle-6)",
  "var(--produce-circle-7)",
  "var(--produce-circle-8)",
] as const;

/** Light paper/stone texture for intro block */
const textureStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
};

export function ProduceSection() {
  return (
    <section className="bg-white" id="produce">
      {/* Intro block – textured background, centered copy */}
      <div
        className="px-4 pt-20 pb-10 md:px-8 md:pt-28 md:pb-12 lg:px-10 lg:pt-32 lg:pb-14"
        style={{ backgroundColor: "var(--produce-intro-bg)", ...textureStyle }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-bold tracking-tight text-[var(--header-bg)] md:text-4xl lg:text-[2.75rem]">
            Our produce
          </h2>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-lg leading-relaxed text-[var(--header-bg)] md:text-xl">
            From Australia to the world, we grow delicious produce for everyone,
            everywhere.
          </p>
          <p className="mt-8 font-[family-name:var(--font-inter)] text-base leading-relaxed text-[var(--header-bg)] md:text-lg">
            We produce Australian quality, great flavours and healthy, nutritious
            food to delight people all around the world.
          </p>
        </div>
      </div>

      {/* Produce grid – circular images, headings, copy, Farmed in */}
      <div className="mx-auto max-w-[1400px] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-20 lg:px-10 lg:pt-14 lg:pb-24">
        <div className="grid gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {produceItems.map((item, i) => {
            const circleColor = PRODUCE_CIRCLE_COLORS[i % PRODUCE_CIRCLE_COLORS.length];
            return (
              <article
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <Link
                  href={`/produce/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative flex h-[14rem] w-[14rem] shrink-0 items-center justify-center md:h-[16rem] md:w-[16rem]">
                    {/* Colored circle */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: circleColor }}
                      aria-hidden
                    />
                    {/* Fruit image – slightly scale to overlap circle edge */}
                    <div className="relative h-[85%] w-[85%] overflow-hidden rounded-full transition duration-300 group-hover:scale-105">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 768px) 224px, 256px"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-inter)] text-xl font-bold text-[var(--header-bg)] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm font-[family-name:var(--font-inter)] text-sm leading-relaxed text-neutral-700 md:text-base">
                    {item.description}
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-inter)] text-sm">
                    <span className="font-semibold text-[var(--produce-farmed-label)]">
                      Farmed in:{" "}
                    </span>
                    <span className="text-[var(--header-bg)]">
                      {item.regions}
                    </span>
                  </p>
                </Link>
              </article>
            );
          })}

          {/* CTA placed in the 9th grid spot */}
          <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-12">
            <h3 className="max-w-xs font-[family-name:var(--font-inter)] text-xl font-bold leading-snug text-[var(--header-bg)] md:text-2xl lg:text-[1.6rem]">
              Wholesome, <br className="hidden lg:block" />
              delicious food that&apos;s <br className="hidden lg:block" />
              as good for you as it <br className="hidden lg:block" />
              is for the world.
            </h3>
            <Link
              href="/produce"
              className="mt-8 inline-block rounded-full bg-[var(--header-bg)] px-8 py-3.5 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:opacity-90"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
