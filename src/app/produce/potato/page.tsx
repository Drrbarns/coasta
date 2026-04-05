import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { SocialSection } from "@/components/site/SocialSection";
import { ProduceDetailTemplate } from "@/components/site/ProduceDetailTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Potato",
  description:
    "Browse Agrillano potato production, handling standards, and supply capabilities for diverse customer needs.",
  path: "/produce/potato",
  image: "/produce/tomatoes.png",
});

export default function PotatoPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <ProduceDetailTemplate
          heading="Potato"
          description="Agrillano potatoes are grown with modern agronomy practices to deliver dependable quality, cooking performance, and flavour across fresh market and processing supply."
          brandsHeading="Our brands"
          imageBand={{
            image: "/social/social-4.png",
            imageAlt: "Farm rows and harvest operations",
          }}
          primaryBrand={{
            title: "Agrillano Select Potatoes",
            description:
              "Our premium table potato range selected for consistency, texture, and everyday kitchen performance.",
            image: "/social/social-4.png",
            imageAlt: "Potato field at harvest",
          }}
          secondaryBrand={{
            title: "Agrillano Gold Processing",
            description:
              "Reliable potato varieties developed for processing quality, including strong solids and consistent shape.",
            image: "/social/social-5.png",
            imageAlt: "Packhouse potato grading line",
          }}
          varieties={{
            heading: "Our varieties",
            items: [
              {
                name: "Russet",
                description:
                  "A versatile variety with fluffy texture, ideal for baking and fries, with strong storage performance.",
                image: "/produce/tomatoes.png",
              },
              {
                name: "Red Skin",
                description:
                  "Smooth skin, creamy interior and excellent shape retention, perfect for roasting and salads.",
                image: "/produce/tomatoes.png",
              },
            ],
            brandCallout: "Quality potatoes, grown the Agrillano way",
          }}
          whereWeGrow={{
            heading: "Where we grow",
            body: "Our potato operations span key growing regions in Victoria, South Australia and New South Wales, giving us broad seasonal coverage and dependable year-round supply.",
            image: "/social/social-8.png",
            imageAlt: "Harvest team in broadacre field",
          }}
          journey={{
            heading: "A journey of quality",
            title: "Potato journey",
            body: "From seed selection and soil preparation to grading, storage and dispatch, we manage the full potato journey to ensure consistency and traceability.",
            image: "/social/social-4.png",
            imageAlt: "Aerial view of potato fields",
          }}
          hydroponic={{
            heading: "Precision agronomy",
            body: "We apply precision irrigation and nutrient planning to improve crop uniformity, yield quality and sustainable land management.",
            image: "/social/social-7.png",
            imageAlt: "Irrigation and crop monitoring in field",
          }}
          ripeness={{
            heading: "Harvested at the right time",
            body: "Our teams schedule harvest windows based on maturity and quality indicators so potatoes arrive fresh, stable and fit for purpose.",
            image: "/social/social-8.png",
            imageAlt: "Harvest quality checks",
          }}
          nutrient={{
            heading: "Soil and nutrient stewardship",
            body: "Through continuous soil testing and responsible nutrient application, we support healthier crops and long-term farm productivity.",
            image: "/social/social-6.png",
            imageAlt: "Field technician assessing crop health",
          }}
        />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
