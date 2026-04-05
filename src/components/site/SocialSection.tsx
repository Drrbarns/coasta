import Image from "next/image";
import { socialPosts } from "@/content/site";

export function SocialSection() {
  return (
    <section className="w-full bg-[var(--social-bg)] pt-0">
      <div className="px-4 pb-7 pt-5 md:px-8 md:pb-8 md:pt-6 lg:px-10">
        <h2 className="mx-auto max-w-[64rem] text-center font-[family-name:var(--font-inter)] text-[2.2rem] font-medium leading-[1.04] text-[var(--header-bg)] md:text-[3rem]">
          Get a taste of what we&apos;re growing – follow us for fresh updates
          from our farms.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 pb-0 sm:grid-cols-3 md:grid-cols-5 md:gap-3 md:px-8 lg:px-10">
        {socialPosts.map((post, i) => (
          <a
            key={i}
            href={post.href ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square w-full overflow-hidden"
            aria-label={`Open social post ${i + 1}`}
          >
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
