import Image from "next/image";

type Variety = {
  name: string;
  description: string;
  image: string;
};

type ProduceDetailTemplateProps = {
  heading: string;
  description: string;
  brandsHeading?: string;
  imageBand: {
    image: string;
    imageAlt: string;
  };
  primaryBrand: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  secondaryBrand: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  varieties: {
    heading: string;
    items: Variety[];
    brandCallout: string;
  };
  whereWeGrow: {
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  journey: {
    heading: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  hydroponic: {
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  ripeness: {
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
  };
  nutrient: {
    heading: string;
    body: string;
    image: string;
    imageAlt: string;
  };
};

const textureStyle = {
  backgroundColor: "#f7f4ec",
  backgroundImage: [
    'radial-gradient(circle at 20% 26%, rgba(204, 195, 173, 0.16) 0, rgba(204, 195, 173, 0) 34%)',
    'radial-gradient(circle at 78% 68%, rgba(214, 205, 183, 0.16) 0, rgba(214, 205, 183, 0) 30%)',
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 320 320' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' seed='9' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
  ].join(", "),
};

export function ProduceDetailTemplate(props: ProduceDetailTemplateProps) {
  return (
    <>
      <section className="relative min-h-[48vh] w-full overflow-hidden">
        <Image
          src={props.imageBand.image}
          alt={props.imageBand.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <section className="bg-[var(--header-bg)] px-4 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center text-white">
          <h2 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold tracking-tight md:text-6xl lg:text-[4.1rem]">
            {props.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-5xl font-[family-name:var(--font-inter)] text-[1.02rem] leading-[1.3] sm:text-[1.2rem]">
            {props.description}
          </p>
          <h3 className="mt-14 font-[family-name:var(--font-inter)] text-[2.2rem] font-bold tracking-tight md:text-6xl lg:text-[4.1rem]">
            {props.brandsHeading ?? "Our brands"}
          </h3>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#fcfaf5] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[34rem] text-center">
            <h3 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold md:text-5xl tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
              {props.primaryBrand.title}
            </h3>
            <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.08rem] sm:text-[1.18rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.45rem]">
              {props.primaryBrand.description}
            </p>
          </div>
        </div>
        <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
          <Image
            src={props.primaryBrand.image}
            alt={props.primaryBrand.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[min(28rem,78vw)] md:min-h-[34rem]">
          <Image
            src={props.secondaryBrand.image}
            alt={props.secondaryBrand.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="flex min-h-[min(28rem,78vw)] items-center justify-center bg-[#fcfaf5] px-6 py-16 md:min-h-[34rem] md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-[34rem] text-center">
            <h3 className="font-[family-name:var(--font-inter)] text-[2.2rem] font-bold md:text-5xl tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
              {props.secondaryBrand.title}
            </h3>
            <p className="mx-auto mt-8 max-w-xl font-[family-name:var(--font-inter)] text-[1.08rem] sm:text-[1.18rem] leading-[1.24] text-[var(--header-bg)] md:text-[1.45rem]">
              {props.secondaryBrand.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 py-14 md:px-8 md:py-20 lg:px-10" style={textureStyle}>
        <div className="mx-auto max-w-[1300px]">
          <h2 className="text-center font-[family-name:var(--font-inter)] text-[2.2rem] font-bold md:text-5xl tracking-tight text-[var(--header-bg)] md:text-6xl lg:text-[4rem]">
            {props.varieties.heading}
          </h2>
          <div className="grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 md:gap-20 md:px-16">
            {props.varieties.items.map((item, idx) => (
              <article key={`${item.name}-${idx}`} className="text-center">
                <div className="relative mx-auto h-[11.5rem] w-[11.5rem] overflow-hidden rounded-full bg-white md:h-[14rem] md:w-[14rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-6 md:p-7"
                    sizes="224px"
                  />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-inter)] text-[1.9rem] font-bold md:text-4xl text-[var(--header-bg)] md:text-5xl">
                  {item.name}
                </h3>
                <p className="mx-auto mt-5 max-w-md font-[family-name:var(--font-inter)] text-[1.15rem] leading-[1.3] text-[var(--header-bg)] md:text-[1.2rem]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center md:mt-16">
            <h3 className="font-[family-name:var(--font-inter)] text-[1.9rem] font-bold md:text-4xl leading-[1.05] tracking-tight text-[var(--header-bg)] md:text-5xl">
              {props.varieties.brandCallout}
            </h3>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-[var(--header-bg)] px-4 py-7 md:px-8 md:py-8 lg:px-10">
          <h2 className="text-center font-[family-name:var(--font-inter)] text-[2.2rem] font-bold md:text-5xl tracking-tight text-white md:text-6xl lg:text-[4rem]">
            {props.whereWeGrow.heading}
          </h2>
        </div>
        <div className="relative min-h-[22rem] w-full overflow-hidden md:min-h-[38rem]">
          <Image
            src={props.whereWeGrow.image}
            alt={props.whereWeGrow.imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex min-h-[22rem] items-end px-6 pb-8 md:min-h-[38rem] md:px-10 md:pb-12 lg:px-14 lg:pb-16">
            <p className="max-w-[36rem] font-[family-name:var(--font-inter)] text-[1.08rem] sm:text-[1.2rem] leading-[1.23] text-white md:text-[1.6rem]">
              {props.whereWeGrow.body}
            </p>
          </div>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="bg-[var(--header-bg)] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14">
          <h3 className="font-[family-name:var(--font-inter)] text-[1.9rem] font-bold tracking-tight md:text-5xl">
            {props.journey.heading}
          </h3>
          <h4 className="mt-6 font-[family-name:var(--font-inter)] text-[1.55rem] font-semibold md:text-4xl">
            {props.journey.title}
          </h4>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.35]">
            {props.journey.body}
          </p>
        </div>
        <div className="relative min-h-[24rem] md:min-h-[32rem]">
          <Image
            src={props.journey.image}
            alt={props.journey.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[22rem] md:min-h-[30rem]">
          <Image
            src={props.hydroponic.image}
            alt={props.hydroponic.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="bg-[#f5f8f2] px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <h3 className="font-[family-name:var(--font-inter)] text-[1.9rem] font-bold md:text-4xl tracking-tight text-[var(--header-bg)] md:text-5xl">
            {props.hydroponic.heading}
          </h3>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.35] text-[var(--header-bg)]">
            {props.hydroponic.body}
          </p>
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="bg-[#f5f8f2] px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <h3 className="font-[family-name:var(--font-inter)] text-[1.9rem] font-bold md:text-4xl tracking-tight text-[var(--header-bg)] md:text-5xl">
            {props.ripeness.heading}
          </h3>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.35] text-[var(--header-bg)]">
            {props.ripeness.body}
          </p>
        </div>
        <div className="relative min-h-[22rem] md:min-h-[30rem]">
          <Image
            src={props.ripeness.image}
            alt={props.ripeness.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[22rem] md:min-h-[30rem]">
          <Image
            src={props.nutrient.image}
            alt={props.nutrient.imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="bg-[#f5f8f2] px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <h3 className="font-[family-name:var(--font-inter)] text-[1.9rem] font-bold md:text-4xl tracking-tight text-[var(--header-bg)] md:text-5xl">
            {props.nutrient.heading}
          </h3>
          <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-[1.1rem] leading-[1.35] text-[var(--header-bg)]">
            {props.nutrient.body}
          </p>
        </div>
      </section>
    </>
  );
}
