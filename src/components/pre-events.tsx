"use client";

import { useState } from "react";

import { preEvents } from "@/lib/event";
import { cn } from "@/lib/utils";

export function PreEvents() {
  const [active, setActive] = useState<string>(preEvents[0].date);
  const current = preEvents.find((item) => item.date === active) ?? preEvents[0];

  return (
    <section id="journey" className="scroll-mt-20 bg-cream text-brown">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
          05 / Event journey
        </p>
        <h2 className="font-display mt-4 max-w-xl text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
          Pre-events circuit
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-brown-soft sm:text-lg">
          Six online sessions, 13–19 September. Then the campus summit.
        </p>

        <div
          role="tablist"
          aria-label="Pre-event dates"
          className="relative mt-10"
        >
          <div className="pointer-events-none absolute top-6 right-4 left-4 hidden h-px bg-line sm:block" />
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {preEvents.map((item) => {
            const selected = item.date === active;
            return (
              <button
                key={item.date}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(item.date)}
                className={cn(
                  "font-display relative z-[1] shrink-0 border px-4 py-3 text-[11px] tracking-[0.18em] uppercase transition-colors",
                  selected
                    ? "border-amber bg-amber text-cream"
                    : "border-line bg-cream text-brown hover:border-amber"
                )}
              >
                {item.short}
              </button>
            );
          })}
          </div>
        </div>

        <article className="mt-8 border border-line bg-cream p-5 transition-all sm:p-8 md:p-10">
          <p className="font-display text-[11px] tracking-[0.28em] text-amber uppercase">
            {current.date} · {current.organizer}
          </p>
          <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
            {current.title}
          </h3>
          <p className="mt-3 text-sm text-brown-soft">{current.venue}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 sm:text-lg">
            {current.description}
          </p>
          {current.requirements ? (
            <p className="mt-6 text-sm text-brown-soft">
              Requirement: {current.requirements}
            </p>
          ) : null}
        </article>
      </div>
    </section>
  );
}
