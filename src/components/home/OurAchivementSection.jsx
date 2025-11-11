// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function OurAchievementSection() {
//   const achievements = [
//     { id: 1, value: "3", suffix: "+", label: "Years of work experience" },
//     { id: 2, value: "8", suffix: "+", label: "Projects completed successfully" },
//     { id: 3, value: "10", suffix: "+", label: "Team members worldwide" },
//     { id: 4, value: "95", suffix: "%", label: "Happy clients & repeat rate" },
//   ];

//   return (
//     <section
//       className="quanto-funfacts-section overflow-hidden section-padding-top-bottom"
//       id="our-achievement-01"
//     >
//       <div className="container custom-container">
//         <div className="row">
//           <div className="col-12">
//             <div className="quanto-funfacts__wrapper">
//               {achievements.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="quanto-funfact-box"
//                   initial={{ opacity: 0, x: 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.8,
//                     ease: "easeOut",
//                     delay: 0.2 * index,
//                   }}
//                 >
//                   <h2 className="counter-item d-inline-flex align-items-center color-secondary">
//                     <div>{item.value}</div>
//                     <em>{item.suffix}</em>
//                   </h2>
//                   <span className="funfact-info">{item.label}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function OurAchievementSection() {
  const achievements = [
    { id: 1, value: 3, suffix: "+", label: "Years of work experience" },
    { id: 2, value: 8, suffix: "+", label: "Projects completed successfully" },
    { id: 3, value: 10, suffix: "+", label: "Team members worldwide" },
    { id: 4, value: 95, suffix: "%", label: "Happy clients & repeat rate" },
  ];

  return (
    <section
      className="quanto-funfacts-section overflow-hidden section-padding-top-bottom"
      id="our-achievement-01"
    >
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="quanto-funfacts__wrapper">
              {achievements.map((item, index) => (
                <AnimatedCounterBox
                  key={item.id}
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  delay={0.2 * index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------
// 🔢 Animated Counter
// --------------------
function AnimatedCounterBox({ value, suffix, label, delay }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay },
      });

      const startTime = performance.now();
      const duration = 2000; // 2 seconds for counting

      const animateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * value);
        setDisplayValue(current);
        if (progress < 1) requestAnimationFrame(animateCount);
        else setDisplayValue(value);
      };

      requestAnimationFrame(animateCount);
    }
  }, [inView, controls, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="quanto-funfact-box"
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      <h2 className="counter-item d-inline-flex align-items-center color-secondary">
        <div>{displayValue}</div>
        <em>{suffix}</em>
      </h2>
      <span className="funfact-info">{label}</span>
    </motion.div>
  );
}
