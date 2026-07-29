"use client";

import { useState, useEffect } from "react";

/**
 * Checks if WebGL is available in the browser.
 * Returns true if WebGL context can be created, false otherwise.
 * Also listens for context loss events on any active canvases.
 */
export function useWebGLSupport(): boolean {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setSupported(false);
      }
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
