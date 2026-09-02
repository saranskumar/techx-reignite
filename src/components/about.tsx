import Image from "next/image";

import { event } from "@/lib/event";

const facts = [
  { label: "Date", value: event.dateRange },
  { label: "Location", value: event.locationShort },
  { label: "Format", value: event.format },
  { label: "Organized by", value: event.organizedByFull },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-cream text-brown"
    >
      <div className="page-pad grid min-w-0 gap-8 py-14 sm:gap-10 sm:py-20 md:grid-cols-12 md:py-28">
        <div className="min-w-0 md:col-span-5">
          <p className="font-display kicker text-[11px] text-amber uppercase">
            02 / About TechX
          </p>
          <h2 className="font-display mt-4 max-w-md text-[clamp(1.7rem,7vw,3.75rem)] leading-[1.08] font-semibold tracking-tight sm:mt-5">
            Bridging academic learning and industry readiness.
          </h2>
        </div>
        <div className="min-w-0 md:col-span-7 md:max-w-2xl md:justify-self-end">
          <p className="font-editorial text-xl leading-snug italic sm:text-2xl md:text-3xl">
            TechX REIGNITE is a premier technical upskilling initiative hosted
            by IEEE CS SCT SBC.
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-brown-soft sm:mt-8 sm:text-lg sm:leading-8">
            <p>
              It turns theoretical engineering fundamentals into battle-tested
              industry readiness: intensive hands-on coding sprints,
              interdisciplinary keynotes, placement communication tracks, and
              personalized 1-on-1 nano-mentoring.
            </p>
            <p>
              Backed by an official IEEE grant, TechX REIGNITE is an equitable
              launchpad for students across all engineering branches — not only
              computer science.
            </p>
          </div>
        </div>

        <dl className="col-span-full grid min-w-0 gap-6 border-y border-amber/30 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="min-w-0">
              <dt className="font-display text-[11px] tracking-[0.2em] text-amber uppercase sm:tracking-[0.28em]">
                {fact.label}
              </dt>
              <dd className="mt-2 text-base leading-7 break-words">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <figure className="relative aspect-3/4 min-w-0 overflow-hidden bg-brown sm:aspect-4/5 md:col-span-5 md:aspect-auto md:min-h-[28rem]">
          <Image
            src="/art/editorial-monument.png"
            alt="A solitary monumental tower in mist beneath a large amber sun"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={85}
            className="object-cover"
          />
        </figure>

        <aside className="flex min-w-0 flex-col justify-end md:col-span-7 md:pl-10 lg:pl-16">
          <p className="font-display text-[11px] tracking-[0.2em] text-amber uppercase sm:tracking-[0.28em]">
            Host chapter
          </p>
          <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            IEEE CS SCT Student Branch Chapter
          </h3>
          <p className="mt-5 text-base leading-8 text-brown-soft sm:text-lg">
            A student-led technical chapter at Sree Chitra Thirunal College of
            Engineering. Outstanding Student Branch Chapter Award in 2022. Best
            Student Branch Chapter of IEEE SCT SB in 2024. Six major technical
            milestones in 2026 alone.
          </p>
          <a
            href={event.links.chapter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display mt-8 inline-flex min-h-11 items-center text-[11px] tracking-[0.22em] text-amber uppercase sm:tracking-[0.28em]"
          >
            Explore chapter →
          </a>
        </aside>
      </div>
    </section>
  );
}
