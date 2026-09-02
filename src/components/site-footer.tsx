import { CopyValue } from "@/components/copy-value";
import { event, partners } from "@/lib/event";

export function SiteFooter() {
  return (
    <footer className="bg-cream text-brown">
      <div
        className="page-pad py-14 sm:py-20 md:py-24"
        style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
      >
        <p className="font-display kicker text-[11px] text-amber uppercase">
          In collaboration with
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="min-w-0">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center border border-amber/25 px-3 py-4 text-center text-xs leading-5 break-words hover:border-amber"
              >
                {partner.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-amber/30 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-sm tracking-[0.28em] uppercase">
              TechX REIGNITE {event.year}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-brown-soft">
              {event.organizedByFull}
              <br />
              {event.location}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm md:col-span-3">
            <a href={`mailto:${event.email}`} className="break-all hover:text-amber">
              {event.email}
            </a>
            <span>
              UPI <CopyValue value={event.upi} />
            </span>
            <a href="#top" className="hover:text-amber">
              Back to top
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm md:col-span-4 md:items-end">
            <a
              href={event.links.chapter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber"
            >
              ieeesctsb.org
            </a>
            <a
              href={event.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber"
            >
              Instagram
            </a>
            <a
              href={event.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber"
            >
              LinkedIn
            </a>
            <a
              href={event.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber"
            >
              WhatsApp channel
            </a>
          </div>
        </div>
        <p className="font-display mt-10 text-[10px] tracking-[0.2em] text-brown-soft uppercase">
          © {event.year} IEEE TechX REIGNITE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
