import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const indexedRoutes = [
  "/",
  "/about-us",
  "/about-us/the-costa-story",
  "/about-us/brand-pillars",
  "/about-us/leadership",
  "/about-us/around-the-world",
  "/about-us/wholesale-distribution",
  "/produce",
  "/produce/avocados",
  "/produce/bananas",
  "/produce/berries",
  "/produce/berries-international",
  "/produce/citrus",
  "/produce/grapes",
  "/produce/mushrooms",
  "/produce/tomatoes",
  "/produce/potato",
  "/produce/grains",
  "/produce/animals",
  "/our-costa-way",
  "/our-costa-way/farmer-led-flavour-first",
  "/our-costa-way/proudly-grown-the-costa-way",
  "/our-costa-way/we-put-people-first",
  "/careers",
  "/careers/current-jobs",
  "/news",
  "/contact-us",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexedRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/produce" || route === "/about-us" ? 0.9 : 0.8,
  }));
}
