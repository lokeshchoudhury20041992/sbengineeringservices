import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "../router";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  breadcrumb: string;
}

/**
 * Dark page header used by every standalone page, tuned to sit under the fixed
 * light navbar and to carry the same industrial treatment as the home hero.
 */
export default function PageHero({ eyebrow, title, lead, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative bg-brand-dark pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Blueprint mesh and glow backlight, matching the home hero */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full filter blur-[150px] pointer-events-none animate-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb trail back to the home page */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-8">
          <Link
            to="/"
            className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 hover:text-brand-yellow transition-colors duration-200 font-bold"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" aria-hidden="true" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-300 font-bold">
            {breadcrumb}
          </span>
        </nav>

        <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
          — {eyebrow}
        </span>
        <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] uppercase max-w-4xl">
          {title}
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-6">
          {lead}
        </p>
      </div>
    </section>
  );
}
