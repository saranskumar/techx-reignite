import { artDirection, palette } from "@/lib/atlas";

export function SiteFooter() {
  return (
    <footer className="bg-cream text-brown">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
              Colophon
            </p>
            <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight">
              Warm Retro-Futurist
              <br />
              Editorial Art
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-brown-soft">
              The prompt never changes. That consistency is what makes the site
              feel like one designed world instead of random sections with
              random images.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-display text-[11px] tracking-[0.28em] text-amber uppercase">
              Palette
            </p>
            <ul className="mt-6 space-y-4">
              {palette.map((swatch) => (
                <li key={swatch.hex} className="flex items-center gap-3">
                  <span
                    className="size-8 border border-brown/15"
                    style={{ backgroundColor: swatch.hex }}
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-sm">{swatch.name}</span>
                    <span className="font-display text-[11px] tracking-widest text-brown-soft">
                      {swatch.hex}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-display text-[11px] tracking-[0.28em] text-amber uppercase">
              Direction
            </p>
            <ul className="mt-6 space-y-2 text-lg leading-8 text-brown-soft">
              {artDirection.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-amber/30 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-[11px] tracking-[0.28em] uppercase">
            TechX Reignite · 2027
          </p>
          <p className="font-jp text-sm text-amber">未来は冷たくなくていい。</p>
        </div>
      </div>
    </footer>
  );
}
