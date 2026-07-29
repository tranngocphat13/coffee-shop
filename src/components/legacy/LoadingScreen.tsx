"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [readyToClick, setReadyToClick] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  const splashRef = useRef<HTMLDivElement>(null);
  const beanRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Preload gating, reduced motion check, and session logic
  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
    }

    // Session logic: Skip splash on subsequent in-session navigations, except on F5 reload
    if (typeof window !== "undefined") {
      const navEntries = performance.getEntriesByType("navigation");
      const isReload =
        navEntries.length > 0 &&
        (navEntries[0] as PerformanceNavigationTiming).type === "reload";

      if (isReload) {
        sessionStorage.removeItem("splashShown");
      } else {
        const splashShown = sessionStorage.getItem("splashShown");
        if (splashShown === "true") {
          setIsHidden(true);
          if (onComplete) onComplete();
          return;
        }
      }
    }

    // Preload gating: Wait for document.fonts.ready and asset timer
    const fontsPromise =
      typeof document !== "undefined" && document.fonts
        ? document.fonts.ready
        : Promise.resolve();

    const assetsTimer = new Promise((resolve) => setTimeout(resolve, 400));

    Promise.all([fontsPromise, assetsTimer]).then(() => {
      setReadyToClick(true);
    });
  }, [onComplete]);

  // Handle click / keydown to open iris/aperture
  const handleOpen = useCallback(() => {
    if (!readyToClick || isOpening) return;

    if (typeof window !== "undefined") {
      sessionStorage.setItem("splashShown", "true");
    }

    // Reduced motion fallback: Direct 300ms fade-out
    if (reducedMotion) {
      setIsFading(true);
      setTimeout(() => {
        setIsHidden(true);
        if (onComplete) onComplete();
      }, 300);
      return;
    }

    // Compute origin coordinates from bean's actual getBoundingClientRect()
    if (beanRef.current) {
      const rect = beanRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setOrigin({
        x: `${centerX}px`,
        y: `${centerY}px`,
      });
    }

    // Promote GPU layers
    if (splashRef.current) splashRef.current.style.willChange = "clip-path";
    if (ringRef.current) ringRef.current.style.willChange = "transform, opacity";

    requestAnimationFrame(() => {
      setIsOpening(true);

      setTimeout(() => {
        if (splashRef.current) splashRef.current.style.willChange = "auto";
        if (ringRef.current) ringRef.current.style.willChange = "auto";

        setIsHidden(true);
        if (onComplete) onComplete();
      }, 1300); // 1.1s animation + 200ms safety buffer
    });
  }, [readyToClick, isOpening, reducedMotion, onComplete]);

  if (isHidden) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes beanFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes captionPulse {
          0%,
          100% {
            opacity: 0.85;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes ringExpand {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(14);
            opacity: 0;
          }
        }
      `}</style>

      {/* #splash: Fullscreen Iris Aperture Overlay (z-index 100) */}
      <div
        ref={splashRef}
        id="splash"
        role="button"
        tabIndex={0}
        aria-label="Nhấn để khám phá"
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        className={`fixed inset-0 z-[100] select-none overflow-hidden outline-none flex flex-col items-center justify-between py-16 ${
          readyToClick && !isOpening ? "cursor-pointer" : "cursor-default"
        } ${
          isFading
            ? "transition-opacity duration-300 opacity-0 pointer-events-none"
            : ""
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, #7A3B18 0%, #3F1A08 70%)",
          clipPath: isOpening
            ? `circle(0% at ${origin.x} ${origin.y})`
            : `circle(150% at ${origin.x} ${origin.y})`,
          transition: reducedMotion
            ? "none"
            : "clip-path 1.1s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >
        {/* Brand Header */}
        <div className="text-center pt-4 pointer-events-none">
          <span className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-[#F7E2CE]/90 tracking-wider">
            Origen
          </span>
        </div>

        {/* Centered Coffee Bean Image (#bean-idle) */}
        <div
          ref={beanRef}
          id="bean-container"
          className="relative flex h-[220px] w-[220px] items-center justify-center pointer-events-auto"
        >
          <div
            id="bean-idle"
            className="relative h-[180px] w-[180px]"
            style={{
              animation: !isOpening
                ? "beanFloat 2.6s ease-in-out infinite"
                : "none",
              transform: isOpening ? "scale(0.3)" : "none",
              opacity: isOpening ? 0 : 1,
              transition:
                "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.6s ease",
              filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.45))",
            }}
          >
            <Image
              src="/images/coffee-whole.png"
              alt="Coffee bean"
              fill
              className="object-contain"
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Caption Label (#caption) */}
        <div
          id="caption"
          className="pb-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isOpening ? 0 : undefined,
          }}
        >
          <span
            className="font-[family-name:var(--font-inter)] text-xs font-semibold text-[#F7E2CE] tracking-[0.15em] uppercase"
            style={{
              animation:
                readyToClick && !isOpening
                  ? "captionPulse 1.2s ease-in-out infinite"
                  : "none",
              opacity: readyToClick ? 0.85 : 0.4,
            }}
          >
            Nhấn để khám phá
          </span>
        </div>
      </div>

      {/* #ring: Expanding Accent Ring (z-index 101) */}
      <div
        ref={ringRef}
        id="ring"
        className="fixed top-1/2 left-1/2 z-[101] h-[220px] w-[220px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(217, 155, 120, 0.5)",
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 0,
          animation: isOpening
            ? "ringExpand 1.1s cubic-bezier(0.76, 0, 0.24, 1) forwards"
            : "none",
        }}
      />
    </>
  );
}




