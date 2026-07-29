"use client";

import { useState, useEffect, RefObject } from "react";

/**
 * Uses IntersectionObserver to track whether a DOM element is in the viewport.
 * Used to pause 3D canvas render loops when off-screen (performance requirement:
 * only one 3D canvas may be actively rendering at a time).
 */
export function useCanvasVisibility(
  ref: RefObject<HTMLElement | null>,
  threshold: number = 0.1
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}
