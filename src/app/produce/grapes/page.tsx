import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { GrapesImageBandSection } from "@/components/site/GrapesImageBandSection";
import { GrapesPageSection } from "@/components/site/GrapesPageSection";
import { GrapesBrandsSection } from "@/components/site/GrapesBrandsSection";
import { GrapesVitorSection } from "@/components/site/GrapesVitorSection";
import { GrapesVarietiesSection } from "@/components/site/GrapesVarietiesSection";
import { GrapesWhereWeGrowSection } from "@/components/site/GrapesWhereWeGrowSection";
import { GrapesJourneySection } from "@/components/site/GrapesJourneySection";
import { GrapesHydroponicSection } from "@/components/site/GrapesHydroponicSection";
import { GrapesRipenessSection } from "@/components/site/GrapesRipenessSection";
import { GrapesNutrientSection } from "@/components/site/GrapesNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Grapes",
  description:
    "See Agrillano grape varieties, growing regions, and quality standards serving domestic and global customers.",
  path: "/produce/grapes",
  image: "/produce/grapes.webp",
});

export default function GrapesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <GrapesImageBandSection />
        <GrapesPageSection />
        <GrapesBrandsSection />
        <GrapesVitorSection />
        <GrapesVarietiesSection />
        <GrapesWhereWeGrowSection />
        <GrapesJourneySection />
        <GrapesHydroponicSection />
        <GrapesRipenessSection />
        <GrapesNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
