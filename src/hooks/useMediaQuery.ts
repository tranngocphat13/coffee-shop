"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook that listens to a CSS media query and returns whether it matches.
 * Used to toggle between 3D and static fallbacks at the 768px breakpoint.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/**
 * Returns true when viewport width >= 768px (desktop).
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 768px)");
}
