import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutWholesaleDistributionSection } from "@/components/site/AboutWholesaleDistributionSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wholesale and Distribution",
  description:
    "Explore Agrillano's wholesale and distribution network delivering fresh produce across Australia every day.",
  path: "/about-us/wholesale-distribution",
  image: "/gen-teamwork.webp",
});

export default function WholesaleDistributionPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutWholesaleDistributionSection />
      </main>
      <SiteFooter />
    </>
  );
}
