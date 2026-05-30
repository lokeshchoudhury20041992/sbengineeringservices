import React from "react";
import { skidPortfolio, technicalExpertise } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Activity, Monitor, Compass, FileText } from "lucide-react";

export default function SkidPortfolio() {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="skid-portfolio" 
      ref={revealRef}
      className={`py-24 bg-white border-t border-zinc-200 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — PROCESS SYSTEMS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-dark tracking-tight uppercase">
            Industrial <span className="text-brand-yellow">Skid Portfolio</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl mt-3">
            We deliver state-of-the-art process skids engineered for high-pressure gas processing, mechanical fluid metering, vapour recovery, and chemical injection.
          </p>
        </div>

        {/* Skid Range Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: The SKID portfolio lists */}
          <div className="lg:col-span-7">
            <h3 className="font-sans font-black text-base text-brand-dark mb-6 uppercase tracking-wider">
              Modular Integration Range
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skidPortfolio.map((skid, idx) => (
                <div
                  key={skid.name}
                  className="p-5 rounded-md border border-zinc-200 bg-brand-cream flex items-center gap-3.5 hover:bg-white hover:border-zinc-300 transition-all duration-200 shadow-sm"
                >
                  <div className="w-8 h-8 rounded bg-brand-yellow text-brand-dark flex items-center justify-center font-mono text-[11px] font-black">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                  <span className="font-sans text-[12px] font-black text-brand-dark uppercase tracking-wide">
                    {skid.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Callout information */}
            <div className="mt-8 p-5 rounded-xl border border-dashed border-zinc-300 bg-brand-cream flex items-start gap-4 shadow-sm">
              <div className="flex-shrink-0 text-brand-yellow mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-brand-dark uppercase tracking-wider">
                  Custom Engineering Available
                </h4>
                <p className="font-sans text-xs text-zinc-650 mt-2 leading-relaxed">
                  Every process system skid can be fabricated to custom dimensional footprints, extreme temperature cycles, and specific piping layout standards requested by EPC companies.
                </p>
              </div>
            </div>
          </div>

          {/* Right Block: Process Engineering & Automation */}
          <div className="lg:col-span-5 bg-brand-cream border border-zinc-200 p-6 sm:p-8 rounded-xl shadow-sm">
            <div className="mb-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-brand-yellow font-bold block">
                Technical Design Core
              </span>
              <h3 className="font-sans font-black text-base text-brand-dark mt-1 uppercase tracking-wide">
                Process &amp; Automation Tools
              </h3>
              <p className="font-sans text-xs text-zinc-500 mt-1">
                Advanced software suites utilized for mass simulation, fluid thermodynamics, solid modeling, and SCADA programming.
              </p>
            </div>

            <div className="space-y-6">
              {technicalExpertise.map((tech) => (
                <div key={tech.category} className="border-t border-zinc-200 pt-5 first:border-0 first:pt-0">
                  <h4 className="font-sans text-xs font-black text-brand-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                    {tech.category === "Process Engineering" && <Activity className="w-4 h-4 text-zinc-400" />}
                    {tech.category === "Automation Systems" && <Monitor className="w-4 h-4 text-zinc-400" />}
                    {tech.category === "CAD Design & Drafting Tools" && <Compass className="w-4 h-4 text-zinc-400" />}
                    {tech.category}
                  </h4>
                  <ul className="space-y-2">
                    {tech.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-mono text-[10px] text-zinc-600 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Simulated live telemetry indicator */}
            <div className="mt-8 bg-white p-4 rounded-lg border border-zinc-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[9px] uppercase text-emerald-700 font-bold">
                  PLANT AUTOMATION LIVE
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                EPC ALIGNED
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
