import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { BananasImageBandSection } from "@/components/site/BananasImageBandSection";
import { BananasIntroSection } from "@/components/site/BananasIntroSection";
import { BananasOverviewSection } from "@/components/site/BananasOverviewSection";
import { BananasBrandsSection } from "@/components/site/BananasBrandsSection";
import { BananasCultureSection } from "@/components/site/BananasCultureSection";
import { BananasVitorSection } from "@/components/site/BananasVitorSection";
import { BananasVarietiesSection } from "@/components/site/BananasVarietiesSection";
import { BananasWhereWeGrowSection } from "@/components/site/BananasWhereWeGrowSection";
import { BananasJourneySection } from "@/components/site/BananasJourneySection";
import { BananasHydroponicSection } from "@/components/site/BananasHydroponicSection";
import { BananasRipenessSection } from "@/components/site/BananasRipenessSection";
import { BananasNutrientSection } from "@/components/site/BananasNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bananas",
  description:
    "Learn about Agrillano bananas, from farm practices and varieties to quality handling and distribution.",
  path: "/produce/bananas",
  image: "/produce/bananas.webp",
});

export default function BananasPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <BananasImageBandSection />
        <BananasIntroSection />
        <BananasOverviewSection />
        <BananasBrandsSection />
        <BananasCultureSection />
        <BananasVitorSection />
        <BananasVarietiesSection />
        <BananasWhereWeGrowSection />
        <BananasJourneySection />
        <BananasHydroponicSection />
        <BananasRipenessSection />
        <BananasNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
