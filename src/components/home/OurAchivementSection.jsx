import React from "react";
import Reveal from "../Reveal";

const achievements = [
  { value: "4+", label: "Years of experience" },
  { value: "11+", label: "Projects delivered" },
  { value: "4+", label: "Team members worldwide" },
  { value: "95%", label: "Happy clients & repeat rate" },
];

export default function OurAchievementSection({ className = "" }) {
  return (
    <section className={`py-14 md:py-20 ${className}`} id="our-achievement" aria-label="Fajraan Tech in numbers">
      <div className="wrap">
        <dl className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 70}
              className={`flex flex-col border-line pt-6 pb-2 pr-4 ${i % 2 ? "pl-5 border-l" : ""} ${i > 1 ? "mt-6 lg:mt-0" : ""} lg:pl-6 lg:first:pl-0 lg:[&:not(:first-child)]:border-l`}
            >
              <dt className="order-2 mt-2 text-[15px] text-muted">{item.label}</dt>
              <dd className="t-num text-[44px] font-semibold leading-none tracking-[-0.03em] text-primary md:text-[64px]">
                {item.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
