import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactHero } from "@/components/site/ContactHero";
import { ContactFormSection } from "@/components/site/ContactFormSection";
import { ContactFaqSection } from "@/components/site/ContactFaqSection";
import { ContactDetailsSection } from "@/components/site/ContactDetailsSection";
import { BottomCta } from "@/components/site/BottomCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Agrillano",
  description:
    "Contact Agrillano for wholesale produce, partnerships, media enquiries, and general support across Australia.",
  path: "/contact-us",
  image: "/gen-aerial.png",
});

export default function ContactUsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <ContactHero />
        <ContactFaqSection />
        <ContactFormSection />
        <ContactDetailsSection />
        <BottomCta />
      </main>
      <SiteFooter />
    </>
  );
}
