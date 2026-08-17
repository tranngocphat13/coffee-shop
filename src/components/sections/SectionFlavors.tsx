"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Drink {
  id: number;
  name: string;
  garnish: string;
  description: string;
  image: string;
}

const DRINKS: Drink[] = [
  {
    id: 1,
    name: "Iced Caramel Latte",
    garnish: "Caramel cubes & honey",
    description: "Espresso, cold milk, ice, and rich homemade caramel syrup. The perfect balance of coffee bitterness and enveloping sweetness.",
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "Classic Iced Americano",
    garnish: "Fresh orange slice",
    description: "Double shot specialty espresso over crystal cold ice. Pure, crisp, and refreshing taste.",
    image: "/images/2.png",
  },
  {
    id: 3,
    name: "Cold Brew Cream Foam",
    garnish: "Salted cream foam & cinnamon",
    description: "16-hour slow cold brew coffee topped with a smooth salted cream foam.",
    image: "/images/3.png",
  },
  {
    id: 4,
    name: "Matcha Coconut Breeze",
    garnish: "Fresh coconut & mint",
    description: "Premium Uji Japanese matcha blended with pure natural coconut water over ice.",
    image: "/images/4.png",
  },
  {
    id: 5,
    name: "Oreo Fudge Iced Latte",
    garnish: "Chocolate chips & cookies",
    description: "Rich dark chocolate sauce, espresso, milk, and crunchy Oreo cookies on top.",
    image: "/images/5.png",
  },
  {
    id: 6,
    name: "Berry Cold Brew Tonic",
    garnish: "Blueberries & sparkling tonic",
    description: "Cold brew coffee infused with citrus tonic and wild berry puree.",
    image: "/images/6.png",
  },
];

const RING_SLOTS = [
  "frontCenter",
  "frontRight",
  "backRight",
  "backCenter",
  "backLeft",
  "frontLeft",
] as const;

const LAYER_MAP: Record<string, "front" | "back"> = {
  frontCenter: "front",
  frontRight: "front",
  frontLeft: "front",
  backRight: "back",
  backCenter: "back",
  backLeft: "back",
};

export function SectionFlavors() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? DRINKS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === DRINKS.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  // Auto-play / Auto-rotation effect every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === DRINKS.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeDrink = DRINKS[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="sec-3"
      className={`flex flex-col justify-center bg-[#FDFAF5] px-4 sm:px-6 py-12 sm:py-15 lg:py-15 lg:min-h-screen relative overflow-hidden select-none transition-[opacity,transform] duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full my-auto flex flex-col items-center">
        {/* Section Header with FadeInDown */}
        <div
          className={`text-center max-w-2xl mb-6 sm:mb-12 w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full">
              <h2 className="font-heading text-[28px] xs:text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                CHOOSE YOUR TASTE
                <span className="font-script script normal-case text-[28px] xs:text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  Of freshness
                </span>
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-base text-[#7A7268] font-medium mt-5 sm:mt-6 px-2">
            Swipe or rotate the circle to discover your favorite summer flavor
          </p>
        </div>

        {/* Circular Focus Carousel (Pure Floating PNG Cups, Swipe Supported) */}
        <div
          className="circular-collage my-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {DRINKS.map((drink, idx) => {
            const offset = (idx - activeIndex + DRINKS.length) % DRINKS.length;
            const slot = RING_SLOTS[offset];
            const layer = LAYER_MAP[slot];
            const isCenter = slot === "frontCenter";

            return (
              <div
                key={drink.id}
                onClick={() => setActiveIndex(idx)}
                className={`circular-cup slot-${slot} layer-${layer}`}
              >
                <div className="circular-cup-inner relative flex items-center justify-center pointer-events-auto group">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    width={400}
                    height={500}
                    className={`w-full h-full object-contain filter transition-all duration-500 group-hover:scale-110 ${
                      isCenter
                        ? "drop-shadow-[0_25px_35px_rgba(40,25,10,0.28)] scale-110 sm:scale-115"
                        : "drop-shadow-lg opacity-90 scale-105"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Info & Independent Navigation Controls */}
        <div
          className="w-full max-w-3xl flex flex-col items-center text-center mt-4 sm:mt-6 z-40"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Product Name with Smooth Fade Transition */}
          <h3
            key={`title-${activeDrink.id}`}
            className="text-xl sm:text-3xl font-extrabold text-[#1F1B16] mb-2 sm:mb-3 tracking-tight transition-all duration-300 animate-fadeIn"
          >
            {activeDrink.name}
          </h3>

          {/* Description Container with Independent Fixed Left & Right Arrow Buttons */}
          <div className="relative w-full max-w-2xl flex items-center justify-center min-h-[70px] sm:min-h-[80px] px-12 sm:px-20 mt-1">
            {/* Independent Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-13 sm:h-13 rounded-full border border-[#1F1B16] text-[#1F1B16] flex items-center justify-center hover:bg-[#1F1B16] hover:text-white transition-all active:scale-90 cursor-pointer z-10 bg-white/80 backdrop-blur-xs"
              aria-label="Previous drink"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Centered Product Description */}
            <div className="flex items-center justify-center min-h-[56px] sm:min-h-[72px]">
              <p
                key={`desc-${activeDrink.id}`}
                className="text-xs sm:text-base text-[#7A7268] text-center leading-relaxed font-medium transition-all duration-300 animate-fadeIn px-1"
              >
                {activeDrink.description}
              </p>
            </div>

            {/* Independent Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-13 sm:h-13 rounded-full border border-[#1F1B16] text-[#1F1B16] flex items-center justify-center hover:bg-[#1F1B16] hover:text-white transition-all active:scale-90 cursor-pointer z-10 bg-white/80 backdrop-blur-xs"
              aria-label="Next drink"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
