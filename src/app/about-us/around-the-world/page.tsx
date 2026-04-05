import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutWorldSection } from "@/components/site/AboutWorldSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Around the World",
  description:
    "See how Agrillano's global supply and export partnerships deliver premium produce to international markets.",
  path: "/about-us/around-the-world",
  image: "/gen-aerial.png",
});

export default function AroundTheWorldPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutWorldSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
