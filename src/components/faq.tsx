import { event, faqs } from "@/lib/event";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream text-brown">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
              05 / FAQ
            </p>
            <h2 className="font-display mt-4 text-[clamp(1.85rem,5vw,3.75rem)] font-semibold tracking-tight">
              Questions
            </h2>
            <p className="mt-4 text-base leading-7 text-brown-soft">
              Need direct support?{" "}
              <a
                href={`mailto:${event.email}`}
                className="text-amber underline-offset-4 hover:underline"
              >
                {event.email}
              </a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-amber/30 border-y border-amber/30">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="font-display cursor-pointer list-none text-base tracking-wide sm:text-lg">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-amber group-open:hidden">+</span>
                      <span className="hidden text-amber group-open:inline">
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
      </div>
    </section>
  );
}
