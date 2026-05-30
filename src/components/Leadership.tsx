import React from "react";
import { leadership } from "../data";
import { Award, GraduationCap, CheckCircle, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Leadership() {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="leadership" 
      ref={revealRef}
      className={`py-24 bg-white border-t border-zinc-200 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — CORPORATE CADRE
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-dark tracking-tight uppercase">
            Our Key <span className="text-brand-yellow">Leadership Team</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-xl mt-3">
            With a combined experience of over six decades in precision mechanics, we provide complete compliance planning and solid administrative execution.
          </p>
        </div>

        {/* Profiles Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {leadership.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between bg-brand-cream border border-zinc-200 rounded-xl p-6 sm:p-10 shadow-sm relative overflow-hidden group hover:border-zinc-350 transition-all duration-300"
            >
              {/* Backlight effect */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-yellow/5 rounded-full filter blur-2xl group-hover:bg-brand-yellow/10 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/80 pb-6 mb-6">
                  <div>
                    <span className="font-mono text-[9px] text-brand-yellow font-bold uppercase tracking-wider block">
                      {member.role}
                    </span>
                    <h3 className="font-sans font-black text-lg sm:text-xl text-brand-dark uppercase mt-1 leading-none">
                      {member.name}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-1 rounded-sm text-[9px] font-mono text-brand-dark tracking-wider font-bold uppercase">
                    <ShieldCheck className="w-3 h-3 text-brand-dark" />
                    Verified
                  </div>
                </div>

                {/* Pedigree & Experience */}
                <div className="space-y-4">
                  {/* Credentials */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:text-brand-yellow group-hover:border-brand-yellow/30 transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 block">
                        Academic Credentials
                      </span>
                      <p className="font-sans text-[12px] text-brand-dark mt-1 font-bold italic">
                        {member.credentials}
                      </p>
                    </div>
                  </div>

                  {/* Years Active */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:text-brand-yellow group-hover:border-brand-yellow/30 transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 block">
                        Professional Scope
                      </span>
                      <p className="font-sans text-[12px] text-brand-dark mt-1 font-bold">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bulleted Core Competency Areas */}
                <div className="mt-8 border-t border-zinc-200/80 pt-6">
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block mb-4">
                    Strategic Execution focus:
                  </span>
                  <div className="space-y-3">
                    {member.expertise.map((exp) => (
                      <div key={exp} className="flex gap-2.5 items-start">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">
                          <CheckCircle className="w-2.5 h-2.5" />
                        </div>
                        <p className="font-sans text-[11px] text-zinc-650 leading-relaxed">
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* TQM Specialization Highlight if Swapan */}
              {member.name.includes("Swapan") && (
                <div className="mt-8 bg-white border border-zinc-200 p-4 rounded-xl flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center font-mono text-[10px] text-brand-dark font-bold shrink-0">
                    AOTS
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-brand-dark leading-snug">
                      TQM Training — Japan Certified
                    </h4>
                    <p className="font-sans text-[10px] text-zinc-500 mt-0.5 leading-snug">
                      AOTS Japan specialization in Total Quality Management architectures.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
