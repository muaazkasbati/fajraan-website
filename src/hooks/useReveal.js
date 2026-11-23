import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole app. Any element with
 * `data-reveal` fades up once when it enters the viewport.
 * New nodes (route changes, client-rendered lists) are picked up
 * through a MutationObserver, so components don't need their own logic.
 */
export default function useReveal() {
  useEffect(() => {
    window.__revealReady = true;

    const showAll = () =>
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-in)")
        .forEach((el) => io.observe(el));

    scan();
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
