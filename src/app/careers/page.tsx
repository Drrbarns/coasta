import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CareersHero } from "@/components/site/CareersHero";
import { CareersIntroRolesGridSection } from "@/components/site/CareersIntroRolesGridSection";
import { CareersCultureQuadSection } from "@/components/site/CareersCultureQuadSection";
import { CareersFutureLifeGridSection } from "@/components/site/CareersFutureLifeGridSection";
import { CareersLifeSection } from "@/components/site/CareersLifeSection";
import { CareersFeaturedWorkSection } from "@/components/site/CareersFeaturedWorkSection";
import { CareersGraduateSection } from "@/components/site/CareersGraduateSection";
import { CareersScholarshipsSection } from "@/components/site/CareersScholarshipsSection";
import { CareersAdventureSection } from "@/components/site/CareersAdventureSection";
import { CareersJobsBulletinSection } from "@/components/site/CareersJobsBulletinSection";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Agrillano",
  description:
    "Build your career at Agrillano across farming, operations, logistics, and leadership pathways in Australian agriculture.",
  path: "/careers",
  image: "/gen-greenhouse.png",
});

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <CareersHero />
        <CareersIntroRolesGridSection />
        <CareersCultureQuadSection />
        <CareersFutureLifeGridSection />
        <CareersLifeSection />
        <CareersFeaturedWorkSection />
        <CareersGraduateSection />
        <CareersScholarshipsSection />
        <CareersAdventureSection />
        <CareersJobsBulletinSection />
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
