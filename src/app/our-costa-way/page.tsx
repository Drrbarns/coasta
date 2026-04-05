import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { OurCostaWayHero } from "@/components/site/OurCostaWayHero";
import { OurCostaWayCommitmentSection } from "@/components/site/OurCostaWayCommitmentSection";
import { OurCostaWayPillarsSection } from "@/components/site/OurCostaWayPillarsSection";
import { OurCostaWayFoodSafetySection } from "@/components/site/OurCostaWayFoodSafetySection";
import { OurCostaWayCertificationsSection } from "@/components/site/OurCostaWayCertificationsSection";
import { OurCostaWayReportsSection } from "@/components/site/OurCostaWayReportsSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Agrillano Way",
  description:
    "See how Agrillano delivers quality, safety, sustainability, and community outcomes through the Agrillano Way framework.",
  path: "/our-costa-way",
  image: "/gen-aerial.webp",
});

export default function OurCostaWayPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <OurCostaWayHero />
        <OurCostaWayCommitmentSection />
        <OurCostaWayPillarsSection />
        <OurCostaWayFoodSafetySection />
        <OurCostaWayCertificationsSection />
        <OurCostaWayReportsSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
