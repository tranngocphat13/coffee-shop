"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export function SectionOfferForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      ref={sectionRef}
      id="sec-7"
      className={`flex flex-col justify-center bg-[#FDFAF5] py-16 lg:py-24 relative overflow-hidden select-none transition-all duration-700 ease-out origin-center ${
        isVisible ? "scale-100 opacity-100 filter-none" : "scale-90 opacity-40 blur-xs"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center px-4 sm:px-8">
        {/* Section Header with FadeInDown */}
        <div
          className={`text-center max-w-xl mx-auto mb-8 sm:mb-12 w-full transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative inline-block text-center max-w-full">
              <h2 className="font-heading text-[28px] xs:text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-[#1F1B16] tracking-tight leading-none text-center">
                DON&apos;T MISS YOUR
                <span className="font-script script normal-case text-[28px] xs:text-4xl sm:text-6xl lg:text-7xl text-[#C97B3D] absolute -bottom-3 sm:-bottom-7 lg:-bottom-9 right-0 pointer-events-none select-none font-normal whitespace-nowrap">
                  Bonus
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Bonus Wrapper */}
        <div className="bonus-wrap relative w-full max-w-5xl">
          {/* Main Card with Scale Pop Entrance */}
          <div
            className={`card relative w-full bg-[#EEDECE] rounded-[24px] sm:rounded-[36px] min-h-[360px] sm:min-h-[440px] flex items-center justify-center p-5 sm:p-12 lg:p-16 z-[1] overflow-hidden transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"
            }`}
          >
            {/* Left Cup */}
            <div className="cup cup-left absolute -bottom-[40px] sm:-bottom-[60px] -left-16 sm:-left-20 lg:-left-28 h-[75%] sm:h-[105%] max-h-[440px] z-[2] pointer-events-none opacity-20 sm:opacity-100 animate-float-left">
              <img
                src="/images/hero_cup_left_transparent.png"
                alt="Iced Matcha Drink"
                className="h-full w-auto object-contain object-bottom transform rotate-[45deg] scale-90 sm:scale-120"
              />
            </div>

            {/* Form Content */}
            <div className="card-inner relative z-[3] w-full max-w-[340px] sm:max-w-[380px] text-center flex flex-col items-center">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                  <h3 className="text-xl sm:text-3xl font-bold text-[#2A211B] tracking-tight mb-2 sm:mb-3">
                    Get 15% discount
                  </h3>
                  <p className="text-xs sm:text-sm text-[#7D7065] font-normal leading-relaxed mb-5 sm:mb-6">
                    Leave your email, and we&apos;ll immediately send a promo code for your first order from our new summer collection
                  </p>

                  <div className="w-full space-y-2.5 sm:space-y-3 mb-4">
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 sm:h-13 px-5 sm:px-6 rounded-full bg-white border-0 text-xs sm:text-sm font-medium text-[#2A211B] placeholder:text-[#B2A69B] shadow-none focus:outline-none focus:ring-2 focus:ring-[#3D3127] transition-all"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 sm:h-13 px-5 sm:px-6 rounded-full bg-white border-0 text-xs sm:text-sm font-medium text-[#2A211B] placeholder:text-[#B2A69B] shadow-none focus:outline-none focus:ring-2 focus:ring-[#3D3127] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="cta w-full h-11 sm:h-13 bg-[#3D3127] hover:bg-[#2B2119] text-white rounded-full font-medium text-xs sm:text-sm transition-all active:scale-[0.99] flex items-center justify-center disabled:opacity-70 cursor-pointer shadow-md"
                  >
                    {loading ? "Sending..." : "Get discount"}
                  </button>
                </form>
              ) : (
                <div className="w-full flex flex-col items-center text-center py-2 animate-fadeIn">
                  <div className="p-3 rounded-full bg-[#3D3127]/10 text-[#3D3127] mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-[#2A211B] mb-2">
                    Promo Code Sent!
                  </h3>

                  <p className="text-xs text-[#7D7065] font-normal mb-4">
                    Thank you, <span className="font-semibold text-[#2A211B]">{name}</span>! Your 15% discount promo code has been sent to{" "}
                    <span className="font-semibold text-[#2A211B]">{email}</span>.
                  </p>

                  <div className="p-3.5 bg-white/90 rounded-2xl border border-dashed border-[#D0893B] w-full animate-shimmer">
                    <span className="block text-[10px] uppercase font-bold text-[#7D7065] mb-1">
                      Your Promo Code
                    </span>
                    <span className="text-xl font-black text-[#D0893B] tracking-widest">
                      SUMMER15OFF
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Cup */}
            <div className="cup cup-right absolute -bottom-[45px] sm:-bottom-[70px] -right-16 sm:-right-20 lg:-right-28 h-[75%] sm:h-[105%] max-h-[440px] z-[2] pointer-events-none opacity-20 sm:opacity-100 animate-float-right">
              <img
                src="/images/hero_cup_right_transparent.png"
                alt="Iced Coffee Drink"
                className="h-full w-auto object-contain object-bottom transform -rotate-[45deg] scale-90 sm:scale-130"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

