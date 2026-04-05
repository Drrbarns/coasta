import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProduceHero } from "@/components/site/ProduceHero";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agrillano Produce",
  description:
    "Explore Agrillano's produce categories including berries, citrus, grapes, mushrooms, tomatoes, avocados, and more.",
  path: "/produce",
  image: "/gen-greenhouse.webp",
});

export default function ProducePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ProduceHero />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
