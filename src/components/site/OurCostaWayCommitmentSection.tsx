import { ourCostaWayCommitmentSection } from "@/content/site";

export function OurCostaWayCommitmentSection() {
  return (
    <section id="commitment" className="relative overflow-hidden bg-white px-4 pb-6 pt-14 md:px-8 md:pb-8 md:pt-20 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mx-auto max-w-[44rem] font-[family-name:var(--font-inter)] text-[1.06rem] font-bold leading-[1.08] text-[var(--header-bg)] md:text-[1.75rem] lg:text-[2.15rem]">
          {ourCostaWayCommitmentSection.intro}
        </p>
        <p className="mx-auto mt-8 max-w-[36rem] font-[family-name:var(--font-inter)] text-[1.06rem] font-bold leading-[1.08] text-[var(--header-bg)] md:mt-9 md:text-[1.75rem] lg:text-[2.15rem]">
          {ourCostaWayCommitmentSection.outro}
        </p>
      </div>
    </section>
  );
}
