import { careersFeaturedWorkSection } from "@/content/site";

const textureStyle = {
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

const bodyClass =
  "font-[family-name:var(--font-inter)] text-[1.05rem] leading-[1.45] text-[var(--header-bg)] md:text-[1.125rem] md:leading-[1.42]";

export function CareersFeaturedWorkSection() {
  return (
    <section id="featured" className="w-full px-5 py-20 md:px-8 md:py-28 lg:px-12" style={textureStyle}>
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 className="font-[family-name:var(--font-inter)] text-[2.5rem] font-bold leading-[1.08] tracking-tight text-[var(--header-bg)] md:text-[3.25rem] lg:text-[3.5rem]">
          {careersFeaturedWorkSection.heading}
        </h2>

        <div className="mt-10 space-y-6 md:mt-12 md:space-y-7">
          <p className={bodyClass}>{careersFeaturedWorkSection.paragraph1}</p>
          <p className={bodyClass}>{careersFeaturedWorkSection.paragraph2}</p>
          <p className={bodyClass}>{careersFeaturedWorkSection.paragraph3}</p>
        </div>
      </div>
    </section>
  );
}
