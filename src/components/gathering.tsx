import Image from "next/image";

const facts = [
  { label: "When", value: "12–14 October 2027" },
  { label: "Where", value: "The Amber Pavilion" },
  { label: "Form", value: "Exhibition · Symposium · Atlas" },
  { label: "Access", value: "By invitation" },
];

export function Gathering() {
  return (
    <section id="gathering" className="bg-cream text-brown">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-12 md:gap-8 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
            The Gathering
          </p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Three days inside the atlas.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="font-editorial text-2xl leading-snug italic md:text-3xl">
            TechX REIGNITE is a closed gathering for architects, researchers,
            and builders who still believe the future can look like a painting.
          </p>
          <p className="mt-8 text-lg leading-8 text-brown-soft">
            Mornings in the pavilion. Afternoons walking the grounds. Evenings
            under a large orange body of light. The programme follows the atlas
            — neural systems, energy, robotics, genome, signal, celestial form —
            treated as one visual and intellectual world.
          </p>
        </div>

        <figure className="relative col-span-full mt-4 aspect-16/9 overflow-hidden bg-brown md:aspect-[21/9]">
          <Image
            src="/art/geometric-detail.png"
            alt="A quiet geometric courtyard of amber stone, water, and distant monumental towers"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </figure>

        <dl className="col-span-full grid gap-px bg-amber/30 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-cream px-0 py-8 sm:px-6">
              <dt className="font-display text-[11px] tracking-[0.28em] text-amber uppercase">
                {fact.label}
              </dt>
              <dd className="font-editorial mt-3 text-2xl italic">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
