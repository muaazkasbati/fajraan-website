import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'

const Header = () => {

    return (
        <>
            <header className="section-header site-header is-black fixed top-0 z-30 w-full py-6">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-10">
                            <Link href="/" className="h-auto w-auto">
                                <img src="/assets/img/logo-white.png" alt="Fajraan" width="200"
                                // height="24" 
                                />
                            </Link>

                            <div className="menu-block-wrapper">
                                <div className="menu-overlay"></div>
                                <nav className="menu-block" id="append-menu-header">
                                    <div className="mobile-menu-head">
                                        <div className="go-back">
                                            <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="12" height="7" />
                                        </div>
                                        <div className="current-menu-title"></div>
                                        <div className="mobile-menu-close">&times;</div>
                                    </div>
                                    <ul className="site-menu-main">
                                        {/* <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">Demo
                                            <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90 invert-0 lg:rotate-0 lg:invert" />
                                        </a>
                                        <ul className="sub-menu" id="submenu-0">
                                            <li className="sub-menu--item">
                                                <a href="index-2.html">Design Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-3.html">Startup Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-4.html">SEO Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-5.html">Business Consultation</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-6.html">Digital Marketing</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-7.html">Interior Design Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-8.html">Advertising Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-9.html">IT Agency</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="index-10.html">Social Marketing Agency</a>
                                            </li>
                                        </ul>
                                    </li> */}
                                        <li className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">
                                            <a href="/" className="nav-link-item">Home</a>
                                        </li>
                                        <li className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">
                                            <a href="#about" className="nav-link-item">About Us</a>
                                        </li>
                                        <li className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">
                                            <a href="#services" className="nav-link-item">Services</a>
                                        </li>
                                        <li className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">
                                            <a href="#portfolio" className="nav-link-item">Portfolio</a>
                                        </li>
                                        {/* <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">Pages
                                            <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90 invert-0 lg:rotate-0 lg:invert" />
                                        </a>
                                        <ul className="sub-menu" id="submenu-1">
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Services
                                                    <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-2">
                                                    <li className="sub-menu--item">
                                                        <a href="service.html">Service</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="service-details.html">Service Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Projects
                                                    <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-3">
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-1.html">Project 1</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-2.html">Project 2</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="portfolio-details.html">Project Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Team
                                                    <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" className="-rotate-90" height="4" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-4">
                                                    <li className="sub-menu--item">
                                                        <a href="team.html">Team</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="team-details.html">Team Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Utility
                                                    <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-5">
                                                    <li className="sub-menu--item">
                                                        <a href="coming-soon.html">Coming Soon</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="404-error.html">404 Page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item nav-item-has-children">
                                                <a href="#" data-menu-get="h3" className="drop-trigger">Authentication
                                                    <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" className="-rotate-90" height="4" />
                                                </a>
                                                <ul className="sub-menu shape-none" id="submenu-6">
                                                    <li className="sub-menu--item">
                                                        <a href="log-in.html">Sign In</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="sign-up.html">Sign Up</a>
                                                    </li>
                                                    <li className="sub-menu--item">
                                                        <a href="reset-password.html">Reset Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="pricing.html" data-menu-get="h3" className="drop-trigger">Pricing
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="faq.html" data-menu-get="h3" className="drop-trigger">FAQ’s
                                                </a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="testimonial.html" data-menu-get="h3" className="drop-trigger">Testimonial
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item nav-item-has-children">
                                        <a href="#" className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">Blog
                                            <img src="assets/img/icons/icon-caret-down.svg" alt="icon-caret-down" width="7" height="4" className="-rotate-90 invert-0 lg:rotate-0 lg:invert" />
                                        </a>
                                        <ul className="sub-menu" id="submenu-7">
                                            <li className="sub-menu--item">
                                                <a href="blog-1.html">Blog 1</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-2.html">Blog 2</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-3.html">Blog 3</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-4.html">Blog 4</a>
                                            </li>
                                            <li className="sub-menu--item">
                                                <a href="blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li> */}

                                        <li className="nav-link-item drop-trigger text-colorDark rounded-none border border-transparent lg:text-white">
                                            <a href="#contact" className="nav-link-item">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-6">
                            <a href="#contact" className="btn-primary relative hidden px-[30px] py-[10px] sm:inline-flex">Contact Us</a>

                            <div className="block lg:hidden">
                                <button id="openBtn" className="hamburger-menu mobile-menu-trigger">
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
