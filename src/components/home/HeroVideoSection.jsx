// // components/HeroVideoSection.js
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroVideoSection() {
//   const sectionRef = useRef(null);
//   const wrapperRef = useRef(null);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const wrapper = wrapperRef.current;
//     const video = videoRef.current;

//     if (!section || !wrapper) return;

//     // Auto-play handling
//     if (video) {
//       video.play().catch(() => { });
//     }

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
//             invalidateOnRefresh: true, // Better performance on resize
//           },
//         }).to(wrapper, {
//           width: "100%",
//           ease: "power2.out",
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
//     <div className="w-full" ref={sectionRef}>
//       <div className="pin-spacer">
//         <div className="lg:mt-32.5 md:mt-20 mt-16.25">
//           <div ref={wrapperRef} className="h-197.5 mx-auto overflow-hidden" style={{ width: "100%" }}>
//             <video
//               ref={videoRef}
//               loop
//               muted
//               autoPlay
//               playsInline
//               preload="metadata"           // Don't use "auto"
//               poster="/images/hero/hero-video-poster.webp"   // ← VERY IMPORTANT
//               className="object-cover h-full"
//               aria-hidden="true"
//             >
//               <source src="/videos/hero-video.webm" type="video/webm" />
//               <source src="/videos/hero-video.mp4" type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoSection() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const video = videoRef.current;

    if (!section || !wrapper) return;

    video?.play().catch(() => {});

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(wrapper, { width: "42.4%" });

      const ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom+=700 top",
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(wrapper, {
            width: "100%",
            ease: "power2.out",
          });

        ScrollTrigger.refresh();
      }, section);

      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set(wrapper, { width: "100%" });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      <div className="lg:mt-32.5 md:mt-20 mt-16.25">
        <div
          ref={wrapperRef}
          className="h-197.5 mx-auto overflow-hidden"
          style={{ width: "100%" }}
        >
          <video
            ref={videoRef}
            width={1920}
            height={1080}
            loop
            muted
            autoPlay
            playsInline
            preload="metadata"
            poster="/images/hero/hero-video-poster.webp"
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/videos/hero-video.webm" type="video/webm" />
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}