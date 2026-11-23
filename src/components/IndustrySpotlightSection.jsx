import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";

const points = [
    "Booking, dispatch and driver apps",
    "Stripe payments and invoicing",
    "Fleet, reporting and admin dashboards",
];

const IndustrySpotlightSection = ({ index = "04" }) => {
    return (
        <section className="section bg-primary text-white" id="chauffeur">
            <div className="wrap grid items-center gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-6">
                    <p className="t-eyebrow !text-white/60">
                        <span className="t-num">{index}</span>
                        <span aria-hidden="true" className="opacity-40">/</span>
                        Industry focus
                    </p>
                    <h2 className="t-h2 mt-5">A niche we know well: chauffeur &amp; fleet software.</h2>
                    <p className="mt-6 max-w-lg text-white/70">
                        Alongside our core services we&apos;ve built real, in-production software for chauffeur and fleet operators. That means fewer surprises when we build yours.
                    </p>
                    <ul className="mt-8 space-y-3 border-t border-white/10 pt-6 text-[16px]">
                        {points.map((p) => (
                            <li key={p} className="flex gap-3">
                                <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-secondary" />
                                {p}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Button link variant="accent" href="/chauffeur-software">Chauffeur software</Button>
                        <Button link variant="outline-light" href="/case-studies/empire-chauffeurs-australia">Read the case study</Button>
                    </div>
                </Reveal>

                <Reveal delay={120} className="lg:col-span-6">
                    <div className="overflow-hidden bg-white/5">
                        <img
                            alt="Chauffeur and fleet management software dashboard"
                            loading="lazy"
                            decoding="async"
                            width={1200}
                            height={900}
                            className="aspect-[4/3] w-full object-cover"
                            src="/images/service/chauffeur-software-img.webp"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default IndustrySpotlightSection;
