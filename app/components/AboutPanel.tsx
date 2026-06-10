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
              TechX REIGNITE is the flagship technology and professional development initiative of IEEE Computer Society SCT Student Branch Chapter, designed to bring together students, innovators, industry professionals, and future leaders through an immersive multi-day experience.
            </p>
            <p>
              Built on the pillars of Technology, Training, Engagement, and Leadership, TechX REIGNITE goes beyond conventional workshops and competitions to create an ecosystem where learning, collaboration, mentorship, and innovation converge.
            </p>
            <p>
              The event features hands-on technical workshops, competitive challenges, expert-led sessions, industry interactions, personalized mentoring opportunities, leadership development programs, and community-driven experiences. By combining technical excellence with professional growth, TechX REIGNITE empowers participants to explore emerging technologies, develop practical skills, expand their professional networks, and gain insights from industry experts.
            </p>
            <p>
              With collaborations across multiple IEEE societies, student branch chapters, and industry professionals, TechX REIGNITE fosters an inclusive environment that welcomes students from diverse disciplines and backgrounds. Whether participants are taking their first step into technology or looking to deepen their expertise, the event provides a platform to learn, build, connect, and grow.
            </p>
            <p className="text-[#00e5ff] font-medium font-display uppercase tracking-wider text-xs pt-2">
              More than an event, TechX REIGNITE is a gathering of curious minds, ambitious builders, and future innovators working together to shape what comes next.
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
