import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { BerriesInternationalImageBandSection } from "@/components/site/BerriesInternationalImageBandSection";
import { BerriesInternationalPageSection } from "@/components/site/BerriesInternationalPageSection";
import { BerriesInternationalBrandsSection } from "@/components/site/BerriesInternationalBrandsSection";
import { BerriesInternationalVitorSection } from "@/components/site/BerriesInternationalVitorSection";
import { BerriesInternationalVarietiesSection } from "@/components/site/BerriesInternationalVarietiesSection";
import { BerriesInternationalWhereWeGrowSection } from "@/components/site/BerriesInternationalWhereWeGrowSection";
import { BerriesInternationalJourneySection } from "@/components/site/BerriesInternationalJourneySection";
import { BerriesInternationalHydroponicSection } from "@/components/site/BerriesInternationalHydroponicSection";
import { BerriesInternationalRipenessSection } from "@/components/site/BerriesInternationalRipenessSection";
import { BerriesInternationalNutrientSection } from "@/components/site/BerriesInternationalNutrientSection";
import { SocialSection } from "@/components/site/SocialSection";

export default function BerriesInternationalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <BerriesInternationalImageBandSection />
        <BerriesInternationalPageSection />
        <BerriesInternationalBrandsSection />
        <BerriesInternationalVitorSection />
        <BerriesInternationalVarietiesSection />
        <BerriesInternationalWhereWeGrowSection />
        <BerriesInternationalJourneySection />
        <BerriesInternationalHydroponicSection />
        <BerriesInternationalRipenessSection />
        <BerriesInternationalNutrientSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
