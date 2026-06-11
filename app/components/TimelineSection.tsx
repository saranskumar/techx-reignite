"use client";

interface TimelineItem {
  day: string;
  title: string;
  desc: string;
}

interface TimelineSectionProps {
  timelineData: TimelineItem[];
}

export default function TimelineSection({ timelineData }: TimelineSectionProps) {
  // Helper to split timing slots from details descriptions
  const parseTimelineContent = (desc: string) => {
    // If it contains a period followed by space, e.g. "9:00 AM – 4:00 PM. Hands-on..."
    const dotIndex = desc.indexOf(". ");
    if (dotIndex !== -1) {
      const time = desc.substring(0, dotIndex).trim();
      const details = desc.substring(dotIndex + 2).trim();
      return { time, details };
    }
    // If it contains piped items, e.g. "8:30 AM Registration | 9:30 AM..."
    if (desc.includes(" | ")) {
      return { time: "Detailed Schedule", details: desc };
    }
    return { time: "", details: desc };
  };

  return (
    <section id="timeline" className="min-h-screen relative flex items-center justify-center px-6 py-28 bg-[#1B1B1A]/40 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[var(--accent-glow)] filter blur-[90px] pointer-events-none opacity-20" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start z-10">
        
        {/* Left Column - Sticky Editorial Headers */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4 font-mono font-bold">
            06 / The Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6 leading-none">
            The 7-Day <br /> Sprint
          </h2>
          <p className="text-sm text-white/50 leading-relaxed font-light max-w-sm mb-8">
            An intensive week of technical webinars, hands-on building, competitive speed trials, and career accelerator sessions. Track your progress.
          </p>
          
          {/* Track summary detail widgets */}
          <div className="hidden lg:flex flex-col gap-4 border-t border-white/5 pt-8">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/30 font-mono">
              <span>Online Talks & Webinars</span>
              <span className="text-white/60">Days 1 - 4</span>
            </div>
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/30 font-mono">
              <span>Offline Inauguration & Sprint</span>
              <span className="text-white/60">Days 5 - 7</span>
            </div>
          </div>
        </div>

        {/* Right Column - Luxury Schedule Grid Cards */}
        <div className="lg:col-span-8 flex flex-col gap-6 w-full">
          {timelineData.map((item, index) => {
            const { time, details } = parseTimelineContent(item.desc);
            
            // Extract Day and Date tags, e.g. "Day 1 - July 13" -> "Day 1", "July 13"
            const dayParts = item.day.split(" - ");
            const dayLabel = dayParts[0] || "Day";
            const dateLabel = dayParts[1] || "";

            return (
              <div
                key={index}
                className="group relative bg-[#2A2A28]/20 hover:bg-[#2A2A28]/45 border border-white/5 hover:border-accent/25 rounded-xl p-6 md:p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Active hover vertical border reveal */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />

                {/* Card Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold bg-white/5 text-white/80 px-3 py-1 rounded-sm">
                      {dayLabel}
                    </span>
                    <span className="text-xs text-white/40 font-light font-mono">
                      {dateLabel}
                    </span>
                  </div>
                  
                  {time && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold font-mono bg-accent/10 border border-accent/20 px-3 py-1 rounded-full w-fit">
                      {time}
                    </span>
                  )}
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-display text-white mt-1 mb-3 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {details.includes(" | ") ? (
                    // Day 6 & Day 7 multi-event breakdown
                    <div className="flex flex-col gap-2.5 mt-4">
                      {details.split(" | ").map((evt, eIdx) => {
                        const parts = evt.split(" ");
                        const timeStr = parts.slice(0, 2).join(" ");
                        const labelStr = parts.slice(2).join(" ");
                        return (
                          <div key={eIdx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-l border-white/10 pl-3 py-0.5 text-xs text-white/50 hover:border-accent hover:text-white/80 transition-all">
                            <span className="font-light">{labelStr}</span>
                            <span className="font-mono text-[10px] uppercase text-accent font-bold sm:text-right">{timeStr}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    // Regular paragraph text
                    <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                      {details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
