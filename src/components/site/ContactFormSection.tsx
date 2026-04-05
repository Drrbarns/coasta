"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { contactFormSection } from "@/content/site";

const cellMin = "min-h-[min(30rem,75vw)] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem]";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = `${fd.get("firstName") ?? ""} ${fd.get("lastName") ?? ""}`.trim();
    const email = (fd.get("email") as string) ?? "";
    const phone = (fd.get("phone") as string) ?? "";
    const reason = (fd.get("reason") as string) ?? "";
    const message = (fd.get("message") as string) ?? "";

    const body = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${phone}`,
      reason && `Reason: ${reason}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = reason ? `Enquiry: ${reason}` : "Website Enquiry";
    window.location.href = `mailto:contact.au@agrillano.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="life-at-costa" className="grid w-full grid-cols-1 md:grid-cols-2" aria-label="Contact Form">
      <div className={`flex items-center justify-center bg-[#dcf2e3] px-8 py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 ${cellMin}`}>
        <div className="w-full max-w-[34rem]">
          <h2 className="mb-10 font-[family-name:var(--font-inter)] text-3xl font-bold leading-[1.1] tracking-tight text-[var(--header-bg)] md:text-4xl lg:text-[2.25rem]">
            <span className="block">{contactFormSection.headingLine1}</span>
            <span className="block">{contactFormSection.headingLine2}</span>
          </h2>

          {submitted ? (
            <div className="rounded-2xl bg-white/80 p-8 text-center">
              <p className="text-[1.3rem] font-semibold text-[var(--header-bg)]">
                Thank you for reaching out!
              </p>
              <p className="mt-3 text-[1rem] text-[var(--header-bg)]/80">
                Your email client should have opened with the enquiry details.
                If it didn&apos;t, you can email us directly at{" "}
                <a href="mailto:contact.au@agrillano.com" className="underline">
                  contact.au@agrillano.com
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full bg-[var(--header-bg)] px-6 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-[#00a651]"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="reason" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                  Reason for inquiry
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 text-sm font-semibold text-[var(--header-bg)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="rounded px-4 py-3 border border-gray-200 outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all"
                ></textarea>
              </div>

              <div className="flex flex-col pt-4">
                <button
                  type="submit"
                  className="rounded-full bg-[var(--header-bg)] px-8 py-4 text-center font-[family-name:var(--font-inter)] text-[1.1rem] font-medium text-white transition-colors hover:bg-[#00a651]"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className={`relative ${cellMin}`}>
        <Image
          src={contactFormSection.image}
          alt={contactFormSection.imageAlt}
          fill
          className="object-cover object-[50%_35%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
