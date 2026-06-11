"use client";

import Image from "next/image";

export default function AboutPanel() {
  return (
    <section id="about" className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-mono font-bold">01 / The Vision</p>
          <h2 className="text-3xl md:text-5xl mb-6 font-display text-white leading-none">
            About <br /> Reignite
          </h2>
          
          <div className="space-y-6 text-xs md:text-sm text-secondary-text/60 font-light leading-relaxed">
            <p className="text-white/80 font-normal leading-relaxed text-sm md:text-base">
              A flagship initiative by IEEE CS SCT SBC designed to spark collaboration, build technical culture, and nurture industry-ready talent through an immersive multi-day sprint.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-border">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-accent font-bold font-mono block mb-2">Legacy</span>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Darrel Chong Gold (2024), Best SBC (2024), and Outstanding SBC Award (2022).
                </p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-accent font-bold font-mono block mb-2">Collaborations</span>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  IEEE CS SYP, Kerala Chapter, ComSoc, GECBH, CEA, IAS, & EMBS.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold font-mono block mb-2">Pillars</span>
              <div className="flex flex-wrap gap-2">
                {["Technology", "Training", "Engagement", "Leadership"].map((pillar) => (
                  <span key={pillar} className="px-3 py-1 text-[9px] uppercase tracking-wider font-mono bg-primary-card border border-primary-border rounded-full text-white/60">
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="[perspective:1000px] group/tilt">
          <div className="relative aspect-video rounded-lg overflow-hidden border border-primary-border grayscale shadow-2xl transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] w-full h-full group-hover/tilt:[transform:rotateY(-8deg)_rotateX(4deg)_scale(0.98)]">
            <Image
              src="/community.png"
              alt="Engineering Gathering"
              fill
              className="object-cover opacity-85 hover:opacity-100 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tilt:scale-108"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
