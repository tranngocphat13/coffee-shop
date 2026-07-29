"use client";

import { useEffect, useRef, useState } from "react";

export function SectionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-up animation on mount
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
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
      className="relative min-h-screen h-screen w-full bg-[#FDFAF5] overflow-hidden flex flex-col items-center justify-between select-none"
    >
      {/* 1. Content Block (Text & Buttons) */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 lg:pt-32 px-6 max-w-4xl mx-auto">
        {/* Heading 1 */}
        <div className="w-full flex justify-center items-center">
          <div className="relative inline-block text-center">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none whitespace-nowrap text-center">
              ICED COFFEE
              <span className="font-script script normal-case text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                Summer edition
              </span>
            </h1>
          </div>
        </div>

        {/* Description Paragraph */}
        <p className="mt-5 text-xs sm:text-[15px] text-[#7A7268] max-w-[480px] leading-[1.6] font-normal">
          Try our new refreshing menu of iced drinks to easily beat the summer heat in the city
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => scrollToSection("sec-3")}
            className="bg-[#4A3626] text-white px-7 py-3 rounded-full text-xs sm:text-[14px] font-bold hover:bg-[#3A2E24] transition-all duration-200 shadow-xs active:scale-95"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection("sec-7")}
            className="bg-transparent border border-[#4A3626] text-[#2B2420] px-7 py-3 rounded-full text-xs sm:text-[14px] font-bold hover:bg-[#4A3626] hover:text-white transition-all duration-200 active:scale-95"
          >
            Get Discount
          </button>
        </div>
      </div>

      {/* 2. Hero Image — enlarged single image herosection.png raised higher */}
      <div
        className={`relative w-full max-w-[1250px] sm:max-w-[1450px] mx-auto mt-auto flex justify-center items-end pointer-events-none transition-all duration-[1000ms] ease-out ${
          visible
            ? "opacity-100 translate-y-[5%] scale-110 sm:scale-135"
            : "opacity-0 translate-y-[40%] scale-110 sm:scale-135"
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
