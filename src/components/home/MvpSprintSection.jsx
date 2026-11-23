import React from "react";
import services from "@/utils/servicesNew.json";
import Reveal from "../Reveal";
import Button from "../Button";

const steps = services.find((s) => s.slug === "mvp-product-development")?.content?.approach?.steps || [];

export default function MvpSprintSection({ index = "02" }) {
    return (
        <section className="section bg-primary text-white" id="mvp-sprint">
            <div className="wrap">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                    <Reveal className="lg:col-span-7">
                        <p className="t-eyebrow !text-white/60">
                            <span className="t-num">{index}</span>
                            <span aria-hidden="true" className="opacity-40">/</span>
                            The 10-day sprint
                        </p>
                        <h2 className="t-h1 mt-6">
                            From idea to a live product in <span className="text-secondary">10 days.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={100} className="lg:col-span-5 lg:pb-3">
                        <p className="text-white/70">
                            Not a mock-up or a slide deck. A working product on your domain, with code you own, built around the one journey your users need first.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Button link variant="accent" href="/contact?interest=10-day%20MVP%20sprint">Start a sprint</Button>
                            <Button link variant="outline-light" href="/services/mvp-product-development">How it works</Button>
                        </div>
                    </Reveal>
                </div>

                <ol className="mt-16 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => {
                        const [days, ...rest] = s.title.split(":");
                        return (
                            <Reveal as="li" key={s.title} delay={i * 70} className="border-t border-white/15 pt-6">
                                <p className="t-num text-[14px] font-semibold text-secondary">{days}</p>
                                <h3 className="t-h4 mt-2">{rest.join(":").trim()}</h3>
                                <p className="mt-2 text-[15px] text-white/65">{s.points[0]}</p>
                            </Reveal>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
