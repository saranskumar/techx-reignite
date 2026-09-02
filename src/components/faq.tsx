import { event, faqs } from "@/lib/event";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream text-brown">
      <div className="page-pad grid min-w-0 gap-10 py-14 sm:py-20 md:py-28 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-4">
          <p className="font-display kicker text-[11px] text-amber uppercase">
            09 / FAQ
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,3.75rem)] font-semibold tracking-tight">
            Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-brown-soft">
            Need direct support?{" "}
            <a
              href={`mailto:${event.email}`}
              className="break-all text-amber underline-offset-4 hover:underline"
            >
              {event.email}
            </a>
          </p>
        </div>
        <div className="min-w-0 lg:col-span-8">
          <div className="divide-y divide-amber/30 border-y border-amber/30">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="font-display cursor-pointer list-none text-base tracking-wide sm:text-lg">
                  <span className="flex items-start justify-between gap-3">
                    <span className="min-w-0 flex-1 text-pretty">{item.q}</span>
                    <span className="mt-0.5 shrink-0 text-amber group-open:hidden">+</span>
                    <span className="mt-0.5 hidden shrink-0 text-amber group-open:inline">
                      −
                    </span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brown-soft sm:text-base sm:leading-8">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
