import React from "react";
import { faqData } from "@/utils/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

/** Native <details> accordion: works without JS and is accessible by default. */
const FaqsSection = ({ index = "01", items = faqData }) => {
    return (
        <section className="section" id="faqs">
            <div className="wrap grid gap-12 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                        <SectionHead index={index} eyebrow="FAQs" title="Questions we get asked a lot." className="!block" />
                        <Reveal delay={80}>
                            <p className="mt-6 max-w-sm text-muted">
                                Can&apos;t find what you need? <a href="/contact" className="font-semibold text-primary underline decoration-secondary underline-offset-4">Ask us directly.</a>
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                    {items.map((item, i) => (
                        <Reveal key={item.question} delay={Math.min(i, 5) * 40}>
                            <details className="group border-t border-line last:border-b" open={i === 0}>
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                                    <h3 className="t-h4 text-primary">{item.question}</h3>
                                    <span aria-hidden="true" className="relative mt-1.5 h-4 w-4 shrink-0 text-primary">
                                        <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-current" />
                                        <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                                    </span>
                                </summary>
                                <p className="max-w-2xl pb-7 text-muted">{item.answer}</p>
                            </details>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;
