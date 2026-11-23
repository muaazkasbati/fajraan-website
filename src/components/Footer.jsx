import Link from "next/link";
import React from "react";
import services from "@/utils/servicesNew.json";
import Button from "./Button";
import { contact, socials, SocialIcon } from "@/utils/site";
import { allSolutions } from "./SolutionsSection";

const company = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/portfolio" },
    { label: "Case study", href: "/case-studies/empire-chauffeurs-australia" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
];

const legal = [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms-and-conditions" },
];

const ColTitle = ({ children }) => (
    <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50">{children}</p>
);

const Footer = ({ cta = true }) => {
    return (
        <footer className="bg-primary text-white">
            {cta && (
                <div className="wrap border-b border-white/10 py-20 md:py-28">
                    <div className="grid items-end gap-10 lg:grid-cols-12">
                        <div className="lg:col-span-8">
                            <p className="t-eyebrow !text-white/60">Next step</p>
                            <h2 className="t-h1 mt-6 max-w-[14ch]">
                                Got a project in mind? <span className="text-secondary">Let&apos;s talk it through.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-4 lg:pb-3">
                            <p className="mb-6 max-w-sm text-white/70">
                                Tell us what you&apos;re building and where you&apos;re stuck. We&apos;ll reply with honest next steps, even if we&apos;re not the right fit.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button link href="/contact" variant="accent">Start a project</Button>
                                <Button link href={`mailto:${contact.email}`} variant="outline-light" arrow={false}>
                                    {contact.email}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
                <div className="sm:col-span-2 lg:col-span-3">
                    <img src="/images/fajraan-logo-web.svg" alt="Fajraan Tech" width={160} height={60} className="h-12 w-auto brightness-0 invert" loading="lazy" />
                    <p className="mt-5 max-w-xs text-[15px] text-white/60">
                        Web, mobile and AI automation for businesses worldwide. Built by a small team that ships.
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                        {socials.map((s) => (
                            <li key={s.name}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Fajraan Tech on ${s.name}`}
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-secondary hover:text-secondary"
                                >
                                    <SocialIcon path={s.path} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <ColTitle>Company</ColTitle>
                    <ul className="space-y-2.5 text-[15px]">
                        {company.map((l) => (
                            <li key={l.href}><Link href={l.href} className="link-u text-white/85 hover:text-white">{l.label}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <ColTitle>Platforms</ColTitle>
                    <ul className="space-y-2.5 text-[15px]">
                        {allSolutions.slice(0, 7).map((p) => (
                            <li key={p.href}><Link href={p.href} className="link-u text-white/85 hover:text-white">{p.name.replace(" System", "").replace(" Management", "")}</Link></li>
                        ))}
                        <li><Link href="/solutions" className="link-u text-secondary">All platforms</Link></li>
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <ColTitle>Services</ColTitle>
                    <ul className="space-y-2.5 text-[15px]">
                        {services.map((s) => (
                            <li key={s.slug}><Link href={`/services/${s.slug}`} className="link-u text-white/85 hover:text-white">{s.title}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <ColTitle>Contact</ColTitle>
                    <ul className="space-y-2.5 text-[15px] text-white/85">
                        <li><a href={`mailto:${contact.email}`} className="link-u hover:text-white">{contact.email}</a></li>
                        <li><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-u hover:text-white">{contact.whatsappLabel} (WhatsApp)</a></li>
                        <li><a href={contact.phoneHref} className="link-u hover:text-white">{contact.phoneLabel}</a></li>
                        <li className="pt-1 text-white/55">{contact.address}</li>
                    </ul>
                </div>
            </div>

            <div className="wrap flex flex-col gap-3 border-t border-white/10 py-6 text-[14px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Fajraan Tech. All rights reserved.</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {legal.map((l) => (
                        <li key={l.href}><Link href={l.href} className="link-u hover:text-white">{l.label}</Link></li>
                    ))}
                    <li>
                        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="link-u hover:text-white">
                            Back to top ↑
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
