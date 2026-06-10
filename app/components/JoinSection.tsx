"use client";

import { audioEngine } from "@/app/utils/audio";

export default function JoinSection() {
  return (
    <>
      <section id="join" className="min-h-screen relative flex items-center justify-center px-6 py-24 text-center">
        <div className="max-w-4xl z-10 w-full">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-8 font-semibold">Ready to begin</p>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-2 leading-none">
            Secure Your
          </h2>
          <h2 className="text-5xl md:text-7xl font-display text-outline mb-12 leading-none">
            Access Pass
          </h2>
          
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 text-left">
            <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-2 font-mono">IEEE CS Member</span>
                <p className="text-[11px] text-secondary-text/50 font-light leading-relaxed">For registered members of the IEEE Computer Society SCT SBC.</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-display text-white">₹200</span>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-2 font-mono">IEEE Member (Non-CS)</span>
                <p className="text-[11px] text-secondary-text/50 font-light leading-relaxed">For registered members of other IEEE SCT SBC societies.</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-display text-white">₹300</span>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/30 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold block mb-2 font-mono">Non-IEEE Member</span>
                <p className="text-[11px] text-secondary-text/50 font-light leading-relaxed">Open registration for all external students and developers.</p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-display text-white">₹400</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => {
              audioEngine.playSwell();
              alert("Registration system initiated. Welcome to TechX Reignite.");
            }}
            className="px-12 py-5 text-xs uppercase tracking-[0.3em] font-semibold bg-accent text-black rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(191,199,207,0.4)] transition-all cursor-pointer"
          >
            Claim Your Spot
          </button>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="py-16 border-t border-primary-border text-center text-[10px] text-secondary-text/30 font-light tracking-[0.3em] relative z-10 bg-primary-bg/80">
        © 2026 IEEE TECHX REIGNITE. POWERED BY BUILDERS. ALL RIGHTS RESERVED.
      </footer>
    </>
  );
}
