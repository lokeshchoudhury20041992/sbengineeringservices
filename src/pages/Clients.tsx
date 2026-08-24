import React, { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import PageCta from "../components/PageCta";
import RelatedPages from "../components/RelatedPages";
import { Link } from "../router";
import { jointVentures, partnerLogos, productRange } from "../data";
import { PartnerLogo } from "../types";

/** Static logo tile; falls back to the short name when the remote mark fails to load. */
const ClientTile: React.FC<{ partner: PartnerLogo }> = ({ partner }) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div
      className="group flex h-32 flex-col justify-between rounded-xl border border-zinc-200 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-yellow/60 hover:shadow-lg"
      title={partner.name}
    >
      <div className="flex h-12 items-center">
        {hasImageError ? (
          <span className="font-mono text-sm font-extrabold uppercase tracking-[0.14em] text-zinc-800">
            {partner.shortName}
          </span>
        ) : (
          <img
            src={partner.logoUrl}
            alt={partner.name}
            loading="lazy"
            onError={() => setHasImageError(true)}
            className={`object-contain object-left ${partner.logoClassName ?? "h-9 w-28"}`}
          />
        )}
      </div>
      <div className="flex items-end justify-between gap-2">
        <span className="truncate text-sm font-black leading-tight text-zinc-900">
          {partner.shortName}
        </span>
        <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.16em] text-zinc-500">
          {partner.sector}
        </span>
      </div>
    </div>
  );
};

/** Product lines grouped by the category they are catalogued under. */
const scopesByCategory = productRange.reduce<Record<string, string[]>>((groups, product) => {
  groups[product.category] = [...(groups[product.category] ?? []), product.name];
  return groups;
}, {});

export default function Clients() {
  return (
    <>
      <PageHero
        breadcrumb="Clients & Projects"
        eyebrow="Clients & Projects"
        title={
          <>
            Who We Work <br />
            <span className="text-brand-yellow">Alongside</span>
          </>
        }
        lead="Approved and associated corporate partnerships across India's energy, steel, automation, and infrastructure sectors, supported by an allied manufacturing base in Howrah."
      />

      {/* Client and partner marks */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Approved &amp; Associated Corporate Partnerships
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10 max-w-3xl">
            Trusted By India&apos;s Energy, Steel, Automation, And Infrastructure Leaders
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partnerLogos.map((partner) => (
              <ClientTile key={partner.shortName} partner={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Representative supply scopes */}
      <section className="py-20 bg-brand-cream border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Representative Supply Scopes
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase">
            What We Have Been Specified For
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-2xl mt-4 mb-10">
            Product lines we manufacture and supply, grouped by the category they are catalogued under.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(scopesByCategory).map(([category, items]) => (
              <div
                key={category}
                className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-brand-yellow transition-colors duration-200"
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-yellow-hover block font-bold">
                  {category}
                </span>
                <ul className="mt-4 space-y-2.5 border-t border-zinc-200 pt-4">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-xs text-zinc-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/#products"
            className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-colors duration-200 shadow-sm mt-10"
          >
            See The Full Catalogue
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>
      </section>

      {/* Allied manufacturing base */}
      <section className="py-20 bg-brand-dark border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Allied Manufacturing Base
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.1] uppercase mb-10">
            Joint Ventures In Howrah
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {jointVentures.map((partner) => (
              <div
                key={partner.name}
                className="bg-brand-dark-light/70 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 transition-colors duration-200"
              >
                <h3 className="font-sans font-black text-sm text-white uppercase tracking-tight leading-snug">
                  {partner.name}
                </h3>
                <div className="flex gap-2.5 mt-3 border-t border-zinc-800 pt-3">
                  <MapPin className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                      {partner.addressLabel}
                    </span>
                    <p className="font-sans text-xs text-zinc-300 mt-0.5 leading-relaxed">
                      {partner.address}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {partner.capabilities.map((capability) => (
                    <li key={capability} className="flex gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0 mt-1.5"
                        aria-hidden="true"
                      />
                      <span className="font-sans text-[11px] text-zinc-400 leading-relaxed">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        heading="Add Us To Your Vendor List"
        body="We supply OEMs and EPC contractors with the certificates, traceability records, and vendor documentation their approval process requires."
      />
      <RelatedPages currentHref="/clients" />
    </>
  );
}
