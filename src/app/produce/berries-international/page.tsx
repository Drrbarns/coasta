import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Berries International",
  description:
    "Agrillano's international berries and produce export network connects Australian farms with global markets.",
  path: "/produce/berries-international",
  image: "/produce/berries.png",
});

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
  { top: "39%", left: "26%" },
  { top: "54%", left: "56%" },
  { top: "63%", left: "66%" },
  { top: "71%", left: "73%" },
  { top: "78%", left: "75%" },
];

export default function BerriesInternationalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />

        <section className="bg-[#b8d9cb] px-4 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1300px] text-center">
            <h2 className="font-[family-name:var(--font-inter)] text-[2.8rem] font-bold leading-[0.96] tracking-tight text-[var(--header-bg)] md:text-[4rem] lg:text-[4.8rem]">
              Harvesting
              <br />
              global connections
            </h2>
            <p className="mx-auto mt-5 max-w-[900px] text-[1.08rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.2rem]">
              From Australia&apos;s farms to international tables, Agrillano&apos;s produce is savoured with joy
              across the globe. With over three decades of experience in fresh produce trade, we export
              premium fruit and vegetables to customers worldwide.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {exportHighlights.map((item) => (
                <article key={item.title} className="text-center">
                  <div
                    className="relative mx-auto h-[11.5rem] w-[11.5rem] rounded-full md:h-[13rem] md:w-[13rem]"
                    style={{ backgroundColor: item.circleColor }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-5"
                      sizes="208px"
                    />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-inter)] text-[2.2rem] font-bold text-[var(--header-bg)]">
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

        <section className="relative min-h-[320px] md:min-h-[500px]">
          <Image
            src="/gen-logistics-truck.png"
            alt="Agrillano wholesale operations"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex min-h-[320px] items-center justify-end px-6 py-10 md:min-h-[500px] md:px-10 lg:px-14">
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
              fresh produce growers, delivering premium fruits and vegetables through trusted
              partnerships and a relentless commitment to quality, integrity, and exceptional service.
            </p>
          </div>
          <div className="relative min-h-[300px] md:min-h-[520px]">
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
            <h2 className="font-[family-name:var(--font-inter)] text-[3.2rem] font-bold leading-[1] text-[var(--header-bg)] md:text-[4.1rem]">
              Wholesale
            </h2>
            <p className="mx-auto mt-3 max-w-[820px] text-[1.2rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.45rem]">
              Powered by the strength of our national wholesale network, we proudly partner with
              Australia&apos;s leading growers to deliver premium, sustainably grown fresh produce.
            </p>
          </div>
        </section>

        <section className="relative min-h-[300px] md:min-h-[500px]">
          <Image
            src="/gen-teamwork.png"
            alt="Agrillano distribution conversation"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </section>

        <section className="bg-[var(--header-bg)] px-4 py-12 text-center md:px-8 md:py-14 lg:px-10 lg:py-16">
          <h2 className="font-[family-name:var(--font-inter)] text-[3.2rem] font-bold leading-[1] text-white md:text-[4.1rem]">
            Distribution
          </h2>
          <p className="mx-auto mt-4 max-w-[860px] text-[1.22rem] leading-[1.25] text-white md:text-[1.5rem]">
            Specialists in temperature controlled storage and distribution, we protect freshness,
            quality and compliance at every stage of the journey.
          </p>
        </section>

        <section className="bg-[#eceded] px-4 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1150px] text-center">
            <h2 className="font-[family-name:var(--font-inter)] text-[2.9rem] font-bold leading-[1] tracking-tight text-[var(--header-bg)] md:text-[4.2rem]">
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
                <svg viewBox="0 0 800 560" className="h-auto w-full text-[#7ea89a]" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M124 382c-18-42-11-92 8-132 16-34 46-66 86-75 26-6 46-20 66-36 38-31 86-47 136-45 42 2 78 17 112 40 24 16 46 31 75 33 37 2 71 24 90 55 30 49 30 116 10 170-14 37-40 67-73 89-20 13-44 19-66 28-28 11-47 35-69 55-26 24-59 38-95 43-58 8-119-8-169-39-38-24-64-61-96-91-12-12-28-22-37-37-4-7-7-13-8-18z"
                  />
                  <path d="M338 145v265M472 145v255M578 220v190" stroke="#dbe9e4" strokeWidth="4" />
                  <path d="M342 290h236M472 220h106" stroke="#dbe9e4" strokeWidth="4" />
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
      </main>
      <SiteFooter />
    </>
  );
}
