// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroVideoSection() {
//   const sectionRef = useRef(null);
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const wrapper = wrapperRef.current;

//     if (!section || !wrapper) return;

//     const ctx = gsap.context(() => {
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "bottom+=700 top",
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//           markers: false,
//         },
//       })
//         .to(wrapper, {
//           width: "100%",
//           ease: "power2.out",
//           duration: 1.5,
//         });
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="row" ref={sectionRef}>
//       <div className="col-lg-12">
//         <div className="pin-spacer">
//           <div className="quanto-hero__thumb section-margin-top">
//             <div ref={wrapperRef} className="video-wrapper" style={{ width: "42.4%" }}>
//               <video loop muted autoPlay playsInline>
//                 <source
//                   src="https://videos.pexels.com/video-files/3252291/3252291-uhd_2560_1440_25fps.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroVideoSection() {
//   const sectionRef = useRef(null);
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const wrapper = wrapperRef.current;

//     if (!section || !wrapper) return;

//     const mm = gsap.matchMedia();

//     mm.add("(min-width: 768px)", () => {
//       gsap.set(wrapper, { width: "42.4%" });

//       const ctx = gsap.context(() => {
//         gsap.timeline({
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "bottom+=700 top",
//             scrub: true,
//             pin: true,
//             anticipatePin: 1,
//           },
//         }).to(wrapper, {
//           width: "100%",
//           ease: "power2.out",
//           duration: 1.5,
//         });
//       }, section);

//       return () => ctx.revert();
//     });

//     mm.add("(max-width: 767px)", () => {
//       gsap.set(wrapper, { width: "100%" });
//     });

//     return () => mm.revert();
//   }, []);

//   return (
//     <div className="row" ref={sectionRef}>
//       <div className="col-lg-12">
//         <div className="pin-spacer">
//           <div className="quanto-hero__thumb section-margin-top">
//             <div ref={wrapperRef} className="video-wrapper" style={{ width: "100%" }}>
//               <video loop muted autoPlay playsInline>
//                 <source src="https://videos.pexels.com/video-files/3252291/3252291-uhd_2560_1440_25fps.mp4" type="video/mp4" />
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/HeroVideoSection.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const video = videoRef.current;

    if (!section || !wrapper) return;

    // Auto-play handling
    if (video) {
      video.play().catch(() => {});
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(wrapper, { width: "42.4%" });

      const ctx = gsap.context(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom+=700 top",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true, // Better performance on resize
          },
        }).to(wrapper, {
          width: "100%",
          ease: "power2.out",
        });
      }, section);

      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set(wrapper, { width: "100%" });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="row" ref={sectionRef}>
      <div className="col-lg-12">
        <div className="pin-spacer">
          <div className="quanto-hero__thumb section-margin-top">
            <div ref={wrapperRef} className="video-wrapper" style={{ width: "100%" }}>
              <video
                ref={videoRef}
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"           // Don't use "auto"
                poster="/images/hero/hero-video-poster.webp"   // ← VERY IMPORTANT
                className="hero-video"
                aria-hidden="true"
              >
                <source src="/videos/hero-video.webm" type="video/webm" />
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}