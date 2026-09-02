import Image from "next/image";

import { atlasChapters } from "@/lib/atlas";
import { cn } from "@/lib/utils";

export function Atlas() {
  return (
    <section id="atlas" className="bg-brown text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
              Visual Atlas
            </p>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Six structures.
              <br />
              One palette.
            </h2>
          </div>
          <p className="font-editorial max-w-md text-xl leading-8 text-cream/75 italic">
            Every chapter specifies the same world: architectural concept art,
            warm amber monochrome, retro-futurism, editorial haze.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {atlasChapters.map((chapter, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={chapter.id}
              id={chapter.id}
              className="border-t border-amber/20"
            >
              <div
                className={cn(
                  "mx-auto grid max-w-[1440px] md:grid-cols-2",
                  reverse && "md:[&>figure]:order-2"
                )}
              >
                <figure className="relative aspect-16/10 overflow-hidden bg-brown-mid md:aspect-auto md:min-h-[min(78vh,820px)]">
                  <Image
                    src={chapter.image}
                    alt={chapter.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    className="object-cover transition-transform duration-[1.8s] ease-out hover:scale-[1.03]"
                  />
                </figure>
                <div className="flex flex-col justify-between gap-12 px-5 py-12 md:px-14 md:py-16 lg:px-20">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-sm tracking-[0.32em] text-amber">
                      {chapter.index}
                    </span>
                    <span className="font-jp text-lg text-amber/80">
                      {chapter.jp}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-[11px] tracking-[0.28em] text-cream/55 uppercase">
                      {chapter.kicker}
                    </p>
                    <h3 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                      {chapter.title}
                    </h3>
                    <p className="font-editorial mt-8 max-w-md text-xl leading-8 text-cream/80">
                      {chapter.body}
                    </p>
                  </div>
                  <p className="font-display text-[10px] tracking-[0.28em] text-cream/40 uppercase">
                    TechX Atlas / {chapter.index} of 06
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
