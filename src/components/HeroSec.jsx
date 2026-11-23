import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Inner-page hero. `eyebrow` defaults to a breadcrumb-style label,
 * `intro` is an optional paragraph shown alongside the title.
 */
const HeroSec = ({ title = "", eyebrow, intro, crumbs, children }) => {
    return (
        <section className="pt-32 pb-14 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
            <div className="wrap">
                <Reveal>
                    {crumbs ? (
                        <nav aria-label="Breadcrumb" className="t-eyebrow">
                            <ol className="flex flex-wrap items-center gap-2">
                                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                                {crumbs.map((c, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span aria-hidden="true">/</span>
                                        {c.href ? <Link href={c.href} className="hover:text-primary">{c.label}</Link> : <span className="text-primary">{c.label}</span>}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    ) : (
                        eyebrow && <p className="t-eyebrow">{eyebrow}</p>
                    )}
                </Reveal>
                <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
                    <Reveal delay={60} className={intro || children ? "lg:col-span-8" : "lg:col-span-11"}>
                        <h1 className={`t-h1 text-primary ${String(title).length > 60 ? "!text-[clamp(34px,4.6vw,68px)]" : ""}`}>{title}</h1>
                    </Reveal>
                    {(intro || children) && (
                        <Reveal delay={140} className="lg:col-span-4 lg:pb-2">
                            {intro && <p className="text-muted">{intro}</p>}
                            {children}
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSec;
