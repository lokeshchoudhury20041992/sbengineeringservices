import React from "react";
import { companyOverview } from "../data";
import { ChevronUp, ShieldAlert } from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="footer" className="relative z-10">
      {/* Top Section: Clean White Background for Logo Visibility */}
      <div className="bg-white border-t border-zinc-200 py-10 text-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Logo brand */}
            <div className="text-center md:text-left flex items-center justify-center md:justify-start">
              <img 
                src={logo} 
                alt="S.B. Engineering Services Logo" 
                className="h-10 sm:h-12 w-auto object-contain hover:scale-[1.02] transition-transform duration-300" 
              />
            </div>

            {/* Micro compliance flags */}
            <div className="flex flex-wrap gap-4 items-center justify-center text-[10px] font-mono text-zinc-500">
              <span className="border-r border-zinc-200 pr-4">ISO 9001:2015 REGISTERED</span>
              <span className="border-r border-zinc-200 pr-4">MTC COMPLIANT QC</span>
              <span>EXPORT STAGED WORKFLOWS</span>
            </div>

            {/* scroll-to-top */}
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-brand-yellow hover:border-brand-yellow hover:bg-white transition-all cursor-pointer shadow-sm"
              title="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>

      {/* Bottom Section: Premium Dark/Black Background */}
      <footer className="bg-black py-16 text-zinc-400 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Columnar directories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs mb-12">
            
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-500 border-t border-zinc-900/60 pt-8">
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
    </div>
  );
}
