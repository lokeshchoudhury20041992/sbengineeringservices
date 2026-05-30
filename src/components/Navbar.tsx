import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const menuItems = [
    { label: "Overview", href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Products", href: "#products" },
    { label: "SKID Portfolio", href: "#skid-portfolio" },
    { label: "Joint Ventures", href: "#joint-ventures" },
    { label: "Leadership", href: "#leadership" },
  ];

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

    // Observe each section in our menu list
    menuItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-md"
          : "bg-brand-dark/80 backdrop-blur-sm border-b border-zinc-900/50 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* Company branding */}
          <div className="flex-shrink-0 flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="font-sans font-black text-sm sm:text-lg tracking-[0.08em] text-white uppercase leading-none">
              S.B. Engineering Services
            </span>
            <span className="font-mono text-[8px] tracking-[0.16em] text-brand-yellow font-bold uppercase mt-1">
              Precision Machining &amp; Industrial Solutions
            </span>
          </div>

          {/* Desktop navigation with Scrollspy Text Highlight glow */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`font-sans text-[11px] tracking-widest uppercase font-bold transition-all duration-200 py-1 cursor-pointer select-none ${
                    isActive
                      ? "text-brand-yellow drop-shadow-[0_0_8px_rgba(252,194,41,0.5)] scale-102"
                      : "text-zinc-300 hover:text-brand-yellow"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
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
              className="p-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`lg:hidden fixed inset-x-0 top-16 bg-brand-dark border-b border-zinc-800 p-6 shadow-2xl transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`font-sans text-xs tracking-wider uppercase py-2 transition-colors duration-200 border-b border-zinc-800 font-bold flex items-center justify-between ${
                  isActive ? "text-brand-yellow" : "text-zinc-300 hover:text-brand-yellow"
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
          <a
            href="#contact"
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
