"use client";

import { useEffect, useRef, useState } from "react";

export function SectionRefresh() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sec-2"
      className={`relative min-h-screen lg:h-screen w-full bg-[#FDFAF5] overflow-hidden flex flex-col justify-between py-16 lg:py-20 px-6 lg:px-16 select-none transition-all duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100 filter-none" : "scale-90 opacity-40 blur-xs"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full my-auto flex flex-col justify-between min-h-[480px] lg:min-h-[560px] relative z-10">
        {/* Top Header — Centered Title & Subtitle with FadeInDown */}
        <div
          className={`text-center max-w-2xl mx-auto w-full transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center">
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none whitespace-nowrap text-center">
                WHEN YOU CRAVE
                <span className="font-script script normal-case text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  Refreshment
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal mt-6 max-w-md mx-auto leading-relaxed">
            When it&apos;s hot outside, only a delicious and truly icy drink can save the day
          </p>
        </div>

        {/* Middle Content Grid — Minimal Left Paragraph with FadeInLeft */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto pt-10 lg:pt-16">
          {/* Left Side: Minimal Paragraph Text with FadeInLeft */}
          <div
            className={`lg:col-span-5 max-w-sm transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-[1.7]">
              We crafted our summer menu so you can quickly refresh on your way to study, work, or during a walk
            </p>
          </div>
        </div>
      </div>

      {/* Right Image — Balanced Scale, Nudged down, Anchored Flush Right Bottom */}
      <div
        className={`w-full lg:w-7/12 xl:w-7/12 absolute right-0 bottom-0 pointer-events-none transition-all duration-1000 ease-out z-0 flex justify-end items-end ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-20 sm:translate-x-32"
        }`}
      >
        <img
          src="/images/taycamlycaphe.png"
          alt="Hand holding splash iced coffee drink"
          className="w-full max-w-[500px] sm:max-w-[650px] lg:max-w-[780px] xl:max-w-[850px] h-auto object-contain object-right-bottom scale-100 sm:scale-110 lg:scale-120 origin-bottom-right transform translate-y-8 sm:translate-y-12 lg:translate-y-16"
          draggable={false}
        />
      </div>
    </section>
  );
}
