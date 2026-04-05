import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutValuesSection } from "@/components/site/AboutValuesSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Brand Pillars",
  description:
    "Discover the Agrillano brand pillars that shape quality, trust, and long-term grower partnerships.",
  path: "/about-us/brand-pillars",
  image: "/gen-greenhouse.webp",
});

export default function BrandPillarsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutValuesSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
