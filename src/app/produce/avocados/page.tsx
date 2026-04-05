import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { AvocadoImageBandSection } from "@/components/site/AvocadoImageBandSection";
import { AvocadoPageSection } from "@/components/site/AvocadoPageSection";
import { AvocadoBrandsSection } from "@/components/site/AvocadoBrandsSection";
import { AvocadoVitorSection } from "@/components/site/AvocadoVitorSection";
import { AvocadoVarietiesSection } from "@/components/site/AvocadoVarietiesSection";
import { AvocadoWhereWeGrowSection } from "@/components/site/AvocadoWhereWeGrowSection";
import { AvocadoJourneySection } from "@/components/site/AvocadoJourneySection";
import { AvocadoHydroponicSection } from "@/components/site/AvocadoHydroponicSection";
import { AvocadoRipenessSection } from "@/components/site/AvocadoRipenessSection";
import { AvocadoNutrientSection } from "@/components/site/AvocadoNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Avocados",
  description:
    "Explore Agrillano avocados, varieties, growing regions, and quality standards across the supply chain.",
  path: "/produce/avocados",
  image: "/produce/avocados.webp",
});

export default function AvocadosPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <AvocadoImageBandSection />
        <AvocadoPageSection />
        <AvocadoBrandsSection />
        <AvocadoVitorSection />
        <AvocadoVarietiesSection />
        <AvocadoWhereWeGrowSection />
        <AvocadoJourneySection />
        <AvocadoHydroponicSection />
        <AvocadoRipenessSection />
        <AvocadoNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
