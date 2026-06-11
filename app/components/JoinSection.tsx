"use client";

export default function JoinSection() {
  const ticketsData = [
    {
      type: "IEEE CS Member",
      price: "₹200",
      serial: "#CS-2026-001",
      desc: "For registered members of the IEEE Computer Society SCT Student Branch Chapter.",
      barcode: [1, 3, 1, 2, 1, 4, 1, 2]
    },
    {
      type: "IEEE Member (Non-CS)",
      price: "₹300",
      serial: "#IEEE-2026-002",
      desc: "For registered members of other societies under the IEEE SCT Student Branch Chapter.",
      barcode: [2, 1, 3, 1, 1, 2, 1, 3]
    },
    {
      type: "Non-IEEE Member",
      price: "₹400",
      serial: "#GEN-2026-003",
      desc: "General admission open for all external engineering students, developers, and designers.",
      barcode: [1, 2, 2, 1, 3, 1, 2, 1]
    }
  ];

  return (
    <section id="join" className="min-h-screen relative flex items-center justify-center px-6 md:px-16 lg:px-24 py-20 md:py-28 text-center bg-[#1B1B1A]/40 overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] rounded-full bg-[var(--accent-glow)] filter blur-[90px] pointer-events-none opacity-20" />

      <div className="max-w-6xl z-10 w-full">
        <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-semibold">
          08 / Registration
        </p>
        <h2 className="text-4xl md:text-6xl font-display text-white mb-2 leading-none">
          Secure Your
        </h2>
        <h2 className="text-4xl md:text-6xl font-display mb-16 leading-none inline-block max-w-none! whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] bg-gradient-to-t from-accent from-50% to-transparent to-50% bg-[size:120%_200%] bg-[position:0_0] bg-clip-text px-[0.05em] -mx-[0.05em] transition-[background-position,_webkit-text-stroke] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[position:0_100%] hover:[-webkit-text-stroke:1px_var(--color-accent)] cursor-pointer">
          Tickets
        </h2>
        
        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 text-left [perspective:1000px]">
          {ticketsData.map((ticket, tIdx) => (
            <div
              key={tIdx}
              className="group relative h-[380px] bg-[#2A2A28]/25 hover:bg-[#2A2A28]/45 border border-white/5 hover:border-accent/25 rounded-xl p-6 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Holographic scanner sweep light overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] z-10 pointer-events-none" />

              {/* Side circle notches (Physical Ticket style) */}
              <div className="absolute -left-2.5 top-[58%] -translate-y-1/2 w-5 h-8 bg-[#1B1B1A] border-r border-t border-b border-white/5 group-hover:border-accent/20 rounded-r-full z-20 transition-all duration-300" />
              <div className="absolute -right-2.5 top-[58%] -translate-y-1/2 w-5 h-8 bg-[#1B1B1A] border-l border-t border-b border-white/5 group-hover:border-accent/20 rounded-l-full z-20 transition-all duration-300" />
              
              {/* Dashed line dividing top and bottom sections */}
              <div className="absolute left-4 right-4 top-[58%] -translate-y-1/2 border-t border-dashed border-white/10 group-hover:border-accent/20 z-0 transition-colors duration-300" />

              {/* Top Section - Ticket Details */}
              <div className="z-10 flex flex-col justify-between h-[50%]">
                <div>
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-white/30 font-mono mb-3">
                    <span>TechX 2026</span>
                    <span>Sprint Pass</span>
                  </div>
                  <h3 className="text-lg font-display text-white group-hover:text-accent transition-colors duration-300 leading-none">
                    {ticket.type}
                  </h3>
                </div>
                <p className="text-[11px] text-white/50 leading-relaxed font-light mb-2">
                  {ticket.desc}
                </p>
              </div>

              {/* Bottom Section - Barcodes and Price */}
              <div className="z-10 flex flex-col justify-end h-[42%]">
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-display text-white group-hover:text-accent transition-colors duration-300">
                    {ticket.price}
                  </span>
                  
                  <div className="flex flex-col items-end gap-1.5 select-none pr-1">
                    {/* Dynamic Barcode Graphic */}
                    <div className="flex gap-[1px] h-6 items-end opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      {ticket.barcode.map((width, bIdx) => (
                        <div
                          key={bIdx}
                          className="bg-white h-full rounded-sm"
                          style={{ width: `${width}px` }}
                        />
                      ))}
                    </div>
                    <span className="text-[8px] font-mono text-white/20 tracking-widest">
                      {ticket.serial}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Main CTA Registration Trigger Button */}
        <button
          onClick={() => {
            alert("Registration system initiated. Welcome to TechX Reignite.");
          }}
          className="group px-12 py-5 text-xs uppercase tracking-[0.3em] font-semibold bg-accent text-[#0B0B0B] border border-accent hover:border-white/20 rounded-full hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex items-center justify-center gap-2 mx-auto relative overflow-hidden shadow-[0_0_20px_rgba(191,199,207,0.15)] hover:shadow-none"
        >
          <span className="absolute inset-0 bg-[#0B0B0B] scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-hover:origin-left z-0" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>Claim Your Spot</span>
            <svg 
              className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1 text-[#0B0B0B] group-hover:text-accent" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
