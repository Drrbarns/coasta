import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { mainNav, siteMeta } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string[] }> };

const scaffoldPaths = Array.from(
  new Set(
    mainNav.flatMap((item) => [item.href, ...(item.children?.map((child) => child.href) ?? [])]),
  ),
)
  .filter((href) => href !== "/" && href !== "/about-us")
  .map((href) => href.replace(/^\/+/, "").split("/"));

const routeLabelMap = new Map(
  mainNav.flatMap((item) => [
    [item.href, item.label] as const,
    ...((item.children ?? []).map((child) => [child.href, child.label] as const)),
  ]),
);

export function generateStaticParams() {
  return scaffoldPaths.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const label = routeLabelMap.get(path) ?? slug[slug.length - 1]?.replace(/-/g, " ") ?? "Page";
  const title = `${label} | ${siteMeta.name}`;

  return buildMetadata({
    title,
    description: `Temporary scaffold page for ${label}. Replace this page with final production content before indexing.`,
    path,
    noindex: true,
  });
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  if (path === "/produce/berries-international") {
    notFound();
  }
  const title = routeLabelMap.get(path) ?? (slug[slug.length - 1]?.replace(/-/g, " ") ?? "Page");

  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[60vh] px-4 pt-[8rem] pb-20 md:px-8 md:pt-[10rem] lg:pt-[12rem] -mt-[4.5rem] lg:-mt-[5rem]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
            {siteMeta.name}
          </p>
          <h1 className="font-display mt-4 text-3xl capitalize text-[var(--color-primary)] md:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-neutral-600">
            This page mirrors the structure of{" "}
            <a
              href="https://agrillano.com"
              className="text-[var(--color-primary)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agrillano.com
            </a>
            . Replace this template with your own content — route:{" "}
            <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm">{path}</code>
          </p>
          <Link
            href="/"
            className="mt-10 inline-block rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
