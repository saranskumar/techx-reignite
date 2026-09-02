import { advantages } from "@/lib/event";

export function Advantage() {
  return (
    <section id="advantage" className="scroll-mt-20 bg-cream text-brown">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
          07 / Community
        </p>
        <h2 className="font-display mt-4 max-w-xl text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
          The TechX advantage
        </h2>
        <ul className="mt-12 grid gap-px bg-amber/30 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <li key={item.index} className="bg-cream p-6 sm:p-8">
              <p className="font-display text-[11px] tracking-[0.28em] text-amber">
                {item.index}
              </p>
              <h3 className="font-display mt-4 text-lg font-semibold tracking-tight sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brown-soft sm:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
