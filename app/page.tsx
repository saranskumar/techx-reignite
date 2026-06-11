"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Composable Layout Components
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutPanel from "./components/AboutPanel";
import TrackPanel from "./components/TrackPanel";
import TimelineSection from "./components/TimelineSection";
import FAQSection from "./components/FAQSection";
import JoinSection from "./components/JoinSection";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [panelsProgress, setPanelsProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

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
      answer: "All participants should bring their personal laptops. For specialized tracks, testing equipment and physical prototyping hardware will be fully provided by the organization."
    },
    {
      question: "What are the ticket prices for the event?",
      answer: "Tickets are priced based on your registration status: ₹200 for IEEE Computer Society members, ₹300 for general IEEE members, and ₹400 for non-IEEE members."
    },
    {
      question: "Where is the event venue?",
      answer: "Pre-events (Days 1 to 4) including tech talks and webinars will be held online. The main flagship inauguration and hands-on workshops (Days 5 to 7) will take place offline at Sree Chitra Thirunal College of Engineering (SCTCE)."
    },
    {
      question: "Which clubs and chapters are involved in this event?",
      answer: "The program is organized by the IEEE Computer Society SCT Student Branch Chapter, with active collaborations from IEEE CS SYP, IEEE CS Kerala, IEEE ComSoc Kerala, GEC Barton Hill SBC, CE Attingal SBC, and other regional chapters."
    },
    {
      question: "Will I get certificates for participating?",
      answer: "Yes, all active participants who complete the workshop tracks and submit sprint challenges will receive official participation certificates from the IEEE SCT Student Branch Chapter."
    },
    {
      question: "What are the timings for the offline days (July 18 and 19)?",
      answer: "The offline sessions run from 8:30 AM to 5:00 PM on both Saturday (July 18) and Sunday (July 19) at the SCTCE campus."
    },
    {
      question: "Are there food and refreshments provided?",
      answer: "Yes, working lunch, high-tea, and refreshments will be fully provided to all registered participants during the offline workshop days."
    },
    {
      question: "Can I choose my track after registering?",
      answer: "Yes, you will receive a track selection form upon registration confirmation to finalize your preference between IoT Building and LLM Building."
    },
    {
      question: "Is there any cash prize for the speed trials and sprint challenges?",
      answer: "Yes, the top performing teams in the track challenges on Day 7 will receive cash awards, winner certificates, and developer goodies from our sponsors."
    }
  ];

  const timelineData = [
    { 
      day: "Day 1 - July 13", 
      title: "Cybersecurity Workshop", 
      desc: "9:00 AM – 4:00 PM. Hands-on technical session organized in collaboration with IEEE CS College of Engineering Attingal SBC." 
    },
    { 
      day: "Day 2 - July 14", 
      title: "8-Hour AI-thon", 
      desc: "8:00 AM – 4:00 PM. Intensive software build sprint in collaboration with IEEE CS Government Engineering College Barton Hill SBC." 
    },
    { 
      day: "Day 3 - July 15", 
      title: "Introduction to ADAS", 
      desc: "7:00 PM – 8:00 PM. Interactive talk session on Advanced Driver Assistance Systems with IEEE IAS SCT SBC." 
    },
    { 
      day: "Day 4 - July 16", 
      title: "Gene Computing", 
      desc: "7:00 PM – 8:00 PM. Computational biology and genetics talk session with IEEE EMBS SCT SBC." 
    },
    { 
      day: "Day 5 - July 17", 
      title: "Grand Inauguration", 
      desc: "4:30 PM – 6:00 PM. Launch ceremony and event orientation for all registered participants." 
    },
    { 
      day: "Day 6 - July 18 (Full Day)", 
      title: "Main Workshop & Soft Skills", 
      desc: "8:30 AM Registration | 9:30 AM IoT & LLM Building Workshops | 1:30 PM Networking session | 4:00 PM Interactive soft skill development." 
    },
    { 
      day: "Day 7 - July 19 (Full Day)", 
      title: "Competition & Mentoring", 
      desc: "9:30 AM Track Competitions | 1:30 PM Nano Mentoring with IEEE CS SYP | 3:30 PM Parallel Events (CS ExCom Meet & Membership Development) | 4:30 PM Awards." 
    }
  ];



  // Lock body/html scroll until initial animation finishes
  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [showContent]);

  // Main scroll animation driver (Vertical sections + Horizontal Panel pinning)
  useEffect(() => {
    if (!containerRef.current || !pulseRef.current || !horizontalRef.current || !panelsRef.current) return;

    const sections = ["hero", "horizontal-sprint", "timeline", "faq", "join"];
    
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: `#${sec}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setActiveSection(sec);
        },
        onEnterBack: () => {
          setActiveSection(sec);
        },
      });
    });

    const mm = gsap.matchMedia();

    // Horizontal sliding panel animation using GSAP pinning — desktop/tablet only (>= 768px)
    mm.add("(min-width: 768px)", () => {
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
      backgroundColor: "rgba(191, 199, 207, 0.2)",
      filter: "blur(35px)",
      duration: 1,
    })
    .to(pulseRef.current, {
      x: "25vw",
      y: "-15vh",
      scale: 1.3,
      backgroundColor: "rgba(191, 199, 207, 0.12)",
      filter: "blur(50px)",
      duration: 1.5,
    })
    .to(pulseRef.current, {
      x: "-25vw",
      y: "10vh",
      scale: 2.0,
      backgroundColor: "rgba(191, 199, 207, 0.25)",
      filter: "blur(40px)",
      duration: 1.5,
    })
    .to(pulseRef.current, {
      x: "0vw",
      y: "0vh",
      scale: 1.0,
      opacity: 0.3,
      backgroundColor: "rgba(191, 199, 207, 0.08)",
      filter: "blur(30px)",
      duration: 1,
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleHeroComplete = useCallback(() => {
    setShowContent(true);
    // Let GSAP ScrollTrigger refresh after DOM completes transition layout shifts
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, []);

  return (
    <>
      <main 
        ref={containerRef} 
        className={`relative z-10 bg-primary-bg text-primary-text ${showContent ? "visible-state" : ""}`}
      >
        
        {/* Studio PHA5E Custom Dual Cursor follower */}
        <CustomCursor />

        {/* Right-Side Scroll Depth Progress Indicator */}
        <ScrollIndicator />

        {/* Header Sticky Navigation */}
        <Header visible={showContent} />

        {/* Ambient Backdrop: The Pulse */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden transition-opacity duration-1000"
          style={{ opacity: showContent ? 1 : 0 }}
        >
          <div
            ref={pulseRef}
            className="pulse-circle w-72 h-72 opacity-25 flex items-center justify-center"
          />
        </div>

        {/* HERO SECTION */}
        <Hero onComplete={handleHeroComplete} />

        {/* STUDIO PHA5E HORIZONTAL SPRINT SECTION */}
        <div id="horizontal-sprint" ref={horizontalRef} className="h-auto md:h-screen overflow-visible md:overflow-hidden bg-black/40 relative py-12 md:py-0">
          
          {/* Horizontal Scroll Progress bar */}
          <div className="absolute bottom-16 left-12 right-12 h-[1px] bg-white/10 z-20 hidden md:block">
            <div 
              className="h-full bg-accent transition-all duration-300 ease-out shadow-[0_0_8px_var(--accent-color)]" 
              style={{ width: `${panelsProgress * 100}%` }} 
            />
            <div className="flex justify-between mt-3 text-[9px] uppercase tracking-[0.2em] font-mono select-none">
              <span className={`transition-colors duration-300 ${panelsProgress < 0.125 ? "text-white font-semibold" : "text-white/30"}`}>01 / About</span>
              <span className={`transition-colors duration-300 ${(panelsProgress >= 0.125 && panelsProgress < 0.375) ? "text-white font-semibold" : "text-white/30"}`}>02 / IoT Building</span>
              <span className={`transition-colors duration-300 ${(panelsProgress >= 0.375 && panelsProgress < 0.625) ? "text-white font-semibold" : "text-white/30"}`}>03 / LLM Building</span>
              <span className={`transition-colors duration-300 ${(panelsProgress >= 0.625 && panelsProgress < 0.875) ? "text-white font-semibold" : "text-white/30"}`}>04 / ADAS & Gene</span>
              <span className={`transition-colors duration-300 ${panelsProgress >= 0.875 ? "text-white font-semibold" : "text-white/30"}`}>05 / Placement</span>
            </div>
          </div>

          <div ref={panelsRef} className="flex flex-col md:flex-row md:flex-nowrap w-full md:w-[500vw] h-auto md:h-full gap-16 md:gap-0">
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

        {/* FAQ SECTION */}
        <FAQSection faqData={faqData} />

        {/* JOIN CTA SECTION */}
        <JoinSection />

        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
}
