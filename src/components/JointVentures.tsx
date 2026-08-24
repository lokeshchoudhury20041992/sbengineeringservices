import React from "react";
import { jointVentures, technicalDirector } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MapPin, Check, Briefcase, Network, ShieldCheck, GraduationCap, Award, CheckCircle, Phone, Mail } from "lucide-react";

export default function JointVentures() {
  const [revealRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="joint-ventures" 
      ref={revealRef}
      className={`py-24 bg-white border-t border-zinc-200 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — JOINT ALLIANCES
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-dark tracking-tight uppercase">
            Joint Ventures &amp; <span className="text-brand-yellow">Expert Partners</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-2xl mt-3 leading-relaxed">
            We collaborate with leading experts and firms to extend our reach in the international market, providing unparalleled engineering services.
          </p>
        </div>

        {/* Technical Director — engineering authority over the alliance network */}
        <div className="relative mb-16 rounded-2xl bg-brand-dark border border-zinc-800 overflow-hidden shadow-lg">
          {/* Top accent + backlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 relative">

            {/* Identity & pedigree */}
            <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-dark px-2.5 py-1 rounded-sm font-mono text-[9px] font-black uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 stroke-[2.5]" />
                {technicalDirector.role}
              </span>

              <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight mt-4 leading-tight">
                {technicalDirector.name}
              </h3>

              {/* Post-nominals and memberships */}
              {technicalDirector.qualifications && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {technicalDirector.qualifications.map((qualification) => (
                    <span
                      key={qualification}
                      className="font-mono text-[8px] uppercase tracking-widest text-zinc-300 font-bold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      {qualification}
                    </span>
                  ))}
                </div>
              )}

              <p className="font-sans text-[11px] sm:text-xs text-zinc-400 leading-relaxed mt-3 max-w-md">
                Directs engineering oversight, technical vetting, and quality assurance across every alliance workshop in our network — an in-house directorship, not an alliance partner.
              </p>

              <div className="space-y-4 mt-8">
                {/* Credentials */}
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                      Credentials &amp; Affiliations
                    </span>
                    <p className="font-sans text-[12px] text-zinc-100 mt-1 font-bold italic">
                      {technicalDirector.credentials}
                    </p>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                      Professional Scope
                    </span>
                    <p className="font-sans text-[12px] text-zinc-100 mt-1 font-bold">
                      {technicalDirector.experience}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution focus + TQM highlight */}
            <div className="p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-4">
                  Strategic Execution Focus
                </span>
                <div className="space-y-3">
                  {technicalDirector.expertise.map((exp) => (
                    <div key={exp} className="flex gap-2.5 items-start">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-yellow/10 border border-brand-yellow/25 flex items-center justify-center text-brand-yellow mt-0.5">
                        <CheckCircle className="w-2.5 h-2.5" />
                      </div>
                      <p className="font-sans text-[11px] text-zinc-300 leading-relaxed">
                        {exp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AOTS TQM certification */}
              <div className="mt-8 bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded bg-brand-yellow/15 border border-brand-yellow/25 flex items-center justify-center font-mono text-[10px] text-brand-yellow font-bold shrink-0">
                  AOTS
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white leading-snug">
                    TQM Training — Japan Certified
                  </h4>
                  <p className="font-sans text-[10px] text-zinc-400 mt-0.5 leading-snug">
                    Special training in Total Quality Management (TQM) received from AOTS, Japan.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Direct contact */}
          <div className="relative border-t border-white/10 px-6 sm:px-10 py-6 sm:py-7 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            <div className="flex items-start gap-3.5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                  Address
                </span>
                <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed">
                  {technicalDirector.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                  Mobile
                </span>
                <div className="flex flex-col gap-0.5 mt-1">
                  {(technicalDirector.phones ?? []).map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="font-sans text-[11px] text-zinc-300 hover:text-brand-yellow transition-colors duration-200 whitespace-nowrap"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                  E-mail
                </span>
                <div className="flex flex-col gap-0.5 mt-1">
                  {(technicalDirector.emails ?? []).map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="font-sans text-[11px] text-zinc-300 hover:text-brand-yellow transition-colors duration-200 break-words"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alliance network label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 font-bold uppercase whitespace-nowrap">
            Alliance Network
          </span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* Joint Ventures Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {jointVentures.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col justify-between bg-brand-cream border border-zinc-200 hover:border-zinc-350 rounded-xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden shadow-sm"
            >
              {/* Backlight shine effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full filter blur-xl group-hover:bg-brand-yellow/10 transition-all duration-500" />
              
              {/* Top border accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Alliance Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded bg-white border border-zinc-200 flex items-center justify-center text-brand-yellow group-hover:border-brand-yellow/50 transition-colors shadow-sm shrink-0">
                    <Briefcase className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-brand-yellow font-bold uppercase tracking-widest block">
                      Alliance Partner
                    </span>
                    <h3 className="font-sans font-black text-sm text-brand-dark uppercase tracking-wide leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                </div>

                {/* Physical Location Address */}
                <div className="flex items-start gap-2 bg-white p-3.5 rounded-lg border border-zinc-200/80 mb-6 group-hover:border-zinc-300 transition shadow-sm">
                  <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest block font-bold mb-0.5">
                      {partner.addressLabel}
                    </span>
                    <span className="font-sans text-[11px] text-zinc-650 leading-relaxed font-semibold">
                      {partner.address}
                    </span>
                  </div>
                </div>

                {/* List of Partner Capabilities */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block font-bold">
                    Supported Workflows
                  </span>
                  <div className="space-y-2.5">
                    {partner.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex-shrink-0 w-4 h-4 bg-brand-yellow/10 rounded flex items-center justify-center border border-brand-yellow/20">
                          <Check className="w-2.5 h-2.5 text-brand-dark stroke-[3]" />
                        </div>
                        <span className="font-sans text-[11px] text-zinc-600 leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="border-t border-zinc-200/80 mt-8 pt-4 flex items-center gap-2">
                <Network className="w-4 h-4 text-zinc-400" />
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-black">
                  ESTABLISHED CO-ALLIANCE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
