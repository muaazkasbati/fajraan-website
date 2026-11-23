import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { nav, contact, socials, SocialIcon } from "@/utils/site";

const isActive = (pathname, href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

const Header = () => {
    const router = useRouter();
    const pathname = router.pathname.replace(/\[.*?\]/, "x");
    const asPath = router.asPath.split(/[?#]/)[0];
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const close = () => setOpen(false);
        router.events.on("routeChangeStart", close);
        return () => router.events.off("routeChangeStart", close);
    }, [router.events]);

    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const current = asPath || pathname;

    return (
        <>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white">
                Skip to content
            </a>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${scrolled || open ? "bg-white/95 backdrop-blur-sm border-b border-line" : "bg-white border-b border-transparent"}`}
            >
                <div className="wrap flex h-18 items-center justify-between gap-6 lg:h-20">
                    <Link href="/" aria-label="Fajraan Tech home" className="shrink-0">
                        <img alt="Fajraan Tech" width={177} height={67} className="h-11 w-auto lg:h-12" src="/images/logo-web.svg" />
                    </Link>

                    <nav aria-label="Primary" className="hidden lg:block">
                        <ul className="flex items-center gap-1">
                            {nav.map((item) => {
                                const active = isActive(current, item.href);
                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            aria-current={active ? "page" : undefined}
                                            className={`relative block rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${active ? "text-primary" : "text-ink/70 hover:text-primary"}`}
                                        >
                                            {active && <span aria-hidden="true" className="absolute left-1/2 top-[calc(100%-2px)] h-1 w-1 -translate-x-1/2 bg-secondary" />}
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:block">
                            <Button link href="/contact" className="!h-11 !px-5 !text-[15px]">
                                Start a project
                            </Button>
                        </div>
                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            onClick={() => setOpen((v) => !v)}
                            className="relative grid h-11 w-11 place-items-center rounded-full border border-line text-primary lg:hidden cursor-pointer"
                        >
                            <span aria-hidden="true" className={`absolute left-1/2 top-1/2 -ml-2.5 -mt-px h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
                            <span aria-hidden="true" className={`absolute left-1/2 top-1/2 -ml-2.5 -mt-px h-[1.5px] w-5 bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-200 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
            >
                <nav aria-label="Mobile" className="wrap pt-4 pb-10">
                    <ul>
                        {[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }].map((item, i) => {
                            const active = isActive(current, item.href);
                            return (
                                <li key={item.href} className="border-b border-line">
                                    <Link
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={`flex items-baseline justify-between py-4 text-[28px] font-semibold tracking-[-0.02em] ${active ? "text-primary" : "text-ink"}`}
                                    >
                                        {item.label}
                                        <span className="t-num text-[13px] font-medium text-muted">{String(i + 1).padStart(2, "0")}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-8 space-y-2 text-[17px]">
                        <a className="block font-semibold text-primary" href={`mailto:${contact.email}`}>{contact.email}</a>
                        <a className="block text-muted" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                            WhatsApp {contact.whatsappLabel}
                        </a>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                        {socials.map((s) => (
                            <li key={s.name}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Fajraan Tech on ${s.name}`} className="grid h-10 w-10 place-items-center rounded-full border border-line text-primary">
                                    <SocialIcon path={s.path} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
