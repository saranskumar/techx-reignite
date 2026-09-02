import Image from "next/image";

import { Countdown } from "@/components/countdown";
import { event } from "@/lib/event";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh scroll-mt-0 items-end overflow-hidden bg-brown"
    >
      <Image
        src="/art/hero-neural.png"
        alt="A gigantic neural structure emerging from a misty landscape beneath a large amber sun"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-[62%_40%] sm:object-center"
      />
      <div className="haze absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-t from-brown via-brown/35 to-transparent" />

      <div className="page-pad relative z-10 w-full pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-28 sm:pb-14 md:pb-20">
        <p className="font-display kicker text-[10px] text-cream/80 uppercase sm:text-[11px]">
          {event.organizedBy} · {event.year}.09
        </p>
        <div className="mt-4 flex min-w-0 flex-col items-start gap-1 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-end sm:gap-x-4">
          <h1 className="font-display max-w-full text-[clamp(2.4rem,13vw,10.5rem)] leading-[0.86] font-extrabold tracking-[-0.06em] text-cream sm:tracking-[-0.05em]">
            REIGNITE
          </h1>
          <span className="font-jp text-lg text-amber sm:mb-3 sm:text-3xl">
            再燃
          </span>
        </div>
        <p className="font-editorial mt-5 max-w-xl text-[clamp(1.25rem,5.4vw,2.25rem)] leading-snug text-cream/95 italic sm:mt-8">
          {event.tagline}
        </p>
        <div className="mt-6 flex max-w-2xl flex-col gap-2 text-cream/80 sm:mt-10">
          <p className="font-display text-[11px] tracking-[0.14em] uppercase sm:text-xs sm:tracking-[0.2em]">
            {event.dateShort}
          </p>
          <p className="max-w-lg text-[0.95rem] leading-7 sm:text-lg">
            {event.locationShort} · Trivandrum
            <span className="mt-1 block text-cream/65">
              A global technical upskilling initiative bridging academic
              learning and industry readiness.
            </span>
          </p>
        </div>
        <Countdown />
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-12 sm:max-w-xl sm:flex-row sm:items-center">
          <a
            href="#register"
            className="btn-amber font-display inline-flex h-12 w-full items-center justify-center px-6 text-[11px] tracking-[0.22em] uppercase sm:w-auto sm:tracking-[0.28em]"
          >
            Register now
          </a>
          <a
            href="#about"
            className="font-display inline-flex h-12 w-full items-center justify-center gap-3 px-2 text-[11px] tracking-[0.22em] text-cream/80 uppercase transition-colors hover:text-amber sm:w-auto sm:tracking-[0.28em]"
          >
            <span className="hidden h-px w-10 bg-amber sm:block" />
            Explore TechX
          </a>
        </div>
      </div>
    </section>
  );
}
