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
  return (
    <section id="timeline" className="min-h-screen relative flex flex-col justify-center px-6 py-24 bg-black/20">
      <div className="max-w-4xl w-full mx-auto z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">06 / The Schedule</p>
        <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-none">The 7-Day Sprint</h2>
        
        <div className="timeline-container pl-8 md:pl-0">
          <div className="timeline-line" />
          
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-16 flex flex-col md:flex-row items-start md:justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="timeline-dot" />
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">{item.day}</span>
                <h3 className="text-2xl font-display text-white mt-2 mb-3 leading-none">{item.title}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="hidden md:block w-[10%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
