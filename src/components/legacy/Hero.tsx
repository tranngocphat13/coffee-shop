"use client";

import { useRef, useState, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
const CoffeeCup3D = (_props: any) => null;
import { useCanvasVisibility } from "@/hooks/useCanvasVisibility";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useCanvasVisibility(canvasContainerRef);
  const webglSupported = useWebGLSupport();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMouse({ x, y });
    },
    []
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-cream pt-16 md:pt-0"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-clay/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-clay/15 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-12 lg:px-10">
        {/* Text content — this is the LCP element */}
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-clay/30 bg-cream-light px-4 py-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-olive" />
            <span className="label-text text-espresso/60">
              Single-Origin Specialty
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.5rem,6vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-espresso">
            From Seed to
            <br />
            <span className="text-rust">Your Cup</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-espresso/70 md:text-lg">
            Every bag tells a story. We partner directly with farmers across
            three continents to bring you traceable, sustainably sourced
            coffee at its peak of freshness.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#products"
              id="hero-cta"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-rust px-8 py-3.5 text-base font-medium text-cream transition-all duration-300 hover:bg-rust-dark hover:shadow-xl hover:shadow-rust/20"
            >
              <span className="relative z-10">Explore Our Beans</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 text-base font-medium text-espresso/70 transition-colors duration-300 hover:text-rust"
            >
              <span>Our Journey</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-4 flex gap-8 border-t border-espresso/10 pt-6">
            {[
              { value: "12+", label: "Farm Partners" },
              { value: "3", label: "Continents" },
              { value: "100%", label: "Traceable" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-espresso">
                  {stat.value}
                </div>
                <div className="label-text mt-0.5 text-espresso/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Coffee Cup */}
        <div
          ref={canvasContainerRef}
          className="relative flex items-center justify-center"
        >
          <div className="canvas-container relative h-[380px] w-[380px] sm:h-[420px] sm:w-[420px] md:h-[480px] md:w-[500px]">
            {webglSupported ? (
              <Canvas
                camera={{ position: [0, 0.5, 3.5], fov: 40 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                frameloop={isVisible ? "always" : "never"}
                style={{ background: "transparent" }}
              >
                <Suspense fallback={null}>
                  <CoffeeCup3D mouseX={mouse.x} mouseY={mouse.y} />
                </Suspense>
              </Canvas>
            ) : (
              /* Static fallback when WebGL is unavailable */
              <div className="flex h-full w-full items-center justify-center rounded-3xl bg-clay/10">
                <div className="text-center">
                  <div className="mx-auto mb-3 text-6xl">☕</div>
                  <p className="label-text text-espresso/40">
                    Premium Coffee Experience
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
