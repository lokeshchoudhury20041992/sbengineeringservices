import React from "react";
import { companyOverview } from "../data";
import { ChevronUp, ShieldAlert } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-brand-dark border-t border-zinc-900 py-12 relative z-10 overflow-hidden text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-800 pb-10 mb-10">
          
          {/* Logo brand */}
          <div className="text-center md:text-left">
            <span className="font-sans font-black text-lg tracking-[0.1em] text-white uppercase block leading-none">
              S.B. ENGINEERING
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-brand-yellow font-bold block mt-1.5 uppercase">
              SERVICES
            </span>
          </div>

          {/* Micro compliance flags */}
          <div className="flex flex-wrap gap-4 items-center justify-center text-[10px] font-mono text-zinc-500">
            <span className="border-r border-zinc-800 pr-4">ISO 9001:2015 REGISTERED</span>
            <span className="border-r border-zinc-800 pr-4">MTC COMPLIANT QC</span>
            <span>EXPORT STAGED WORKFLOWS</span>
          </div>

          {/* scroll-to-top */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded bg-brand-dark-light border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-yellow hover:border-brand-yellow transition-all cursor-pointer shadow-md"
            title="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

        </div>

        {/* Columnar directories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs mb-10">
          
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Legal Compliance &amp; Quality Assurance
            </h4>
            <p className="font-sans leading-relaxed text-zinc-400">
              {companyOverview.standards} All products leave accompanied by genuine certified Mill Test Certificates compliant with international export specifications (including ASTM, EN, ISO).
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Primary Collaborations
            </h4>
            <ul className="space-y-1.5 text-[11px] font-mono text-zinc-500">
              <li>M/s. Arup Engineering Enterprises</li>
              <li>M/s. Ramakrishna Enterprise</li>
              <li>M/s. Soham Industries</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              National Fabrication Base
            </h4>
            <p className="font-sans text-[11px] text-zinc-500 leading-relaxed">
              Howrah Industrial Complex, West Bengal, India.<br />
              Serves clients worldwide across Europe, Asia, and the Americas.
            </p>
          </div>

        </div>

        {/* Footnote copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-500">
          <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 items-center sm:items-start text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} S.B. Engineering Services. All rights reserved.
            </span>
            <span className="text-zinc-600">|</span>
            <span>
              Developed and maintained by{" "}
              <a
                href="https://tageasy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow hover:text-brand-yellow-hover underline transition"
              >
                Tageasy (tageasy.org)
              </a>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-brand-yellow" />
            Compliance Catalog Serial-wise Logged
          </span>
        </div>

      </div>
    </footer>
  );
}
