import React from "react";
import { companyOverview, companyStats } from "../data";
import { Target, Compass, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import aboutMachinery from "../assets/about_machinery.webp";

export default function Overview() {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="overview" 
      ref={revealRef}
      className={`py-20 sm:py-28 bg-white overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: company overview */}
        <div className="border-t border-zinc-200 pt-10 mb-12">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — COMPANY OVERVIEW
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-[1.1] uppercase max-w-4xl">
            Precision Machining <br />
            &amp; Industrial Solutions
          </h2>
        </div>

        {/* Mockup Banner Image: Yellow loader working on dirt */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-xl overflow-hidden border border-zinc-200 shadow-md mb-12">
          <img
            src={aboutMachinery}
            alt="Bulldozer heavy loader machinery at Indian site"
            loading="lazy"
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
        </div>

        {/* Company profile text & description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <p className="font-sans text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
              {companyOverview.about}
            </p>
          </div>
          <div className="lg:col-span-6 bg-brand-cream border border-zinc-200/80 p-6 sm:p-8 rounded-xl shadow-sm">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-sans font-bold text-sm text-brand-dark uppercase tracking-wider mb-2">
                  Compliance and Quality Standards
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {companyOverview.standards}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-zinc-200 mb-24 text-center">
          {companyStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                idx % 2 === 1 ? "border-l border-zinc-200" : idx > 0 ? "md:border-l md:border-zinc-200" : ""
              }`}
            >
              <span className="font-sans font-black text-4xl sm:text-5xl text-brand-dark leading-none">
                {stat.value}
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest mt-2 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission */}
          <div className="relative p-8 rounded-xl bg-brand-cream border border-zinc-200 shadow-sm group hover:border-zinc-300 transition-all duration-300">
            <div className="absolute top-8 right-8 text-brand-yellow/5 group-hover:text-brand-yellow/15 transition-colors">
              <Target className="w-16 h-16 stroke-1" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20">
                <Target className="w-4 h-4 text-brand-yellow" />
              </div>
              <h3 className="font-sans font-black text-base uppercase tracking-wider text-brand-dark">
                Our Mission
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {companyOverview.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="relative p-8 rounded-xl bg-brand-cream border border-zinc-200 shadow-sm group hover:border-zinc-300 transition-all duration-300">
            <div className="absolute top-8 right-8 text-brand-yellow/5 group-hover:text-brand-yellow/15 transition-colors">
              <Compass className="w-16 h-16 stroke-1" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center border border-brand-yellow/20">
                <Compass className="w-4 h-4 text-brand-yellow" />
              </div>
              <h3 className="font-sans font-black text-base uppercase tracking-wider text-brand-dark">
                Our Vision
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {companyOverview.vision}
            </p>
          </div>
        </div>

        {/* Operational Values */}
        <div>
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
              THE BLUEPRINT OF ACTION
            </span>
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-brand-dark tracking-tight uppercase">
              Our Core <span className="text-brand-yellow">Operational Values</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyOverview.coreValues.map((value, idx) => (
              <div
                key={value.title}
                className="relative p-6 rounded-xl bg-brand-cream border border-zinc-200/80 hover:bg-white hover:border-zinc-300 transition-all duration-200 shadow-sm"
              >
                <div className="font-mono italic text-3xl font-black text-brand-yellow/70 leading-none absolute top-5 right-5 pointer-events-none select-none">
                  {value.value}
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full pt-2">
                  <div>
                    <h4 className="font-mono text-[9px] font-bold uppercase tracking-wider text-brand-yellow">
                      {value.label}
                    </h4>
                    <p className="font-sans text-base font-bold text-brand-dark mt-2 leading-snug uppercase">
                      {value.title}
                    </p>
                  </div>
                  <div className="w-12 h-0.5 bg-brand-yellow mt-6 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
