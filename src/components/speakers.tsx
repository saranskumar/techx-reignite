"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { speakers } from "@/lib/event";

export function Speakers() {
  const [openName, setOpenName] = useState<string | null>(null);
  const open = speakers.find((person) => person.name === openName) ?? null;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenName(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="speakers" className="scroll-mt-20 bg-cream text-brown">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
          03 / People
        </p>
        <h2 className="font-display mt-4 max-w-xl text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
          Speakers &amp; mentors
        </h2>
        <p className="mt-4 max-w-lg text-base text-brown-soft">
          Portraits replace these placeholders as confirmations land. Tap a card
          for the bio.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((person) => (
            <button
              key={person.name}
              type="button"
              onClick={() => setOpenName(person.name)}
              className="card-lift border border-line bg-cream p-6 text-left sm:p-8"
            >
              <div className="aspect-4/5 bg-cream-3" aria-hidden />
              <h3 className="font-display mt-5 text-xl font-semibold">
                {person.name}
              </h3>
              <p className="mt-2 text-sm text-amber">{person.role}</p>
              <p className="mt-1 text-sm text-brown-soft">
                {person.organization}
              </p>
              <p className="font-display mt-5 text-[11px] tracking-[0.2em] text-amber uppercase">
                Read bio →
              </p>
            </button>
          ))}
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-end bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-title"
          onClick={() => setOpenName(null)}
        >
          <div
            className="w-full border border-line bg-cream p-6 sm:mx-auto sm:max-w-lg sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-[10px] tracking-[0.28em] text-amber uppercase">
                  {open.role}
                </p>
                <h3 id="speaker-title" className="font-display mt-2 text-2xl font-semibold">
                  {open.name}
                </h3>
                <p className="mt-1 text-sm text-brown-soft">{open.organization}</p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpenName(null)}
                className="p-2 text-brown-soft hover:text-brown"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="mt-6 leading-8 text-brown-mid">{open.about}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
