"use client";

import Image from "next/image";

interface TrackPanelProps {
  index: string;
  category: string;
  subtitle: string;
  desc: string;
  imageSrc: string;
}

export default function TrackPanel({ index, category, subtitle, desc, imageSrc }: TrackPanelProps) {
  return (
    <section className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-mono font-bold">{index}</p>
          <h2 className="text-5xl md:text-7xl font-display mb-6 inline-block max-w-none! whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] bg-gradient-to-t from-accent from-50% to-transparent to-50% bg-[size:120%_200%] bg-[position:0_0] bg-clip-text px-[0.05em] -mx-[0.05em] transition-[background-position,_webkit-text-stroke] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[position:0_100%] hover:[-webkit-text-stroke:1px_var(--color-accent)] cursor-pointer">{category}</h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-8">{desc}</p>
          <div className="text-xs uppercase tracking-widest text-accent font-bold">{subtitle}</div>
        </div>
        <div className="[perspective:1000px] group/tilt">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] w-full h-full group-hover/tilt:[transform:rotateY(-8deg)_rotateX(4deg)_scale(0.98)]">
            <Image
              src={imageSrc}
              alt={category}
              fill
              className="object-cover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tilt:scale-108"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
