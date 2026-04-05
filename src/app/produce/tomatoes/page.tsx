import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { TomatoesImageBandSection } from "@/components/site/TomatoesImageBandSection";
import { TomatoesPageSection } from "@/components/site/TomatoesPageSection";
import { TomatoesBrandsSection } from "@/components/site/TomatoesBrandsSection";
import { TomatoesVitorSection } from "@/components/site/TomatoesVitorSection";
import { TomatoesVarietiesSection } from "@/components/site/TomatoesVarietiesSection";
import { TomatoesWhereWeGrowSection } from "@/components/site/TomatoesWhereWeGrowSection";
import { TomatoesJourneySection } from "@/components/site/TomatoesJourneySection";
import { TomatoesHydroponicSection } from "@/components/site/TomatoesHydroponicSection";
import { TomatoesRipenessSection } from "@/components/site/TomatoesRipenessSection";
import { TomatoesNutrientSection } from "@/components/site/TomatoesNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tomatoes",
  description:
    "Explore Agrillano tomato varieties, controlled-environment growing, and quality supply from farm to shelf.",
  path: "/produce/tomatoes",
  image: "/produce/tomatoes.png",
});

export default function TomatoesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <TomatoesImageBandSection />
        <TomatoesPageSection />
        <TomatoesBrandsSection />
        <TomatoesVitorSection />
        <TomatoesVarietiesSection />
        <TomatoesWhereWeGrowSection />
        <TomatoesJourneySection />
        <TomatoesHydroponicSection />
        <TomatoesRipenessSection />
        <TomatoesNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
