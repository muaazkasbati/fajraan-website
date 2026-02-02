"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuantoHero() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;

    if (!section || !wrapper) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom+=700 top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      })
        .to(wrapper, {
          width: "100%",
          ease: "power2.out",
          duration: 1.5,
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="row" ref={sectionRef}>
      <div className="col-lg-12">
        <div className="pin-spacer">
          <div className="quanto-hero__thumb section-margin-top">
            <div ref={wrapperRef} className="video-wrapper" style={{ width: "42.4%" }}>
              <video loop muted autoPlay playsInline>
                <source
                  src="https://videos.pexels.com/video-files/3252291/3252291-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
