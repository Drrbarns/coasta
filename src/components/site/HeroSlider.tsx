"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, homeHero } from "@/content/site";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroSlides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative -mt-[4.5rem] h-[64vh] min-h-[420px] w-full overflow-hidden sm:h-[68vh] sm:min-h-[470px] lg:-mt-[5rem] lg:h-[78vh]">
      {heroSlides.map((slide, idx) => {
        const motionClass = idx % 3 === 0 ? "hero-pan-a" : idx % 3 === 1 ? "hero-pan-b" : "hero-pan-c";
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1300ms] ${idx === activeIndex ? "opacity-100" : "opacity-0"}`}
            aria-hidden={idx !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className={`hero-kenburns object-cover object-center ${motionClass}`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </div>
        );
      })}

      <div className="absolute inset-0 z-10 flex items-end pb-20 sm:items-center sm:pb-0">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div className="max-w-3xl text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            <h1 className="font-display text-4xl leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl">
              {homeHero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/95 sm:mt-5 sm:text-lg md:text-xl">
              {homeHero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-8">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${idx === activeIndex ? "bg-white" : "bg-white/55 hover:bg-white/85"}`}
            aria-label={`Show slide ${idx + 1}`}
            aria-current={idx === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}
