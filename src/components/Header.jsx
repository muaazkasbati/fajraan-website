import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/#portfolio" },
        { label: "Blog", href: "/blog" },
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
            <header className={`section-header site-header ${isScrolled ? "bg-secondary/70! py-2" : "bg-transparent py-6"} backdrop-blur-md! transition-all duration-300 fixed top-0 z-40 w-full`}>
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="h-auto w-auto">
                            <img src="/assets/img/logo-white.png" alt="Fajraan" width="200" />
                        </Link>
                        <div className="flex items-center gap-x-10">
                            <div className="menu-block-wrapper">
                                {menuOpen && (
                                    <div className="menu-overlay fixed inset-0 bg-black/60 z-10" onClick={closeMenu} />
                                )}
                                <nav className={`menu-block ${menuOpen ? "active" : ""}`} id="append-menu-header">
                                    <div className="mobile-menu-head">
                                        <div className="go-back">
                                            <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="12" height="7" />
                                        </div>
                                        <div className="current-menu-title"></div>
                                        <div onClick={closeMenu} className="mobile-menu-close">&times;</div>
                                    </div>
                                    <ul className="site-menu-main">
                                        {navItems.map((item) => (
                                            <li
                                                key={item.href}
                                                className={`nav-link-item drop-trigger rounded-none border border-transparent ${pathname === item.href || (item.href.includes("#") && pathname === "/") ? "text-colorLightLime" : "text-colorDark lg:text-white"
                                                    }`}
                                            >
                                                <a href={item.href}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-6">
                            <Link href="/contact" className="btn-primary relative hidden px-[30px] py-[10px] sm:inline-flex">Contact Us</Link>

                            {/* <div className="block lg:hidden">
                                <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
                                    <span className="bg-white before:bg-white after:bg-white"></span>
                                </button>
                            </div> */}
                            <div className="block lg:hidden">
                                <button
                                    id="openBtn"
                                    className="hamburger-menu mobile-menu-trigger "
                                    onClick={toggleMenu}
                                >
                                    <span className="bg-white before:bg-white after:bg-white"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header