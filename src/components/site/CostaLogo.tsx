import Link from "next/link";
import Image from "next/image";

/** Original Agrillano wordmark reference image. */
export function CostaLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex outline-offset-4 ${className}`}
      aria-label="Agrillano home"
    >
      <Image
        src="/agrillano_logo_header@2x.png"
        alt="Agrillano"
        width={1472}
        height={1040}
        className="h-[48px] w-auto md:h-[64px]"
        priority
      />
    </Link>
  );
}
