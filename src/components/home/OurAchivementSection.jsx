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
      className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden"
      id="our-achievement"
    >
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="grid sm:grid-cols-4 items-center gap-5">
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
      className="sm:border-l border-1 sm:pl-7 sm:text-left text-center"
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      <h2 className="sm:text-[100px] text-[60px] tracking-[-2.5px] font-semibold text-secondary leading-none">
        <span>{displayValue}</span><span>{suffix}</span>
      </h2>
      <p className="text-[18px]">{label}</p>
    </motion.div>
  );
}
