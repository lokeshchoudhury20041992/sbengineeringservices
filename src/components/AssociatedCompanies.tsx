import React, { useState } from "react";
import { partnerLogos } from "../data";
import { PartnerLogo } from "../types";

const LogoCard = ({ partner }: { partner: PartnerLogo }) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div
      className={`group flex h-24 w-[220px] shrink-0 flex-col justify-between rounded-lg border px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-[250px] ${
        partner.darkCard
          ? "border-zinc-800 bg-zinc-950"
          : "border-zinc-200/80 bg-white hover:border-brand-yellow/60"
      }`}
      title={partner.name}
    >
      <div className="flex h-11 items-center">
        {hasImageError ? (
          <span
            className={`font-mono text-sm font-extrabold uppercase tracking-[0.14em] ${
              partner.darkCard ? "text-white" : "text-zinc-800"
            }`}
          >
            {partner.shortName}
          </span>
        ) : (
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            loading="lazy"
            onError={() => setHasImageError(true)}
            className={`max-h-11 w-auto max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-[1.03] ${
              partner.logoClassName ?? ""
            }`}
          />
        )}
      </div>
      <div className="flex items-end justify-between gap-3">
        <span
          className={`truncate text-sm font-black leading-tight ${
            partner.darkCard ? "text-white" : "text-zinc-900"
          }`}
        >
          {partner.shortName}
        </span>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] ${
            partner.darkCard
              ? "bg-white/10 text-zinc-200"
              : "bg-zinc-100 text-zinc-500"
          }`}
        >
          {partner.sector}
        </span>
      </div>
    </div>
  );
};

export default function AssociatedCompanies() {
  const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="relative overflow-hidden border-y border-zinc-200/70 bg-[#F6F2EA] py-12 sm:py-14">
      <div className="mx-auto mb-7 flex max-w-7xl flex-col gap-2 px-4 sm:px-6 lg:px-8">
        <span className="font-mono text-[10px] font-extrabold uppercase tracking-[0.28em] text-zinc-500">
          Approved &amp; Associated Corporate Partnerships
        </span>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">
            Trusted by India&apos;s energy, steel, automation, and infrastructure leaders
          </h2>
          <p className="max-w-md text-sm leading-6 text-zinc-600">
            Official partner marks are shown in a continuous, pause-on-hover marquee for quick credibility scanning.
          </p>
        </div>
      </div>

      <div className="relative flex w-full select-none items-center overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F6F2EA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F6F2EA] to-transparent sm:w-40" />

        <div className="flex items-center gap-5 whitespace-nowrap animate-marquee sm:gap-6">
          {marqueeLogos.map((partner, index) => (
            <div key={`${partner.shortName}-${index}`} className="shrink-0">
              <LogoCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
