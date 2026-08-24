import React from "react";
import {
  Award,
  Compass,
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Mail,
  Maximize2,
  MapPin,
  Phone,
  Target
} from "lucide-react";
import PageHero from "../components/PageHero";
import PageCta from "../components/PageCta";
import RelatedPages from "../components/RelatedPages";
import { companyOverview, technicalDirector } from "../data";
import { CompanyDocument, companyDocuments } from "../documents";

const registrationFacts = [
  { label: "Legal Name", value: "S.B. Engineering Services" },
  { label: "Enterprise Type", value: "Micro Enterprise — Services (MSME)" },
  { label: "Udyog Aadhaar No.", value: "WB10D0037111" },
  { label: "ISO Certificate No.", value: "E20250421497" },
  { label: "Date of Commencement", value: "01 April 2015" },
  { label: "Quality Standard", value: "ISO 9001:2015 (valid until 07/04/2028)" }
];

const addresses = [
  {
    label: "Registered Office",
    value: "P-25, Senhati Colony, Behala, Kolkata - 700034, West Bengal, India"
  },
  {
    label: "Factory Address",
    value: "Benaras Road, Near Kona High School, Howrah - 14, West Bengal, India"
  }
];

/**
 * Document card: the complete certificate on show, with its transcribed
 * particulars underneath. Two of these sit side by side on desktop.
 */
const DocumentCard: React.FC<{ document: CompanyDocument }> = ({ document }) => {
  const Icon = document.kind === "pdf" ? FileText : ImageIcon;

  return (
    <article className="flex h-full flex-col bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:border-zinc-300 transition-colors duration-200">
      {/* Identity */}
      <header className="flex items-start gap-4 p-5 sm:p-6 border-b border-zinc-200">
        <span className="w-10 h-10 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
          <Icon className="w-4.5 h-4.5 text-brand-yellow-hover" />
        </span>
        <div className="min-w-0">
          <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
            {document.fileLabel} Document
          </span>
          <h3 className="font-sans font-bold text-sm sm:text-base text-brand-dark mt-1 leading-snug">
            {document.title}
          </h3>
          <p className="font-sans text-xs text-zinc-500 mt-1 leading-relaxed">
            Issued by {document.issuer}
          </p>
        </div>
      </header>

      {/* Full document — contained, never cropped; click opens the original */}
      <a
        href={document.file}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open ${document.title}`}
        className="group relative block bg-brand-cream border-b border-zinc-200 p-4 sm:p-5"
      >
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-zinc-200 bg-white">
          <img
            src={document.preview}
            alt={`${document.title} — full document`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1.5 bg-brand-yellow text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-4 py-2.5 rounded shadow-lg">
            View Full Size
            <Maximize2 className="w-3.5 h-3.5 stroke-[2.5]" />
          </span>
        </span>
      </a>

      {/* Transcribed particulars */}
      <div className="flex-grow p-5 sm:p-6">
        <p className="font-sans text-xs text-zinc-600 leading-relaxed">{document.summary}</p>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mt-5">
          {document.facts.map((fact) => (
            <div key={fact.label} className="border-t border-zinc-200 pt-2.5">
              <dt className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                {fact.label}
              </dt>
              <dd className="font-sans text-xs text-brand-dark font-bold mt-1 leading-normal break-words">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Actions */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto">
        <div className="flex flex-wrap gap-3">
          <a
            href={document.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-5 py-3 rounded transition-colors duration-200 shadow-sm"
          >
            Open Document
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
          <a
            href={document.file}
            download
            className="inline-flex items-center gap-1.5 bg-white border border-zinc-300 hover:border-zinc-500 text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-5 py-3 rounded transition-colors duration-200"
          >
            Download
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
        <p className="font-sans text-[10px] text-zinc-400 mt-3">
          Original {document.fileLabel} opens in a new tab at print quality.
        </p>
      </div>
    </article>
  );
};

export default function Profile() {
  return (
    <>
      <PageHero
        breadcrumb="Company Profile"
        eyebrow="Company Profile"
        title={
          <>
            Who We Are <br />
            <span className="text-brand-yellow">&amp; What We Stand On</span>
          </>
        }
        lead={companyOverview.about}
      />

      {/* Registration particulars */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Registration Particulars
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
            Company At A Glance
          </h2>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {registrationFacts.map((fact) => (
              <div key={fact.label} className="border-t border-zinc-200 pt-4">
                <dt className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
                  {fact.label}
                </dt>
                <dd className="font-sans text-sm sm:text-base text-brand-dark font-bold mt-1.5 leading-snug">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {addresses.map((address) => (
              <div
                key={address.label}
                className="flex gap-4 bg-brand-cream border border-zinc-200 rounded-xl p-5"
              >
                <span className="w-10 h-10 shrink-0 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-yellow-hover" />
                </span>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block font-bold">
                    {address.label}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-brand-dark font-bold mt-1 leading-normal">
                    {address.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="py-20 bg-brand-cream border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm">
              <span className="w-11 h-11 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-brand-yellow-hover" />
              </span>
              <h3 className="font-sans font-black text-lg text-brand-dark uppercase tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                {companyOverview.mission}
              </p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-sm">
              <span className="w-11 h-11 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5">
                <Compass className="w-5 h-5 text-brand-yellow-hover" />
              </span>
              <h3 className="font-sans font-black text-lg text-brand-dark uppercase tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                {companyOverview.vision}
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="mt-16">
            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
              — Core Values
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-8">
              What We Hold To
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyOverview.coreValues.map((value) => (
                <div
                  key={value.value}
                  className="bg-white border border-zinc-200 rounded-xl p-6 hover:border-brand-yellow transition-colors duration-200"
                >
                  <span className="font-mono text-[10px] font-black text-brand-yellow tracking-widest">
                    {value.value}
                  </span>
                  <h3 className="font-sans font-bold text-sm text-brand-dark mt-3 leading-snug">
                    {value.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 mt-1.5">{value.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Leadership
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase mb-10">
            Technical Direction
          </h2>

          <div className="bg-brand-dark rounded-2xl p-8 sm:p-10 border border-zinc-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-brand-yellow block font-bold">
                  {technicalDirector.role}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mt-2 leading-tight">
                  {technicalDirector.name}
                </h3>

                {/* Post-nominals and memberships */}
                {technicalDirector.qualifications && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {technicalDirector.qualifications.map((qualification) => (
                      <span
                        key={qualification}
                        className="font-mono text-[9px] uppercase tracking-widest text-zinc-300 font-bold bg-brand-dark-light border border-zinc-800 px-3 py-1.5 rounded-full"
                      >
                        {qualification}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  <div className="border-t border-zinc-800 pt-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                      Credentials
                    </span>
                    <p className="font-sans text-xs text-zinc-300 mt-1 leading-relaxed">
                      {technicalDirector.credentials}
                    </p>
                  </div>
                  <div className="border-t border-zinc-800 pt-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                      Experience
                    </span>
                    <p className="font-sans text-xs text-zinc-300 mt-1 leading-relaxed">
                      {technicalDirector.experience}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold mb-4">
                  Areas of Expertise
                </span>
                <ul className="space-y-4">
                  {technicalDirector.expertise.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Award className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct contact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 pt-8 border-t border-zinc-800">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                    Address
                  </span>
                  <p className="font-sans text-xs text-zinc-300 mt-1 leading-relaxed">
                    {technicalDirector.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                    Mobile
                  </span>
                  <div className="flex flex-col gap-0.5 mt-1">
                    {(technicalDirector.phones ?? []).map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="font-sans text-xs text-zinc-300 hover:text-brand-yellow transition-colors duration-200 whitespace-nowrap"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-bold">
                    E-mail
                  </span>
                  <div className="flex flex-col gap-0.5 mt-1">
                    {(technicalDirector.emails ?? []).map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="font-sans text-xs text-zinc-300 hover:text-brand-yellow transition-colors duration-200 break-words"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates and documents */}
      <section id="documents" className="py-20 bg-brand-cream border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-[10px] tracking-[0.25em] text-brand-yellow font-bold uppercase block mb-3">
            — Certificates &amp; Documents
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-brand-dark tracking-tight leading-[1.1] uppercase">
            Verifiable Documentation
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 max-w-2xl mt-4 mb-10">
            Both certificates are reproduced in full below. Click either one to open the original
            file at print quality.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {companyDocuments.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </div>
      </section>

      <PageCta />
      <RelatedPages currentHref="/profile" />
    </>
  );
}
