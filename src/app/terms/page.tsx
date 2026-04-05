import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "Review Agrillano's terms and conditions governing the use of our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="bg-white px-4 pt-[8rem] pb-20 md:px-8 md:pt-[10rem] lg:pt-[12rem] -mt-[4.5rem] lg:-mt-[5rem]"
      >
        <article className="mx-auto max-w-[820px] font-[family-name:var(--font-inter)] text-[var(--header-bg)]">
          <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-tight md:text-[3rem]">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-[1.05rem] leading-[1.5] text-[var(--header-bg)]/80">
            Effective date: 1 January 2026
          </p>

          <div className="mt-10 space-y-8 text-[1.02rem] leading-[1.6] text-[var(--header-bg)]/90">
            <section>
              <h2 className="text-[1.3rem] font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-2">
                By accessing or using the Agrillano website, you agree to be bound by these terms and
                conditions. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">2. Use of the Website</h2>
              <p className="mt-2">
                This website is provided for informational purposes. You agree to use it lawfully and
                not to engage in any activity that could harm, disable, or impair the site or interfere
                with other users.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">3. Intellectual Property</h2>
              <p className="mt-2">
                All content on this website, including text, images, logos, and design elements, is the
                property of Agrillano or its licensors and is protected by Australian and international
                intellectual property laws. Reproduction without permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">4. Accuracy of Information</h2>
              <p className="mt-2">
                While we strive to keep website content accurate and up to date, Agrillano does not
                warrant the completeness, reliability, or accuracy of any information on this site.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">5. Third-Party Links</h2>
              <p className="mt-2">
                Our website may contain links to external sites. Agrillano is not responsible for the
                content, accuracy, or practices of any third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">6. Limitation of Liability</h2>
              <p className="mt-2">
                To the fullest extent permitted by law, Agrillano shall not be liable for any indirect,
                incidental, or consequential damages arising from your use of or inability to use this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">7. Governing Law</h2>
              <p className="mt-2">
                These terms are governed by the laws of the Commonwealth of Australia and the State of
                Victoria. Any disputes will be subject to the exclusive jurisdiction of the courts of
                Victoria.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">8. Changes to Terms</h2>
              <p className="mt-2">
                Agrillano reserves the right to modify these terms at any time. Continued use of the
                website after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">9. Contact</h2>
              <p className="mt-2">
                For questions regarding these terms, please visit our contact page or email
                contact.au@agrillano.com.
              </p>
            </section>
          </div>
        </article>
        <SocialSection />
      </main>
      <SiteFooter />
    </>
  );
}
