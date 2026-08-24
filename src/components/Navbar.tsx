import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  BadgeCheck,
  Boxes,
  Building2,
  Cpu,
  Factory,
  Handshake,
  Info,
  Mail,
  Package,
  ShieldCheck,
  Workflow
} from "lucide-react";
import logo from "../assets/logo.webp";
import { companyPages, homeSections } from "../site";
import { Link, navigate, usePathname } from "../router";

const pageIconMap: Record<string, React.FC<any>> = {
  BadgeCheck,
  Factory,
  ShieldCheck,
  Workflow,
  Building2,
  Info,
  Cpu,
  Package,
  Boxes,
  Handshake,
  Mail
};

/** "/#overview" -> "#overview" */
const toHash = (href: string) => href.slice(href.indexOf("#"));

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [openMenu, setOpenMenu] = useState<"home" | "company" | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<"home" | "company" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  // The header carries five items: Home, Company, Industries, Clients, Get In Touch.
  // Industries and Clients sit directly in the bar; the rest stay in the dropdown.
  const directHrefs = ["/industries", "/clients"];
  const directPages = companyPages.filter((page) => directHrefs.includes(page.href));
  const dropdownPages = companyPages.filter((page) => !directHrefs.includes(page.href));
  const isCompanyPage = dropdownPages.some((page) => page.href === pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Scrollspy Intersection Observer configuration
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-25% 0px -55% 0px", // triggers when section occupies the active middle portion
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Only the home page carries these sections
    homeSections.forEach((section) => {
      const el = document.querySelector(toHash(section.href));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  // Close every menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
    setOpenMobileGroup(null);
    if (!isHome) setActiveSection("");
  }, [pathname, isHome]);

  // Dismiss the desktop dropdowns on outside click or Escape
  useEffect(() => {
    if (!openMenu) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openMenu]);

  /**
   * Home-page sections scroll in place; from any other page the same link routes
   * home and then lands on the section.
   */
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpenMenu(null);
    setIsOpen(false);
    if (!isHome) {
      navigate(`/${hash}`);
      return;
    }
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const triggerClass = (isActive: boolean) =>
    `flex items-center gap-1 font-sans text-[11px] tracking-widest uppercase font-bold transition-all duration-200 py-1 cursor-pointer select-none ${
      isActive ? "text-zinc-950 border-b-2 border-brand-yellow" : "text-zinc-600 hover:text-zinc-950"
    }`;

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-md"
          : "bg-white/90 backdrop-blur-sm border-b border-zinc-200/50 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">

          {/* Company branding */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center cursor-pointer"
            aria-label="S.B. Engineering Services — home"
          >
            <img
              src={logo}
              alt="S.B. Engineering Services Logo"
              className="h-10 sm:h-12 w-auto object-contain hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>

          {/* Desktop navigation: two grouped menus keep the bar uncluttered */}
          <div ref={navRef} className="hidden lg:flex items-center space-x-8">

            {/* Home page sections */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("home")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to="/"
                onClick={handleLogoClick}
                aria-expanded={openMenu === "home"}
                aria-haspopup="true"
                className={triggerClass(isHome)}
              >
                Home
                <ChevronDown
                  className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${
                    openMenu === "home" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </Link>

              <div
                className={`absolute left-0 top-full pt-4 w-64 transition-all duration-200 ${
                  openMenu === "home"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-1 invisible"
                }`}
              >
                <div className="bg-white border border-zinc-200 rounded-xl shadow-2xl p-2">
                  {homeSections.map((section) => {
                    const hash = toHash(section.href);
                    const Icon = pageIconMap[section.iconName] ?? Info;
                    const isActive = isHome && activeSection === hash.substring(1);
                    return (
                      <a
                        key={section.href}
                        href={sectionHref(hash)}
                        onClick={(e) => handleScrollTo(e, hash)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 ${
                          isActive ? "bg-brand-cream" : "hover:bg-zinc-50"
                        }`}
                      >
                        <span className="w-7 h-7 shrink-0 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-brand-yellow-hover" />
                        </span>
                        <span className="font-sans text-xs font-bold text-zinc-800 leading-snug">
                          {section.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Company pages */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("company")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                onClick={() => setOpenMenu((menu) => (menu === "company" ? null : "company"))}
                aria-expanded={openMenu === "company"}
                aria-haspopup="true"
                className={triggerClass(isCompanyPage)}
              >
                Company
                <ChevronDown
                  className={`w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 ${
                    openMenu === "company" ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                className={`absolute right-0 top-full pt-4 w-80 transition-all duration-200 ${
                  openMenu === "company"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-1 invisible"
                }`}
              >
                <div className="bg-white border border-zinc-200 rounded-xl shadow-2xl p-2">
                  {dropdownPages.map((page) => {
                    const Icon = pageIconMap[page.iconName] ?? BadgeCheck;
                    const isCurrent = pathname === page.href;
                    return (
                      <Link
                        key={page.href}
                        to={page.href}
                        onNavigate={() => setOpenMenu(null)}
                        className={`flex items-start gap-3 rounded-lg p-3 transition-colors duration-150 ${
                          isCurrent ? "bg-brand-cream" : "hover:bg-zinc-50"
                        }`}
                      >
                        <span className="w-8 h-8 shrink-0 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-brand-yellow-hover" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-sans text-xs font-bold text-zinc-900 leading-snug">
                            {page.label}
                          </span>
                          <span className="block font-sans text-[11px] text-zinc-500 mt-0.5 leading-snug">
                            {page.summary}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {directPages.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className={triggerClass(pathname === page.href)}
              >
                {page.shortLabel ?? page.label}
              </Link>
            ))}

            <a
              href={sectionHref("#contact")}
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-black uppercase text-[10px] tracking-widest px-4.5 py-2.5 rounded-sm transition-all duration-200 shadow-sm"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`lg:hidden fixed inset-x-0 top-16 bg-white border-b border-zinc-200 p-6 shadow-2xl transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col space-y-2">

          {/* Home page sections */}
          <div className="border-b border-zinc-100 pb-2">
            <button
              type="button"
              onClick={() =>
                setOpenMobileGroup((group) => (group === "home" ? null : "home"))
              }
              aria-expanded={openMobileGroup === "home"}
              className={`w-full font-sans text-xs tracking-wider uppercase py-2 transition-colors duration-200 font-bold flex items-center justify-between ${
                isHome ? "text-brand-yellow-hover" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <span>Home Page</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openMobileGroup === "home" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openMobileGroup === "home" && (
              <div className="flex flex-col gap-1 pt-2">
                {homeSections.map((section) => {
                  const hash = toHash(section.href);
                  const Icon = pageIconMap[section.iconName] ?? Info;
                  return (
                    <a
                      key={section.href}
                      href={sectionHref(hash)}
                      onClick={(e) => handleScrollTo(e, hash)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-zinc-50 transition-colors duration-150"
                    >
                      <span className="w-7 h-7 shrink-0 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-brand-yellow-hover" />
                      </span>
                      <span className="font-sans text-[11px] font-bold text-zinc-700 leading-snug">
                        {section.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Company pages */}
          <div className="border-b border-zinc-100 pb-2">
            <button
              type="button"
              onClick={() =>
                setOpenMobileGroup((group) => (group === "company" ? null : "company"))
              }
              aria-expanded={openMobileGroup === "company"}
              className={`w-full font-sans text-xs tracking-wider uppercase py-2 transition-colors duration-200 font-bold flex items-center justify-between ${
                isCompanyPage ? "text-brand-yellow-hover" : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  openMobileGroup === "company" ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openMobileGroup === "company" && (
              <div className="flex flex-col gap-1 pt-2">
                {companyPages.map((page) => {
                  const Icon = pageIconMap[page.iconName] ?? BadgeCheck;
                  const isCurrent = pathname === page.href;
                  return (
                    <Link
                      key={page.href}
                      to={page.href}
                      onNavigate={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 ${
                        isCurrent ? "bg-brand-cream" : "hover:bg-zinc-50"
                      }`}
                    >
                      <span className="w-7 h-7 shrink-0 rounded-md bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-brand-yellow-hover" />
                      </span>
                      <span className="font-sans text-[11px] font-bold text-zinc-700 leading-snug">
                        {page.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <a
            href={sectionHref("#contact")}
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-sans font-bold uppercase text-xs tracking-wider py-3 rounded-sm mt-2 transition-colors duration-200 shadow-sm"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
