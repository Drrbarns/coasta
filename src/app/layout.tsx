import type { Metadata } from "next";
import { DM_Sans, Inter, Montserrat, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { MotionEffects } from "@/components/site/MotionEffects";
import { siteMeta } from "@/content/site";
import { absoluteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} | Fresh Produce and Farming`,
    template: `%s | ${siteMeta.name}`,
  },
  description: siteMeta.description,
  applicationName: siteMeta.name,
  category: "Agriculture",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  keywords: [
    "Agrillano",
    "fresh produce",
    "Australian farming",
    "horticulture",
    "berries",
    "citrus",
    "grapes",
    "mushrooms",
    "tomatoes",
    "careers in agriculture",
  ],
  robots: {
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
    type: "website",
    locale: "en_AU",
    siteName: siteMeta.name,
    url: absoluteUrl("/"),
    title: `${siteMeta.name} | Fresh Produce and Farming`,
    description: siteMeta.description,
    images: [
      {
        url: absoluteUrl("/gen-farm-sunrise.png"),
        width: 1200,
        height: 630,
        alt: `${siteMeta.name} farms at sunrise`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMeta.name} | Fresh Produce and Farming`,
    description: siteMeta.description,
    images: [absoluteUrl("/gen-farm-sunrise.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${dmSans.variable} ${sourceSerif.variable} ${inter.variable} ${montserrat.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <MotionEffects />
        {children}
      </body>
    </html>
  );
}
