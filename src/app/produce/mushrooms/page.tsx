import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { MushroomsImageBandSection } from "@/components/site/MushroomsImageBandSection";
import { MushroomsPageSection } from "@/components/site/MushroomsPageSection";
import { MushroomsBrandsSection } from "@/components/site/MushroomsBrandsSection";
import { MushroomsVitorSection } from "@/components/site/MushroomsVitorSection";
import { MushroomsVarietiesSection } from "@/components/site/MushroomsVarietiesSection";
import { MushroomsWhereWeGrowSection } from "@/components/site/MushroomsWhereWeGrowSection";
import { MushroomsJourneySection } from "@/components/site/MushroomsJourneySection";
import { MushroomsHydroponicSection } from "@/components/site/MushroomsHydroponicSection";
import { MushroomsRipenessSection } from "@/components/site/MushroomsRipenessSection";
import { MushroomsNutrientSection } from "@/components/site/MushroomsNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mushrooms",
  description:
    "Learn how Agrillano grows and delivers mushrooms with consistent quality, freshness, and food safety.",
  path: "/produce/mushrooms",
  image: "/produce/mushrooms.webp",
});

export default function MushroomsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <MushroomsImageBandSection />
        <MushroomsPageSection />
        <MushroomsBrandsSection />
        <MushroomsVitorSection />
        <MushroomsVarietiesSection />
        <MushroomsWhereWeGrowSection />
        <MushroomsJourneySection />
        <MushroomsHydroponicSection />
        <MushroomsRipenessSection />
        <MushroomsNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
