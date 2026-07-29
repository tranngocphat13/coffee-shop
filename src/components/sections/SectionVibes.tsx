"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface VibePhoto {
  id: number;
  location: string;
  tagline: string;
  image: string;
}

const VIBE_PHOTOS: VibePhoto[] = [
  {
    id: 1,
    location: "City Center Terrace",
    tagline: "Summer outdoor seating & iced lattes",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    location: "Downtown Walks",
    tagline: "Strolling through the central streets",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    location: "Morning Cold Brew",
    tagline: "Fresh 16h cold brew before work",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    location: "Friends & Coffee",
    tagline: "Catching up on warm summer evenings",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    location: "Local. Barista Bar",
    tagline: "Crafting each drink with care",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
];

export function SectionVibes() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="sec-5"
      className={`flex flex-col justify-center bg-[#FDFAF5] px-6 py-20 lg:py-28 lg:px-12 relative overflow-hidden select-none transition-all duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100 filter-none" : "scale-90 opacity-40 blur-xs"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full my-auto">
        {/* Section Top Header & Nav Arrows with FadeInDown */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="w-full flex justify-center md:justify-start items-center">
              <div className="relative inline-block text-center md:text-left">
                <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none whitespace-nowrap text-center md:text-left">
                  SUMMER ATMOSPHERE
                  <span className="font-script script normal-case text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-4 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                    With Local.
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-sm text-[#7A7268] font-medium mt-6 max-w-md">
              Sharing beautiful moments and summer vibes right from the city streets
            </p>
          </div>

          {/* Right Aligned Carousel Controls */}
          <div className="flex items-center gap-4 self-start md:self-end">
            {/* Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="p-3 rounded-full border border-[#4A3626] text-[#1F1B16] hover:bg-[#4A3626] hover:text-white transition-all active:scale-95 bg-white shadow-xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-3 rounded-full bg-[#4A3626] text-white hover:bg-[#3A2E24] transition-all active:scale-95 shadow-xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track with Staggered Entrance */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar py-4 px-1 scroll-smooth snap-x snap-mandatory"
        >
          {VIBE_PHOTOS.map((vibe, index) => (
            <div
              key={vibe.id}
              className={`snap-start shrink-0 w-64 sm:w-72 aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg group border-2 border-white transform hover:-translate-y-2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={vibe.image}
                alt={vibe.location}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#FDFAF5]/90 backdrop-blur text-[#1F1B16] px-2.5 py-1 rounded-full shadow">
                  #LocalVibes
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-base font-black uppercase tracking-tight">
                  {vibe.location}
                </h3>
                <p className="text-xs text-white/80 font-medium mt-0.5">
                  {vibe.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
