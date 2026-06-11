"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroProps {
  onComplete?: () => void;
}

export default function Hero({ onComplete }: HeroProps) {
  const techxOutlineRef    = useRef<SVGTextElement>(null);
  const reigniteOutlineRef = useRef<SVGTextElement>(null);
  const techxFillRef       = useRef<SVGTextElement>(null);
  const reigniteFillRef    = useRef<SVGTextElement>(null);
  const techxClipRef       = useRef<SVGRectElement>(null);

  useEffect(() => {
    const tO = techxOutlineRef.current;
    const rO = reigniteOutlineRef.current;
    const rF = reigniteFillRef.current;
    const tF = techxFillRef.current;
    const tC = techxClipRef.current;
    if (!tO || !rO || !rF || !tF || !tC) return;

    const alignElements = () => {
      if (!tO || !rO || !rF) return;
      const txBBox = tO.getBBox();
      const rightEdge = txBBox.x + txBBox.width;
      rO.setAttribute("x", String(rightEdge));
      rF.setAttribute("x", String(rightEdge));
    };

    // Align initially
    alignElements();

    const timers: NodeJS.Timeout[] = [];

    // Create GSAP Context for React Strict Mode safety
    const ctx = gsap.context(() => {
      const WIDE_X = -1000;
      const WIDE_W = 3000;

      gsap.set(tC, {
        attr: {
          x: WIDE_X,
          y: 130, // Well below TECHX baseline of 90
          width: WIDE_W,
          height: 0,
        },
      });

      gsap.set([tO, rO], { strokeDasharray: 2000, strokeDashoffset: 2000 });

      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          alignElements();

          const tl = gsap.timeline({
            onComplete: () => {
              alignElements();
              if (onComplete) {
                onComplete();
              }
            }
          });

          // 1. Draw both outlines simultaneously — slow, deliberate
          tl.to([tO, rO], {
            strokeDashoffset: 0,
            duration: 3.8,
            ease: "power1.inOut",
          });

          // 2. Fill TECHX bottom → top to safe bounds (starts at 1.0s into drawing)
          // (covers y=-45 to y=130, fully wrapping y=90 text)
          // Using power2.out ease for a smooth liquid fluid style progression
          tl.to(tC, {
            attr: {
              y: -45,
              height: 175,
            },
            duration: 1.8,
            ease: "power2.out",
          }, 1.0);

          // 3. Fade out outline of TECHX only (triggered right when fill completes at 2.8s)
          tl.to(tO, { opacity: 0, duration: 0.35 }, 2.8);

          // 4. Fade REIGNITE outline to its subtle default state (strokeOpacity 0.2)
          tl.to(rO, { strokeOpacity: 0.2, duration: 0.35 }, 3.0);

          // 5. Brief hold before complete callback
          tl.to({}, { duration: 0.3 });

          requestAnimationFrame(alignElements);
        });
      });
    });

    timers.push(
      setTimeout(alignElements, 150),
      setTimeout(alignElements, 600),
      setTimeout(alignElements, 1500),
      setTimeout(alignElements, 4000)
    );

    const handleResize = () => {
      alignElements();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [onComplete]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center px-6 md:px-16 lg:px-24 pt-20 text-center">
      <div className="max-w-6xl z-10 w-full flex flex-col items-center">
        <p className="reveal-item delay-1 text-xs uppercase tracking-[0.3em] text-accent mb-6 filter drop-shadow-[0_0_8px_rgba(191,199,207,0.4)] font-semibold font-mono">
          July 13 - 19, 2026 | SCT College of Engineering
        </p>

        <div className="hero-type-wrapper w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-[600px] mb-10">
          <svg
            className="w-full overflow-visible"
            viewBox="0 0 500 175"
          >
            <defs>
              <clipPath id="hero-techx-clip" clipPathUnits="userSpaceOnUse">
                <rect ref={techxClipRef} x="-1000" y="130" width="3000" height="0" />
              </clipPath>
              <clipPath id="hero-reignite-clip" clipPathUnits="userSpaceOnUse">
                <rect x="-1000" y="80" width="3000" height="100" className="clip-rect" />
              </clipPath>
            </defs>

            {/* ── TECHX OUTLINE (drawn on load) ── */}
            <text
              ref={techxOutlineRef}
              x="250" y="90" textAnchor="middle"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "110px",
                letterSpacing: "-1px",
                strokeDasharray: 2000,
                strokeDashoffset: 2000,
              }}
              fill="none"
              stroke="var(--accent-color)"
              strokeWidth="1.5"
            >
              TECHX
            </text>

            {/* ── REIGNITE OUTLINE (drawn on load) ── */}
            <text
              ref={reigniteOutlineRef}
              x="470" y="152" textAnchor="end"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "52px",
                letterSpacing: "-1px",
                strokeDasharray: 2000,
                strokeDashoffset: 2000,
              }}
              fill="none"
              stroke="var(--accent-color)"
              strokeWidth="1.2"
            >
              REIGNITE
            </text>

            {/* ── TECHX SOLID FILL (revealed on load) ── */}
            <text
              ref={techxFillRef}
              x="250" y="90" textAnchor="middle"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "110px",
                letterSpacing: "-1px",
              }}
              fill="var(--accent-color)"
              clipPath="url(#hero-techx-clip)"
            >
              TECHX
            </text>

            {/* ── REIGNITE SOLID FILL (revealed on hover) ── */}
            <text
              ref={reigniteFillRef}
              x="470" y="152" textAnchor="end"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "52px",
                letterSpacing: "-1px",
              }}
              fill="var(--accent-color)"
              clipPath="url(#hero-reignite-clip)"
            >
              REIGNITE
            </text>
          </svg>
        </div>

        <p className="reveal-item delay-3 text-xs md:text-sm tracking-[0.25em] text-white/60 uppercase mb-12 leading-relaxed font-light">
          Powering Minds, One spark at a time
        </p>

        <div className="reveal-item delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Join the Sprint */}
          <a
            href="#join"
            className="group w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold bg-accent text-[#0B0B0B] border border-accent hover:border-white/20 rounded-full hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden text-center flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 bg-[#0B0B0B] scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Join the Sprint</span>
              <svg 
                className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 text-[#0B0B0B] group-hover:text-accent" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          {/* Secondary CTA: Explore Vision */}
          <a
            href="#about"
            className="group w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.3em] font-semibold border border-white/20 text-white/80 rounded-full hover:text-[#0B0B0B] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden text-center flex items-center justify-center gap-2 bg-white/5"
          >
            <span className="absolute inset-0 bg-accent scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left z-0" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Explore Vision</span>
              <svg 
                className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-y-1 text-white group-hover:text-[#0B0B0B]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
