import Image from "next/image";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative scroll-mt-20 overflow-hidden bg-cream text-brown"
    >
      <div className="mx-auto grid max-w-[1440px] items-end gap-12 px-5 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-36">
        <div className="md:col-span-5">
          <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
            Manifesto
          </p>
          <h2 className="font-display mt-6 max-w-sm text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            One designed world.
          </h2>
          <p className="font-jp mt-4 text-lg text-amber">琥珀未来</p>
        </div>

        <div className="md:col-span-7 md:max-w-2xl md:justify-self-end">
          <p className="font-editorial text-2xl leading-snug italic md:text-3xl">
            We would not use generic futuristic images. The art direction is the
            product.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-8 text-brown-soft md:text-xl md:leading-9">
            <p>
              TechX REIGNITE is built in Amber Futurism — a fusion of
              architectural retro-futurism, Japanese-inspired landscape
              composition, and warm monochromatic concept art. Tall geometry.
              Monumental quiet. A large sun. Mist instead of neon.
            </p>
            <p>
              Everything belongs to the same visual universe: amber energy{" "}
              <span className="font-display text-sm tracking-widest text-amber">
                #CF8326
              </span>
              , atmospheric light{" "}
              <span className="font-display text-sm tracking-widest text-amber">
                #FFFCF1
              </span>
              , dark brown for depth. Cinematic lighting, editorial negative
              space, fine grain. The images should feel as if they were
              commissioned for an architecture magazine, not assembled from a
              prompt pack.
            </p>
          </div>
        </div>

        <figure className="relative aspect-3/4 overflow-hidden bg-brown md:col-span-5 md:mt-8">
          <Image
            src="/art/editorial-monument.png"
            alt="A solitary monumental tower in mist beneath a large amber sun"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            quality={85}
            className="object-cover"
          />
        </figure>

        <aside className="flex flex-col justify-end md:col-span-7 md:mt-8 md:pl-16">
          <ol className="divide-y divide-amber/30 border-y border-amber/30">
            {[
              {
                n: "I",
                t: "Architectural retro-futurism",
                d: "Clean geometric buildings, monumental structures, wide cinematic landscapes — never cyberpunk.",
              },
              {
                n: "II",
                t: "Japanese-inspired futurism",
                d: "Minimal composition, architecture in nature, large suns, mist, the grammar of a traditional landscape.",
              },
              {
                n: "III",
                t: "Warm monochrome",
                d: "Amber, cream, dark brown. If a colour cannot live in that triad, it does not enter the frame.",
              },
              {
                n: "IV",
                t: "Editorial concept art",
                d: "Haze, grain, negative space, abstract geometry, dramatic scale. Magazine, not marketplace.",
              },
            ].map((item) => (
              <li key={item.n} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span className="font-display text-sm tracking-[0.2em] text-amber">
                  {item.n}
                </span>
                <div>
                  <h3 className="font-display text-sm tracking-[0.16em] uppercase">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brown-soft">
                    {item.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
