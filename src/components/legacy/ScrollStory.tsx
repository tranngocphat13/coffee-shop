"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
const ScrollStoryScene = (_props: any) => null;
import { useCanvasVisibility } from "@/hooks/useCanvasVisibility";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useIsDesktop } from "@/hooks/useMediaQuery";

const STAGES = [
  {
    title: "Grow",
    description:
      "Our journey begins at high-altitude farms, where volcanic soil and cool mountain air nurture each seedling into a thriving coffee plant.",
    icon: "🌱",
  },
  {
    title: "Harvest",
    description:
      "Hand-picked at peak ripeness by skilled farmers who've perfected the craft across generations. Only the reddest cherries make the cut.",
    icon: "🫐",
  },
  {
    title: "Roast",
    description:
      "Small-batch roasted to unlock each origin's unique profile. We roast within 48 hours of your order for maximum freshness.",
    icon: "🔥",
  },
  {
    title: "Package",
    description:
      "Sealed in nitrogen-flushed bags with a one-way valve, locking in aroma from roaster to your kitchen counter.",
    icon: "📦",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useCanvasVisibility(canvasContainerRef);
  const webglSupported = useWebGLSupport();
  const isDesktop = useIsDesktop();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStage = Math.min(3, Math.floor(progress * 4));

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-cream"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Section header */}
        <div className="mb-6 text-center md:mb-8">
          <span className="label-text text-olive">Farm to Cup</span>
          <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-espresso">
            The Journey of Your Coffee
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:gap-12 lg:px-10">
          {/* 3D Canvas / Mobile Fallback */}
          <div
            ref={canvasContainerRef}
            className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px]"
          >
            {isDesktop && webglSupported ? (
              <Canvas
                camera={{ position: [0, 0.5, 4], fov: 35 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                frameloop={isVisible ? "always" : "never"}
                style={{ background: "transparent" }}
              >
                <Suspense fallback={null}>
                  <ScrollStoryScene progress={progress} />
                </Suspense>
              </Canvas>
            ) : (
              /* Mobile / WebGL fallback — animated icon progression */
              <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl bg-clay/10">
                <div className="mb-4 text-7xl transition-all duration-700">
                  {STAGES[activeStage].icon}
                </div>
                <div className="label-text text-espresso/40">
                  {STAGES[activeStage].title}
                </div>
              </div>
            )}
          </div>

          {/* Stage labels */}
          <div className="flex flex-col gap-4 md:gap-6">
            {STAGES.map((stage, i) => {
              const isActive = i === activeStage;
              const isPast = i < activeStage;
              return (
                <div
                  key={stage.title}
                  className={`flex items-start gap-4 rounded-2xl border p-4 transition-all duration-500 md:p-5 ${
                    isActive
                      ? "border-olive/30 bg-olive/5 shadow-lg shadow-olive/5"
                      : isPast
                      ? "border-espresso/5 bg-transparent opacity-60"
                      : "border-espresso/5 bg-transparent opacity-30"
                  }`}
                >
                  {/* Step indicator */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg transition-all duration-500 ${
                      isActive
                        ? "bg-olive text-cream shadow-md"
                        : isPast
                        ? "bg-olive/20 text-olive"
                        : "bg-espresso/5 text-espresso/30"
                    }`}
                  >
                    {stage.icon}
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-semibold text-espresso md:text-xl">
                      {stage.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed transition-all duration-500 ${
                        isActive ? "text-espresso/70" : "text-espresso/40"
                      }`}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {STAGES.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeStage
                  ? "w-8 bg-olive"
                  : i < activeStage
                  ? "w-4 bg-olive/30"
                  : "w-4 bg-espresso/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
