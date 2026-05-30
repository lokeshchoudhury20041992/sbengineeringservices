import React, { useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Factory } from "lucide-react";
import { companyOverview } from "../data";
import indianEngineers from "../assets/indian_engineers.webp";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-brand-dark pt-32 pb-32 flex flex-col justify-center overflow-hidden">
      {/* Spectacular full-width blueprint mesh and glow backlights */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-yellow/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute -left-20 top-40 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main content grid using full-width container directly */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Bold display typography and copy with smooth load-in slide animation */}
          <div 
            className={`lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 transition-all duration-1000 ease-out transform ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            
            {/* Top micro-badge */}
            <div id="certified-badge" className="inline-flex items-center gap-2 bg-brand-dark-light border border-zinc-800 px-3.5 py-1.5 rounded-full shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-yellow" />
              <span className="font-mono text-[9px] tracking-widest text-zinc-300 font-bold uppercase">
                ISO 9001:2015 Compliance Standard
              </span>
            </div>

            {/* Spectacular full-size display title */}
            <h1 className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] uppercase">
              Building Dreams <br />
              <span className="text-brand-yellow">Into Reality</span>
            </h1>

            {/* Mockup Circle Arrow & CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                id="discuss-project-circle"
                onClick={() => handleScrollToSection("#contact")}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark flex items-center justify-center transition-all duration-300 shadow-xl hover:scale-105 group cursor-pointer"
                aria-label="Discuss Project"
              >
                <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-brand-dark transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleScrollToSection("#contact")}
                  className="inline-flex items-center justify-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-all duration-200 cursor-pointer shadow-md"
                >
                  Discuss RFQ
                </button>
                <button
                  onClick={() => handleScrollToSection("#products")}
                  className="inline-flex items-center justify-center bg-brand-dark-light border border-zinc-800 hover:border-zinc-600 text-white font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-all duration-200 cursor-pointer"
                >
                  Explore Catalog
                </button>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
              {companyOverview.about} Delivering export-ready CNC/BNC fabrication and structural steel excellence for over two decades.
            </p>

            {/* Technical indicators / stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 w-full border-t border-zinc-800">
              <div>
                <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white">40+</div>
                <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-bold">
                  Years Team Experience
                </div>
              </div>
              <div>
                <div className="font-sans text-3xl sm:text-4xl font-extrabold text-brand-yellow">100%</div>
                <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-bold">
                  MTC Cert &amp; Audited
                </div>
              </div>
              <div>
                <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white">Global</div>
                <div className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-zinc-500 mt-1 font-bold">
                  Export Staging
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full-height dynamic interactive image card directly in layout with slide-in from right */}
          <div 
            className={`lg:col-span-5 relative w-full transition-all duration-1000 delay-300 ease-out transform ${
              isMounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
            }`}
          >
            <div className="relative w-full h-[450px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              
              {/* Engineers Image */}
              <img
                src={indianEngineers}
                alt="S.B. Engineering Services professional Indian mechanical and civil engineers"
                fetchPriority="high"
                className="w-full h-full object-cover relative z-10 opacity-75 hover:scale-102 transition-transform duration-1000 select-none"
              />

              {/* Deep gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent z-20 pointer-events-none" />

              {/* Floating ambient CNC status card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark-light/95 backdrop-blur-md border border-zinc-800 p-5 rounded-lg flex items-center gap-4 shadow-2xl text-white z-30">
                <div className="p-3 bg-brand-yellow/10 border border-brand-yellow/20 rounded">
                  <Factory className="w-5 h-5 text-brand-yellow" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-sans font-bold text-xs text-white">
                    Heavy-Duty CNC Production
                  </h4>
                  <p className="font-sans text-[10px] text-zinc-400 mt-0.5">
                    Live coordination with Howrah industrial complex units
                  </p>
                </div>
              </div>

              {/* Spinning badge similar to the "BUILD YOUR PROJECT" badge */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-brand-dark/95 border border-zinc-800 backdrop-blur-sm flex items-center justify-center p-2 animate-[spin_25s_linear_infinite] z-30 shadow-lg">
                <div className="text-center font-mono text-[7px] text-brand-yellow font-bold uppercase tracking-wider leading-tight">
                  Precision • CNC • BNC • STEEL •
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
