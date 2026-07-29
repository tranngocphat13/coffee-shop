"use client";

import { useEffect, useRef, useState } from "react";

export function SectionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="sec-1"
      className={`relative min-h-[540px] sm:min-h-screen h-auto sm:h-screen w-full bg-[#FDFAF5] overflow-hidden flex flex-col items-center justify-between select-none transition-all duration-700 ease-out origin-center ${
        visible ? "scale-100 opacity-100 filter-none" : "scale-90 opacity-40 blur-xs"
      }`}
    >
      {/* Background Ambient Ice Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/6 w-2.5 h-2.5 rounded-full bg-[#C97B3D]/30 blur-[1px] animate-sparkle"
          style={{ "--sparkle-duration": "6s", "--sparkle-delay": "0s" } as React.CSSProperties}
        />
        <div
          className="absolute top-1/3 right-1/5 w-3.5 h-3.5 rounded-full bg-[#4A3626]/20 blur-[1px] animate-sparkle"
          style={{ "--sparkle-duration": "7.5s", "--sparkle-delay": "1.2s" } as React.CSSProperties}
        />
        <div
          className="absolute top-1/2 left-1/12 w-2 h-2 rounded-full bg-[#C97B3D]/40 blur-[0.5px] animate-sparkle"
          style={{ "--sparkle-duration": "5.5s", "--sparkle-delay": "2.5s" } as React.CSSProperties}
        />
        <div
          className="absolute top-2/3 right-1/8 w-3 h-3 rounded-full bg-[#C97B3D]/25 blur-[1px] animate-sparkle"
          style={{ "--sparkle-duration": "8s", "--sparkle-delay": "0.8s" } as React.CSSProperties}
        />
      </div>

      {/* 1. Content Block (Text & Buttons) */}
      <div
        className={`relative z-10 flex flex-col items-center text-center pt-20 sm:pt-28 lg:pt-32 px-5 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Heading 1 */}
        <div className="w-full flex justify-center items-center">
          <div className="relative inline-block text-center max-w-full pb-2">
            <h1 className="font-heading text-[34px] sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
              ICED COFFEE
              <span className="font-script script normal-case text-[30px] sm:text-5xl lg:text-6xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-6 lg:-bottom-8 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                Summer edition
              </span>
            </h1>
          </div>
        </div>

        {/* Description Paragraph */}
        <p className="mt-5 text-xs sm:text-[15px] text-[#7A7268] max-w-[320px] sm:max-w-[480px] leading-[1.6] font-normal px-2 text-center">
          Try our new refreshing menu of iced drinks to easily beat the summer heat in the city
        </p>

        {/* CTA Buttons — Stacked Full Width Pill Buttons on Mobile matching reference image */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto max-w-[300px] sm:max-w-none">
          <button
            onClick={() => scrollToSection("sec-3")}
            className="w-full sm:w-auto bg-[#4A3626] text-white px-8 py-3 rounded-full text-xs sm:text-[14px] font-bold hover:bg-[#3A2E24] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer text-center"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection("sec-7")}
            className="w-full sm:w-auto bg-white/60 backdrop-blur-xs border border-[#4A3626] text-[#2B2420] px-8 py-3 rounded-full text-xs sm:text-[14px] font-bold hover:bg-[#4A3626] hover:text-white transition-all duration-200 active:scale-95 cursor-pointer text-center"
          >
            Get Discount
          </button>
        </div>
      </div>

      {/* 2. Hero Image — Top half of cups visible, bottom half cropped naturally by overflow-hidden */}
      <div
        className={`relative w-full max-w-[1250px] sm:max-w-[1450px] mx-auto mt-4 sm:mt-auto flex justify-center items-end pointer-events-none transition-all duration-[1000ms] ease-out ${
          visible
            ? "opacity-100 translate-y-[22%] sm:translate-y-[5%] scale-135 sm:scale-135"
            : "opacity-0 translate-y-[40%] scale-135 sm:scale-135"
        }`}
        style={{ transformOrigin: "bottom center" }}
      >
        <img
          src="/images/herosection.png"
          alt="Iced Coffee Trio — Local."
          className="w-full h-auto object-contain drop-shadow-2xl"
          draggable={false}
        />
      </div>
    </section>
  );
}
