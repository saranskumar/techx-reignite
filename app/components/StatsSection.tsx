"use client";

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 relative flex items-center justify-center px-6 bg-black/40 border-y border-white/5">
      <div className="max-w-4xl w-full text-center z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-10 font-semibold">07 / Expected Demographics</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">140</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#00e5ff] font-bold">Total Target</span>
          </div>
          <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">55</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">IEEE CS Members</span>
          </div>
          <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">45</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">IEEE Non-CS</span>
          </div>
          <div className="p-6 rounded-lg bg-black/25 border border-white/5 hover:border-[#00e5ff]/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">40</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">Non-IEEE Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}
