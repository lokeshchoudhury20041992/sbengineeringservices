import React from "react";
import { ArrowUpRight, BadgeCheck, Building2, Factory, ShieldCheck, Workflow } from "lucide-react";
import { companyPages } from "../site";
import { Link } from "../router";

const iconMap: Record<string, React.FC<any>> = {
  BadgeCheck,
  Factory,
  ShieldCheck,
  Workflow,
  Building2
};

/**
 * Cross-links every company page to its siblings so no page is a dead end.
 * `currentHref` drops the page you are already on.
 */
export default function RelatedPages({ currentHref }: { currentHref: string }) {
  const others = companyPages.filter((page) => page.href !== currentHref);

  return (
    <section className="py-20 bg-brand-cream border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
          — Continue Reading
        </span>
        <h2 className="font-sans font-black text-2xl sm:text-3xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
          More About The Company
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((page) => {
            const Icon = iconMap[page.iconName] ?? BadgeCheck;
            return (
              <Link
                key={page.href}
                to={page.href}
                className="group flex flex-col justify-between gap-6 bg-white border border-zinc-200 hover:border-brand-yellow rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div>
                  <span className="w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-brand-yellow-hover" />
                  </span>
                  <h3 className="font-sans font-bold text-sm text-brand-dark leading-snug">
                    {page.label}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 mt-2 leading-relaxed">
                    {page.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-zinc-500 group-hover:text-brand-yellow-hover font-bold transition-colors duration-200">
                  Open Page
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
