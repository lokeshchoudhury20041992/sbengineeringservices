import React, { useState } from "react";
import { productRange, exportReadiness } from "../data";
import { CheckCircle, Search, HelpCircle, Send, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import TiltCard from "./TiltCard";

export default function ProductRange() {
  const [revealRef, isVisible] = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<typeof productRange[0] | null>(null);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryText, setEnquiryText] = useState("");

  const categories = ["All", ...Array.from(new Set(productRange.map((product) => product.category)))];

  const filteredProducts = productRange.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryText.trim()) return;
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setEnquiryText("");
      setActiveProduct(null);
    }, 3000);
  };

  return (
    <section 
      id="products" 
      ref={revealRef}
      className={`py-24 bg-brand-dark border-t border-zinc-905 border-zinc-900 overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: export-ready product range */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
              — PRODUCT RANGE
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
              Export-Ready <br />
              <span className="text-brand-yellow">Product Range</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-3">
              Components machined and fabricated to ISO, EN, and ASTM specifications — dispatched with Material Test Certificates, serial-wise marking, and seaworthy crating.
            </p>
          </div>
          {/* Custom Search Box in Dark Theme */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-500" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog items (e.g. Couplings, Bolts)..."
                className="block w-full pl-10 pr-4 py-3.5 bg-brand-dark-light border border-zinc-800 rounded-md text-xs tracking-wider text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Filter categories buttons in Dark Theme */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-sm text-[10px] uppercase tracking-wider font-mono font-medium transition-all duration-200 border cursor-pointer select-none ${
                selectedCategory === cat
                  ? "bg-brand-yellow hover:bg-brand-yellow-hover border-brand-yellow text-brand-dark font-bold shadow-md"
                  : "bg-brand-dark-light hover:bg-zinc-800 border-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid in Sleek Dark-Mode */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {filteredProducts.map((product, idx) => (
            <TiltCard
              key={product.name}
              maxTilt={6}
              className="flex flex-col bg-brand-dark-light border border-zinc-800 hover:border-zinc-700 rounded-lg overflow-hidden shadow-xl group"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-950">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-dark/90 border border-zinc-800 px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-brand-yellow uppercase font-bold">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-base font-bold text-white group-hover:text-brand-yellow transition-colors duration-200 uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 mt-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 mt-6 pt-4 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                    SERIAL: SB-PR-{1000 + idx}
                  </span>
                  <button
                    onClick={() => setActiveProduct(product)}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow hover:text-brand-yellow-hover transition-colors cursor-pointer"
                  >
                    Tech Sheet <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}

          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12 bg-brand-dark-light border border-dashed border-zinc-800 rounded-xl">
              <HelpCircle className="w-12 h-12 text-zinc-600 mx-auto" />
              <h4 className="font-sans font-medium text-zinc-400 mt-4 mx-auto uppercase">No components found</h4>
              <p className="font-sans text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                No specifications match "{searchQuery}". Contact us directly for custom-machining drawing requests.
              </p>
            </div>
          )}
        </div>

        {/* Export certification banners inside catalog - Dark layout */}
        <div className="mt-20">
          <div className="bg-brand-dark-light border border-zinc-800 rounded-xl p-6 sm:p-10 shadow-lg">
            <h3 className="font-sans font-black text-lg text-white mb-6 uppercase tracking-wider">
              Export Readiness &amp; Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exportReadiness.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Product Spec Sheet / Instant Enquiry Modal - Dark-mode styled */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"
            onClick={() => setActiveProduct(null)}
          />
          <div className="relative w-full max-w-xl bg-brand-dark-light border border-zinc-800 rounded-xl p-6 shadow-2xl z-10 overflow-y-auto max-h-[90vh] text-white">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="font-mono text-[9px] text-brand-yellow uppercase tracking-widest font-black block">
                  {activeProduct.category}
                </span>
                <h3 className="font-sans font-black text-lg text-white mt-1 border-b border-transparent uppercase tracking-wider">
                  {activeProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveProduct(null)}
                className="p-1 px-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
                aria-label="Close specification panel"
              >
                ✕
              </button>
            </div>

            <div className="bg-brand-dark rounded-lg p-4 border border-zinc-800 mb-6">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-2 font-bold">
                Technical Specifications &amp; Standards
              </span>
              <ul className="space-y-2 font-sans text-xs text-zinc-300">
                <li className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-500">Origin / Unit</span>
                  <span>Howrah, West Bengal, India</span>
                </li>
                <li className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-500">Material Grading</span>
                  <span>EN-19, EN-24, 42CrMo4, Bronze, AMPCO</span>
                </li>
                <li className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-500">Compliant Specifications</span>
                  <span>ISO 9001:2015, EN-10204 3.1</span>
                </li>
                <li className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-500">Traceability</span>
                  <span>MTC, Heat Cast ID &amp; Heat Treatment Logs</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-zinc-500">Crating Design</span>
                  <span>ISPM-15 Hardwood Seaworthy Crate</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleEnquiry} className="space-y-4">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">
                Instant RFQ / Drawing Submission
              </label>
              {enquirySubmitted ? (
                <div className="p-4 bg-emerald-950/20 border border-emerald-900/50 text-emerald-400 rounded-lg text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Enquiry for {activeProduct.name} submitted successfully! We will coordinate detailed technical sheets shortly.</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={enquiryText}
                    onChange={(e) => setEnquiryText(e.target.value)}
                    placeholder="Enter your corporate email address..."
                    className="flex-1 bg-brand-dark border border-zinc-800 rounded-lg text-xs text-white p-3 focus:outline-none focus:border-brand-yellow"
                  />
                  <button
                    type="submit"
                    className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark px-4 rounded-lg flex items-center justify-center font-sans font-bold uppercase text-xs cursor-pointer transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              )}
              <span className="text-[10px] text-zinc-500 block leading-tight">
                * Our sales coordinators will request mechanical blueprints or drawing-based tolerance specifications via secure email.
              </span>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
