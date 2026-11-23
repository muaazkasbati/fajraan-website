import React from "react";
import SectionHead from "../SectionHead";
import Reveal from "../Reveal";

const steps = [
    {
        title: "Discovery call",
        text: "A short call to understand your goals, users and constraints. We agree on scope, timeline and deliverables before anything is signed.",
    },
    {
        title: "Proposal & design",
        text: "You get a clear proposal and designs to review. Already have Figma files or a live product? We start from there.",
    },
    {
        title: "Build",
        text: "We set up the project, build features in small increments and send regular progress updates so nothing is a surprise at launch.",
    },
    {
        title: "Launch & support",
        text: "We ship, monitor and stay on. Monthly retainers cover updates, security, performance and AI fine-tuning.",
    },
];

export default function ProcessSection({ index = "05" }) {
    return (
        <section className="section bg-paper">
            <div className="wrap">
                <SectionHead
                    index={index}
                    eyebrow="How we work"
                    title="A simple process, with no black boxes."
                    aside={
                        <p className="max-w-sm text-muted">
                            Websites typically take 3–4 weeks, custom platforms 2–4 months, AI automation 2–6 weeks.
                        </p>
                    }
                />
                <ol className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => (
                        <Reveal as="li" key={s.title} delay={i * 70} className="border-t border-primary/15 pt-6">
                            <span className="t-num text-[14px] font-semibold text-secondary">Step {String(i + 1).padStart(2, "0")}</span>
                            <h3 className="t-h3 mt-4 text-primary">{s.title}</h3>
                            <p className="mt-3 text-[16px] text-muted">{s.text}</p>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
