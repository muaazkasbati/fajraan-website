// 
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


// import { useEffect } from "react";
// // import Lenis from "@studio-freight/lenis";
// import dynamic from 'next/dynamic';

// const Lenis = dynamic(() => import('@studio-freight/lenis'), { ssr: false });

// export default function useLenis() {
//   useEffect(() => {
//     // Best possible guard
//     const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
//     if (isTouchDevice) return;

//     const lenis = new Lenis({
//       duration: 0.35,
//       easing: (t) => t * (2 - t),
//       smoothWheel: true,
//       smoothTouch: false,
//       lerp: 0.08,
//     });

//     let rafId;
//     const raf = (time) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     window.history.scrollRestoration = "manual";

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);
// }

// // hooks/useLenis.js
// import { useEffect } from "react";

// export default function useLenis() {
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
//     if (isTouchDevice) return;

//     let lenisInstance;
//     let rafId;

//     import('@studio-freight/lenis').then(({ default: Lenis }) => {
//       lenisInstance = new Lenis({
//         duration: 0.35,
//         easing: (t) => t * (2 - t),
//         smoothWheel: true,
//         smoothTouch: false,
//         lerp: 0.08,
//       });

//       const raf = (time) => {
//         lenisInstance.raf(time);
//         rafId = requestAnimationFrame(raf);
//       };
//       rafId = requestAnimationFrame(raf);
//     }).catch(console.error);

//     window.history.scrollRestoration = "manual";

//     return () => {
//       if (rafId) cancelAnimationFrame(rafId);
//       if (lenisInstance) lenisInstance.destroy();
//     };
//   }, []);
// }

import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(pointer: coarse)").matches) return;

    let lenis;
    let rafId;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("lenis");

        lenis = new Lenis({
          duration: 0.35,
          lerp: 0.08,
          smoothWheel: true,
          syncTouch: false,
          easing: (t) => t * (2 - t),
        });

        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch (err) {
        console.error("Failed to initialize Lenis:", err);
      }
    };

    initLenis();

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}