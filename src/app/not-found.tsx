import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-pad flex min-h-dvh flex-col justify-end bg-brown py-24 text-cream">
      <p className="font-display kicker text-[11px] text-amber uppercase">
        404
      </p>
      <h1 className="font-display mt-6 text-[clamp(2.2rem,10vw,4.5rem)] font-semibold tracking-tight">
        Lost in the haze.
      </h1>
      <p className="font-editorial mt-6 max-w-md text-xl italic text-cream/75 sm:text-2xl">
        This path is not on the programme.
      </p>
      <Link
        href="/"
        className="font-display mt-12 inline-flex min-h-12 items-center text-[12px] tracking-[0.22em] text-amber uppercase sm:tracking-[0.32em]"
      >
        Return to REIGNITE
      </Link>
    </main>
  );
}
