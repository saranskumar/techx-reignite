"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { audioEngine } from "@/app/utils/audio";

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

    // Detect general interactive hovers globally to trigger cursor ring expansion and click chime sounds
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], [data-cursor='hover']");
      
      if (interactive) {
        setHovered(true);
        // Play subtle hover sound if not already playing or configured
        if (!interactive.hasAttribute("data-no-chime")) {
          audioEngine.playClick();
        }
      } else {
        setHovered(false);
      }
    };

    // Detect clicks globally to trigger interactive sounds
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button, [role='button'], [data-audio-click]");
      if (clickable && !clickable.hasAttribute("data-no-chime")) {
        audioEngine.playClick();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${hovered ? "hovered" : ""}`}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />
    </>
  );
}
