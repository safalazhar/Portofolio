import { useState, useEffect, useCallback } from "react";
import { useActiveSection } from "../../hooks/useIntersectionObserver";

const NAV_LINKS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
            ? "bg-surface/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : "bg-transparent border-b border-transparent"
          }`}
      >
        <nav className="flex justify-between items-center px-gutter py-4 max-w-container mx-auto">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-headline text-headline-sm font-bold text-primary hover:text-primary-fixed transition-colors"
          >
            MSA.
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-body-md transition-all duration-200 relative ${activeSection === link.id
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.label}
                {/* Active indicator line */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0"
                    }`}
                />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Menu navigasi"
              aria-expanded={isMobileOpen}
            >
              <span className="material-symbols-outlined">
                {isMobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-surface-container border-l border-white/10 animate-slide-in-right flex flex-col">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all"
                aria-label="Tutup menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-6 gap-2 flex-1">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-body text-lg py-3 px-4 rounded-xl transition-all duration-200 ${activeSection === link.id
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/cv-safal-azhar.pdf"
                download
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all font-body"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/msafalazhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 rounded-xl text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all font-body"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
