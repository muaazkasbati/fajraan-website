"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.35, // lower = faster, more native
      easing: (t) => t * (2 - t), // ease-out (natural feel)
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1, // keep natural touch scroll
      lerp: 0.08, // controls smoothing strength
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Avoid initial scroll jumps
    window.history.scrollRestoration = "manual";

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
