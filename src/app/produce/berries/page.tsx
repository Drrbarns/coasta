import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { BerriesImageBandSection } from "@/components/site/BerriesImageBandSection";
import { BerriesPageSection } from "@/components/site/BerriesPageSection";
import { BerriesBrandsSection } from "@/components/site/BerriesBrandsSection";
import { BerriesVitorSection } from "@/components/site/BerriesVitorSection";
import { BerriesVarietiesSection } from "@/components/site/BerriesVarietiesSection";
import { BerriesWhereWeGrowSection } from "@/components/site/BerriesWhereWeGrowSection";
import { BerriesJourneySection } from "@/components/site/BerriesJourneySection";
import { BerriesHydroponicSection } from "@/components/site/BerriesHydroponicSection";
import { BerriesRipenessSection } from "@/components/site/BerriesRipenessSection";
import { BerriesNutrientSection } from "@/components/site/BerriesNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Berries",
  description:
    "Discover Agrillano berries, including premium varieties, growing regions, and quality-first farming methods.",
  path: "/produce/berries",
  image: "/produce/berries.webp",
});

export default function BerriesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <BerriesImageBandSection />
        <BerriesPageSection />
        <BerriesBrandsSection />
        <BerriesVitorSection />
        <BerriesVarietiesSection />
        <BerriesWhereWeGrowSection />
        <BerriesJourneySection />
        <BerriesHydroponicSection />
        <BerriesRipenessSection />
        <BerriesNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
