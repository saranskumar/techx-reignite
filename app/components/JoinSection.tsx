"use client";

import { audioEngine } from "@/app/utils/audio";

export default function JoinSection() {
  return (
    <>
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
    </>
  );
}
