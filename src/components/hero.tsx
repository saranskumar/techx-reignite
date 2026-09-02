import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] scroll-mt-0 items-end overflow-hidden bg-brown"
    >
      <Image
        src="/art/hero-neural.png"
        alt="A gigantic neural structure emerging from a misty landscape beneath a large amber sun"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      <div className="haze absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-t from-brown/80 via-brown/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 md:px-10 md:pb-20">
        <p className="font-display mb-6 text-[11px] tracking-[0.42em] text-cream/80 uppercase">
          Amber Futurism · Vol. 01
        </p>
        <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
          <h1 className="font-display text-[18vw] leading-[0.8] font-extrabold tracking-[-0.04em] text-cream md:text-[11vw]">
            REIGNITE
          </h1>
          <span className="font-jp mb-2 text-xl text-amber md:mb-4 md:text-3xl">
            再燃
          </span>
        </div>
        <div className="mt-8 flex max-w-xl flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between md:max-w-none">
          <p className="font-editorial max-w-md text-2xl leading-snug text-cream/90 italic md:text-3xl">
            The future does not have to be cold.
          </p>
          <p className="font-display max-w-sm text-[11px] leading-relaxed tracking-[0.18em] text-cream/70 uppercase">
            Warm retro-futurist editorial art
            <br />
            TechX · 12–14 October 2027
          </p>
        </div>
        <a
          href="#manifesto"
          className="font-display mt-14 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] text-cream/80 uppercase transition-colors hover:text-amber"
        >
          <span className="block h-px w-10 bg-amber" />
          Enter the world
        </a>
      </div>
    </section>
  );
}
