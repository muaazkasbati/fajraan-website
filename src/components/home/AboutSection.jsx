import React from "react";
import Reveal from "../Reveal";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="section !pt-10 md:!pt-16">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <p className="t-eyebrow">
            <span className="t-num">01</span>
            <span aria-hidden="true" className="opacity-40">/</span>
            Who we are
          </p>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal delay={60}>
            <p className="text-[26px] font-medium leading-[1.25] tracking-[-0.02em] text-primary md:text-[36px] lg:text-[42px]">
              Businesses don&apos;t need another agency that takes six months.{" "}
              <span className="text-muted">
                They need a working product, smart automation and software that fits, delivered fast.
              </span>
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-10 grid gap-6 md:grid-cols-2">
            <p className="text-muted">
              We build new products in short sprints, put AI agents and automation to work on real operations, and set up proven platforms like ERP, school and courier management under your brand. Web and mobile engineering sits underneath all of it.
            </p>
            <div className="md:justify-self-end">
              <Button variant="text" link href="/about">More about us</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
