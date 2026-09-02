"use client";

import { useState } from "react";

import { speakers } from "@/lib/event";
import { cn } from "@/lib/utils";

export function Speakers() {
  const [open, setOpen] = useState<string | null>(null);

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
          Line-up portraits will replace these placeholders as confirmations
          land.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((person) => {
            const selected = open === person.name;
            return (
              <article
                key={person.name}
                className="border border-amber/30"
              >
                <button
                  type="button"
                  className="w-full p-6 text-left sm:p-8"
                  aria-expanded={selected}
                  onClick={() =>
                    setOpen(selected ? null : person.name)
                  }
                >
                  <div className="aspect-4/5 bg-brown/10" aria-hidden />
                  <h3 className="font-display mt-5 text-xl font-semibold">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm text-amber">{person.role}</p>
                  <p className="mt-1 text-sm text-brown-soft">
                    {person.organization}
                  </p>
                  <p
                    className={cn(
                      "mt-4 text-sm leading-7 text-brown-soft",
                      selected ? "block" : "hidden sm:block"
                    )}
                  >
                    {person.about}
                  </p>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
