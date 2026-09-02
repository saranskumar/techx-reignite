"use client";

import { event, tickets } from "@/lib/event";
import { cn } from "@/lib/utils";

function choosePass(id: string) {
  window.dispatchEvent(new CustomEvent("techx-pass", { detail: id }));
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
}

export function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-20 bg-cream-2 text-brown">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
          Delegate passes
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
          Tickets
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-brown-mid">
          Registration is open. Select a pass to prefill the form, then pay via
          UPI to <span className="text-amber">{event.upi}</span>.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {tickets.map((ticket) => (
            <li key={ticket.id}>
              <button
                type="button"
                onClick={() => choosePass(ticket.id)}
                className={cn(
                  "card-lift flex h-full w-full flex-col border border-line bg-cream p-6 text-left sm:p-8"
                )}
              >
                <p className="font-display text-[11px] tracking-[0.22em] text-brown-soft uppercase">
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
