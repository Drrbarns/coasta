import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSlider } from "@/components/site/HeroSlider";
import { IntroSection } from "@/components/site/IntroSection";
import { ProduceSection } from "@/components/site/ProduceSection";
import { CostaWaySection } from "@/components/site/CostaWaySection";
import { NewsSection } from "@/components/site/NewsSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agrillano | Fresh Produce and Farming",
  description:
    "Discover Agrillano's fresh produce, sustainable farming practices, and community impact across Australia and global markets.",
  path: "/",
  image: "/gen-farm-sunrise.webp",
  type: "website",
});

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSlider />
        <IntroSection />
        <ProduceSection />
        <CostaWaySection />
        <NewsSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
