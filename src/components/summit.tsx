"use client";

import { useState } from "react";
import Image from "next/image";

import { summitDays } from "@/lib/event";
import { cn } from "@/lib/utils";

export function Summit() {
  const [dayId, setDayId] = useState<string>(summitDays[0].id);
  const day = summitDays.find((item) => item.id === dayId) ?? summitDays[0];

  return (
    <section id="summit" className="scroll-mt-24 bg-brown text-cream">
      <div className="page-pad py-14 sm:py-20 md:py-28">
        <div className="grid min-w-0 gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <p className="font-display kicker text-[11px] text-amber uppercase">
              06 / Main event
            </p>
            <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] leading-[1.08] font-semibold tracking-tight">
              The flagship summit
            </h2>
            <p className="font-editorial mt-5 text-xl italic text-cream/80 sm:text-2xl">
              26–27 September 2026 · SCTCE, Trivandrum
            </p>
            <figure className="relative mt-8 hidden aspect-4/5 overflow-hidden lg:block">
              <Image
                src="/art/celestial-pavilion.png"
                alt="A stacked geometric pavilion on still water beneath an enormous amber sun"
                fill
                sizes="40vw"
                quality={85}
                className="object-cover"
              />
            </figure>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div role="tablist" className="flex border border-amber/30">
              {summitDays.map((item) => {
                const selected = item.id === dayId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setDayId(item.id)}
                    className={cn(
                      "font-display flex min-h-14 min-w-0 flex-1 flex-col items-center justify-center px-2 py-3 text-center uppercase sm:flex-row sm:gap-2 sm:px-3 sm:py-4",
                      selected
                        ? "bg-amber text-cream"
                        : "bg-transparent text-cream/70 hover:text-cream"
                    )}
                  >
                    <span className="text-[11px] tracking-[0.16em] sm:text-[11px] sm:tracking-[0.2em]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 text-[10px] tracking-[0.08em] text-current/80 sm:mt-0 sm:text-[11px] sm:tracking-[0.16em]">
                      {item.date}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="font-display mt-6 text-[11px] tracking-[0.2em] text-amber uppercase sm:tracking-[0.28em]">
              {day.kicker}
            </p>
            <ol className="mt-4 divide-y divide-amber/20">
              {day.items.map((item) => (
                <li
                  key={`${item.time}-${item.title}`}
                  className="grid min-w-0 gap-2 py-5 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
                >
                  <div className="min-w-0">
                    <p className="font-display text-[11px] tracking-wide text-amber">
                      {item.time}
                    </p>
                    {item.place ? (
                      <p className="mt-1 text-xs tracking-[0.12em] text-cream/45 uppercase">
                        {item.place}
                      </p>
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
                    {item.body ? (
                      <p className="mt-2 text-sm leading-7 text-cream/70 sm:text-base">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
