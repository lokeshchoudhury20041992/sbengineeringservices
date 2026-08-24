import React from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "../router";

/**
 * Closing call-to-action shared by the standalone pages. Routes back to the RFQ
 * form on the home page and repeats the direct contact lines.
 */
export default function PageCta({
  heading = "Send Us Your Drawing",
  body = "Share a 2D drawing or 3D model with the required material grade and tolerances, and we will come back with feasibility, lead time, and a commercial offer."
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative bg-brand-dark py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute -right-20 top-0 w-[400px] h-[400px] bg-brand-yellow/10 rounded-full filter blur-[130px] pointer-events-none animate-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-[1.1] uppercase">
              {heading}
            </h2>
            <p className="font-sans text-sm text-zinc-400 max-w-xl leading-relaxed mt-4">
              {body}
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-all duration-200 shadow-md mt-8"
            >
              Discuss RFQ
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 w-full">
            <div className="flex items-center gap-3 bg-brand-dark-light/70 border border-zinc-800 hover:border-zinc-600 rounded-xl px-4 py-3 transition-colors duration-200">
              <span className="w-9 h-9 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-brand-yellow" />
              </span>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                  Call Direct
                </span>
                <div className="font-sans text-sm font-bold text-white mt-0.5 flex flex-wrap items-center gap-x-1.5">
                  <a
                    href="tel:+919830108760"
                    className="whitespace-nowrap hover:text-brand-yellow transition-colors duration-200"
                  >
                    +91 98301 08760
                  </a>
                  <span className="text-zinc-600" aria-hidden="true">/</span>
                  <a
                    href="tel:+918599882965"
                    className="whitespace-nowrap hover:text-brand-yellow transition-colors duration-200"
                  >
                    +91 85998 82965
                  </a>
                </div>
              </div>
            </div>

            <a
              href="mailto:sbengineeringproject@gmail.com"
              className="group flex items-center gap-3 bg-brand-dark-light/70 border border-zinc-800 hover:border-zinc-600 rounded-xl px-4 py-3 transition-colors duration-200"
            >
              <span className="w-9 h-9 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-brand-yellow" />
              </span>
              <div className="min-w-0">
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block font-bold">
                  Email Us
                </span>
                <span className="font-sans text-sm font-bold text-white mt-0.5 block break-words group-hover:text-brand-yellow transition-colors duration-200">
                  sbengineeringproject@gmail.com
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
