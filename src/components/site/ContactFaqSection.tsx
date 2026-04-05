"use client";

import Link from "next/link";
import { useState } from "react";
import { contactFaqSection } from "@/content/site";

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const jobsLinkText = "Check out our current job listings";

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderAnswer = (answer: string) => {
    if (!answer.includes(jobsLinkText)) return answer;
    const [before, after] = answer.split(jobsLinkText);
    return (
      <>
        {before}
        <Link href="/careers/current-jobs" className="text-[var(--header-bg)] underline hover:opacity-80">
          {jobsLinkText}
        </Link>
        {after}
      </>
    );
  };

  return (
    <section 
      id="faq"
      className="bg-[#fcfaf5] px-6 py-16 md:py-24 lg:px-14 lg:py-32"
      aria-label="FAQ Section"
    >
      <div className="mx-auto max-w-[50rem]">
        <h2 className="mb-10 font-[family-name:var(--font-inter)] text-4xl leading-tight font-bold tracking-[-0.02em] text-[var(--header-bg)] md:text-5xl lg:text-[4rem]">
          {contactFaqSection.heading}
        </h2>

        <div className="flex flex-col">
          {contactFaqSection.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="border-b-[2px] border-[var(--header-bg)]"
              >
                <button
                  onClick={() => toggleOpen(i)}
                  className="flex w-full items-center justify-between py-6 text-left group transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-[family-name:var(--font-inter)] text-[1.35rem] font-bold leading-[1.3] text-[var(--header-bg)] group-hover:text-[#00a651] pr-8 transition-colors md:text-[1.5rem] lg:text-[1.75rem]">
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 text-[var(--header-bg)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-[family-name:var(--font-inter)] text-[#2f2f2f] text-lg font-medium leading-relaxed max-w-[45rem]">
                      {renderAnswer(item.answer)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
