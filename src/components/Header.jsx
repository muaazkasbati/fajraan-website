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
                                            {/* <li className="menu-item-has-children">
                                                <a href="#">Home</a>
                                                <ul className="sub-menu">
                                                    <li className="">
                                                        <a className="" href="index.html">
                                                            Digital Agency
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="home-2.html">
                                                            Creative Agency
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="home-3.html">
                                                            Design Studio
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="home-4.html">
                                                            Branding Agency
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="home-5.html">
                                                            Modern Agency
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="home-6.html">
                                                            Personal Portfolio
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li className="">
                                                        <a className="" href="about.html">
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a className="no-border" href="#">
                                                            Service
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li className="">
                                                                <a className="" href="service.html">
                                                                    Service - 1
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a className="" href="service-2.html">
                                                                    Service - 2
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a className="" href="service-details.html">
                                                                    Service Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a className="no-border" href="#">
                                                            Career
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li className="">
                                                                <a className="" href="career.html">
                                                                    Career
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a className="" href="career-details.html">
                                                                    Career Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <a className="no-border" href="#">
                                                            Team
                                                        </a>
                                                        <ul className="sub-menu">
                                                            <li className="">
                                                                <a className="" href="team.html">
                                                                    Team
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a className="" href="team-details.html">
                                                                    Team Details
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="pricing.html">
                                                            Pricing
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="faq.html">
                                                            FAQ's
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href={404}>
                                                            404
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Portfolio</a>
                                                <ul className="sub-menu">
                                                    <li className="">
                                                        <a className="" href="portfolio-masonry.html">
                                                            Portfolio Masonry
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="portfolio-standard.html">
                                                            Portfolio Standard
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="portfolio-gallery.html">
                                                            Portfolio Gallery
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="portfolio-slider.html">
                                                            Portfolio Slider
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="portfolio-card.html">
                                                            Portfolio Card
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="portfolio-details.html">
                                                            Portfolio Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">Blog</a>
                                                <ul className="sub-menu">
                                                    <li className="">
                                                        <a className="" href="blog-grid.html">
                                                            Blog Grid
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="blog-list.html">
                                                            Blog List
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a className="" href="blog-details.html">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li> */}
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
                            <a href="index.html">
                                <img
                                    alt="logo"
                                    width={120}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    src="/images/logo-1.svg"
                                />
                            </a>
                        </div>
                        <button onClick={closeMenu} className="quanto-menu-toggle mobile">
                            <i className="ri-close-line" />
                        </button>
                    </div>
                    <div className="quanto-mobile-menu">
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.href} className={`menu-item-has-children ${pathname === item.href || (item.href.includes("#") && pathname === "/") ? "" : ""}`}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                            {/* <li className="menu-item-has-children ">
                                <button className="menu-link">
                                    Home
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                <div
                                    className="ReactCollapse--collapse"
                                    style={{ height: 0, overflow: "hidden" }}
                                    aria-hidden="true"
                                >
                                    <div className="ReactCollapse--content">
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="index.html">Digital Agency</a>
                                            </li>
                                            <li>
                                                <a href="home-2.html">Creative Agency</a>
                                            </li>
                                            <li>
                                                <a href="home-3.html">Design Studio</a>
                                            </li>
                                            <li>
                                                <a href="home-4.html">Branding Agency</a>
                                            </li>
                                            <li>
                                                <a href="home-5.html">Modern Agency</a>
                                            </li>
                                            <li>
                                                <a href="home-6.html">Personal Portfolio</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children ">
                                <button className="menu-link">
                                    Pages
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                <div
                                    className="ReactCollapse--collapse"
                                    style={{ height: 0, overflow: "hidden" }}
                                    aria-hidden="true"
                                >
                                    <div className="ReactCollapse--content">
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Service</a>
                                            </li>
                                            <li>
                                                <a href="#">Career</a>
                                            </li>
                                            <li>
                                                <a href="#">Team</a>
                                            </li>
                                            <li>
                                                <a href="pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ's</a>
                                            </li>
                                            <li>
                                                <a href={404}>404</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children ">
                                <button className="menu-link">
                                    Portfolio
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                <div
                                    className="ReactCollapse--collapse"
                                    style={{ height: 0, overflow: "hidden" }}
                                    aria-hidden="true"
                                >
                                    <div className="ReactCollapse--content">
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="portfolio-masonry.html">Portfolio Masonry</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-standard.html">Portfolio Standard</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-gallery.html">Portfolio Gallery</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-slider.html">Portfolio Slider</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-card.html">Portfolio Card</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-details.html">Portfolio Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children ">
                                <button className="menu-link">
                                    Blog
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                <div
                                    className="ReactCollapse--collapse"
                                    style={{ height: 0, overflow: "hidden" }}
                                    aria-hidden="true"
                                >
                                    <div className="ReactCollapse--content">
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="blog-grid.html">Blog Grid</a>
                                            </li>
                                            <li>
                                                <a href="blog-list.html">Blog List</a>
                                            </li>
                                            <li>
                                                <a href="blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item-has-children ">
                                <a href="contact.html">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="quanto-mobile-menu-btn">
                        <div className="sidebar-wrap">
                            <h6>27 Division St, New York,</h6>
                            <h6>NY 10002, USA</h6>
                        </div>
                        <div className="sidebar-wrap">
                            <h6>
                                <a href="tel:1800123654987">+1 800 123 654 987</a>
                            </h6>
                            <h6>
                                <a href="mailto:quanto.agency@mail.com">quanto.agency@mail.com</a>
                            </h6>
                        </div>
                        <div className="social-btn style-3">
                            <a href="https://x.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-x-twitter" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-x-twitter" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://instagram.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-instagram" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-instagram" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://linkedin.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-linkedin" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-linkedin" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://behance.net/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-behance" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-behance" />
                                    </span>
                                </span>
                            </a>
                            <a href="https://dribbble.com/">
                                <span className="link-effect">
                                    <span className="effect-1">
                                        <i className="fab fa-dribbble" />
                                    </span>
                                    <span className="effect-1">
                                        <i className="fab fa-dribbble" />
                                    </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header