import { aboutValuesSection } from "@/content/site";

const textureStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
};

function IconPassion({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Heart */}
      <path d="M32 54C32 54 12 40 12 24C12 15 19 10 26 10C30 10 32 14 32 14C32 14 34 10 38 10C45 10 52 15 52 24C52 40 32 54 32 54Z" />
      {/* Hand inside/overlapping */}
      <path d="M26 40C26 40 22 34 22 30C22 28 24 26 26 26C28 26 28 30 28 30M28 30V24C28 22 30 20 32 20C34 20 34 24 34 24M34 26V20C34 18 36 16 38 16C40 16 40 20 40 20M40 28V24C40 22 42 20 44 20C46 20 46 24 46 24V36C46 44 38 50 32 50C26 50 26 40 26 40Z" fill="#fbfaf5" />
    </svg>
  );
}

function IconDetermination({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Stairs */}
      <path d="M12 52H24V40H36V28H48V16" />
      {/* Person */}
      <circle cx="22" cy="18" r="4" />
      <path d="M22 22V32M22 24L16 28M22 24L28 28M22 32L18 40M22 32L26 36L28 40" />
      {/* Flag */}
      <path d="M48 16V4M48 4L58 9L48 14" />
    </svg>
  );
}

function IconRespect({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Handshake approximation */}
      <path d="M10 32H20L30 42L40 32H54" />
      <path d="M26 38L32 32L38 38" />
      <path d="M30 42L34 46L40 40" />
      <path d="M10 24H54" />
    </svg>
  );
}

function IconSincerity({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Hands */}
      <path d="M14 44C14 44 22 52 32 52C42 52 50 44 50 44M14 44L10 38C10 38 18 36 24 40M50 44L54 38C54 38 46 36 40 40" />
      {/* Heart */}
      <path d="M32 36C32 36 20 28 20 18C20 12 24 8 28 8C30.5 8 32 10 32 10C32 10 33.5 8 36 8C40 8 44 12 44 18C44 28 32 36 32 36Z" />
    </svg>
  );
}

function IconAccountability({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Checklist */}
      <path d="M16 10H42V54H16V10Z" />
      <path d="M22 20H36M22 28H36M22 36H30" />
      <path d="M18 20L20 22L24 16" />
      <path d="M18 28L20 30L24 24" />
      <path d="M18 36L20 38L24 32" />
      {/* Magnifying Glass */}
      <circle cx="46" cy="42" r="8" fill="#fbfaf5" />
      <path d="M52 48L60 56" />
    </svg>
  );
}

const ICONS: Record<string, React.ElementType> = {
  passion: IconPassion,
  determination: IconDetermination,
  respect: IconRespect,
  sincerity: IconSincerity,
  accountability: IconAccountability,
};

export function AboutValuesSection() {
  return (
    <section id="brand-pillars" 
      className="relative w-full bg-[#fcfbf7] px-4 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32"
      style={textureStyle}
      aria-labelledby="values-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="values-heading"
            className="font-[family-name:var(--font-inter)] text-4xl font-bold tracking-tight text-[var(--header-bg)] md:text-5xl lg:text-[3.5rem]"
          >
            {aboutValuesSection.heading}
          </h2>
          <p className="mt-6 md:mt-8 font-[family-name:var(--font-inter)] text-sm md:text-[1.0625rem] leading-relaxed text-[var(--header-bg)] font-medium">
            {aboutValuesSection.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-5 lg:gap-x-8">
          {aboutValuesSection.values.map((item, i) => {
            const IconComponent = ICONS[item.icon];
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 md:mb-8 text-[var(--header-bg)]">
                  {IconComponent && <IconComponent className="h-16 w-16 md:h-20 md:w-20" />}
                </div>
                <h3 className="font-[family-name:var(--font-inter)] text-xl md:text-[1.35rem] font-bold text-[var(--header-bg)] mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm md:text-[0.9375rem] leading-relaxed text-[var(--header-bg)] max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
