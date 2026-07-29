"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFAF5]/95 backdrop-blur-md py-3.5 shadow-xs"
          : "bg-[#FDFAF5]/80 backdrop-blur-xs py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10 relative">
        {/* Logo — plain "Local." */}
        <button
          onClick={() => scrollToSection("sec-1")}
          className="focus:outline-none z-10 cursor-pointer"
        >
          <span className="text-2xl font-black tracking-tight text-[#1F1B16]">
            Local.
          </span>
        </button>

        {/* Desktop Menu — Centered & Bold with Hover Underline Indicator */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => scrollToSection("sec-3")}
            className="text-sm font-bold text-[#1F1B16] hover:text-[#C97B3D] transition-colors cursor-pointer relative group py-1"
          >
            <span>Menu</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97B3D] transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button
            onClick={() => scrollToSection("sec-7")}
            className="text-sm font-bold text-[#1F1B16] hover:text-[#C97B3D] transition-colors cursor-pointer relative group py-1"
          >
            <span>Discounts</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97B3D] transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button
            onClick={() => scrollToSection("sec-5")}
            className="text-sm font-bold text-[#1F1B16] hover:text-[#C97B3D] transition-colors cursor-pointer relative group py-1"
          >
            <span>Gallery</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97B3D] transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
          <button
            onClick={() => scrollToSection("sec-6")}
            className="text-sm font-bold text-[#1F1B16] hover:text-[#C97B3D] transition-colors cursor-pointer relative group py-1"
          >
            <span>Locations</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C97B3D] transition-all duration-300 group-hover:w-full rounded-full" />
          </button>
        </nav>

        {/* Placeholder for header balance on desktop */}
        <div className="hidden md:block w-16" />

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 md:hidden text-[#1F1B16] hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1F1B16]/10 bg-[#FDFAF5] px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-4 text-center">
            <button onClick={() => scrollToSection("sec-3")} className="font-bold text-[#1F1B16] py-2 border-b border-[#1F1B16]/5">Menu</button>
            <button onClick={() => scrollToSection("sec-7")} className="font-bold text-[#1F1B16] py-2 border-b border-[#1F1B16]/5">Discounts</button>
            <button onClick={() => scrollToSection("sec-5")} className="font-bold text-[#1F1B16] py-2 border-b border-[#1F1B16]/5">Gallery</button>
            <button onClick={() => scrollToSection("sec-6")} className="font-bold text-[#1F1B16] py-2 border-b border-[#1F1B16]/5">Locations</button>
          </div>
        </div>
      )}
    </header>
  );
}

