"use client";

import { useState } from "react";

import { pillars } from "@/lib/event";
import { cn } from "@/lib/utils";

export function Pillars() {
  const [mode, setMode] = useState<"TECH" | "TRAIN">("TECH");
  const items = pillars[mode];

  return (
    <section id="method" className="scroll-mt-24 bg-cream-2 text-brown">
      <div className="page-pad py-14 sm:py-20 md:py-28">
        <p className="font-display kicker text-[11px] text-amber uppercase">
          03 / Methodology
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] font-semibold tracking-tight">
          The dual pillars: Tech &amp; Train
        </h2>

        <div
          role="tablist"
          aria-label="Methodology pillars"
          className="mt-8 grid w-full grid-cols-2 border border-line bg-cream sm:inline-flex sm:w-auto"
        >
          {(["TECH", "TRAIN"] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              onClick={() => setMode(item)}
              className={cn(
                "font-display min-h-12 px-4 py-3 text-[11px] tracking-[0.22em] uppercase transition-colors sm:px-7 sm:tracking-[0.28em]",
                mode === item
                  ? "bg-amber text-cream"
                  : "text-brown-mid hover:text-brown"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid min-w-0 gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-lift flex min-w-0 flex-col border border-line bg-cream p-5 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-display text-[10px] tracking-[0.16em] text-amber uppercase sm:tracking-[0.22em]">
                  {item.tag}
                </p>
                <span className="font-display border border-line px-2 py-1 text-[9px] tracking-[0.16em] text-brown-soft uppercase">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-brown-mid sm:text-base">
                {item.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="font-display bg-cream-2 px-2 py-1 text-[10px] tracking-[0.14em] text-amber uppercase"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
