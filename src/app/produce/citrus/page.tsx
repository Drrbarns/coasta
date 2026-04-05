import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { CitrusImageBandSection } from "@/components/site/CitrusImageBandSection";
import { CitrusPageSection } from "@/components/site/CitrusPageSection";
import { CitrusBrandsSection } from "@/components/site/CitrusBrandsSection";
import { CitrusVitorSection } from "@/components/site/CitrusVitorSection";
import { CitrusVarietiesSection } from "@/components/site/CitrusVarietiesSection";
import { CitrusWhereWeGrowSection } from "@/components/site/CitrusWhereWeGrowSection";
import { CitrusJourneySection } from "@/components/site/CitrusJourneySection";
import { CitrusHydroponicSection } from "@/components/site/CitrusHydroponicSection";
import { CitrusRipenessSection } from "@/components/site/CitrusRipenessSection";
import { CitrusNutrientSection } from "@/components/site/CitrusNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Citrus",
  description:
    "Explore Agrillano citrus products, varieties, and growing expertise for local and export markets.",
  path: "/produce/citrus",
  image: "/produce/citrus.webp",
});

export default function CitrusPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <CitrusImageBandSection />
        <CitrusPageSection />
        <CitrusBrandsSection />
        <CitrusVitorSection />
        <CitrusVarietiesSection />
        <CitrusWhereWeGrowSection />
        <CitrusJourneySection />
        <CitrusHydroponicSection />
        <CitrusRipenessSection />
        <CitrusNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
