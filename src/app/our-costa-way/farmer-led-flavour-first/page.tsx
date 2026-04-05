import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { OurCostaWayHero } from "@/components/site/OurCostaWayHero";
import { OurCostaWayCommitmentSection } from "@/components/site/OurCostaWayCommitmentSection";
import { OurCostaWayPillarsSection } from "@/components/site/OurCostaWayPillarsSection";
import { FarmerLedFlavourFirstHeroSection } from "@/components/site/FarmerLedFlavourFirstHeroSection";
import { FarmerLedFoodSafetyIntroSection } from "@/components/site/FarmerLedFoodSafetyIntroSection";
import { FarmerLedFoodSafetyImageSection } from "@/components/site/FarmerLedFoodSafetyImageSection";
import { FarmerLedSoilMoistureSection } from "@/components/site/FarmerLedSoilMoistureSection";
import { FarmerLedAutonomousRobotsSection } from "@/components/site/FarmerLedAutonomousRobotsSection";
import { FarmerLedSubstrateSection } from "@/components/site/FarmerLedSubstrateSection";
import { OurCostaWayCertificationsSection } from "@/components/site/OurCostaWayCertificationsSection";
import { OurCostaWayReportsSection } from "@/components/site/OurCostaWayReportsSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Farmer Led, Flavour First",
  description:
    "Explore Agrillano's farmer-led, flavour-first approach to food safety, innovation, and sustainable growing.",
  path: "/our-costa-way/farmer-led-flavour-first",
  image: "/gen-greenhouse.webp",
});

export default function FarmerLedPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <OurCostaWayHero />
        <OurCostaWayCommitmentSection />
        <OurCostaWayPillarsSection />
        <FarmerLedFoodSafetyImageSection />
        <FarmerLedFlavourFirstHeroSection />
        <FarmerLedSoilMoistureSection />
        <FarmerLedAutonomousRobotsSection />
        <FarmerLedSubstrateSection />
        <FarmerLedFoodSafetyIntroSection />
        <OurCostaWayCertificationsSection />
        <OurCostaWayReportsSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
