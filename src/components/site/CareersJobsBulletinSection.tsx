"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { careersJobsBulletinSection } from "@/content/site";

export function CareersJobsBulletinSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = `${fd.get("firstName") ?? ""} ${fd.get("lastName") ?? ""}`.trim();
    const email = (fd.get("email") as string) ?? "";
    const workRight = (fd.get("workRight") as string) ?? "";

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      workRight && `Right to work in Australia: ${workRight}`,
      "",
      "I would like to be added to the Agrillano jobs bulletin.",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:careers@agrillano.com?subject=${encodeURIComponent("Jobs Bulletin Subscription")}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="jobs" className="grid w-full grid-cols-1 md:grid-cols-2">
      <div className="bg-[#f2df83] px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
        <div className="mx-auto max-w-[34rem]">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.35rem] font-bold leading-[1.02] tracking-tight text-[var(--header-bg)] md:text-[3.05rem] lg:text-[3.2rem]">
            {careersJobsBulletinSection.heading}
          </h2>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-white/80 p-8 text-center">
              <p className="text-[1.3rem] font-semibold text-[var(--header-bg)]">
                Thanks for your interest!
              </p>
              <p className="mt-3 text-[1rem] text-[var(--header-bg)]/80">
                Your email client should have opened. If it didn&apos;t, email us at{" "}
                <a href="mailto:careers@agrillano.com" className="underline">
                  careers@agrillano.com
                </a>.
              </p>
              <Link
                href="/careers/current-jobs"
                className="mt-6 inline-block rounded-full bg-[var(--header-bg)] px-6 py-3 text-[0.95rem] font-medium text-white transition hover:opacity-90"
              >
                Browse current jobs
              </Link>
            </div>
          ) : (
            <form className="mt-8 space-y-4 md:mt-9 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="jobs-first-name"
                    className="mb-1.5 block font-[family-name:var(--font-inter)] text-[1.45rem] leading-none font-medium text-[var(--header-bg)]"
                  >
                    {careersJobsBulletinSection.fields.firstName}
                  </label>
                  <input
                    id="jobs-first-name"
                    name="firstName"
                    type="text"
                    required
                    className="h-11 w-full rounded-xl border border-[#c8d2cb] bg-white px-4 font-[family-name:var(--font-inter)] text-[1.2rem] text-[var(--header-bg)] outline-none placeholder:text-[#6e8f84] focus:ring-2 focus:ring-[var(--header-bg)]/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="jobs-last-name"
                    className="mb-1.5 block font-[family-name:var(--font-inter)] text-[1.45rem] leading-none font-medium text-[var(--header-bg)]"
                  >
                    {careersJobsBulletinSection.fields.lastName}
                  </label>
                  <input
                    id="jobs-last-name"
                    name="lastName"
                    type="text"
                    required
                    className="h-11 w-full rounded-xl border border-[#c8d2cb] bg-white px-4 font-[family-name:var(--font-inter)] text-[1.2rem] text-[var(--header-bg)] outline-none placeholder:text-[#6e8f84] focus:ring-2 focus:ring-[var(--header-bg)]/25"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="jobs-email"
                  className="mb-1.5 block font-[family-name:var(--font-inter)] text-[1.45rem] leading-none font-medium text-[var(--header-bg)]"
                >
                  {careersJobsBulletinSection.fields.email}
                </label>
                <input
                  id="jobs-email"
                  name="email"
                  type="email"
                  required
                  className="h-11 w-full rounded-xl border border-[#c8d2cb] bg-white px-4 font-[family-name:var(--font-inter)] text-[1.2rem] text-[var(--header-bg)] outline-none placeholder:text-[#6e8f84] focus:ring-2 focus:ring-[var(--header-bg)]/25"
                />
              </div>

              <div>
                <label
                  htmlFor="jobs-work-right"
                  className="mb-1.5 block font-[family-name:var(--font-inter)] text-[1.45rem] leading-none font-medium text-[var(--header-bg)]"
                >
                  {careersJobsBulletinSection.fields.workRight}
                </label>
                <div className="relative">
                  <select
                    id="jobs-work-right"
                    name="workRight"
                    defaultValue={careersJobsBulletinSection.fields.workRightDefault}
                    className="h-11 w-full appearance-none rounded-xl border border-[#c8d2cb] bg-white px-4 pr-12 font-[family-name:var(--font-inter)] text-[2rem] leading-none text-[var(--header-bg)] outline-none focus:ring-2 focus:ring-[var(--header-bg)]/25"
                  >
                    <option>{careersJobsBulletinSection.fields.workRightDefault}</option>
                    <option>No</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--header-bg)]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-[var(--header-bg)] px-8 py-2.5 font-[family-name:var(--font-inter)] text-[2rem] font-medium leading-none text-white transition hover:opacity-90"
                >
                  {careersJobsBulletinSection.fields.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="relative min-h-[min(24rem,72vw)] md:min-h-[32rem]">
        <Image
          src={careersJobsBulletinSection.image}
          alt={careersJobsBulletinSection.imageAlt}
          fill
          className="object-cover object-[54%_24%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
