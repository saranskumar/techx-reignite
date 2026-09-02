import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col justify-end bg-brown px-5 py-24 text-cream md:px-10">
      <p className="font-display text-[11px] tracking-[0.42em] text-amber uppercase">
        404
      </p>
      <h1 className="font-display mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
        Lost in the haze.
      </h1>
      <p className="font-editorial mt-6 max-w-md text-2xl italic text-cream/75">
        This path is not on the atlas.
      </p>
      <Link
        href="/"
        className="font-display mt-12 inline-flex text-[12px] tracking-[0.32em] text-amber uppercase"
      >
        Return to REIGNITE
      </Link>
    </main>
  );
}
