import Image from "next/image";
import { contactDetailsSection } from "@/content/site";

const cellMin = "min-h-[min(30rem,75vw)] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[36rem]";

export function ContactDetailsSection() {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2" aria-label="Contact Details">
      <div className={`relative ${cellMin}`}>
        <Image
          src={contactDetailsSection.image}
          alt={contactDetailsSection.imageAlt}
          fill
          className="object-cover object-[50%_35%]"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      
      <div className={`flex flex-col justify-center bg-[var(--header-bg)] px-10 py-16 md:px-16 lg:px-24 ${cellMin}`}>
        <div className="w-full max-w-[28rem] text-white space-y-8">
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-inter)] text-xl font-bold md:text-2xl tracking-tight">
              {contactDetailsSection.businessSupportCentre.heading}
            </h3>
            {contactDetailsSection.businessSupportCentre.body.split("\\n").map((line, i) => (
              <p key={i} className="font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/90">
                {line}
              </p>
            ))}
          </div>
          
          <div>
            <h3 className="mb-3 font-[family-name:var(--font-inter)] text-xl font-bold md:text-2xl tracking-tight">
              {contactDetailsSection.postalAddress.heading}
            </h3>
            {contactDetailsSection.postalAddress.body.split("\\n").map((line, i) => (
              <p key={i} className="font-[family-name:var(--font-inter)] text-lg leading-relaxed text-white/90">
                {line}
              </p>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <p className="font-[family-name:var(--font-inter)] text-lg text-white">
              P: {contactDetailsSection.phone}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-lg text-white">
              E: <a href={`mailto:${contactDetailsSection.email}`} className="hover:underline hover:text-[#00a651] transition-colors">{contactDetailsSection.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
