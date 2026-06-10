"use client";

export default function StatsSection() {
  return (
    <section id="stats" className="py-24 relative flex items-center justify-center px-6 bg-[#0E0E0E]/40 border-y border-primary-border">
      <div className="max-w-4xl w-full text-center z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary-text/40 mb-10 font-semibold">07 / Expected Demographics</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">140</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Total Target</span>
          </div>
          <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">55</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-text/50 font-light">IEEE CS Members</span>
          </div>
          <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">45</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-text/50 font-light">IEEE Non-CS</span>
          </div>
          <div className="p-6 rounded-lg bg-primary-card border border-primary-border hover:border-accent/20 transition-all">
            <span className="block text-5xl md:text-6xl font-display text-outline mb-2">40</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary-text/50 font-light">Non-IEEE Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}
