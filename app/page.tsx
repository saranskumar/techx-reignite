"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX } from "lucide-react";
import { audioEngine } from "@/app/utils/audio";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);
  const gatheringRef = useRef<HTMLDivElement>(null);
  const logoLettersRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [activeAct, setActiveAct] = useState(1);
  const [pulseCount, setPulseCount] = useState(0);

  // Toggle Mute & Sound
  const handleToggleMute = () => {
    const nextMuted = audioEngine.toggleMute();
    setMuted(nextMuted);
    audioEngine.playClick();
  };

  // Heartbeat sound interval linked to act frequency
  useEffect(() => {
    if (muted) return;
    
    // Heartbeat rate speeds up as the user advances through the Acts
    const intervalTime = Math.max(800, 2500 - activeAct * 300);
    const pulseFreq = 50 + activeAct * 5;

    const timer = setInterval(() => {
      audioEngine.playPulse(pulseFreq, 0.4);
      setPulseCount((prev) => prev + 1);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [muted, activeAct]);

  // Main scroll animation driver
  useEffect(() => {
    if (!containerRef.current || !pulseRef.current) return;

    // Pin pulse elements and animate properties based on scroll position
    const acts = gsap.utils.toArray(".act-section");
    
    acts.forEach((act: any, index: number) => {
      ScrollTrigger.create({
        trigger: act,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveAct(index + 1);
          audioEngine.updateAmbienceFrequency(index);
          if (index === 5) {
            audioEngine.playSwell();
          }
        },
        onEnterBack: () => {
          setActiveAct(index + 1);
          audioEngine.updateAmbienceFrequency(index);
        },
      });
    });

    // Animate The Pulse size and intensity along scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    tl.to(pulseRef.current, {
      scale: 2.2,
      opacity: 0.8,
      backgroundColor: "rgba(0, 229, 255, 0.25)",
      filter: "blur(40px)",
      duration: 1,
    }) // Transition from Act 1 -> Act 2 -> Act 3
    .to(pulseRef.current, {
      x: "30vw",
      y: "-10vh",
      scale: 1.5,
      backgroundColor: "rgba(0, 150, 255, 0.15)",
      filter: "blur(60px)",
      duration: 1.5,
    }) // Slide to the right for Act 4 Editorial images
    .to(pulseRef.current, {
      x: "0vw",
      y: "0vh",
      scale: 3.5,
      backgroundColor: "rgba(0, 229, 255, 0.35)",
      filter: "blur(20px)",
      duration: 1,
    }) // Full screen burst for Act 6 Climax
    .to(pulseRef.current, {
      scale: 1.2,
      opacity: 0.4,
      backgroundColor: "rgba(0, 229, 255, 0.1)",
      filter: "blur(30px)",
      duration: 1,
    });

    // Act 6 Convergence Timeline
    const letters = document.querySelectorAll(".converge-letter");
    letters.forEach((letter: any) => {
      // Set random starting positions for the fragments
      const randomX = (Math.random() - 0.5) * window.innerWidth * 0.9;
      const randomY = (Math.random() - 0.5) * window.innerHeight * 0.9;
      const randomRot = (Math.random() - 0.5) * 360;
      const randomScale = Math.random() * 2 + 0.5;

      gsap.set(letter, {
        x: randomX,
        y: randomY,
        rotation: randomRot,
        scale: randomScale,
        opacity: 0.1,
      });
    });

    gsap.to(letters, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#act6",
        start: "top bottom",
        end: "center center",
        scrub: 1.2,
      },
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="relative z-10 select-none bg-[#050505] text-[#e5e5e5]">
      {/* Sound Controller Button */}
      <button
        onClick={handleToggleMute}
        className="fixed top-6 right-6 z-50 flex items-center justify-center p-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer"
        aria-label="Toggle cinematic audio"
        onMouseEnter={() => audioEngine.playClick()}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
      </button>

      {/* Signature Element: The Pulse */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div
          ref={pulseRef}
          className="pulse-circle w-64 h-64 opacity-30 flex items-center justify-center"
        >
          {/* Subtle concentric ripple rings that match the heartbeat speed */}
          {!muted && (
            <>
              <div key={`ring1-${pulseCount}`} className="pulse-ring" />
              <div key={`ring2-${pulseCount}`} className="pulse-ring-delayed" />
            </>
          )}
        </div>
      </div>

      {/* ACT 1: THE SIGNAL */}
      <section className="act-section min-h-screen relative flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">Act I / The Signal</p>
          <h1 className="text-6xl md:text-9xl tracking-tighter mb-4 font-display text-white">
            Something
          </h1>
          <h1 className="text-6xl md:text-9xl tracking-tighter font-display text-[#00e5ff] filter drop-shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            is waking up
          </h1>
        </div>
      </section>

      {/* ACT 2: THE PULSE */}
      <section className="act-section min-h-screen relative flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">Act II / The Pulse</p>
          <p className="text-2xl md:text-4xl font-light tracking-wide text-white/90 max-w-2xl mx-auto leading-relaxed">
            A rhythm returning. <br />
            Spreading through the dormant noise. <br />
            <span className="text-[#00e5ff] font-semibold">Momentum</span> is aligning.
          </p>
        </div>
      </section>

      {/* ACT 3: THE GATHERING */}
      <section className="act-section min-h-screen relative flex items-center justify-center px-6">
        <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6">Act III / The Gathering</p>
            <h2 className="text-5xl md:text-7xl mb-6 font-display text-white leading-none">
              Where <br /> Builders <br /> Return
            </h2>
            <p className="text-lg text-white/60 font-light max-w-md">
              We did not start this movement to stand alone. Ideas collide, fragments lock together.
              The gathering begins here.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <Image
              src="/community.png"
              alt="The Gathering"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ACT 4: THE EXPERIENCE */}
      <section className="act-section min-h-screen relative flex flex-col justify-center px-6 md:px-24 py-20 bg-black/30">
        <div className="max-w-6xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-12">Act IV / The Experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* DevOps */}
            <div className="group flex flex-col justify-between p-6 h-[400px] border border-white/5 hover:border-white/20 rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">01 / TRACK</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">DevOps</h3>
                <p className="text-sm text-white/50 font-light">Build robust deployment pipelines and master global infrastructures.</p>
              </div>
              <div className="relative w-full h-[150px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/devops.png" alt="DevOps Track" fill className="object-cover" />
              </div>
            </div>

            {/* Robo Race */}
            <div className="group flex flex-col justify-between p-6 h-[400px] border border-white/5 hover:border-white/20 rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">02 / TRACK</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Robo Race</h3>
                <p className="text-sm text-white/50 font-light">Craft autonomous speed machines and optimize low-level control systems.</p>
              </div>
              <div className="relative w-full h-[150px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/roborace.png" alt="Robo Race Track" fill className="object-cover" />
              </div>
            </div>

            {/* Mentorship */}
            <div className="group flex flex-col justify-between p-6 h-[400px] border border-white/5 hover:border-white/20 rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">03 / TRACK</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Mentorship</h3>
                <p className="text-sm text-white/50 font-light">Connect with elite engineering pioneers to bridge the design gap.</p>
              </div>
              <div className="relative w-full h-[150px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/community.png" alt="Mentorship" fill className="object-cover" />
              </div>
            </div>

            {/* Community */}
            <div className="group flex flex-col justify-between p-6 h-[400px] border border-white/5 hover:border-white/20 rounded-lg bg-black/40 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">04 / TRACK</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Community</h3>
                <p className="text-sm text-white/50 font-light">A shared pulse of builders co-creating the next generation of tech.</p>
              </div>
              <div className="relative w-full h-[150px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/community.png" alt="Community" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 5: THE MOVEMENT */}
      <section className="act-section min-h-screen relative flex items-center justify-center px-6">
        <div className="max-w-4xl w-full text-center z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-12">Act V / The Movement</p>
          <h2 className="text-4xl md:text-6xl font-display mb-16 text-white leading-none">
            You were never <br /> meant to build alone
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div>
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter">140</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Builders Joined</span>
            </div>
            <div>
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter">7</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Days of Creation</span>
            </div>
            <div>
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter">1</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Unified Impulse</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 6: REIGNITE (CLIMAX CONVERGENCE) */}
      <section id="act6" className="act-section min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="z-10 text-center select-none w-full max-w-6xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-20">Act VI / Reignite</p>
          
          {/* Logo container where SVG letters will converge on scroll */}
          <div ref={logoLettersRef} className="relative flex flex-col items-center justify-center h-48 md:h-72">
            <div className="flex justify-center flex-wrap gap-2 text-6xl md:text-9xl font-display tracking-tight text-white mb-2">
              {"TECHX".split("").map((char, i) => (
                <span key={`t-${i}`} className="converge-letter inline-block">
                  {char}
                </span>
              ))}
            </div>
            <div className="flex justify-center flex-wrap gap-2 text-2xl md:text-4xl font-display tracking-[0.3em] text-[#00e5ff]">
              {"REIGNITE".split("").map((char, i) => (
                <span key={`r-${i}`} className="converge-letter inline-block">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACT 7: JOIN */}
      <section className="act-section min-h-screen relative flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8">Act VII / Arrival</p>
          <h2 className="text-5xl md:text-8xl font-display text-white mb-4">
            Find your place
          </h2>
          <p className="text-sm md:text-base text-white/50 font-light tracking-wide mb-12 max-w-md mx-auto">
            The future does not need spectators. <br />
            It needs you.
          </p>
          
          <button
            onClick={() => {
              audioEngine.playSwell();
              alert("Registration flow awakened!");
            }}
            onMouseEnter={() => audioEngine.playClick()}
            className="px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium border border-white/20 bg-white/5 text-white rounded-full hover:border-[#00e5ff] hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 cursor-pointer"
          >
            Join TechX
          </button>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-white/25 font-light tracking-[0.2em] relative z-10">
        © 2026 IEEE TECHX REIGNITE. DESIGNED AS A SYSTEM.
      </footer>
    </main>
  );
}
