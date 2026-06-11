"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Follow mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power2.out",
      });
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
    };

    // Detect general interactive hovers globally to trigger cursor ring expansion
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], [data-cursor='hover']");
      
      if (interactive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`hidden pointer-events-none fixed top-0 left-0 w-8 h-8 border-1.5 border-[var(--accent-glow)] rounded-full z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] mix-blend-difference md:block
          ${hovered ? "w-16 h-16 bg-[var(--accent-glow)] border-[var(--accent-color)] shadow-[0_0_20px_var(--accent-glow)]" : ""}`}
      />
      <div
        ref={dotRef}
        className="hidden pointer-events-none fixed top-0 left-0 w-1 h-1 bg-[var(--accent-color)] rounded-full z-[10001] -translate-x-1/2 -translate-y-1/2 mix-blend-difference md:block"
      />
    </>
  );
}
