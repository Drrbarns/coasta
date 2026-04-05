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
  image: "/produce/berries.webp",
});

const exportHighlights = [
  {
    title: "Avocados",
    description: "Lovacado avocados are proudly grown and exported to key markets across Asia.",
    image: "/produce/avocados.webp",
    circleColor: "#e6ebd4",
  },
  {
    title: "Citrus",
    description:
      "Our renowned 2PH and Vitor citrus brands are exported to markets across Japan, Hong Kong, North America, South East Asia, Europe and the Middle East.",
    image: "/produce/citrus.webp",
    circleColor: "#efd997",
  },
  {
    title: "Grapes",
    description:
      "Known for their sweet, crisp, and juicy flavours, our Vitor grapes are enjoyed in more than 20 countries.",
    image: "/produce/grapes.webp",
    circleColor: "#dce5bf",
  },
  {
    title: "Berries",
    description:
      "Our premium blueberries are exported throughout Asia, including Singapore, Thailand, Hong Kong and Indonesia.",
    image: "/produce/berries.webp",
    circleColor: "#d6dfea",
  },
];

const mapMarkers = [
  { top: "62%", left: "18%", label: "Perth" },
  { top: "72%", left: "53%", label: "Adelaide" },
  { top: "78%", left: "62%", label: "Melbourne" },
  { top: "68%", left: "70%", label: "Sydney" },
  { top: "52%", left: "72%", label: "Brisbane" },
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
            src="/gen-logistics-truck.webp"
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
              src="/gen-customer-service.webp"
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
            src="/gen-teamwork.webp"
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
                <svg viewBox="0 0 900 600" className="h-auto w-full text-[#7ea89a]" aria-label="Map of Australia" role="img">
                  {/* Australia mainland */}
                  <path
                    fill="currentColor"
                    d="M195 168c8-12 22-18 36-22 18-5 37-2 55 4 14 5 27 12 42 14 20 3 40-2 58-10 16-7 30-17 47-22 22-6 46-3 68 4 18 6 34 15 52 20 15 4 31 5 46 10 18 6 34 16 48 28 10 9 18 20 28 29 8 7 18 12 24 21 8 12 10 27 16 40 5 10 12 19 15 30 3 14 0 28-2 42-2 16-3 32-1 48 2 12 6 24 6 36 0 14-5 27-8 40-4 16-6 32-12 47-8 18-20 34-34 46-10 8-22 14-34 16-16 2-32 0-48-3-12-3-24-7-36-8-16-2-33 0-49 3-14 3-27 8-41 8-18 0-36-4-53-10-14-5-28-12-42-15-18-4-36-4-54-2-14 2-28 5-42 4-18-2-35-8-50-18-12-8-22-18-30-30-6-10-10-22-12-34-2-14 0-28 4-42 3-12 8-23 12-34 6-16 8-33 6-50-2-12-6-24-10-35-6-14-14-27-16-42-2-12-1-25 2-37 4-14 10-26 18-38z"
                  />
                  {/* Tasmania */}
                  <ellipse cx="565" cy="520" rx="32" ry="22" fill="currentColor" />
                  {/* Distribution grid */}
                  <path d="M320 190v230" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                  <path d="M460 170v260" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                  <path d="M590 210v220" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                  <path d="M210 300h460" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                  <path d="M320 230h270" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                  <path d="M400 380h250" stroke="#dbe9e4" strokeWidth="3" strokeDasharray="8 6" opacity="0.6" />
                </svg>

                {mapMarkers.map((marker, idx) => (
                  <span
                    key={`${marker.label}-${idx}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <span className="block h-5 w-5 rounded-full border-2 border-[#3d7a6a] bg-[#5a9e8c] shadow-md md:h-7 md:w-7" />
                    <span className="mt-1 whitespace-nowrap font-[family-name:var(--font-inter)] text-[0.6rem] font-semibold text-[var(--header-bg)] md:text-[0.72rem]">
                      {marker.label}
                    </span>
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
