"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
      className={`relative w-full bg-[#FDFAF5] overflow-hidden -mt-[50px] sm:mt-0 select-none transition-[opacity,transform] duration-700 ease-out origin-center lg:min-h-screen lg:h-screen flex flex-col justify-between py-8 sm:py-16 lg:py-20 px-6 lg:px-16 ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      {/* === MOBILE LAYOUT (vertical flow: Title → Image → Bottom Text) === */}
      <div className="flex flex-col items-center lg:hidden w-full">
        {/* Title & Subtitle */}
        <div
          className={`text-center w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full pb-2">
              <h2 className="font-heading text-[28px] xs:text-4xl sm:text-5xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                WHEN YOU CRAVE
                <span className="font-script script normal-case text-[28px] xs:text-4xl sm:text-5xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-6 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  Refreshment
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#7A7268] font-normal mt-5 max-w-[320px] sm:max-w-md mx-auto leading-relaxed px-2">
            When it&apos;s hot outside, only a delicious and truly icy drink can save the day
          </p>
        </div>

        {/* Right-aligned Image */}
        <div
          className={`w-full flex justify-end my-4 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Image
            src="/images/taycamlycaphe.png"
            alt="Hand holding splash iced coffee drink"
            width={460}
            height={520}
            className="w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[460px] h-auto object-contain drop-shadow-xl translate-x-[40px]"
            draggable={false}
          />
        </div>

        {/* Bottom Text */}
        <div
          className={`text-center max-w-[340px] sm:max-w-md mx-auto transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs sm:text-sm text-[#7A7268] font-normal leading-[1.7] px-2">
            We crafted our summer menu so you can quickly refresh on your way to study, work, or during a walk
          </p>
        </div>
      </div>

      {/* === DESKTOP LAYOUT (original design with absolute image) === */}
      <div className="hidden lg:flex flex-col mx-auto max-w-6xl w-full my-auto justify-between min-h-[560px] relative z-10">
        {/* Top Header — Centered Title & Subtitle with FadeInDown */}
        <div
          className={`text-center max-w-2xl mx-auto w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full">
              <h2 className="font-heading text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                WHEN YOU CRAVE
                <span className="font-script script normal-case text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  Refreshment
                </span>
              </h2>
            </div>
          </div>
          <p className="text-sm lg:text-[15px] text-[#7A7268] font-normal mt-6 max-w-md mx-auto leading-relaxed">
            When it&apos;s hot outside, only a delicious and truly icy drink can save the day
          </p>
        </div>

        {/* Middle Content Grid — Left Paragraph */}
        <div className="grid grid-cols-12 gap-8 items-center my-auto pt-16">
          <div
            className={`col-span-5 max-w-sm transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm lg:text-[15px] text-[#7A7268] font-normal leading-[1.7] text-left">
              We crafted our summer menu so you can quickly refresh on your way to study, work, or during a walk
            </p>
          </div>
        </div>
      </div>

      {/* Right Image — Desktop only, absolute positioned */}
      <div
        className={`hidden lg:flex w-7/12 xl:w-7/12 absolute right-0 bottom-0 pointer-events-none transition-all duration-1000 ease-out z-0 justify-end items-end ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-40"
        }`}
      >
        <Image
          src="/images/taycamlycaphe.png"
          alt="Hand holding splash iced coffee drink"
          width={850}
          height={960}
          className="w-full max-w-[780px] xl:max-w-[850px] h-auto object-contain object-right-bottom scale-120 origin-bottom-right transform translate-y-16"
          draggable={false}
        />
      </div>
    </section>
  );
}

