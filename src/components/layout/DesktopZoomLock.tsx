"use client";

import { useEffect } from "react";

export default function DesktopZoomLock() {
  useEffect(() => {
    const root = document.documentElement;

    const updateZoomLock = () => {
      const currentScale = window.visualViewport?.scale ?? 1;
      const normalizedScale = Number.isFinite(currentScale) && currentScale > 0
        ? 1 / currentScale
        : 1;

      root.style.setProperty("--desktop-phone-zoom-lock", String(normalizedScale));
    };

    updateZoomLock();

    window.addEventListener("resize", updateZoomLock);
    window.visualViewport?.addEventListener("resize", updateZoomLock);

    return () => {
      window.removeEventListener("resize", updateZoomLock);
      window.visualViewport?.removeEventListener("resize", updateZoomLock);
      root.style.removeProperty("--desktop-phone-zoom-lock");
    };
  }, []);

  return null;
}
