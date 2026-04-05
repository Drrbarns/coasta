import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutHistorySection } from "@/components/site/AboutHistorySection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "The Costa Story",
  description:
    "Read the Agrillano story, from early roots to today's fresh produce network across Australia and beyond.",
  path: "/about-us/the-costa-story",
  image: "/gen-farm-sunrise.png",
});

export default function CostaStoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutHistorySection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
