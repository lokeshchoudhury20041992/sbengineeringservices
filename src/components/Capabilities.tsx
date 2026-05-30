import React from "react";
import { capabilities } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import TiltCard from "./TiltCard";
import {
  Cpu,
  Settings,
  Layers,
  FileSpreadsheet,
  Shuffle,
  Construction,
  Wrench,
  Truck
} from "lucide-react";

// Safe mapping for Lucide React components in React 19 / TS
const iconMap: Record<string, React.FC<any>> = {
  Cpu,
  Settings,
  Layers,
  FileSpreadsheet,
  Shuffle,
  Construction,
  Wrench,
  Truck,
};

export default function Capabilities() {
  const [revealRef, isVisible] = useScrollReveal();

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="capabilities" 
      ref={revealRef}
      className={`py-24 bg-white border-t border-zinc-200 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mockup Header: OUR SERVICE: A Comprehensive Set Of Services */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — OUR SERVICE
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-[1.1] uppercase">
            A Comprehensive Set <br />
            Of Services
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl mt-4">
            Fully integrated CNC lathes, BNC fabrication bays, and raw-material processing units delivering components across extreme compliance benchmarks.
          </p>
        </div>

        {/* Mockup High-Contrast Bento Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {capabilities.map((cap, idx) => {
            const IconComponent = iconMap[cap.iconName] || Settings;

            // Cycle through white, black, and yellow cards exactly matching mockup style
            const cardStyleIndex = idx % 3;
            let cardBgClass = "bg-white border-zinc-200 text-brand-dark hover:border-zinc-300";
            let iconBgClass = "bg-zinc-100 text-zinc-500 border-zinc-200";
            let subtitleClass = "text-zinc-400";
            let titleClass = "text-brand-dark";
            let descClass = "text-zinc-600";
            let dotClass = "bg-zinc-200 group-hover:bg-brand-yellow";

            if (cardStyleIndex === 1) {
              // Sleek Black Card
              cardBgClass = "bg-brand-dark border-zinc-800 text-white hover:border-zinc-700 shadow-lg";
              iconBgClass = "bg-brand-dark-light text-brand-yellow border-zinc-800";
              subtitleClass = "text-zinc-500";
              titleClass = "text-white";
              descClass = "text-zinc-400";
              dotClass = "bg-zinc-800 group-hover:bg-brand-yellow";
            } else if (cardStyleIndex === 2) {
              // Vibrant Gold-Yellow Card
              cardBgClass = "bg-brand-yellow border-brand-yellow text-brand-dark hover:shadow-md";
              iconBgClass = "bg-brand-dark text-brand-yellow border-brand-dark";
              subtitleClass = "text-brand-dark/40 font-extrabold";
              titleClass = "text-brand-dark";
              descClass = "text-brand-dark/80";
              dotClass = "bg-brand-dark/10 group-hover:bg-brand-dark";
            }

            return (
              <TiltCard
                id={`capability-card-${cap.id}`}
                key={cap.id}
                className={`group relative flex flex-col justify-between p-8 rounded-xl border shadow-sm ${cardBgClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="tilt-layer">
                  {/* Icon Frame */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300 mb-6 ${iconBgClass}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`font-sans text-lg font-black uppercase tracking-wide leading-snug ${titleClass}`}>
                    {cap.title}
                  </h3>
                  <p className={`font-sans text-xs mt-3 leading-relaxed ${descClass}`}>
                    {cap.description}
                  </p>
                </div>

                {/* Card footer indicator line */}
                <div className={`border-t mt-8 pt-4 flex justify-between items-center ${cardStyleIndex === 1 ? "border-zinc-800" : cardStyleIndex === 2 ? "border-brand-dark/10" : "border-zinc-100"}`}>
                  <span className={`font-mono text-[9px] uppercase tracking-widest ${subtitleClass}`}>
                    MTC TRACEABLE
                  </span>
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${dotClass}`} />
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Dynamic callout banner aligning with export readiness details */}
        <div className="mt-16 bg-brand-cream p-6 sm:p-8 rounded-xl border border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow border border-brand-yellow/20">
              <span className="font-mono text-xs font-black text-brand-dark">QS</span>
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-brand-dark uppercase tracking-wide">
                Need Specific Part Machining?
              </h4>
              <p className="font-sans text-xs text-zinc-500 mt-0.5">
                We manufacture exactly to custom drawing parameters with formal Material Test Certificates (MTC).
              </p>
            </div>
          </div>
          <button
            onClick={() => handleScrollToSection("#contact")}
            className="w-full md:w-auto text-center bg-brand-dark hover:bg-zinc-800 text-white font-sans font-bold uppercase text-[10px] tracking-widest px-6 py-4 rounded-sm transition-colors duration-200 cursor-pointer shadow-sm"
          >
            Request custom quote
          </button>
        </div>

      </div>
    </section>
  );
}
