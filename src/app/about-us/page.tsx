import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutHistorySection } from "@/components/site/AboutHistorySection";
import { AboutValuesSection } from "@/components/site/AboutValuesSection";
import { AboutLeadershipSection } from "@/components/site/AboutLeadershipSection";
import { AboutWorldSection } from "@/components/site/AboutWorldSection";
import { AboutWholesaleDistributionSection } from "@/components/site/AboutWholesaleDistributionSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Agrillano",
  description:
    "Learn Agrillano's story, values, leadership, and global produce footprint from Australia to international markets.",
  path: "/about-us",
  image: "/gen-aerial.webp",
});

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutHistorySection />
        <AboutValuesSection />
        <AboutLeadershipSection />
        <AboutWorldSection />
        <AboutWholesaleDistributionSection />
      </main>
      <SiteFooter />
    </>
  );
}
