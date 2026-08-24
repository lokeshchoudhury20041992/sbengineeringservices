import React from "react";
import {
  Check,
  ClipboardCheck,
  Cpu,
  FileSpreadsheet,
  Layers,
  ScanLine,
  Shuffle,
  Truck,
  Wrench
} from "lucide-react";
import PageHero from "../components/PageHero";
import PageCta from "../components/PageCta";
import RelatedPages from "../components/RelatedPages";
import { processSteps, technicalExpertise } from "../data";

const iconMap: Record<string, React.FC<any>> = {
  FileSpreadsheet,
  Layers,
  Cpu,
  Shuffle,
  ScanLine,
  ClipboardCheck,
  Truck,
  Wrench
};

export default function Process() {
  return (
    <>
      <PageHero
        breadcrumb="How We Work"
        eyebrow="How We Work"
        title={
          <>
            From Drawing <br />
            <span className="text-brand-yellow">To Dispatch</span>
          </>
        }
        lead="Every job follows the same route: review the drawing, procure to grade, machine to tolerance, verify dimensionally, document fully, and pack for the journey ahead."
      />

      {/* Process steps */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Workflow
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-12">
            Eight Stages, One Job File
          </h2>

          <ol className="space-y-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.iconName] ?? Cpu;
              return (
                <li
                  key={step.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-brand-cream border border-zinc-200 rounded-xl p-7 hover:border-brand-yellow transition-colors duration-200"
                >
                  <div className="lg:col-span-5 flex items-start gap-4">
                    <span className="w-11 h-11 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-yellow-hover" />
                    </span>
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] font-black text-brand-yellow tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-sans font-black text-base sm:text-lg text-brand-dark uppercase tracking-tight leading-snug mt-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold mb-3">
                      Checkpoints
                    </span>
                    <ul className="space-y-2">
                      {step.checkpoints.map((checkpoint) => (
                        <li key={checkpoint} className="flex gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-yellow-hover shrink-0 mt-0.5 stroke-[3]" />
                          <span className="font-sans text-[11px] text-zinc-600 leading-relaxed">
                            {checkpoint}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Engineering toolset */}
      <section className="py-20 bg-brand-dark border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Engineering Toolset
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.1] uppercase mb-10">
            What We Design And Verify With
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalExpertise.map((group) => (
              <div
                key={group.category}
                className="bg-brand-dark-light/70 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 transition-colors duration-200"
              >
                <h3 className="font-sans font-bold text-sm text-white leading-snug">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2 border-t border-zinc-800 pt-4">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-xs text-zinc-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
      <RelatedPages currentHref="/process" />
    </>
  );
}
