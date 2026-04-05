import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutLeadershipSection } from "@/components/site/AboutLeadershipSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description:
    "Meet Agrillano's leadership team guiding strategy, innovation, and quality produce outcomes.",
  path: "/about-us/leadership",
  image: "/gen-aerial.png",
});

export default function LeadershipPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutLeadershipSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
