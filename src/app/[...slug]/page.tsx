import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { mainNav, siteMeta } from "@/content/site";

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

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params;
  const path = "/" + slug.join("/");
  const title = routeLabelMap.get(path) ?? (slug[slug.length - 1]?.replace(/-/g, " ") ?? "Page");

  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[60vh] px-4 py-20 md:px-8">
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
              href="https://costagroup.com.au"
              className="text-[var(--color-primary)] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              costagroup.com.au
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
