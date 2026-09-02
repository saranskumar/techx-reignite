"use client";

import { event, tickets } from "@/lib/event";
import { cn } from "@/lib/utils";

function choosePass(id: string) {
  window.dispatchEvent(new CustomEvent("techx-pass", { detail: id }));
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
}

export function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-24 bg-cream-2 text-brown">
      <div className="page-pad py-14 sm:py-20 md:py-28">
        <p className="font-display kicker text-[11px] text-amber uppercase">
          Delegate passes
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] font-semibold tracking-tight">
          Tickets
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-brown-mid">
          Registration is open. Select a pass to prefill the form, then pay via
          UPI to <span className="break-all text-amber">{event.upi}</span>.
        </p>
        <ul className="mt-10 grid min-w-0 gap-4 sm:mt-12 md:grid-cols-3">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="min-w-0">
              <button
                type="button"
                onClick={() => choosePass(ticket.id)}
                className={cn(
                  "card-lift flex h-full min-h-36 w-full min-w-0 flex-col border border-line bg-cream p-5 text-left sm:p-8"
                )}
              >
                <p className="font-display text-[11px] tracking-[0.18em] text-brown-soft uppercase sm:tracking-[0.22em]">
                  {ticket.note}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold">
                  {ticket.name}
                </h3>
                <p className="font-editorial mt-6 text-4xl italic text-amber sm:text-5xl">
                  ₹{ticket.price}
                </p>
                <span className="font-display mt-6 text-[11px] tracking-[0.2em] text-amber uppercase">
                  Select pass →
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
