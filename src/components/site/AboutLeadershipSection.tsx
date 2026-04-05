import Image from "next/image";
import { aboutLeadershipSection } from "@/content/site";

export function AboutLeadershipSection() {
  return (
    <section id="leadership" className="w-full bg-[#c6e3d6] px-4 py-14 md:px-8 md:py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-[var(--header-bg)] md:text-5xl lg:text-[3.5rem]">
            {aboutLeadershipSection.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-4xl font-[family-name:var(--font-inter)] text-[1.12rem] font-semibold leading-relaxed text-[var(--header-bg)] md:text-[1.2rem]">
            {aboutLeadershipSection.subtitle}
          </p>
        </div>

        <div className="relative mt-12 md:mt-14">
          <button
            type="button"
            aria-label="Previous leaders"
            className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 text-[var(--header-bg)] md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next leaders"
            className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 text-[var(--header-bg)] md:block"
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12 md:px-12">
            {aboutLeadershipSection.members.map((member) => (
              <article key={member.name}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-br-[2rem] bg-white shadow-sm">
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 767px) 80vw, 22vw" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-inter)] text-[1.75rem] font-bold leading-tight text-[var(--header-bg)]">
                  {member.name}
                </h3>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-[1.45rem] leading-tight text-[var(--header-bg)]">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
