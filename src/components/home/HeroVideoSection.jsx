import { useEffect, useRef, useState } from "react";

/**
 * Hero reel. Poster renders immediately (good LCP); the ~800KB video is only
 * attached once the frame is near the viewport, and never for users who
 * prefer reduced motion or have Data Saver on.
 */
export default function HeroVideoSection() {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData;
    if (reduce || saveData) {
      setPaused(true);
      return;
    }
    const el = frameRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (load) videoRef.current?.play().catch(() => setPaused(true));
  }, [load]);

  const toggle = () => {
    const v = videoRef.current;
    if (!load) {
      setLoad(true);
      setPaused(false);
      return;
    }
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <div className="wrap mt-12 md:mt-16">
      <div ref={frameRef} className="relative aspect-[4/3] overflow-hidden bg-paper sm:aspect-[16/9] lg:aspect-[21/9]">
        <video
          ref={videoRef}
          width={1280}
          height={720}
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero/hero-reel-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          {load && <source src="/videos/hero-reel.webm" type="video/webm" />}
          {load && <source src="/videos/hero-reel.mp4" type="video/mp4" />}
        </video>
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? "Play background video" : "Pause background video"}
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-primary transition-colors hover:bg-white cursor-pointer"
        >
          {paused ? (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor" /></svg>
          )}
        </button>
      </div>
    </div>
  );
}
