import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { SocialSection } from "@/components/site/SocialSection";
import { ProduceDetailTemplate } from "@/components/site/ProduceDetailTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Grains",
  description:
    "See Agrillano grain production capabilities with disciplined farm management and quality handling.",
  path: "/produce/grains",
  image: "/gen-farm-sunrise.webp",
});

export default function GrainsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <ProduceDetailTemplate
          heading="Grains"
          description="Agrillano grains include staple crops like corn and wheat, grown with disciplined farm management and quality handling to support food and feed supply chains."
          brandsHeading="Our grains portfolio"
          imageBand={{
            image: "/social/social-4.webp",
            imageAlt: "Broadacre grain farm landscape",
          }}
          primaryBrand={{
            title: "Corn",
            description:
              "High-quality corn grown for dependable nutrition, processing compatibility, and stable seasonal output.",
            image: "/social/social-4.webp",
            imageAlt: "Corn fields under cultivation",
          }}
          secondaryBrand={{
            title: "Wheat",
            description:
              "Wheat programs focused on grain quality, consistency and responsible farm practices across major regions.",
            image: "/social/social-5.webp",
            imageAlt: "Grain handling and post-harvest sorting",
          }}
          varieties={{
            heading: "Our key grain lines",
            items: [
              {
                name: "Corn",
                description:
                  "Selected for robust yield and quality characteristics across diverse growing conditions.",
                image: "/produce/grapes.webp",
              },
              {
                name: "Wheat",
                description:
                  "Managed for consistency, harvest timing, and quality outcomes aligned to market demand.",
                image: "/produce/grapes.webp",
              },
            ],
            brandCallout: "From field to supply chain, grain quality you can trust",
          }}
          whereWeGrow={{
            heading: "Where we grow",
            body: "Our grain footprint extends across Queensland, New South Wales, and Western Australia, enabling broader seasonal resilience and efficient logistics.",
            image: "/social/social-8.webp",
            imageAlt: "Grain harvest operations",
          }}
          journey={{
            heading: "A journey of consistency",
            title: "Grains journey",
            body: "From planting and agronomy to harvest, storage and dispatch, we maintain strong controls to protect grain quality at each stage.",
            image: "/social/social-4.webp",
            imageAlt: "Aerial view of grain operations",
          }}
          hydroponic={{
            heading: "Smart farm technology",
            body: "We use data-led irrigation and crop monitoring practices to improve performance, reduce waste and strengthen long-term sustainability.",
            image: "/social/social-7.webp",
            imageAlt: "Farm technology in grain fields",
          }}
          ripeness={{
            heading: "Optimised harvest timing",
            body: "Our agronomy teams align harvest timing with maturity and moisture indicators to deliver better quality and post-harvest outcomes.",
            image: "/social/social-8.webp",
            imageAlt: "Harvest timing and quality checks",
          }}
          nutrient={{
            heading: "Nutrient and soil balance",
            body: "Continuous field monitoring and balanced nutrient programs support healthier grain crops and stronger season-on-season performance.",
            image: "/social/social-6.webp",
            imageAlt: "Soil and crop analytics in grain farming",
          }}
        />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
