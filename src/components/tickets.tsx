import { tickets } from "@/lib/event";

export function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-20 bg-brown text-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
          Delegate passes
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
          Tickets
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-cream/70">
          Pay via UPI to <span className="text-amber">ieeesctsb@oksbi</span>{" "}
          and include your name in the transfer remarks. Registration is open.
        </p>
        <ul className="mt-12 grid gap-px bg-amber/25 sm:grid-cols-3">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="bg-brown p-6 sm:p-8">
              <p className="font-display text-[11px] tracking-[0.22em] text-cream/55 uppercase">
                {ticket.note}
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold">
                {ticket.name}
              </h3>
              <p className="font-editorial mt-6 text-4xl italic text-amber sm:text-5xl">
                ₹{ticket.price}
              </p>
            </li>
          ))}
        </ul>
        <a
          href="#register"
          className="font-display mt-10 inline-flex h-12 items-center bg-amber px-6 text-[11px] tracking-[0.28em] text-cream uppercase"
        >
          Register now
        </a>
      </div>
    </section>
  );
}
