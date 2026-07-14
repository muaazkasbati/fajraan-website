import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { X } from "lucide-react";
import Button from './Button';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navItems = [
        { label: "Home", href: "" },
        { label: "About Us", href: "about" },
        { label: "Services", href: "services" },
        { label: "Portfolio", href: "portfolio" },
        { label: "Case Studies", href: "case-studies/empire-chauffeurs-australia" },
        { label: "Blog", href: "blog" },
    ];

    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={`z-41 w-full fixed top-0 transition-all duration-200 bg-white ${isScrolled ? "sticky-menu-animation" : ""}`}>
                <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="w-8/12 sm:w-auto">
                            <div className="max-w-67.5 py-3.75">
                                <Link aria-label="Home" href={process.env.NEXT_PUBLIC_APPFRONTURL}>
                                    <img alt="Fajraan Tech" width={177} height={67} className="w-44.25 h-16.75 block" decoding="async" src="/images/logo-web.svg" />
                                </Link>
                            </div>
                        </div>
                        <div className="text-right lg:text-center">
                            <nav className="hidden lg:block">
                                <ul className="">
                                    {navItems.map((item) => (
                                        <li key={item.href} className={`mx-5.5 relative inline-block ${pathname === item.href || (item.href.includes("#") && pathname === "/") ? "active" : ""}`}>
                                            <Link className="text-[18px] font-semibold tracking-[-.18px] relative block text-primary" aria-label={item.label} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}${item.href}`}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <button id="open-menu" role="button" type="button" aria-label="Menu Open" onClick={toggleMenu} className="px-1.25 w-12.5 h-10.5 rounded-[5px] cursor-pointer inline-block lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                    <path d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-auto hidden lg:block">
                            <Button link ariaLabel="Contact" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact`}>
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`fixed inset-0 z-999999 h-full w-full bg-black/60 transition-all duration-700 ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className={`relative z-1 h-full w-full max-w-77.5 bg-white p-0 transition-all duration-1000 ${menuOpen ? "visible left-0 opacity-100" : "invisible left-[-110%] opacity-0"}`}>
                    <div className="flex items-center justify-between pl-3.75">
                        <div className="mobile-logo py-1">
                            <Link aria-label="Home" href={process.env.NEXT_PUBLIC_APPFRONTURL}>
                                <img alt="Fajraan Tech" width={120} height={20} decoding="async" data-nimg={1} style={{ color: "transparent" }} src="/images/logo-web.svg" />
                            </Link>
                        </div>
                        <button id="close-menu" role="button" type="button" aria-label="Close Menu" onClick={closeMenu} className="flex h-13.75 w-13.75 items-center justify-center border-0 border-l border-black/10 bg-transparent p-0 text-[18px] leading-13.75 text-black outline-none cursor-pointer">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="max-h-[calc(100vh-200px)] overflow-y-auto text-left scrollbar-thin [scrollbar-color:#0a165e_#000] [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-track]:bg-black [&::-webkit-scrollbar-track]:shadow-[inset_0_0_2px_rgba(232,6,60,0.2)] [&::-webkit-scrollbar-thumb]:bg-[#0a165e]">
                        <ul className="m-0 p-0">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href.includes("#") && pathname === "/");

                                return (
                                    <li key={item.href} aria-label={item.label} className="list-none border-b border-black/10 first:border-t">
                                        <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}${item.href}`} className={`block px-4.5 py-4.5 text-[16px] leading-none font-semibold capitalize transition-colors ${isActive ? "text-[#2b4dff]" : "text-primary"}`}>
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="px-3.75 py-5">
                        <div className="mb-5">
                            <p className="text-[18px] font-semibold text-primary leading-none mb-1">
                                <Link aria-label="Contact Us on WhatsApp" href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                    +971 54 225 9592 (WhatsApp)
                                </Link>
                            </p>
                            <p className="text-[18px] font-semibold text-primary leading-none">
                                <Link aria-label="Contact Us on Email" href="mailto:info@fajraan.com">
                                    info@fajraan.com
                                </Link>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 pt-1.25">
                            <Link aria-label="Follow us on X" href="https://x.com/fajraantech">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.1L6.6 22H3.5l7.3-8.4L1 2h6.3l4.4 5.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                                </svg>
                            </Link>

                            <Link aria-label="Follow us on Instagram" href="https://www.instagram.com/fajraantech">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                                </svg>
                            </Link>

                            <Link aria-label="Follow us on LinkedIn" href="https://www.linkedin.com/company/fajraan-tech">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.51v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                                </svg>
                            </Link>

                            <Link aria-label="Follow us on Facebook" href="https://www.facebook.com/fajraantech">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </Link>

                            <Link aria-label="Follow us on GitHub" href="https://github.com/fajraantech">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.2 2.1.5-.3.7-.8.8-1.2-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0C16 5 17 5.3 17 5.3c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.5 5.5-5 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z" />
                                </svg>
                            </Link>

                            <Link aria-label="Follow us on Behance" href="https://www.behance.net/fajraantech">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M9.5 11.2c1.3-.6 2-1.6 2-3.1C11.5 6 10 4.7 7.5 4.7H2v14.6h5.9c2.8 0 4.6-1.4 4.6-3.8 0-1.7-1-2.8-3-3.3zM4.2 7h3c1.1 0 1.8.5 1.8 1.5S8.4 10 7.2 10H4.2V7zm3.3 9.9H4.2v-4.2h3.4c1.4 0 2.2.7 2.2 2.1 0 1.3-.9 2.1-2.3 2.1zM15.5 7h6v1.6h-6V7zm3 3.1c-2.5 0-4.3 1.9-4.3 4.7 0 2.8 1.8 4.6 4.3 4.6 2.1 0 3.6-1.2 4-3h-2.2c-.3.8-1 1.2-1.8 1.2-1.3 0-2.2-.9-2.3-2.3h6.5v-.6c0-3-1.7-4.6-4.2-4.6zm-2.3 3.7c.2-1.2 1.1-1.9 2.3-1.9 1.2 0 2 .8 2.1 1.9h-4.4z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header