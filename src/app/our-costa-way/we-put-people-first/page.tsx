import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { OurCostaWayHero } from "@/components/site/OurCostaWayHero";
import { OurCostaWayCommitmentSection } from "@/components/site/OurCostaWayCommitmentSection";
import { OurCostaWayPillarsSection } from "@/components/site/OurCostaWayPillarsSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "We Put People First",
  description:
    "Discover how Agrillano supports people-first culture, wellbeing, and opportunity across teams and communities.",
  path: "/our-costa-way/we-put-people-first",
  image: "/gen-aerial.webp",
});

export default function PeopleFirstPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <OurCostaWayHero />
        <OurCostaWayCommitmentSection />
        <OurCostaWayPillarsSection />

        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
