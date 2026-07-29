"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, MapPin, ThumbsUp } from "lucide-react";

export function SectionWhyVisit() {
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
      id="sec-4"
      className={`relative min-h-screen lg:h-screen w-full bg-[#FDFAF5] overflow-hidden flex flex-col justify-center py-16 lg:py-24 px-6 sm:px-10 lg:px-16 select-none transition-all duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100 filter-none" : "scale-90 opacity-40 blur-xs"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full my-auto flex flex-col justify-between relative z-10">
        {/* Section Header with FadeInDown */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-16 w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full">
              <h2 className="font-heading text-[32px] xs:text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                WHY VISIT
                <span className="font-script script normal-case text-[32px] xs:text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  us
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal mt-5 sm:mt-6 max-w-md mx-auto leading-relaxed px-2">
            We care about your comfort and perfect proportions
          </p>
        </div>

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Card with Higher Top Breakout (Single-edge Bleed) + Tilted Product Shot with FadeInLeft */}
          <div
            className={`lg:col-span-6 w-full flex justify-center pt-12 xs:pt-16 sm:pt-24 lg:pt-20 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
            }`}
          >
            <div className="relative w-full max-w-[360px] xs:max-w-[430px] lg:max-w-[460px] h-[280px] xs:h-[320px] sm:h-[430px] bg-[#F3EAD9] rounded-[28px] sm:rounded-[40px] shadow-sm overflow-visible flex items-center justify-center">
              <img
                src="/images/4.png"
                alt="Enlarged Tilted Product Shot 4.png"
                className="absolute -top-[106px] xs:-top-[114px] sm:-top-24 lg:-top-28 left-1/2 -translate-x-1/2 rotate-[16deg] w-[88%] sm:w-[92%] max-w-[320px] xs:max-w-[400px] sm:max-w-[440px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500 select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: 3 Feature Items with Stagger Reveal */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10">
            {/* Feature 1 */}
            <div
              className={`flex items-start gap-5 sm:gap-6 group transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight group-hover:text-[#C97B3D] transition-colors">
                  Fast Service
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-relaxed">
                  We prepare in just a couple of minutes — save time and keep up with all your plans without long waits.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className={`flex items-start gap-5 sm:gap-6 group transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight group-hover:text-[#C97B3D] transition-colors">
                  Convenient Locations
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-relaxed">
                  Our coffee shops are located in central areas, making it always easy to drop by on your way.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className={`flex items-start gap-5 sm:gap-6 group transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight group-hover:text-[#C97B3D] transition-colors">
                  Coffee, Not Water
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-relaxed">
                  We use natural ingredients and maintain ideal ratios so ice never dilutes the rich coffee flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


