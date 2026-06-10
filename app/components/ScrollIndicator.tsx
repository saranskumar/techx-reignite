"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Vertical Scroll Progress Bar (Right Edge) */}
      <div className="fixed top-0 right-0 w-[3px] h-screen bg-white/5 z-40 pointer-events-none">
        <div 
          className="w-full bg-accent origin-top transition-transform duration-75 shadow-[0_0_8px_var(--accent-color)]"
          style={{ 
            height: "100%", 
            transform: `scaleY(${progress})` 
          }}
        />
      </div>

      {/* Fixed Rotated Scroll Label (Bottom Right) */}
      <div className="fixed right-8 bottom-24 z-40 pointer-events-none hidden md:flex items-center gap-4 origin-right rotate-90 translate-x-[40%] translate-y-[50%]">
        <span 
          className="w-12 h-[1px] bg-white/20 origin-left transition-transform duration-75" 
          style={{ transform: `scaleX(${1 + progress * 0.5})` }} 
        />
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">SCROLL</span>
      </div>
    </>
  );
}
