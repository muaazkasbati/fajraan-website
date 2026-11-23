import React from "react";
import Link from "next/link";
import solutions from "@/utils/solutions.json";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Button from "./Button";

const chauffeur = {
    slug: null,
    href: "/chauffeur-software",
    name: "Chauffeur & Fleet Management",
    short: "Bookings, dispatch, driver apps and payouts.",
    tag: "Running in production",
};

export const allSolutions = [
    chauffeur,
    ...solutions.map((s) => ({ ...s, href: `/solutions/${s.slug}` })),
];

export function SolutionGrid({ items = allSolutions, exclude }) {
    const list = items.filter((s) => s.href !== exclude);
    return (
        <ul className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
                <Reveal as="li" key={s.href} delay={(i % 3) * 60} className="border-r border-b border-line bg-white">
                    <Link href={s.href} className="group flex h-full flex-col justify-between gap-8 p-7 transition-colors hover:bg-paper md:p-8">
                        <div>
                            <div className="flex items-center justify-between gap-4">
                                <span className="t-num text-[13px] font-semibold text-muted">{String(i + 1).padStart(2, "0")}</span>
                                {s.tag && <span className="rounded-full bg-secondary/15 px-2.5 py-1 text-[12px] font-semibold text-primary">{s.tag}</span>}
                            </div>
                            <h3 className="t-h4 mt-5 text-primary">{s.name}</h3>
                            <p className="mt-2 text-[15px] text-muted">{s.short}</p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary">
                            View platform
                            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                        </span>
                    </Link>
                </Reveal>
            ))}
        </ul>
    );
}

export default function SolutionsSection({ index = "04", className = "" }) {
    return (
        <section className={`section ${className}`} id="solutions">
            <div className="wrap">
                <SectionHead
                    index={index}
                    eyebrow="Ready-to-launch platforms"
                    title="Business software, set up in days. Not built from zero."
                    aside={
                        <div className="max-w-sm">
                            <p className="text-muted">
                                Proven platforms we customise to your workflow, migrate your data into, and launch under your brand.
                            </p>
                            <div className="mt-5"><Button variant="text" link href="/solutions">All platforms</Button></div>
                        </div>
                    }
                />
                <div className="mt-14 md:mt-20">
                    <SolutionGrid />
                </div>
            </div>
        </section>
    );
}
