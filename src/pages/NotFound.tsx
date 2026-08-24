import React from "react";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import RelatedPages from "../components/RelatedPages";
import { Link } from "../router";

export default function NotFound() {
  return (
    <>
      <PageHero
        breadcrumb="Page Not Found"
        eyebrow="Error 404"
        title={
          <>
            This Page <br />
            <span className="text-brand-yellow">Does Not Exist</span>
          </>
        }
        lead="The address you followed is not part of this site. Head back to the home page, or pick one of the company pages below."
      />
      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-7 py-4 rounded transition-colors duration-200 shadow-sm"
          >
            Back To Home
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>
      </section>
      <RelatedPages currentHref="" />
    </>
  );
}
