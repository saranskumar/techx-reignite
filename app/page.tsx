"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import { audioEngine } from "@/app/utils/audio";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [pulseCount, setPulseCount] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is TechX Reignite?",
      answer: "TechX Reignite is a premier 7-day engineering sprint and flagship event of IEEE. It is designed specifically for builders, developers, and designers to collaborate, configure complex systems, compete in speed trials, and learn from industry experts."
    },
    {
      question: "Who is eligible to participate?",
      answer: "The event is open to all university students, developers, and tech enthusiasts. Whether you are a beginner looking to build your first system or a seasoned hacker aiming for speed records, there is a track for you."
    },
    {
      question: "How do teams work?",
      answer: "You can register individually or in teams of up to 4 members. If you register individually, we will host team-matching activities on Day 1 to help you find your team."
    },
    {
      question: "What hardware or software do I need to bring?",
      answer: "All participants should bring their personal laptops. For specialized tracks like Robo Race, high-end microcontrollers, testing equipment, and racing tracks will be fully provided by the organization."
    }
  ];

  const timelineData = [
    { day: "Day 1", title: "Arrival & Team Formation", desc: "Check-in, meet fellow builders, and formulate team squads." },
    { day: "Day 2-4", title: "Sprint & Construction", desc: "Build systems in DevOps, optimize algorithms, and construct racing chassis." },
    { day: "Day 5", title: "Mentorship Review", desc: "Pitch prototypes to industry leaders and refine system parameters." },
    { day: "Day 6", title: "Speed Trials", desc: "The official Robo Race heats begin on the main track." },
    { day: "Day 7", title: "Climax & Awards", desc: "Grand final presentations, system evaluations, and prize distributions." }
  ];

  // Toggle Mute & Sound
  const handleToggleMute = () => {
    const nextMuted = audioEngine.toggleMute();
    setMuted(nextMuted);
    audioEngine.playClick();
  };

  // Heartbeat sound interval linked to section progression
  useEffect(() => {
    if (muted) return;

    let speed = 2500;
    let frequency = 50;

    if (activeSection === "tracks") {
      speed = 1800;
      frequency = 60;
    } else if (activeSection === "timeline") {
      speed = 1400;
      frequency = 65;
    } else if (activeSection === "stats" || activeSection === "faq") {
      speed = 1000;
      frequency = 75;
    }

    const timer = setInterval(() => {
      audioEngine.playPulse(frequency, 0.4);
      setPulseCount((prev) => prev + 1);
    }, speed);

    return () => clearInterval(timer);
  }, [muted, activeSection]);

  // Main scroll animation driver
  useEffect(() => {
    if (!containerRef.current || !pulseRef.current) return;

    // Pin pulse elements and animate properties based on scroll position
    const sections = ["hero", "about", "tracks", "timeline", "stats", "faq", "join"];
    
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: `#${sec}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveSection(sec);
          const idx = sections.indexOf(sec);
          audioEngine.updateAmbienceFrequency(idx);
          if (sec === "stats") {
            audioEngine.playSwell();
          }
        },
        onEnterBack: () => {
          setActiveSection(sec);
          const idx = sections.indexOf(sec);
          audioEngine.updateAmbienceFrequency(idx);
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
      scale: 1.8,
      opacity: 0.6,
      backgroundColor: "rgba(0, 229, 255, 0.2)",
      filter: "blur(35px)",
      duration: 1,
    })
    .to(pulseRef.current, {
      x: "25vw",
      y: "-15vh",
      scale: 1.3,
      backgroundColor: "rgba(0, 150, 255, 0.12)",
      filter: "blur(50px)",
      duration: 1.5,
    })
    .to(pulseRef.current, {
      x: "-25vw",
      y: "10vh",
      scale: 2.0,
      backgroundColor: "rgba(0, 229, 255, 0.25)",
      filter: "blur(40px)",
      duration: 1.5,
    })
    .to(pulseRef.current, {
      x: "0vw",
      y: "0vh",
      scale: 1.0,
      opacity: 0.3,
      backgroundColor: "rgba(0, 229, 255, 0.08)",
      filter: "blur(30px)",
      duration: 1,
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleFaq = (index: number) => {
    audioEngine.playClick();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main ref={containerRef} className="relative z-10 select-none bg-[#050505] text-[#e5e5e5]">
      
      {/* Header Sticky Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="font-display font-extrabold text-lg tracking-[0.2em] text-white hover:text-[#00e5ff] transition-all" onMouseEnter={() => audioEngine.playClick()}>
            TECHX
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all" onMouseEnter={() => audioEngine.playClick()}>About</a>
            <a href="#tracks" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all" onMouseEnter={() => audioEngine.playClick()}>Tracks</a>
            <a href="#timeline" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all" onMouseEnter={() => audioEngine.playClick()}>Timeline</a>
            <a href="#faq" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all" onMouseEnter={() => audioEngine.playClick()}>FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleMute}
              className="flex items-center justify-center p-2 rounded-full border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              onMouseEnter={() => audioEngine.playClick()}
              title="Toggle audio drone"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-[#00e5ff]" />}
            </button>
            
            <a
              href="#join"
              className="px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/15 bg-white/5 rounded-full hover:border-[#00e5ff] hover:bg-white/10 transition-all"
              onMouseEnter={() => audioEngine.playClick()}
            >
              Register
            </a>
          </div>
        </div>
      </header>

      {/* Ambient Backdrop: The Pulse */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div
          ref={pulseRef}
          className="pulse-circle w-72 h-72 opacity-25 flex items-center justify-center"
        >
          {!muted && (
            <>
              <div key={`ring1-${pulseCount}`} className="pulse-ring" />
              <div key={`ring2-${pulseCount}`} className="pulse-ring-delayed" />
            </>
          )}
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center px-6 pt-20 text-center">
        <div className="max-w-4xl z-10">
          <p className="text-xs uppercase tracking-[0.5em] text-[#00e5ff] mb-6 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
            IEEE FLAGSHIP EVENT 2026
          </p>
          <h1 className="text-6xl md:text-9xl tracking-tighter mb-4 font-display text-white leading-none">
            TECHX
          </h1>
          <h1 className="text-6xl md:text-9xl tracking-tighter mb-8 font-display text-[#00e5ff] leading-none filter drop-shadow-[0_0_25px_rgba(0,229,255,0.3)]">
            REIGNITE
          </h1>
          <p className="text-sm md:text-lg tracking-[0.25em] text-white/70 uppercase max-w-xl mx-auto mb-12 leading-relaxed">
            Where builders return. A 7-Day sprint to awaken engineering momentum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join"
              className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium bg-[#00e5ff] text-black rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
              onMouseEnter={() => audioEngine.playClick()}
            >
              Join the Sprint
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium border border-white/20 hover:border-white/50 rounded-full transition-all cursor-pointer"
              onMouseEnter={() => audioEngine.playClick()}
            >
              Explore Vision
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT / VISION SECTION */}
      <section id="about" className="min-h-screen relative flex items-center justify-center px-6 bg-black/20">
        <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-semibold">01 / The Vision</p>
            <h2 className="text-4xl md:text-6xl mb-8 font-display text-white leading-tight">
              Wake Up <br /> Your Momentum
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed mb-6">
              In the noise of modern engineering, it is easy to become static. TechX Reignite is not a generic hackathon or a traditional lecture hall. It is a flagship workshop and competition sprint designed to reactivate your drive.
            </p>
            <p className="text-base text-white/60 font-light leading-relaxed">
              We gather the finest student developers, hardware builders, and product creators for seven continuous days of system architecture, hardware racing, and collaborative creation. This is where you find your placement.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
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

      {/* TRACKS SECTION */}
      <section id="tracks" className="min-h-screen relative flex flex-col justify-center px-6 md:px-24 py-24 bg-black/40">
        <div className="max-w-7xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">02 / Event Tracks</p>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-none">Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* DevOps */}
            <div className="group flex flex-col justify-between p-6 h-[420px] border border-white/5 hover:border-white/15 rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">01 / CLOUD</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">DevOps</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">Build highly available CI/CD infrastructure, container systems, and monitor telemetry parameters.</p>
              </div>
              <div className="relative w-full h-[160px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/devops.png" alt="DevOps Systems" fill className="object-cover" />
              </div>
            </div>

            {/* Robo Race */}
            <div className="group flex flex-col justify-between p-6 h-[420px] border border-white/5 hover:border-white/15 rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">02 / HARDWARE</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Robo Race</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">Design and assemble custom autonomous driving platforms, configure feedback loops, and race on track.</p>
              </div>
              <div className="relative w-full h-[160px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/roborace.png" alt="Robo Race Platforms" fill className="object-cover" />
              </div>
            </div>

            {/* Mentorship */}
            <div className="group flex flex-col justify-between p-6 h-[420px] border border-white/5 hover:border-white/15 rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">03 / NETWORK</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Mentorship</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">Collaborate directly with top-tier technology leaders and pioneers from premier engineering firms.</p>
              </div>
              <div className="relative w-full h-[160px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/community.png" alt="Mentorship Networking" fill className="object-cover" />
              </div>
            </div>

            {/* Community */}
            <div className="group flex flex-col justify-between p-6 h-[420px] border border-white/5 hover:border-white/15 rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px]">
              <div>
                <span className="text-xs font-mono text-white/30">04 / ECOSYSTEM</span>
                <h3 className="text-3xl font-display text-white mt-4 mb-2">Community</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed">Form lasting networks with hundreds of fellow builders under a single, unified development impulse.</p>
              </div>
              <div className="relative w-full h-[160px] overflow-hidden rounded grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image src="/community.png" alt="Ecosystem Community" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
        <div className="max-w-4xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">03 / The Schedule</p>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-none">The 7-Day Sprint</h2>
          
          <div className="timeline-container pl-8 md:pl-0">
            <div className="timeline-line" />
            
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative mb-16 flex flex-col md:flex-row items-start md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="timeline-dot" />
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-xs font-mono font-bold text-[#00e5ff] uppercase tracking-widest">{item.day}</span>
                  <h3 className="text-2xl font-display text-white mt-2 mb-3 leading-none">{item.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                </div>
                <div className="hidden md:block w-[10%]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="py-24 relative flex items-center justify-center px-6 bg-black/40 border-y border-white/5">
        <div className="max-w-4xl w-full text-center z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter mb-2">140</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Engineers Registered</span>
            </div>
            <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter mb-2">7</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Days of Building</span>
            </div>
            <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
              <span className="block text-7xl font-display text-[#00e5ff] font-extrabold tracking-tighter mb-2">1</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Flagship Gathering</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
        <div className="max-w-3xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">04 / Support</p>
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-none">Common Questions</h2>
          
          <div className="flex flex-col gap-4">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-white/10 pb-6 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-2 text-white hover:text-[#00e5ff] transition-all cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-medium tracking-wide">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 faq-chevron ${openFaq === idx ? "open" : ""}`} />
                </button>
                <div className={`faq-answer ${openFaq === idx ? "open" : ""}`}>
                  <p className="text-sm md:text-base text-white/50 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA SECTION */}
      <section id="join" className="min-h-screen relative flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8 font-semibold">Ready to begin</p>
          <h2 className="text-5xl md:text-8xl font-display text-white mb-6 leading-none">
            Find Your Place
          </h2>
          <p className="text-sm md:text-base text-white/50 font-light tracking-wide mb-12 max-w-md mx-auto leading-relaxed">
            The workspace is set. The tracks are configured. Join the next generation of builders at TechX.
          </p>
          
          <button
            onClick={() => {
              audioEngine.playSwell();
              alert("Registration system initiated. Welcome to TechX Reignite.");
            }}
            onMouseEnter={() => audioEngine.playClick()}
            className="px-12 py-5 text-xs uppercase tracking-[0.3em] font-semibold bg-[#00e5ff] text-black rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
          >
            Claim Your Spot
          </button>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="py-16 border-t border-white/5 text-center text-[10px] text-white/30 font-light tracking-[0.3em] relative z-10 bg-black/60">
        © 2026 IEEE TECHX REIGNITE. POWERED BY BUILDERS. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
