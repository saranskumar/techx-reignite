"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { tracks } from "@/lib/event";

export function Tracks() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = tracks.find((item) => item.id === openId) ?? null;

  return (
    <section id="tracks" className="scroll-mt-24 bg-ink text-cream">
      <div className="page-pad py-14 sm:py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="font-display kicker text-[11px] text-amber uppercase">
              04 / Tracks showcase
            </p>
            <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] font-semibold tracking-tight">
              Explore the upcoming tracks
            </h2>
          </div>
          <p className="font-editorial max-w-md text-lg leading-8 text-cream/75 italic sm:text-xl">
            Curriculum, modules, and mentor lineups will be revealed as each
            track opens for registration.
          </p>
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2">
          {tracks.map((track) => (
            <button
              key={track.id}
              type="button"
              id={track.id}
              onClick={() => setOpenId(track.id)}
              className="card-lift group min-w-0 overflow-hidden border border-white/10 bg-ink text-left"
            >
              <figure className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={track.image}
                  alt={track.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="font-display absolute top-3 right-3 bg-amber px-2 py-1 text-[9px] tracking-[0.18em] text-cream uppercase">
                  {track.status}
                </span>
              </figure>
              <div className="flex flex-col gap-4 px-4 py-6 sm:px-7 sm:py-7">
                <span className="font-display text-[11px] tracking-[0.2em] text-amber uppercase sm:tracking-[0.28em]">
                  {track.index} · {track.pillar}
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {track.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-7 text-cream/70 sm:text-base">
                  {track.body}
                </p>
                <span className="font-display text-[11px] tracking-[0.22em] text-amber uppercase">
                  Explore track details →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="track-modal-title"
          onClick={() => setOpenId(null)}
        >
          <div
            className="max-h-[88svh] w-full overflow-y-auto border border-line bg-cream text-brown sm:mx-auto sm:max-w-xl"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-4 py-4 sm:px-8">
              <div className="min-w-0">
                <p className="font-display text-[10px] tracking-[0.2em] text-amber uppercase sm:tracking-[0.28em]">
                  {open.pillar} · {open.status}
                </p>
                <h3
                  id="track-modal-title"
                  className="font-display mt-2 text-xl font-semibold sm:text-2xl"
                >
                  {open.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpenId(null)}
                className="flex size-11 shrink-0 items-center justify-center text-brown-soft hover:text-brown"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="px-4 py-6 sm:px-8">
              <p className="leading-8 text-brown-mid">{open.body}</p>
              <p className="mt-5 text-sm text-brown-soft">
                The complete curriculum, workshop modules, and mentor lineups
                for this track will be revealed soon. Stay tuned for syllabus
                updates and track registration announcements.
              </p>
              <p className="font-display mt-6 text-[11px] tracking-[0.2em] text-amber uppercase">
                Registration for this track is currently closed.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
