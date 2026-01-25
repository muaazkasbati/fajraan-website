// "use client";
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export default function useLenis() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 0.35, // lower = faster, more native
//       easing: (t) => t * (2 - t), // ease-out (natural feel)
//       smoothWheel: true,
//       smoothTouch: false,
//       touchMultiplier: 1, // keep natural touch scroll
//       lerp: 0.08, // controls smoothing strength
//     });

//     let rafId;
//     const raf = (time) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     // Avoid initial scroll jumps
//     window.history.scrollRestoration = "manual";

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);
// }

"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    // Best possible guard
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 0.35,
      easing: (t) => t * (2 - t),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    window.history.scrollRestoration = "manual";

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
