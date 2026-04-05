import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { SocialSection } from "@/components/site/SocialSection";
import { ProduceDetailTemplate } from "@/components/site/ProduceDetailTemplate";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Animals",
  description:
    "Explore Agrillano animal operations focused on welfare, traceability, and responsible farming standards.",
  path: "/produce/animals",
  image: "/gen-aerial.png",
});

export default function AnimalsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <ProduceDetailTemplate
          heading="Animals"
          description="Our animal operations are managed with a strong focus on welfare, health, traceability, and responsible farming standards that support long-term sustainability."
          brandsHeading="Our animal operations"
          imageBand={{
            image: "/social/social-4.png",
            imageAlt: "Farm landscape and operations",
          }}
          primaryBrand={{
            title: "Animal Welfare First",
            description:
              "We prioritise humane care and safe environments, guided by welfare standards and continuous farm monitoring.",
            image: "/social/social-4.png",
            imageAlt: "Team member in farm operation",
          }}
          secondaryBrand={{
            title: "Sustainable Systems",
            description:
              "Operational systems designed to balance productivity, environmental stewardship, and traceable supply.",
            image: "/social/social-5.png",
            imageAlt: "Operational team and logistics management",
          }}
          varieties={{
            heading: "Our focus areas",
            items: [
              {
                name: "Welfare",
                description:
                  "Daily care protocols and health oversight designed to maintain strong welfare outcomes.",
                image: "/produce/mushrooms.png",
              },
              {
                name: "Traceability",
                description:
                  "Structured recordkeeping and farm controls to support quality assurance and compliance.",
                image: "/produce/mushrooms.png",
              },
            ],
            brandCallout: "Responsible animal operations, managed the Agrillano way",
          }}
          whereWeGrow={{
            heading: "Where we operate",
            body: "Our teams operate across Queensland, Victoria, and South Australia with strong local management and consistent standards across sites.",
            image: "/social/social-8.png",
            imageAlt: "Regional farm operations",
          }}
          journey={{
            heading: "A journey of care",
            title: "Animals journey",
            body: "From daily husbandry and welfare checks to logistics and distribution, our systems are built to protect quality and accountability.",
            image: "/social/social-4.png",
            imageAlt: "Farm and logistics coordination",
          }}
          hydroponic={{
            heading: "Technology and monitoring",
            body: "We use structured monitoring, reporting, and farm data tools to continuously improve outcomes and operational reliability.",
            image: "/social/social-7.png",
            imageAlt: "Technology-assisted farm monitoring",
          }}
          ripeness={{
            heading: "Quality readiness",
            body: "Our operational checkpoints ensure products and processes meet required standards before entering the next stage of the supply chain.",
            image: "/social/social-8.png",
            imageAlt: "Quality checks in operations",
          }}
          nutrient={{
            heading: "Health and nutrition management",
            body: "Nutrition programs are managed with data-informed planning to support healthy development and consistent farm performance.",
            image: "/social/social-6.png",
            imageAlt: "Farm health and nutrition planning",
          }}
        />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
