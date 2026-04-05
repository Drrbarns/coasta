import type { Metadata } from "next";
import { siteMeta } from "@/content/site";

const FALLBACK_OG_IMAGE = "/agrillano-social.png";
const DEFAULT_KEYWORDS = [
  "Agrillano",
  "fresh produce",
  "Australian agriculture",
  "fruit and vegetables",
  "sustainable farming",
  "berries",
  "citrus",
  "grapes",
  "mushrooms",
  "tomatoes",
  "produce jobs",
  "agribusiness",
];

function trimTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

const BASE_URL = trimTrailingSlash(siteMeta.url);

export function absoluteUrl(path: string) {
  if (!path) return BASE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = FALLBACK_OG_IMAGE,
  type = "website",
  keywords = DEFAULT_KEYWORDS,
  noindex = false,
}: SeoInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialLogoUrl = absoluteUrl("/agrillano-social.png");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteMeta.name,
      locale: "en_AU",
      type,
      images: [
        {
          url: socialLogoUrl,
          width: 1200,
          height: 630,
          alt: `${siteMeta.name} logo`,
        },
        ...(imageUrl !== socialLogoUrl
          ? [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: title,
              },
            ]
          : []),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialLogoUrl],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: BASE_URL,
    logo: absoluteUrl("/site-icon.png"),
    description: siteMeta.description,
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.facebook.com/",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMeta.name,
    url: BASE_URL,
    description: siteMeta.description,
    inLanguage: "en-AU",
  };
}
