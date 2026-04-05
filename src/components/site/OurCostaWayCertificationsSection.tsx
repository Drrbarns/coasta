import { ourCostaWayCertificationsSection } from "@/content/site";

const textureStyle = {
  backgroundColor: "#f7f4ec",
  backgroundImage: [
    'radial-gradient(circle at 20% 26%, rgba(204, 195, 173, 0.15) 0, rgba(204, 195, 173, 0) 34%)',
    'radial-gradient(circle at 78% 68%, rgba(214, 205, 183, 0.15) 0, rgba(214, 205, 183, 0) 30%)',
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' seed='11' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
  ].join(", "),
};

export function OurCostaWayCertificationsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24" style={textureStyle}>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center font-[family-name:var(--font-inter)] text-5xl font-bold tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
          {ourCostaWayCertificationsSection.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-4xl text-center font-[family-name:var(--font-inter)] text-[1.25rem] text-[var(--header-bg)] md:text-[1.45rem]">
          {ourCostaWayCertificationsSection.subtitle}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-10">
          <ul className="space-y-3">
            {ourCostaWayCertificationsSection.leftItems.map((item) => (
              <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.25rem]">
                <span className="mt-1.5 text-[0.8em]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {ourCostaWayCertificationsSection.rightItems.map((item) => (
              <li key={item} className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.25] text-[var(--header-bg)] md:text-[1.25rem]">
                <span className="mt-1.5 text-[0.8em]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 text-[#d7e9df] opacity-70 md:h-40 md:w-40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        aria-hidden
      >
        <circle cx="50" cy="50" r="30" />
        <path d="M28 18L22 8M50 10V0M72 18L78 8" />
      </svg>
    </section>
  );
}
