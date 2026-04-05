import Image from "next/image";
import { aboutHistorySection } from "@/content/site";

export function AboutHistorySection() {
  return (
    <section id="the-costa-story" className="grid min-h-0 w-full grid-cols-1 md:grid-cols-2" aria-label="Our History">
      {/* Text Content Area */}
      <div className="relative flex min-h-[min(28rem,70vw)] flex-col items-center justify-center overflow-hidden bg-[var(--header-bg)] px-6 py-16 md:min-h-[36rem] md:px-12 md:py-20 lg:px-20 lg:py-24">
        
        {/* Decorative background graphic (bottom-left) */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 md:w-80 md:h-80 text-[var(--intro-text)] opacity-80" aria-hidden="true">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="w-full h-full"
          >
            {/* Main Circle */}
            <circle cx="50" cy="50" r="30" />
            
            {/* Sun Rays */}
            <path d="M28,18 L22,8" />
            <path d="M50,10 L50,0" />
            <path d="M72,18 L78,8" />
            
            {/* Crop Lines Inside */}
            <path d="M26,55 Q50,40 74,55" />
            <path d="M32,68 Q50,55 68,68" />
            <path d="M40,81 Q50,72 60,81" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[500px] text-center font-[family-name:var(--font-inter)] text-base font-medium leading-relaxed text-white md:text-lg">
          {aboutHistorySection.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Image Area */}
      <div className="relative min-h-[min(28rem,70vw)] md:min-h-[36rem]">
        <Image
          src={aboutHistorySection.image}
          alt={aboutHistorySection.imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
