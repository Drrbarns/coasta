import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { OurCostaWayHero } from "@/components/site/OurCostaWayHero";
import { OurCostaWayCommitmentSection } from "@/components/site/OurCostaWayCommitmentSection";
import { OurCostaWayPillarsSection } from "@/components/site/OurCostaWayPillarsSection";
import { ProudlyGrownImageBandSection } from "@/components/site/ProudlyGrownImageBandSection";
import { ProudlyGrownFoodSafetyIntroSection } from "@/components/site/ProudlyGrownFoodSafetyIntroSection";
import { ProudlyGrownTomatoesSection } from "@/components/site/ProudlyGrownTomatoesSection";
import { ProudlyGrownGlasshouseSection } from "@/components/site/ProudlyGrownGlasshouseSection";
import { ProudlyGrownMushroomCompostSection } from "@/components/site/ProudlyGrownMushroomCompostSection";
import { ProudlyGrownPackagingStatsSection } from "@/components/site/ProudlyGrownPackagingStatsSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Proudly Grown: The Costa Way",
  description:
    "Learn how Agrillano grows produce responsibly through innovation, quality systems, and sustainability.",
  path: "/our-costa-way/proudly-grown-the-costa-way",
  image: "/gen-farm-sunrise.png",
});

export default function ProudlyGrownPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <OurCostaWayHero />
        <OurCostaWayCommitmentSection />
        <OurCostaWayPillarsSection />
        <ProudlyGrownImageBandSection />
        <ProudlyGrownFoodSafetyIntroSection />
        <ProudlyGrownTomatoesSection />
        <ProudlyGrownGlasshouseSection />
        <ProudlyGrownMushroomCompostSection />
        <ProudlyGrownPackagingStatsSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
