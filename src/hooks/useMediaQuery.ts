"use client";

import { useSyncExternalStore, useCallback } from "react";

const getServerSnapshot = () => false;

/**
 * Custom hook that listens to a CSS media query and returns whether it matches.
 * Used to toggle between 3D and static fallbacks at the 768px breakpoint.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === "undefined") return () => {};
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [query]
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  }, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Returns true when viewport width >= 768px (desktop).
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 768px)");
}
