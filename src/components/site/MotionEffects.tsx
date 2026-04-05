"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const selectors = "main section, main article, footer section, footer article";
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selectors));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    nodes.forEach((node, index) => {
      const delayMs = Math.min(index * 70, 420);
      node.classList.add("reveal-on-scroll");
      node.style.setProperty("--reveal-delay", `${delayMs}ms`);

      if (index === 0) {
        node.classList.add("hero-load-in");
        const heroItems = Array.from(
          node.querySelectorAll<HTMLElement>("h1, h2, h3, p, a, button"),
        );
        heroItems.slice(0, 12).forEach((item, itemIndex) => {
          const itemDelayMs = 120 + itemIndex * 90;
          item.classList.add("hero-load-item");
          item.style.setProperty("--hero-item-delay", `${itemDelayMs}ms`);
        });
      }

      // Keep above-the-fold content instantly visible.
      if (index < 3) {
        node.classList.add("is-visible");
      } else {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
