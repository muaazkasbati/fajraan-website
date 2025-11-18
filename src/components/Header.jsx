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
        { label: "Portfolio", href: "/portfolio" },
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
            <header className={`quanto-header main-header bg-color-white ${isScrolled ? "sticky-menu" : ""}`}>
                <div className="sticky-wrap">
                    <div className="sticky-active">
                        <div className="container custom-container">
                            <div className="row gx-3 align-items-center justify-content-between">
                                <div className="col-8 col-sm-auto">
                                    <div className="header-logo">
                                        <Link href="/">
                                            <img
                                                alt="logo"
                                                width={177}
                                                height={29}
                                                decoding="async"
                                                data-nimg={1}
                                                style={{ color: "transparent" }}
                                                src="/images/logo-web.svg"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col text-end text-lg-center">
                                    <nav className="main-menu menu-style1 d-none d-lg-block">
                                        <ul>
                                            {navItems.map((item) => (
                                                <li key={item.href} className={`${pathname === item.href || (item.href.includes("#") && pathname === "/") ? "" : ""}`}>
                                                    <Link href={item.href}>{item.label}</Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </nav>
                                    <button onClick={toggleMenu} className="menuBar-toggle quanto-menu-toggle d-inline-block d-lg-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <Link className="quanto-link-btn btn-pill" href="/contact">
                                        Get in touch
                                        <span>
                                            <i className="fa-solid fa-arrow-right arry1" />
                                            <i className="fa-solid fa-arrow-right arry2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`quanto-menu-wrapper ${menuOpen ? "quanto-body-visible" : ""}`}>
                <div className="quanto-menu-area text-center">
                    <div className="quanto-menu-mobile-top">
                        <div className="mobile-logo">
                            <Link href="/">
                                <img
                                    alt="logo"
                                    width={120}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    src="/images/logo-web.svg"
                                />
                            </Link>
                        </div>
                        <button onClick={closeMenu} className="quanto-menu-toggle mobile">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className="quanto-mobile-menu">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href} className={`menu-item-has-children ${pathname === item.href || (item.href.includes("#") && pathname === "/") ? "" : ""}`}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="quanto-mobile-menu-btn">
                        <div className="sidebar-wrap">
                            <h6>Dubai, United Arab Emirates</h6>
                            {/* <h6>NY 10002, USA</h6> */}
                        </div>
                        <div className="sidebar-wrap">
                            <h6>
                                <a
                                    href="https://wa.me/971542259592"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +971 54 225 9592 (WhatsApp)
                                </a>
                            </h6>
                            <h6>
                                <a href="mailto:info@fajraan.com">
                                    info@fajraan.com
                                </a>
                            </h6>
                        </div>
                        <div className="social-btn style-3">
                            {/* <a href="https://x.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-x-twitter" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-x-twitter" />
                                    </span>
                                </span>
                            </a> */}
                            <a href="https://www.instagram.com/fajraan_tech">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-instagram" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-instagram" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/company/fajraan-tech">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-linkedin" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-linkedin" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://www.facebook.com/fajraantech">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-facebook-f" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-facebook-f" />
                                    </span>
                                </span>
                            </a>
                            {/* <a href="https://dribbble.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-dribbble" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-dribbble" />
                                    </span>
                                </span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header