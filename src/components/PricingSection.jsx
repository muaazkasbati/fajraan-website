import React from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Button from "./Button";

const pricingData = [
    {
        title: "Launch",
        info: "Perfect for startups or small businesses needing a professional online presence.",
        price: "$6,000",
        features: [
            "Custom responsive website (up to 7 pages)",
            "Mobile-friendly design",
            "Basic CMS integration",
            "Basic functionality",
            "Standard UI/UX design",
            "Basic on-page SEO setup",
            "1 month of post-launch support",
            "Optional: basic AI chatbot add-on (custom quote)",
        ],
    },
    {
        title: "Scale",
        info: "Best for growing businesses ready to scale with advanced features or e-commerce.",
        price: "$15,000",
        features: [
            "Custom web app or e-commerce platform",
            "Advanced UI/UX design & prototyping",
            "CMS or Admin panel for content management",
            "SEO setup + Google Analytics integration",
            "3 months of free support",
            "Optional: AI chatbot or workflow automation add-on (custom quote)",
        ],
    },
    {
        title: "Transform",
        info: "Ideal for established companies or startups building large-scale digital platforms.",
        price: "$25,000+",
        features: [
            "Full-stack web or mobile platform (scalable architecture)",
            "Payment gateways & API integrations",
            "Complete UI/UX strategy with user testing",
            "12 months of maintenance & technical support",
            "Optional: custom AI automation & chatbot system, scoped and quoted separately",
        ],
    },
];

const PricingSection = ({ index = "02" }) => {
    return (
        <section className="section bg-paper" id="pricing">
            <div className="wrap">
                <SectionHead
                    index={index}
                    eyebrow="Pricing"
                    title="Clear starting points. Final quote after a scoping call."
                    aside={<p className="max-w-sm text-muted">All prices in USD. Every project is scoped individually before work starts.</p>}
                />

                <div className="mt-14 grid gap-px bg-primary/10 md:mt-20 lg:grid-cols-3">
                    {pricingData.map((plan, i) => (
                        <Reveal key={plan.title} delay={i * 80} className="flex flex-col bg-white p-8 md:p-10">
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="t-h3 text-primary">{plan.title}</h3>
                                <span className="t-num text-[14px] font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                            </div>
                            <p className="mt-3 text-[16px] text-muted">{plan.info}</p>
                            <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">From</p>
                            <p className="t-num mt-1 text-[48px] font-semibold leading-none tracking-[-0.03em] text-primary md:text-[56px]">{plan.price}</p>
                            <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8 text-[15px]">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex gap-3">
                                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="mt-1 shrink-0 text-secondary">
                                            <path d="M2.5 8.5 6 12l7.5-8" fill="none" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <Button variant={i === 1 ? "primary" : "white"} link href={`/contact?plan=${encodeURIComponent(plan.title)}`} fullwidth>
                                    Choose {plan.title}
                                </Button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
