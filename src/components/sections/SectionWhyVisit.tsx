"use client";

import { Clock, MapPin, ThumbsUp } from "lucide-react";

export function SectionWhyVisit() {
  return (
    <section
      id="sec-4"
      className="relative min-h-screen lg:h-screen w-full bg-[#FDFAF5] overflow-hidden flex flex-col justify-center py-16 lg:py-24 px-6 sm:px-10 lg:px-16 select-none"
    >
      <div className="mx-auto max-w-6xl w-full my-auto flex flex-col justify-between relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 w-full">
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center">
              <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none whitespace-nowrap text-center">
                WHY VISIT
                <span className="font-script script normal-case text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  us
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal mt-6 max-w-md mx-auto leading-relaxed">
            We care about your comfort and perfect proportions
          </p>
        </div>

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Card with Higher Top Breakout (Single-edge Bleed) + Tilted Product Shot */}
          <div className="lg:col-span-6 w-full flex justify-center pt-16 sm:pt-24 lg:pt-20">
            <div className="relative w-full max-w-[430px] lg:max-w-[460px] h-[390px] sm:h-[430px] bg-[#F3EAD9] rounded-[32px] sm:rounded-[40px] shadow-sm overflow-visible flex items-center justify-center">
              <img
                src="/images/4.png"
                alt="Enlarged Tilted Product Shot 4.png"
                className="absolute -top-20 sm:-top-24 lg:-top-28 left-1/2 -translate-x-1/2 rotate-[16deg] w-[88%] sm:w-[92%] max-w-[400px] sm:max-w-[440px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500 select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: 3 Feature Items */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm">
                <Clock className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight">
                  Fast Service
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-relaxed">
                  We prepare in just a couple of minutes — save time and keep up with all your plans without long waits.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm">
                <MapPin className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight">
                  Convenient Locations
                </h3>
                <p className="text-xs sm:text-sm lg:text-[15px] text-[#7A7268] font-normal leading-relaxed">
                  Our coffee shops are located in central areas, making it always easy to drop by on your way.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-5 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#5C4D42] shrink-0 flex items-center justify-center text-white shadow-sm">
                <ThumbsUp className="w-7 h-7 stroke-[1.75]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1F1B16] mb-1.5 tracking-tight">
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

