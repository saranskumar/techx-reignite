import Image from "next/image";

import { tracks } from "@/lib/event";

export function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-20 bg-brown text-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
              04 / Dual pillars
            </p>
            <h2 className="font-display mt-4 text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
              Tech &amp; Train.
            </h2>
          </div>
          <p className="font-editorial max-w-md text-lg leading-8 text-cream/75 italic sm:text-xl">
            Hands-on labs and career tracks. Curriculum, modules, and mentor
            lineups will be published as registration opens per track.
          </p>
        </div>

        <div className="grid gap-px bg-amber/20 sm:grid-cols-2">
          {tracks.map((track) => (
            <article
              key={track.id}
              id={track.id}
              className="bg-brown"
            >
              <figure className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={track.image}
                  alt={track.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={85}
                  className="object-cover"
                />
              </figure>
              <div className="flex flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-[11px] tracking-[0.28em] text-amber uppercase">
                    {track.index} · {track.pillar}
                  </span>
                  <span className="font-display text-[10px] tracking-[0.2em] text-cream/50 uppercase">
                    {track.status}
                  </span>
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.22em] text-cream/55 uppercase">
                    {track.kicker}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-cream/75">
                    {track.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
