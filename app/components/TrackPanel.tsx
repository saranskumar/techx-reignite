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
          <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-6 font-mono font-bold">{index}</p>
          <h2 className="text-5xl md:text-7xl font-display text-outline mb-6">{category}</h2>
          <p className="text-lg text-white/60 font-light leading-relaxed mb-8">{desc}</p>
          <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">{subtitle}</div>
        </div>
        <div className="perspective-3d">
          <div className="tilt-wrapper relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
            <Image
              src={imageSrc}
              alt={category}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
