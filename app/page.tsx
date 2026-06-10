"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { audioEngine } from "@/app/utils/audio";

// Composable Layout Components
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutPanel from "./components/AboutPanel";
import TrackPanel from "./components/TrackPanel";
import TimelineSection from "./components/TimelineSection";
import StatsSection from "./components/StatsSection";
import FAQSection from "./components/FAQSection";
import JoinSection from "./components/JoinSection";
import ScrollIndicator from "./components/ScrollIndicator";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  const [muted, setMuted] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [pulseCount, setPulseCount] = useState(0);
  const [panelsProgress, setPanelsProgress] = useState(0);

  const faqData = [
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
    { 
      day: "Day 1 — July 13", 
      title: "Cybersecurity Workshop", 
      desc: "9:00 AM – 4:00 PM. Hands-on technical session organized in collaboration with IEEE CS College of Engineering Attingal SBC." 
    },
    { 
      day: "Day 2 — July 14", 
      title: "8-Hour AI-thon", 
      desc: "8:00 AM – 4:00 PM. Intensive software build sprint in collaboration with IEEE CS Government Engineering College Barton Hill SBC." 
    },
    { 
      day: "Day 3 — July 15", 
      title: "Introduction to ADAS", 
      desc: "7:00 PM – 8:00 PM. Interactive talk session on Advanced Driver Assistance Systems with IEEE IAS SCT SBC." 
    },
    { 
      day: "Day 4 — July 16", 
      title: "Gene Computing", 
      desc: "7:00 PM – 8:00 PM. Computational biology and genetics talk session with IEEE EMBS SCT SBC." 
    },
    { 
      day: "Day 5 — July 17", 
      title: "Grand Inauguration", 
      desc: "4:30 PM – 6:00 PM. Launch ceremony and event orientation for all registered participants." 
    },
    { 
      day: "Day 6 — July 18 (Full Day)", 
      title: "Main Workshop & Soft Skills", 
      desc: "8:30 AM Registration | 9:30 AM IoT & LLM Building Workshops | 1:30 PM Networking session | 4:00 PM Interactive soft skill development." 
    },
    { 
      day: "Day 7 — July 19 (Full Day)", 
      title: "Competition & Mentoring", 
      desc: "9:30 AM Track Competitions | 1:30 PM Nano Mentoring with IEEE CS SYP | 3:30 PM Parallel Events (CS ExCom Meet & Membership Development) | 4:30 PM Awards." 
    }
  ];

  // Toggle Mute & Sound
  const handleToggleMute = () => {
    const nextMuted = audioEngine.toggleMute();
    setMuted(nextMuted);
  };

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="relative z-10 bg-[#050505] text-[#e5e5e5]">
      
      {/* Studio PHA5E Custom Dual Cursor follower */}
      <CustomCursor />

      {/* Right-Side Scroll Depth Progress Indicator */}
      <ScrollIndicator />

      {/* Header Sticky Navigation */}
      <Header muted={muted} onToggleMute={handleToggleMute} />

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
      <Hero />

      {/* STUDIO PHA5E HORIZONTAL SPRINT SECTION */}
      <div id="horizontal-sprint" ref={horizontalRef} className="h-screen overflow-hidden bg-black/40 relative">
        
        {/* Horizontal Scroll Progress bar */}
        <div className="absolute bottom-16 left-12 right-12 h-[1px] bg-white/10 z-20 hidden md:block">
          <div 
            className="h-full bg-[#00e5ff] transition-all duration-300 ease-out shadow-[0_0_8px_#00e5ff]" 
            style={{ width: `${panelsProgress * 100}%` }} 
          />
          <div className="flex justify-between mt-3 text-[9px] uppercase tracking-[0.2em] text-white/30 font-mono">
            <span>01 / About</span>
            <span>02 / IoT Building</span>
            <span>03 / LLM Building</span>
            <span>04 / ADAS & Gene</span>
            <span>05 / Placement</span>
          </div>
        </div>

        <div ref={panelsRef} className="flex flex-row flex-nowrap w-[500vw] h-full">
          <AboutPanel />
          <TrackPanel 
            index="02 / TRACK ONE"
            category="IoT Building"
            subtitle="HANDS-ON OFFLINE WORKSHOP"
            desc="Master firmware deployment, sensor configurations, and embedded systems to construct physical prototypes."
            imageSrc="/devops.png"
          />
          <TrackPanel 
            index="03 / TRACK TWO"
            category="LLM Building"
            subtitle="HANDS-ON OFFLINE WORKSHOP"
            desc="Build custom large language models, execute model fine-tuning, and design specialized agentic systems."
            imageSrc="/roborace.png"
          />
          <TrackPanel 
            index="04 / TRACK THREE"
            category="ADAS & Genetech"
            subtitle="INTERDISCIPLINARY TALK SESSIONS"
            desc="Dive into Advanced Driver Assistance Systems (ADAS) and explore how computational biology scales through Gene Computing."
            imageSrc="/community.png"
          />
          <TrackPanel 
            index="05 / TRACK FOUR"
            category="Placement & Mentor"
            subtitle="CAREER LAUNCHPAD & PERSONALIZED GUIDANCE"
            desc="Engage in interactive self-leadership, resume building, and get personalized mentoring directly from industry professionals."
            imageSrc="/community.png"
          />
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <TimelineSection timelineData={timelineData} />

      {/* STATS SECTION */}
      <StatsSection />

      {/* FAQ SECTION */}
      <FAQSection faqData={faqData} />

      {/* JOIN CTA SECTION */}
      <JoinSection />

    </main>
  );
}
