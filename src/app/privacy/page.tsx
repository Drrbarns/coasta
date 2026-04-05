import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SocialSection } from "@/components/site/SocialSection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read Agrillano's privacy policy covering data collection, use, and your rights under Australian privacy law.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        className="bg-white px-4 pt-[8rem] pb-20 md:px-8 md:pt-[10rem] lg:pt-[12rem] -mt-[4.5rem] lg:-mt-[5rem]"
      >
        <article className="mx-auto max-w-[820px] font-[family-name:var(--font-inter)] text-[var(--header-bg)]">
          <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-tight md:text-[3rem]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[1.05rem] leading-[1.5] text-[var(--header-bg)]/80">
            Effective date: 1 January 2026
          </p>

          <div className="mt-10 space-y-8 text-[1.02rem] leading-[1.6] text-[var(--header-bg)]/90">
            <section>
              <h2 className="text-[1.3rem] font-semibold">1. Information We Collect</h2>
              <p className="mt-2">
                We may collect personal information you voluntarily provide when you contact us, apply
                for a role, subscribe to updates, or use our website. This may include your name, email
                address, phone number, and any other information you choose to share.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">2. How We Use Your Information</h2>
              <p className="mt-2">
                We use the information we collect to respond to enquiries, process job applications,
                improve our services, send relevant communications (where you have opted in), and comply
                with legal obligations under Australian law.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">3. Sharing and Disclosure</h2>
              <p className="mt-2">
                We do not sell your personal information. We may share information with trusted service
                providers who assist our operations, or as required by law. Any third-party partners are
                bound by appropriate confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">4. Data Security</h2>
              <p className="mt-2">
                We take reasonable steps to protect personal information from misuse, loss,
                unauthorised access, modification, or disclosure. However, no method of electronic
                transmission or storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">5. Your Rights</h2>
              <p className="mt-2">
                Under the Australian Privacy Act 1988, you have the right to access and correct your
                personal information. To make a request, please contact us using the details on our
                contact page.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">6. Cookies and Analytics</h2>
              <p className="mt-2">
                Our website may use cookies and analytics tools to understand how visitors interact with
                our site. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">7. Changes to This Policy</h2>
              <p className="mt-2">
                We may update this policy from time to time. Any changes will be posted on this page
                with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-[1.3rem] font-semibold">8. Contact</h2>
              <p className="mt-2">
                If you have questions about this privacy policy or wish to make a complaint, please
                reach out via our contact page or email us at contact.au@agrillano.com.
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
