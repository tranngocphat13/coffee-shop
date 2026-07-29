"use client";

import { useEffect } from "react";
import { Navbar, Footer } from "@/components/layout";
import {
  SectionHero,
  SectionRefresh,
  SectionFlavors,
  SectionWhyVisit,
  SectionVibes,
  SectionMap,
  SectionOfferForm,
} from "@/components/sections";

export function ClientPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Force browser to not restore previous scroll position on reload/refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top immediately on page load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // Fallback timer to handle any delayed layout render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, 50);

    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFAF5] text-[#1F1B16] font-sans selection:bg-[#4A3626] selection:text-[#FDFAF5]">
      {/* Header */}
      <Navbar />

      {/* 7 Full-Screen Sections */}
      <main className="relative w-full">
        {/* Section 1: Hero */}
        <SectionHero />

        {/* Section 2: Когда хочется прохлады */}
        <SectionRefresh />

        {/* Section 3: Выбери свой вкус свежести */}
        <SectionFlavors />

        {/* Section 4: Почему стоит зайти к нам */}
        <SectionWhyVisit />

        {/* Section 5: Атмосфера твоего лета с Local. */}
        <SectionVibes />

        {/* Section 6: Забегай за прохладой с Local. (Карта) */}
        <SectionMap />

        {/* Section 7: Не упусти свой бонус (Форма) */}
        <SectionOfferForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
