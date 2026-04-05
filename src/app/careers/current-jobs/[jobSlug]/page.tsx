import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { buildMetadata } from "@/lib/seo";
import { getCurrentJobs, getJobSlug } from "@/lib/jobs";

type Props = {
  params: Promise<{ jobSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { jobSlug } = await params;
  const jobs = await getCurrentJobs();
  const job = jobs.find((entry) => getJobSlug(entry) === jobSlug);

  if (!job) {
    return buildMetadata({
      title: "Job Not Found",
      description: "This Agrillano job listing is no longer available.",
      path: `/careers/current-jobs/${jobSlug}`,
      noindex: true,
    });
  }

  return buildMetadata({
    title: `${job.title} | Current Jobs`,
    description: job.summary,
    path: `/careers/current-jobs/${jobSlug}`,
    image: "/gen-greenhouse.webp",
  });
}

export default async function JobDetailPage({ params }: Props) {
  const { jobSlug } = await params;
  const jobs = await getCurrentJobs();
  const job = jobs.find((entry) => getJobSlug(entry) === jobSlug);

  if (!job) notFound();

  const applyHref =
    job.applyUrl ||
    `mailto:careers@agrillano.com?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(`Hi Agrillano Careers,\n\nI would like to apply for the position: ${job.title} (${job.category}).\n\nPlease find my details below:\n\n`)}`;

  const infoHref = job.infoUrl || "/contact-us#life-at-costa";

  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-32 md:px-8 lg:px-10 lg:pt-36">
          <Link
            href="/careers/current-jobs"
            className="inline-flex items-center text-[0.95rem] font-semibold text-[var(--header-bg)] hover:underline"
          >
            ← Back to vacancies
          </Link>

          <article className="mt-6 rounded-2xl border border-[#d5e4de] bg-[#f5fbf8] p-6 md:p-8">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-[0.8rem] font-semibold uppercase tracking-wide text-[var(--header-bg)]">
              {job.category}
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-inter)] text-[2.1rem] font-bold leading-[1.05] text-[var(--header-bg)] md:text-[2.7rem]">
              {job.title}
            </h1>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--header-bg)]/85">{job.summary}</p>

            <dl className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-[#c9d9d2] bg-white p-4 md:grid-cols-2">
              <div>
                <dt className="text-[0.82rem] font-semibold uppercase tracking-wide text-[var(--header-bg)]/65">
                  Job type
                </dt>
                <dd className="mt-1 text-[1rem] font-medium text-[var(--header-bg)]">{job.type}</dd>
              </div>
              <div>
                <dt className="text-[0.82rem] font-semibold uppercase tracking-wide text-[var(--header-bg)]/65">
                  Closing date
                </dt>
                <dd className="mt-1 text-[1rem] font-medium text-[var(--header-bg)]">{job.closingDate}</dd>
              </div>
              <div>
                <dt className="text-[0.82rem] font-semibold uppercase tracking-wide text-[var(--header-bg)]/65">
                  Category
                </dt>
                <dd className="mt-1 text-[1rem] font-medium text-[var(--header-bg)]">{job.category}</dd>
              </div>
              {job.location && (
                <div>
                  <dt className="text-[0.82rem] font-semibold uppercase tracking-wide text-[var(--header-bg)]/65">
                    Location
                  </dt>
                  <dd className="mt-1 text-[1rem] font-medium text-[var(--header-bg)]">{job.location}</dd>
                </div>
              )}
            </dl>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={applyHref}
                className="inline-flex h-11 items-center rounded-[6px] bg-[var(--header-bg)] px-5 text-[0.98rem] font-semibold text-white hover:opacity-95"
              >
                Apply now
              </a>
              <Link
                href={infoHref}
                className="inline-flex h-11 items-center rounded-[6px] border border-[var(--header-bg)] px-5 text-[0.98rem] font-semibold text-[var(--header-bg)] hover:bg-[var(--header-bg)] hover:text-white"
              >
                More info
              </Link>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

