"use client";

import { useEffect, useState } from "react";

const START = new Date("2026-09-13T09:00:00+05:30").getTime();

function parts(ms: number) {
  const clamped = Math.max(0, ms);
  const days = Math.floor(clamped / 86_400_000);
  const hours = Math.floor((clamped % 86_400_000) / 3_600_000);
  const minutes = Math.floor((clamped % 3_600_000) / 60_000);
  const seconds = Math.floor((clamped % 60_000) / 1_000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    const first = window.setTimeout(() => setNow(Date.now()), 0);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(first);
    };
  }, []);

  if (now === null) {
    return (
      <p className="font-display mt-8 text-[11px] tracking-[0.22em] text-cream/70 uppercase sm:mt-10">
        Pre-events open 13 September
      </p>
    );
  }

  const remain = START - now;
  if (remain <= 0) {
    return (
      <p className="font-display mt-8 text-[11px] tracking-[0.22em] text-amber uppercase sm:mt-10">
        The circuit is live
      </p>
    );
  }

  const time = parts(remain);

  return (
    <div
      className="mt-8 grid w-full max-w-md grid-cols-4 gap-1.5 sm:mt-10 sm:gap-3"
      aria-label="Countdown to pre-events"
    >
      {(
        [
          ["Days", time.days],
          ["Hrs", time.hours],
          ["Min", time.minutes],
          ["Sec", time.seconds],
        ] as const
      ).map(([label, value]) => (
        <div
          key={label}
          className="min-w-0 border border-cream/25 bg-ink/35 px-1.5 py-2 text-center backdrop-blur-sm sm:px-3"
        >
          <p className="font-display text-lg font-semibold tracking-tight text-cream tabular-nums sm:text-2xl">
            {String(value).padStart(2, "0")}
          </p>
          <p className="font-display text-[8px] tracking-[0.16em] text-cream/55 uppercase sm:text-[9px] sm:tracking-[0.2em]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}
