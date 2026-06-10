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
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [pulseCount, setPulseCount] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [cursorHovered, setCursorHovered] = useState(false);
  const [panelsProgress, setPanelsProgress] = useState(0);

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

  const triggerHoverEnter = () => {
    setCursorHovered(true);
    audioEngine.playClick();
  };

  const triggerHoverLeave = () => {
    setCursorHovered(false);
  };

  // Custom Cursor mouse move listener (Dual Dot & Ring)
  useEffect(() => {
    const ring = cursorRingRef.current;
    const dot = cursorDotRef.current;
    if (!ring || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Ring trails with a smooth delay
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power2.out",
      });
      // Dot follows instantly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Heartbeat sound interval linked to section progression
  useEffect(() => {
    if (muted) return;

    let speed = 2500;
    let frequency = 50;

    if (activeSection === "horizontal-sprint") {
      speed = 1700;
      frequency = 62;
    } else if (activeSection === "timeline") {
      speed = 1300;
      frequency = 68;
    } else if (activeSection === "stats" || activeSection === "faq") {
      speed = 900;
      frequency = 75;
    }

    const timer = setInterval(() => {
      audioEngine.playPulse(frequency, 0.4);
      setPulseCount((prev) => prev + 1);
    }, speed);

    return () => clearInterval(timer);
  }, [muted, activeSection]);

  // Main scroll animation driver (Vertical sections + Horizontal Panel pinning)
  useEffect(() => {
    if (!containerRef.current || !pulseRef.current || !horizontalRef.current || !panelsRef.current) return;

    // Pin pulse elements and animate properties based on scroll position
    const sections = ["hero", "horizontal-sprint", "timeline", "stats", "faq", "join"];
    
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

    // Horizontal sliding panel animation using GSAP pinning
    const panels = gsap.utils.toArray(".horizontal-panel");
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${panelsRef.current?.clientWidth || 2000}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setPanelsProgress(self.progress);
        },
      },
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
    <main ref={containerRef} className="relative z-10 bg-[#050505] text-[#e5e5e5]">
      
      {/* Studio PHA5E Custom Dual Cursor follower (Ring + Dot) */}
      <div
        ref={cursorRingRef}
        className={`custom-cursor-ring ${cursorHovered ? "hovered" : ""}`}
      />
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
      />

      {/* Header Sticky Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#hero"
            className="font-display font-extrabold text-lg tracking-[0.2em] text-white hover:text-[#00e5ff] transition-all"
            onMouseEnter={triggerHoverEnter}
            onMouseLeave={triggerHoverLeave}
          >
            TECHX
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              About
            </a>
            <a
              href="#tracks"
              className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              Tracks
            </a>
            <a
              href="#timeline"
              className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              Timeline
            </a>
            <a
              href="#faq"
              className="nav-link text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all py-1"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleMute}
              className="flex items-center justify-center p-2 rounded-full border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
              title="Toggle audio drone"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-[#00e5ff]" />}
            </button>
            
            <a
              href="#join"
              className="px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border border-white/15 bg-white/5 rounded-full hover:border-[#00e5ff] hover:bg-white/10 transition-all"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
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
        <div className="max-w-5xl z-10 w-full">
          <p className="text-xs uppercase tracking-[0.5em] text-[#00e5ff] mb-8 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]">
            IEEE FLAGSHIP EVENT 2026
          </p>
          
          {/* Monumental Typography with SVG self-drawing stroke animation */}
          <div className="w-full flex flex-col items-center justify-center mb-12">
            <h1 className="text-7xl sm:text-8xl md:text-9xl mb-2 font-display text-white leading-none tracking-tighter">
              TECHX
            </h1>
            <svg 
              className="outlined-svg-text w-full max-w-lg md:max-w-2xl h-24 md:h-36 overflow-visible select-none" 
              viewBox="0 0 600 100"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              <text 
                x="50%" 
                y="70%" 
                textAnchor="middle" 
                className="font-display font-extrabold text-6xl md:text-8xl tracking-tight"
              >
                REIGNITE
              </text>
            </svg>
          </div>
          
          <p className="text-sm md:text-lg tracking-[0.25em] text-white/70 uppercase max-w-xl mx-auto mb-12 leading-relaxed">
            Where builders return. A 7-Day sprint to awaken engineering momentum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join"
              className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium bg-[#00e5ff] text-black rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all cursor-pointer"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              Join the Sprint
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium border border-white/20 hover:border-white/50 rounded-full transition-all cursor-pointer"
              onMouseEnter={triggerHoverEnter}
              onMouseLeave={triggerHoverLeave}
            >
              Explore Vision
            </a>
          </div>
        </div>
      </section>

      {/* STUDIO PHA5E HORIZONTAL SPRINT SECTION */}
      <div id="horizontal-sprint" ref={horizontalRef} className="h-screen overflow-hidden bg-black/40 relative">
        
        {/* Horizontal Scroll Progress bar (Studio PHA5E Style) */}
        <div className="absolute bottom-16 left-12 right-12 h-[1px] bg-white/10 z-20 hidden md:block">
          <div 
            className="h-full bg-[#00e5ff] transition-all duration-300 ease-out shadow-[0_0_8px_#00e5ff]" 
            style={{ width: `${panelsProgress * 100}%` }} 
          />
          <div className="flex justify-between mt-3 text-[9px] uppercase tracking-[0.2em] text-white/30 font-mono">
            <span>01 / About</span>
            <span>02 / DevOps</span>
            <span>03 / Robo Race</span>
            <span>04 / Mentorship</span>
            <span>05 / Ecosystem</span>
          </div>
        </div>

        <div ref={panelsRef} className="flex flex-row flex-nowrap w-[500vw] h-full">
          
          {/* Panel 1: Vision / About */}
          <section id="about" className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-semibold">01 / The Vision</p>
                <h2 className="text-4xl md:text-6xl mb-8 font-display text-white leading-tight">
                  Wake Up <br /> Your Momentum
                </h2>
                <p className="text-base text-white/60 font-light leading-relaxed mb-6">
                  In the noise of modern engineering, it is easy to become static. TechX Reignite is a flagship sprint designed to reactivate your drive.
                </p>
                <p className="text-base text-white/60 font-light leading-relaxed">
                  We gather the finest student developers, hardware builders, and product creators for seven continuous days of system architecture, hardware racing, and collaborative creation. Scroll right to explore the tracks.
                </p>
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

          {/* Panel 2: DevOps Track */}
          <section id="tracks" className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-6 font-mono font-bold">02 / TRACK ONE</p>
                <h2 className="text-5xl md:text-7xl font-display text-outline mb-6">DevOps</h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                  Configure robust deployment systems, orchestrate containers, and master performance telemetry logs.
                </p>
                <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">SYSTEM CONTROL & SCALING</div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
                <Image src="/devops.png" alt="DevOps Systems" fill className="object-cover" sizes="(max-w-768px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          {/* Panel 3: Robo Race Track */}
          <section className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-6 font-mono font-bold">03 / TRACK TWO</p>
                <h2 className="text-5xl md:text-7xl font-display text-outline mb-6">Robo Race</h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                  Construct chassis circuits, adjust PID parameters, and race autonomous machines on the main speedway.
                </p>
                <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">HARDWARE SPEED SPRINTS</div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
                <Image src="/roborace.png" alt="Robo Race speedway" fill className="object-cover" sizes="(max-w-768px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          {/* Panel 4: Mentorship */}
          <section className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-6 font-mono font-bold">04 / TRACK THREE</p>
                <h2 className="text-5xl md:text-7xl font-display text-outline mb-6">Mentors</h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                  Refine prototypes directly under technology architects and engineering experts from leading enterprises.
                </p>
                <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">EXPERT CODE ARCHITECTURE</div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
                <Image src="/community.png" alt="Mentorship Networking" fill className="object-cover" sizes="(max-w-768px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          {/* Panel 5: Community */}
          <section className="horizontal-panel w-screen h-full flex items-center justify-center px-12 md:px-24">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#00e5ff] mb-6 font-mono font-bold">05 / TRACK FOUR</p>
                <h2 className="text-5xl md:text-7xl font-display text-outline mb-6">Ecosystem</h2>
                <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                  Lock in with 140 developers under a shared, unified impulse to build the next layer of technology.
                </p>
                <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-bold">UNIFIED IMPULSE CO-CREATION</div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/15 grayscale shadow-2xl">
                <Image src="/community.png" alt="Ecosystem Community" fill className="object-cover" sizes="(max-w-768px) 100vw, 50vw" />
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
        <div className="max-w-4xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">06 / The Schedule</p>
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
              <span className="block text-7xl font-display text-outline mb-2">140</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Engineers Registered</span>
            </div>
            <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
              <span className="block text-7xl font-display text-outline mb-2">7</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Days of Building</span>
            </div>
            <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
              <span className="block text-7xl font-display text-outline mb-2">1</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-light">Flagship Gathering</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
        <div className="max-w-3xl w-full mx-auto z-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">07 / Support</p>
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
                  onMouseEnter={triggerHoverEnter}
                  onMouseLeave={triggerHoverLeave}
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
          <h2 className="text-5xl md:text-8xl font-display text-white mb-2 leading-none">
            Find Your
          </h2>
          <h2 className="text-5xl md:text-8xl font-display text-outline mb-6 leading-none">
            Placement
          </h2>
          
          <p className="text-sm md:text-base text-white/50 font-light tracking-wide mb-12 max-w-md mx-auto leading-relaxed">
            The workspace is set. The tracks are configured. Join the next generation of builders at TechX.
          </p>
          
          <button
            onClick={() => {
              audioEngine.playSwell();
              alert("Registration system initiated. Welcome to TechX Reignite.");
            }}
            onMouseEnter={triggerHoverEnter}
            onMouseLeave={triggerHoverLeave}
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
