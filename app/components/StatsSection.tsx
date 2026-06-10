"use client";

export default function StatsSection() {
  return (
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
  );
}
