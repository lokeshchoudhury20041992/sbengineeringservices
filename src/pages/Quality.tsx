import React from "react";
import { ArrowUpRight, BadgeCheck, Check, FileCheck2, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import PageCta from "../components/PageCta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "../router";
import { companyOverview, exportReadiness } from "../data";
import { certifiedAddress, certifiedScope, companyDocuments } from "../documents";

const isoDocument = companyDocuments.find((document) => document.id === "iso-9001-2015");

const qualityControls = [
  {
    title: "Material Test Certificates",
    detail:
      "Every consignment ships with Material Test Certificates covering the grade supplied, with heat and cast identification recorded against the job."
  },
  {
    title: "Dimensional Verification",
    detail:
      "Components are checked against the drawing before dispatch, including Coordinate Measuring Machine inspection through our allied unit where specified."
  },
  {
    title: "Serial-Wise Traceability",
    detail:
      "Serial number–wise illustrated catalogues and vendor documentation packs are prepared so international audits can trace any part back to its record."
  },
  {
    title: "Specification Compliance",
    detail:
      "Machining and fabrication procedures are aligned to ISO, EN, and ASTM specifications, keeping tolerances repeatable batch after batch."
  }
];

export default function Quality() {
  return (
    <>
      <PageHero
        breadcrumb="Quality & Certifications"
        eyebrow="Quality & Certifications"
        title={
          <>
            Certified, Documented, <br />
            <span className="text-brand-yellow">Traceable</span>
          </>
        }
        lead="S. B. Engineering Services operates a quality management system certified to ISO 9001:2015, with every dispatch backed by material test certificates and the documentation international audits expect."
      />

      {/* ISO certificate detail */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Certification
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
            ISO 9001:2015 Quality <br className="hidden sm:block" />
            Management Systems
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="bg-brand-dark rounded-2xl border border-zinc-800 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-brand-yellow" />
                  </span>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                      Certified Entity
                    </span>
                    <span className="font-sans font-bold text-sm text-white block mt-0.5">
                      S. B. Engineering Services
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {certifiedAddress}
                </p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  {(isoDocument?.facts ?? []).map((fact) => (
                    <div key={fact.label} className="border-t border-zinc-800 pt-3">
                      <dt className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 font-bold">
                        {fact.label}
                      </dt>
                      <dd className="font-sans text-xs text-white font-bold mt-1 leading-normal break-words">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/profile#documents"
                  className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-6 py-3.5 rounded transition-colors duration-200 mt-8"
                >
                  View The Certificate
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-brand-cream border border-zinc-200 rounded-2xl p-8 h-full">
                <span className="w-11 h-11 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5">
                  <FileCheck2 className="w-5 h-5 text-brand-yellow-hover" />
                </span>
                <h3 className="font-sans font-black text-base text-brand-dark uppercase tracking-tight mb-3">
                  Scope Of Certification
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                  {certifiedScope}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality controls */}
      <section className="py-20 bg-brand-cream border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Controls
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
            How Quality Is Held
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualityControls.map((control) => (
              <div
                key={control.title}
                className="bg-white border border-zinc-200 rounded-xl p-7 hover:border-brand-yellow transition-colors duration-200"
              >
                <span className="w-10 h-10 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-yellow-hover" />
                </span>
                <h3 className="font-sans font-bold text-sm text-brand-dark leading-snug">
                  {control.title}
                </h3>
                <p className="font-sans text-xs text-zinc-600 mt-2 leading-relaxed">
                  {control.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-7 sm:p-8 mt-4">
            <h3 className="font-sans font-bold text-sm text-brand-dark uppercase tracking-wider mb-3">
              Compliance And Quality Standards
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-4xl">
              {companyOverview.standards}
            </p>
          </div>
        </div>
      </section>

      {/* Export readiness */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Export Readiness
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
            Ready For International Supply
          </h2>

          <div className="space-y-4">
            {exportReadiness.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border-t border-zinc-200 pt-5"
              >
                <Check className="w-4 h-4 text-brand-yellow-hover shrink-0 mt-1 stroke-[3]" />
                <div>
                  <h3 className="font-sans font-bold text-sm text-brand-dark leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading="Need Our Documentation Pack?"
        body="Certificates, material test records, and serial-wise catalogues can be issued with your consignment. Tell us what your audit requires."
      />
      <RelatedPages currentHref="/quality" />
    </>
  );
}
