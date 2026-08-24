import React from "react";
import { Check, Droplets, Factory, TrainFront, Truck, Wind, Zap } from "lucide-react";
import PageHero from "../components/PageHero";
import PageCta from "../components/PageCta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "../router";
import { industriesServed, skidPortfolio } from "../data";

const iconMap: Record<string, React.FC<any>> = {
  Factory,
  Zap,
  Droplets,
  Wind,
  TrainFront,
  Truck
};

export default function Industries() {
  return (
    <>
      <PageHero
        breadcrumb="Industries Served"
        eyebrow="Industries Served"
        title={
          <>
            Built For <br />
            <span className="text-brand-yellow">Heavy Industry</span>
          </>
        }
        lead="Our machining, fabrication, and installation work is specified into steel, power, petrochemical, renewable energy, and infrastructure plants — each with its own tolerance regime, material grades, and documentation expectations."
      />

      {/* Sector cards */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Sectors
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-12">
            Where Our Components Go
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industriesServed.map((industry) => {
              const Icon = iconMap[industry.iconName] ?? Factory;
              return (
                <article
                  key={industry.id}
                  className="bg-brand-cream border border-zinc-200 rounded-xl p-7 hover:border-brand-yellow transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="w-11 h-11 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-yellow-hover" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-sans font-black text-base sm:text-lg text-brand-dark uppercase tracking-tight leading-snug">
                        {industry.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                        {industry.summary}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-zinc-200 pt-5">
                    {industry.scope.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="w-3.5 h-3.5 text-brand-yellow-hover shrink-0 mt-0.5 stroke-[3]" />
                        <span className="font-sans text-xs text-zinc-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process skid packages */}
      <section className="py-20 bg-brand-dark border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Process Packages
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.1] uppercase">
            Skid Packages We Build
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl mt-4 mb-10">
            Modular, pre-tested process packages for oil, gas, and petrochemical duty — engineered, fabricated, and documented as a single deliverable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skidPortfolio.map((skid) => (
              <div
                key={skid.name}
                className="flex items-center gap-3 bg-brand-dark-light/70 border border-zinc-800 hover:border-zinc-600 rounded-lg px-4 py-3.5 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" aria-hidden="true" />
                <span className="font-sans text-xs sm:text-sm text-zinc-200 font-bold leading-snug">
                  {skid.name}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/#products"
            className="inline-flex items-center gap-1.5 bg-brand-dark-light border border-zinc-800 hover:border-zinc-600 text-white font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-colors duration-200 mt-10"
          >
            View Full Product Range
          </Link>
        </div>
      </section>

      <PageCta
        heading="Working In One Of These Sectors?"
        body="Tell us the plant, the drawing, and the material grade. We will confirm feasibility, tolerance capability, and the documentation your audit needs."
      />
      <RelatedPages currentHref="/industries" />
    </>
  );
}
