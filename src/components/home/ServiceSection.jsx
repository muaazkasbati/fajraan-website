import React from "react";
import Link from "next/link";
import services from "@/utils/servicesNew.json";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import Button from "../Button";

export const serviceGroups = [
    { id: "build", label: "Build new products", note: "From scratch, shipped in sprints" },
    { id: "ai", label: "AI & automation", note: "LLMs, agents and automated systems" },
    { id: "platforms", label: "Ready-made platforms", note: "ERP, school, courier, CMS and more" },
];

const badges = { "mvp-product-development": "Live in 10 days", "saas-platforms": "Setup in ~10 days", "headless-cms-api": "Works with static sites" };

const ServiceSection = ({ index = "03", title = "Build fast. Automate the rest.", showAll = true }) => {
    let n = 0;
    return (
        <section className="section bg-paper" id="services">
            <div className="wrap">
                <SectionHead
                    index={index}
                    eyebrow="What we do"
                    title={title}
                    aside={showAll ? <Button variant="text" link href="/services">All services</Button> : null}
                />

                <div className="mt-14 space-y-14 md:mt-20 md:space-y-20">
                    {serviceGroups.map((g) => {
                        const items = services.filter((s) => s.group === g.id);
                        if (!items.length) return null;
                        return (
                            <div key={g.id} className="grid gap-6 lg:grid-cols-12">
                                <Reveal className="lg:col-span-3">
                                    <h3 className="t-h4 text-primary">{g.label}</h3>
                                    <p className="mt-1 text-[15px] text-muted">{g.note}</p>
                                </Reveal>
                                <ol className="border-t border-primary/15 lg:col-span-9">
                                    {items.map((service) => {
                                        n += 1;
                                        return (
                                            <Reveal as="li" key={service.slug} className="border-b border-primary/15">
                                                <Link href={`/services/${service.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:gap-6">
                                                    <span className="t-num pt-1.5 text-[14px] font-semibold text-muted md:col-span-1">{String(n).padStart(2, "0")}</span>
                                                    <div className="md:col-span-6">
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            <h4 className="t-h3 text-primary">{service.title}</h4>
                                                            {badges[service.slug] && (
                                                                <span className="rounded-full bg-secondary px-2.5 py-1 text-[12px] font-semibold text-primary">{badges[service.slug]}</span>
                                                            )}
                                                        </div>
                                                        <p className="mt-3 max-w-lg text-[16px] text-muted">{service.description}</p>
                                                    </div>
                                                    <ul className="grid content-start gap-1.5 text-[14px] md:col-span-4 md:pt-1.5">
                                                        {service.subServices.slice(0, 3).map((s) => (
                                                            <li key={s.title} className="flex gap-2.5">
                                                                <span aria-hidden="true" className="mt-[8px] h-1.5 w-1.5 shrink-0 bg-secondary" />
                                                                {s.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <span aria-hidden="true" className="hidden h-11 w-11 place-items-center justify-self-end rounded-full border border-primary/20 text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white md:col-span-1 md:grid">
                                                        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                                                    </span>
                                                </Link>
                                            </Reveal>
                                        );
                                    })}
                                </ol>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
