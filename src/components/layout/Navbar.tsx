"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sec-1");

  useEffect(() => {
    // 1. Light-weight scroll listener for header background style (no layout thrashing)
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prevScrolled) => {
        if (prevScrolled !== isScrolled) return isScrolled;
        return prevScrolled;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 2. IntersectionObserver for active section tracking (highly performant, runs off-main-thread)
    const sections = ["sec-1", "sec-3", "sec-7", "sec-5", "sec-6"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -35% 0px", // Focus area in the middle of viewport
      threshold: 0.1, // Trigger when at least 10% of the section is visible in focus area
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFAF5]/95 backdrop-blur-md py-3 shadow-sm border-b border-[#1F1B16]/5"
            : "bg-[#FDFAF5]/80 backdrop-blur-xs py-3.5 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-10 relative">
          {/* Logo — plain "Local." */}
          <button
            onClick={() => scrollToSection("sec-1")}
            className="focus:outline-none z-10 cursor-pointer text-left group"
          >
            <span className="text-2xl font-black tracking-tight text-[#1F1B16] group-hover:text-[#C97B3D] transition-colors">
              Local<span className="text-[#C97B3D]">.</span>
            </span>
          </button>

          {/* Desktop Menu — Centered & Bold with Hover Underline Indicator */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("sec-3")}
              className={`text-sm font-bold transition-colors cursor-pointer relative group py-1 ${
                activeSection === "sec-3" ? "text-[#C97B3D]" : "text-[#1F1B16] hover:text-[#C97B3D]"
              }`}
            >
              <span>Menu</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#C97B3D] transition-all duration-300 rounded-full ${
                  activeSection === "sec-3" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
            <button
              onClick={() => scrollToSection("sec-7")}
              className={`text-sm font-bold transition-colors cursor-pointer relative group py-1 ${
                activeSection === "sec-7" ? "text-[#C97B3D]" : "text-[#1F1B16] hover:text-[#C97B3D]"
              }`}
            >
              <span>Discounts</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#C97B3D] transition-all duration-300 rounded-full ${
                  activeSection === "sec-7" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
            <button
              onClick={() => scrollToSection("sec-5")}
              className={`text-sm font-bold transition-colors cursor-pointer relative group py-1 ${
                activeSection === "sec-5" ? "text-[#C97B3D]" : "text-[#1F1B16] hover:text-[#C97B3D]"
              }`}
            >
              <span>Gallery</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#C97B3D] transition-all duration-300 rounded-full ${
                  activeSection === "sec-5" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
            <button
              onClick={() => scrollToSection("sec-6")}
              className={`text-sm font-bold transition-colors cursor-pointer relative group py-1 ${
                activeSection === "sec-6" ? "text-[#C97B3D]" : "text-[#1F1B16] hover:text-[#C97B3D]"
              }`}
            >
              <span>Locations</span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-[#C97B3D] transition-all duration-300 rounded-full ${
                  activeSection === "sec-6" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          </nav>

          {/* Placeholder for header balance on desktop */}
          <div className="hidden md:block w-16" />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 md:hidden text-[#1F1B16] hover:bg-black/5 rounded-xl transition-all cursor-pointer active:scale-90"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#1F1B16]/10 bg-[#FDFAF5]/98 backdrop-blur-xl px-5 py-5 shadow-2xl animate-fadeIn transition-all">
            <div className="flex flex-col gap-2.5 text-center">
              <button
                onClick={() => scrollToSection("sec-3")}
                className={`font-bold py-3.5 text-base rounded-2xl transition-all active:scale-98 ${
                  activeSection === "sec-3"
                    ? "bg-[#4A3626] text-white shadow-md"
                    : "text-[#1F1B16] hover:bg-[#4A3626]/5"
                }`}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("sec-7")}
                className={`font-bold py-3.5 text-base rounded-2xl transition-all active:scale-98 ${
                  activeSection === "sec-7"
                    ? "bg-[#4A3626] text-white shadow-md"
                    : "text-[#1F1B16] hover:bg-[#4A3626]/5"
                }`}
              >
                Discounts
              </button>
              <button
                onClick={() => scrollToSection("sec-5")}
                className={`font-bold py-3.5 text-base rounded-2xl transition-all active:scale-98 ${
                  activeSection === "sec-5"
                    ? "bg-[#4A3626] text-white shadow-md"
                    : "text-[#1F1B16] hover:bg-[#4A3626]/5"
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("sec-6")}
                className={`font-bold py-3.5 text-base rounded-2xl transition-all active:scale-98 ${
                  activeSection === "sec-6"
                    ? "bg-[#4A3626] text-white shadow-md"
                    : "text-[#1F1B16] hover:bg-[#4A3626]/5"
                }`}
              >
                Locations
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/25 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}


