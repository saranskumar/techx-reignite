"use client";

import Image from "next/image";

export default function AboutPanel() {
  return (
    <section id="about" className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col max-h-[450px]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-4 font-mono font-bold">01 / The Vision</p>
          <h2 className="text-3xl md:text-5xl mb-6 font-display text-white leading-none">
            About TechX <br /> Reignite
          </h2>
          <div className="space-y-4 text-xs md:text-sm text-white/60 font-light leading-relaxed overflow-y-auto pr-4 max-h-[280px]">
            <p>
              TechX REIGNITE is the flagship technology and professional development initiative of the IEEE Computer Society SCT Student Branch Chapter, designed to bring together students, innovators, and future leaders through an immersive multi-day experience.
            </p>
            <p>
              Our chapter has a decorated legacy of excellence, recognized with the <strong>Outstanding Student Branch Chapter Award in 2022</strong>, the <strong>Best Student Branch Chapter of IEEE SCT SB in 2024</strong>, and as part of IEEE SCT SB's consecutive three-year win of the <strong>Regional Exemplary Student Branch Award</strong>. Notably, we were the <strong>only Student Branch to win the Darrel Chong Gold</strong> in the Kerala Section in 2024.
            </p>
            <p>
              Built on the pillars of Technology, Training, Engagement, and Leadership, TechX REIGNITE goes beyond conventional workshops. The event features hands-on technical workshops, competitive challenges, and expert-led sessions designed to build technical depth and self-leadership.
            </p>
            <p>
              With 6+ collaborations planned—including <strong>IEEE CS SYP, IEEE CS Kerala Chapter, IEEE ComSoc Kerala Chapter, IEEE CS GEC Barton Hill SBC, IEEE CS CE Attingal SBC, IEEE IAS SCT SBC, and IEEE EMBS SCT SBC</strong>—this initiative creates a massive platform for community engagement and exposure across the entire IEEE Kerala Section and India Council.
            </p>
            <p className="text-[#00e5ff] font-medium font-display uppercase tracking-wider text-xs pt-2">
              Join 140 participants in an inclusive ecosystem designed to spark collaboration, build technical culture, and nurture industry-ready talent.
            </p>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
          <Image
            src="/community.png"
            alt="Engineering Gathering"
            fill
            className="object-cover"
            sizes="(max-w-768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
