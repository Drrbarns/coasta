import Image from "next/image";
import { SocialSection } from "@/components/site/SocialSection";

const exportHighlights = [
  {
    title: "Avocados",
    description: "Lovacado avocados are proudly grown and exported to key markets across Asia.",
    image: "/produce/avocados.png",
    circleColor: "#e6ebd4",
  },
  {
    title: "Citrus",
    description:
      "Our renowned 2PH and Vitor citrus brands are exported to markets across Japan, Hong Kong, North America, South East Asia, Europe and the Middle East.",
    image: "/produce/citrus.png",
    circleColor: "#efd997",
  },
  {
    title: "Grapes",
    description:
      "Known for their sweet, crisp, and juicy flavours, our Vitor grapes are enjoyed in more than 20 countries.",
    image: "/produce/grapes.png",
    circleColor: "#dce5bf",
  },
  {
    title: "Berries",
    description:
      "Our premium blueberries are exported throughout Asia, including Singapore, Thailand, Hong Kong and Indonesia.",
    image: "/produce/berries.png",
    circleColor: "#d6dfea",
  },
];

const mapMarkers = [
  { top: "45%", left: "21%" },
  { top: "58%", left: "50%" },
  { top: "66%", left: "62%" },
  { top: "73%", left: "70%" },
  { top: "85%", left: "63%" },
];

export function AboutWholesaleDistributionSection() {
  return (
    <>
      <section className="bg-[#b8d9cb] px-4 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1300px] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2rem] font-bold sm:text-[2.4rem] leading-[0.96] tracking-tight text-[var(--header-bg)] md:text-[4rem] lg:text-[4.8rem]">
            Harvesting
            <br />
            global connections
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-[1.08rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.2rem]">
            From Australia&apos;s farms to international tables, Agrillano&apos;s produce is savoured with joy
            across the globe. With over three decades of experience in fresh produce trade, we export
            premium fruit and vegetables to customers worldwide.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {exportHighlights.map((item) => (
              <article key={item.title} className="text-center">
                <div
                  className="relative mx-auto h-[8.2rem] w-[8.2rem] sm:h-[10rem] sm:w-[10rem] overflow-hidden rounded-full md:h-[13rem] md:w-[13rem]"
                  style={{ backgroundColor: item.circleColor }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-0 scale-[1.18] mix-blend-multiply"
                    sizes="208px"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-inter)] text-[1.6rem] font-bold sm:text-[1.9rem] text-[var(--header-bg)]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[280px] text-[1.02rem] leading-[1.3] text-[var(--header-bg)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[260px] md:min-h-[500px]">
        <Image
          src="/gen-logistics-truck.png"
          alt="Agrillano wholesale operations"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex min-h-[260px] items-center justify-end px-6 py-10 md:min-h-[500px] md:px-10 lg:px-14">
          <p className="max-w-[620px] text-right font-[family-name:var(--font-inter)] text-[2rem] font-bold leading-[1.12] text-white md:text-[3rem] lg:text-[4rem]">
            Australia&apos;s most trusted partner for leading fresh produce growers, retailers, and
            distributors
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center bg-[#f5f1e7] px-6 py-14 md:px-10 lg:px-14">
          <p className="max-w-[560px] text-center font-[family-name:var(--font-inter)] text-[2rem] font-bold leading-[1.2] text-[var(--header-bg)] md:text-[2.5rem] lg:text-[3rem]">
            At Agrillano Wholesale and Distribution, we are proud to represent Australia&apos;s leading
            fresh produce growers, delivering premium fruits and vegetables through trusted partnerships
            and a relentless commitment to quality, integrity, and exceptional service.
          </p>
        </div>
        <div className="relative min-h-[240px] md:min-h-[520px]">
          <Image
            src="/gen-customer-service.png"
            alt="Agrillano warehouse team"
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="bg-[#f1dd89] px-4 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold sm:text-[2.8rem] leading-[1] text-[var(--header-bg)] md:text-[4.1rem]">
            Wholesale
          </h2>
          <p className="mx-auto mt-3 max-w-[820px] text-[1.2rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.45rem]">
            Powered by the strength of our national wholesale network, we proudly partner with
            Australia&apos;s leading growers to deliver premium, sustainably grown fresh produce.
          </p>
        </div>
      </section>

      <section className="relative min-h-[240px] md:min-h-[500px]">
        <Image
          src="/gen-teamwork.png"
          alt="Agrillano distribution conversation"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      <section className="bg-[var(--header-bg)] px-4 py-12 text-center md:px-8 md:py-14 lg:px-10 lg:py-16">
        <h2 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold sm:text-[2.8rem] leading-[1] text-white md:text-[4.1rem]">
          Distribution
        </h2>
        <p className="mx-auto mt-4 max-w-[860px] text-[1.22rem] leading-[1.25] text-white md:text-[1.5rem]">
          Specialists in temperature controlled storage and distribution, we protect freshness, quality
          and compliance at every stage of the journey.
        </p>
      </section>

      <section className="bg-[#eceded] px-4 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1150px] text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.1rem] font-bold sm:text-[2.6rem] leading-[1] tracking-tight text-[var(--header-bg)] md:text-[4.2rem]">
            Supplying produce daily across Australia
          </h2>
          <p className="mx-auto mt-4 max-w-[920px] text-[1.08rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.2rem]">
            With a national footprint and deep industry expertise, we connect growers to customers and
            communities - ensuring freshness and excellence across every channel we serve.
          </p>
          <p className="mx-auto mt-3 max-w-[760px] text-[1.03rem] leading-[1.25] text-[var(--header-bg)]">
            Discover more about our range of wholesale and distribution centres.
          </p>

          <div className="mt-8 rounded-[28px] bg-[#eceded] p-4">
            <div className="relative mx-auto max-w-[760px]">
              <svg viewBox="0 0 900 560" className="h-auto w-full text-[#7ea89a]" aria-hidden>
                <path
                  fill="currentColor"
                  d="M74 315l36-40 2-34 36-48 62-6 57-44 96-10 63 25 52-11 43 34 55 10 25 38 33 22 14 45-14 48-25 35-57 20-49 43-80 9-75-21-65 15-70-21-56-44-38-4-33-41z"
                />
                <ellipse cx="596" cy="500" rx="28" ry="16" fill="currentColor" />
                <path d="M303 145v252M420 138v252M536 210v168" stroke="#dbe9e4" strokeWidth="4" />
                <path d="M305 276h233M420 210h116" stroke="#dbe9e4" strokeWidth="4" />
                <path d="M536 283h108" stroke="#dbe9e4" strokeWidth="4" />
              </svg>

              {mapMarkers.map((marker, idx) => (
                <span
                  key={`${marker.top}-${marker.left}-${idx}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: marker.top, left: marker.left }}
                  aria-hidden
                >
                  <span className="block h-7 w-7 rounded-full border-2 border-[#4f8e7d] bg-[#8db4a8]/70" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SocialSection />
    </>
  );
}
