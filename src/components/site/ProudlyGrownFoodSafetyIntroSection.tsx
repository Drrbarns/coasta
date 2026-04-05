import { proudlyGrownFoodSafetyIntroSection } from "@/content/site";

export function ProudlyGrownFoodSafetyIntroSection() {
  return (
    <section className="w-full bg-[var(--header-bg)]">
      <div className="px-4 pb-10 pt-10 text-center md:px-8 md:pb-12 md:pt-12 lg:px-10 lg:pb-14 lg:pt-14">
        <h2 className="font-[family-name:var(--font-inter)] text-[3rem] font-bold leading-[0.94] tracking-tight text-white md:text-[4.1rem] lg:text-[5rem]">
          {proudlyGrownFoodSafetyIntroSection.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-[58rem] font-[family-name:var(--font-inter)] text-[1.28rem] text-white md:text-[1.7rem]">
          {proudlyGrownFoodSafetyIntroSection.strapline}
        </p>
      </div>
    </section>
  );
}
