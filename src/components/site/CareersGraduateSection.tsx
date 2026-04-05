import Image from "next/image";
import Link from "next/link";
import { careersGraduateSection } from "@/content/site";

const paperTextureStyle = {
  backgroundColor: "#f7f4ec",
  backgroundImage: [
    'radial-gradient(circle at 18% 24%, rgba(203, 194, 171, 0.18) 0, rgba(203, 194, 171, 0) 34%)',
    'radial-gradient(circle at 78% 70%, rgba(214, 205, 183, 0.2) 0, rgba(214, 205, 183, 0) 30%)',
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' seed='7' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.085'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.09' stroke='%23d9d1be' stroke-width='0.7'%3E%3Cpath d='M0 18h240M0 54h240M0 93h240M0 131h240M0 169h240M0 206h240'/%3E%3C/g%3E%3C/svg%3E")`,
  ].join(", "),
  backgroundBlendMode: "normal, normal, multiply, overlay",
  backgroundSize: "auto, auto, 280px 280px, 240px 240px",
} as const;

export function CareersGraduateSection() {
  return (
    <section id="graduates" className="w-full px-0 pb-0 pt-6 md:pt-7" style={paperTextureStyle}>
      <div className="flex justify-center px-4 md:px-8">
        <Link
          href={careersGraduateSection.jobsCtaHref}
          className="inline-flex items-center rounded-full bg-[var(--header-bg)] px-8 py-2 font-[family-name:var(--font-inter)] text-[2rem] font-medium leading-none text-white transition hover:opacity-90 md:px-10 md:py-2.5 md:text-[2.15rem]"
        >
          {careersGraduateSection.jobsCtaLabel}
        </Link>
      </div>

      <div className="mt-7 grid w-full grid-cols-1 overflow-hidden md:mt-8 md:grid-cols-2">
        <div className="flex min-h-[min(28rem,78vw)] items-center justify-center rounded-tl-[3.25rem] bg-[#d5f6e8] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[34rem] text-center">
            <h2 className="font-[family-name:var(--font-inter)] text-[3.15rem] font-bold leading-[1.03] tracking-tight text-[var(--header-bg)] md:text-[3.9rem] lg:text-[4.2rem]">
              {careersGraduateSection.heading}
            </h2>
            <p className="mx-auto mt-8 max-w-[30rem] font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.2] text-[var(--header-bg)] md:text-[1.45rem] md:leading-[1.18]">
              {careersGraduateSection.body}
            </p>
            <Link
              href={careersGraduateSection.ctaHref}
              className="mt-10 inline-block rounded-full bg-[var(--header-bg)] px-8 py-3 font-[family-name:var(--font-inter)] text-[1.4rem] font-medium text-white transition hover:opacity-90"
            >
              {careersGraduateSection.ctaLabel}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
          <Image
            src={careersGraduateSection.image}
            alt={careersGraduateSection.imageAlt}
            fill
            className="object-cover object-[48%_38%]"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
