import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldAlert, Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const [revealRef, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partCategory: "CNC Turning, Milling & Machining",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API transport latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        partCategory: "CNC Turning, Milling & Machining",
        requirements: "",
      });
      // Clear success alert after 4.5 seconds
      setTimeout(() => setIsSubmitted(false), 4500);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={revealRef}
      className={`py-24 bg-white border-t border-zinc-200 relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details & instructions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
                — PARTNER WITH US
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-dark tracking-tight uppercase">
                Request a <br />
                <span className="text-brand-yellow">Technical RFQ</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 mt-4 leading-relaxed max-w-sm">
                Submit raw dimension specifications, 2D drawing blueprints, or CAD assemblies. Our technical director reviews every project scope to verify tolerances and MTC parameters.
              </p>

              {/* Physical details block */}
              <div className="mt-10 space-y-6">
                
                {/* Physical address office */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-dark">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block">
                      Operations Hub
                    </span>
                    <p className="font-sans text-xs text-brand-dark mt-1 leading-snug font-bold">
                      Kantalia Industrial Complex, Howrah — West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Email coordinates */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-dark">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block">
                      Secure Corporate Email
                    </span>
                    <a
                      href="mailto:coordination@sbengineeringservices.com"
                      className="font-sans text-xs text-brand-dark mt-1 hover:text-brand-yellow-hover underline decoration-brand-yellow transition block font-bold"
                    >
                      coordination@sbengineeringservices.com
                    </a>
                  </div>
                </div>

                {/* Response cycle */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-dark">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block">
                      Response Cycle
                    </span>
                    <p className="font-sans text-xs text-brand-dark mt-1 leading-snug font-bold">
                      RFQ estimates dispatched within 24–48 working hours.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Verification assurance label */}
            <div className="mt-12 lg:mt-0 p-4 rounded-lg bg-brand-cream border border-zinc-200 max-w-sm flex gap-3 shadow-sm">
              <div className="text-brand-yellow mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <p className="font-sans text-[10px] text-zinc-500 leading-normal">
                All uploaded blueprints, technical specifications, and proprietary part geometries remain audited under strict NDA safeguards.
              </p>
            </div>

          </div>

          {/* Right Column: Custom interactive form */}
          <div className="lg:col-span-7 bg-brand-cream border border-zinc-200 p-6 sm:p-10 rounded-2xl shadow-sm hover:border-zinc-350 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Contact Name */}
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="block w-full bg-white border border-zinc-200 rounded-md text-xs text-brand-dark p-3.5 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">
                    Corporate Entity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. M/s. Global Steel EPC"
                    className="block w-full bg-white border border-zinc-200 rounded-md text-xs text-brand-dark p-3.5 focus:outline-none focus:border-brand-yellow transition-colors"
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="block w-full bg-white border border-zinc-200 rounded-md text-xs text-brand-dark p-3.5 focus:outline-none focus:border-brand-yellow transition-colors"
                />
              </div>

              {/* Category of part machining */}
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">
                  Scope of Machining/Fabrication
                </label>
                <select
                  value={formData.partCategory}
                  onChange={(e) => setFormData({ ...formData, partCategory: e.target.value })}
                  className="block w-full bg-white border border-zinc-200 rounded-md text-xs text-brand-dark p-3.5 focus:outline-none focus:border-brand-yellow transition-colors cursor-pointer"
                >
                  <option>CNC Turning, Milling &amp; Machining</option>
                  <option>Custom Wedge/Plunger Fabrication</option>
                  <option>Structural Steel Fabrication &amp; Erection</option>
                  <option>Pressure Tanks &amp; Utility Piping</option>
                  <option>Process SKID Systems</option>
                  <option>Supply of Specialized Piping Materials</option>
                </select>
              </div>

              {/* Blueprints and requirements details */}
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-2 font-bold">
                  Part Drawings &amp; Tolerances (Blueprints / Details)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Describe material grading, exact tolerance limits, or dimensional specs. You can also specify model numbers for standard parts..."
                  className="block w-full bg-white border border-zinc-200 rounded-md text-xs text-brand-dark p-3.5 focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                {isSubmitted ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-md text-xs flex items-center gap-3 animate-pulse">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>RFQs logged in local queue. A mechanical estimator will connect safely via {formData.email || "provided corporate mail"}.</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest py-4 rounded-md transition-all duration-200 disabled:opacity-50 select-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      "TRANSIT PACK... SUBMITTING"
                    ) : (
                      <>
                        Submit RFQ Scope
                        <Send className="w-4 h-4 ml-0.5 text-brand-dark" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
