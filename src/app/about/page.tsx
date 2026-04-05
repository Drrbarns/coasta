import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AboutHero } from "@/components/site/AboutHero";
import { AboutHistorySection } from "@/components/site/AboutHistorySection";
import { AboutValuesSection } from "@/components/site/AboutValuesSection";
import { AboutLeadershipSection } from "@/components/site/AboutLeadershipSection";
import { AboutWorldSection } from "@/components/site/AboutWorldSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Agrillano",
  description:
    "Learn about Agrillano's history, leadership, values, and global produce supply network.",
  path: "/about-us",
  image: "/gen-aerial.webp",
  noindex: true,
});

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <AboutHero />
        <AboutHistorySection />
        <AboutValuesSection />
        <AboutLeadershipSection />
        <AboutWorldSection />
      </main>
      <SiteFooter />
    </>
  );
}
