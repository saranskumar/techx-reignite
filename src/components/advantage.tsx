import { advantages } from "@/lib/event";

export function Advantage() {
  return (
    <section id="advantage" className="scroll-mt-24 bg-cream text-brown">
      <div className="page-pad py-14 sm:py-20 md:py-28">
        <p className="font-display kicker text-[11px] text-amber uppercase">
          07 / Community
        </p>
        <h2 className="font-display mt-4 max-w-xl text-[clamp(1.7rem,7vw,3.75rem)] font-semibold tracking-tight">
          The TechX advantage
        </h2>
        <ul className="mt-10 grid gap-px bg-amber/30 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <li key={item.index} className="min-w-0 bg-cream p-5 sm:p-8">
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
