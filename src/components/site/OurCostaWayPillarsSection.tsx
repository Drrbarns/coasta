import Link from "next/link";
import Image from "next/image";
import { ourCostaWayPillarsSection } from "@/content/site";

export function OurCostaWayPillarsSection() {
  return (
    <section className="bg-white px-4 pb-0 pt-8 md:px-8 md:pt-10 lg:px-10 lg:pt-12">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-10 pb-10 md:grid-cols-3 md:gap-12 md:pb-12 lg:gap-16 lg:pb-14">
        {ourCostaWayPillarsSection.items.map((item, idx) => (
          <article key={item.title} className="text-center">
            <div className="relative mx-auto h-44 w-44 rounded-full md:h-48 md:w-48 lg:h-52 lg:w-52">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="rounded-full object-cover"
                sizes="208px"
              />
            </div>

            <h3 className="mx-auto mt-5 max-w-[18rem] font-[family-name:var(--font-inter)] text-[2rem] font-bold leading-[0.96] tracking-tight text-[var(--header-bg)] md:text-[2.25rem] lg:text-[2.65rem]">
              {item.title}
            </h3>

            <p className="mx-auto mt-4 max-w-[17.5rem] font-[family-name:var(--font-inter)] text-[1.02rem] leading-[1.1] text-[var(--header-bg)] md:text-[1.25rem]">
              {item.description}
            </p>

            <Link
              href={
                idx === 0
                  ? "/our-costa-way/farmer-led-flavour-first"
                  : idx === 1
                    ? "/our-costa-way/proudly-grown-the-costa-way"
                    : "/our-costa-way/we-put-people-first"
              }
              className="mx-auto mt-7 inline-flex items-center justify-center rounded-full bg-[var(--header-bg)] px-8 py-3.5 font-[family-name:var(--font-inter)] text-[1.8rem] font-medium leading-none text-white transition hover:opacity-95 md:px-10 md:text-[2rem] lg:text-[2.1rem]"
            >
              Explore More
            </Link>
          </article>
        ))}
      </div>

      <div className="h-5 w-full bg-[#d8ebe0]" />
    </section>
  );
}
