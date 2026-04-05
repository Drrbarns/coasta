import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { createClient } from "@/lib/supabase/server";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Current Jobs at Agrillano",
  description:
    "Browse current Agrillano job openings across farming, packhouse, logistics, and corporate teams.",
  path: "/careers/current-jobs",
  image: "/gen-greenhouse.png",
});

type CurrentJob = {
  title: string;
  summary: string;
  type: string;
  closingDate: string;
  category: string;
  location?: string;
};

const jobCardFields: Array<{ label: string; key: keyof CurrentJob }> = [
  { label: "Job type", key: "type" },
  { label: "Closing date", key: "closingDate" },
  { label: "Category", key: "category" },
];

const fallbackJobs: CurrentJob[] = [
  {
    title: "Task Leader (Technical) - Glasshouse Operations",
    summary: "Lead technical greenhouse operations to support quality, yield, and team performance.",
    type: "Full time",
    closingDate: "Friday 1 May 2026",
    category: "Tomato",
  },
  {
    title: "Forklift Operator - Corindi",
    summary: "Move and stage produce safely while supporting harvest and dispatch operations.",
    type: "Casual / Seasonal",
    closingDate: "Thursday 16 April 2026",
    category: "Berries",
  },
  {
    title: "Casual Quality Control Officers (QCs) - Renmark, SA",
    summary: "Support quality checks and compliance processes across packhouse operations.",
    type: "Casual / Seasonal",
    closingDate: "Open until filled",
    category: "Citrus / Grapes",
  },
  {
    title: "Irrigation Maintenance Technician - Corindi",
    summary: "Maintain irrigation systems to ensure efficient water delivery and uptime.",
    type: "Casual / Seasonal",
    closingDate: "Friday 10 April 2026",
    category: "Berries",
  },
  {
    title: "Warehouse Operator - Pooraka",
    summary: "Coordinate receiving, storage, and outbound loads across warehouse operations.",
    type: "Casual / Seasonal",
    closingDate: "Immediate start available",
    category: "Operations",
  },
  {
    title: "Harvest Team Leader - Emerald",
    summary: "Supervise picking teams and maintain safety and quality standards during harvest.",
    type: "Full time",
    closingDate: "Monday 27 April 2026",
    category: "Citrus",
  },
];

async function getCurrentJobs() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("jobs")
    .select("title,summary,job_type,closing_date,category,location,is_published,display_order")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error || !data || data.length === 0) return fallbackJobs;
  return data.map((row) => ({
    title: row.title,
    summary: row.summary,
    type: row.job_type,
    closingDate: row.closing_date,
    category: row.category,
    location: row.location ?? undefined,
  })) as CurrentJob[];
}

export default async function CurrentJobsPage() {
  const currentJobs = await getCurrentJobs();

  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white">
        <section className="relative -mt-[4.5rem] mx-auto max-w-[1600px] overflow-hidden lg:-mt-[5rem]">
          <div className="relative min-h-[250px] md:min-h-[320px] lg:min-h-[420px]">
            <Image
              src="/social/social-6.png"
              alt="Agrillano team members in the field"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 py-10 md:px-8 lg:grid-cols-[240px_1fr] lg:gap-12 lg:px-10">
          <aside>
            <h2 className="font-[family-name:var(--font-inter)] text-[2rem] font-semibold leading-[1] text-[var(--header-bg)]">
              Job search
            </h2>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-1 block text-[0.92rem] text-[var(--header-bg)]">Category</span>
                <select className="h-10 w-full rounded-[3px] border border-[#c8d5d0] px-2.5 text-[0.92rem] text-[var(--header-bg)]">
                  <option>All</option>
                  <option>Agrillano</option>
                  <option>Tomato</option>
                  <option>Berries</option>
                  <option>Mushroom</option>
                  <option>Avocado</option>
                  <option>CF&amp;L</option>
                  <option>Citrus/Grapes</option>
                  <option>Banana</option>
                  <option>Test Agency 2022</option>
                  <option>PALM - SWP and PLS</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-[0.92rem] text-[var(--header-bg)]">Classification</span>
                <select className="h-10 w-full rounded-[3px] border border-[#c8d5d0] px-2.5 text-[0.92rem] text-[var(--header-bg)]">
                  <option>All</option>
                  <option>Administration</option>
                  <option>Agronomy / Horticulture / Growing</option>
                  <option>Finance</option>
                  <option>General Labouring / Farm hand</option>
                  <option>Human Resources</option>
                  <option>I.T</option>
                  <option>Legal</option>
                  <option>Logistics / Warehousing / Despatch</option>
                  <option>Machine Operators and Drivers</option>
                  <option>Maintenance / Trades / Irrigation</option>
                  <option>Management - Executive</option>
                  <option>Management - Regional / Site</option>
                  <option>Picking / Packing / Harvest</option>
                  <option>PR and Communications</option>
                  <option>Procurement</option>
                  <option>Quality Assurance / Quality Control / Food Technology</option>
                  <option>Research and Development</option>
                  <option>Safety and RTW</option>
                  <option>Sales and Marketing</option>
                  <option>Warehouse</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1 block text-[0.92rem] text-[var(--header-bg)]">Job type</span>
                <select className="h-10 w-full rounded-[3px] border border-[#c8d5d0] px-2.5 text-[0.92rem] text-[var(--header-bg)]">
                  <option>All</option>
                  <option>Full time</option>
                  <option>Part time</option>
                  <option>Casual / Seasonal</option>
                  <option>Contract / Temp</option>
                  <option>Graduate / Apprentice / Trainee</option>
                  <option>Other / Community</option>
                </select>
              </label>

              <button className="inline-flex h-10 items-center rounded-[4px] bg-[var(--header-bg)] px-4 text-[0.95rem] font-semibold text-white hover:opacity-95">
                Search
              </button>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[#d9e4df] pb-4">
              <div>
                <h1 className="font-[family-name:var(--font-inter)] text-[2.7rem] font-semibold leading-[1] text-[var(--header-bg)]">
                  Vacancies
                </h1>
                <p className="mt-2 text-[1rem] text-[var(--header-bg)]/85">{currentJobs.length} Vacancies</p>
              </div>
              <div className="text-[0.95rem] text-[var(--header-bg)]/75">Share to Facebook, LinkedIn, Twitter</div>
            </div>

            <div className="mb-6 inline-flex overflow-hidden rounded-[3px] border border-[#c8d5d0]">
              <button className="bg-[#2f80b8] px-4 py-2 text-[0.9rem] font-semibold text-white">1</button>
              <button className="border-l border-[#c8d5d0] bg-white px-4 py-2 text-[0.9rem] text-[var(--header-bg)]">
                2
              </button>
              <button className="border-l border-[#c8d5d0] bg-white px-4 py-2 text-[0.9rem] text-[var(--header-bg)]">
                &gt;
              </button>
            </div>

            <div className="space-y-4">
              {currentJobs.map((job) => (
                <article key={job.title} className="rounded-[3px] border border-[#bdd6e6] bg-[#eef8ff] px-4 py-4 md:px-5">
                  <h3 className="font-[family-name:var(--font-inter)] text-[2rem] font-semibold leading-[1.05] text-[var(--header-bg)]">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.35] text-[var(--header-bg)]/88">{job.summary}</p>

                  <dl className="mt-3 grid grid-cols-1 gap-y-1 text-[0.98rem] text-[var(--header-bg)] md:grid-cols-2">
                    {jobCardFields.map((field) => (
                      <div key={field.key}>
                        <dt className="inline font-semibold">{field.label}: </dt>
                        <dd className="inline">{job[field.key]}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <a
                        href={`mailto:careers@agrillano.com?subject=${encodeURIComponent(`Application: ${job.title}`)}&body=${encodeURIComponent(`Hi Agrillano Careers,\n\nI would like to apply for the position: ${job.title} (${job.category}).\n\nPlease find my details below:\n\n`)}`}
                        className="inline-flex h-10 items-center rounded-[4px] bg-[var(--header-bg)] px-4 text-[0.95rem] font-semibold text-white"
                      >
                        Apply now
                      </a>
                      <Link
                        href="/contact-us#life-at-costa"
                        className="inline-flex h-10 items-center rounded-[4px] bg-[var(--header-bg)] px-4 text-[0.95rem] font-semibold text-white"
                      >
                        More info
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

