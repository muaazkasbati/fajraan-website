"use client";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import services from "@/utils/servicesNew.json";
import { ChevronUp } from "lucide-react";

const Footer = () => {
    const navItems = [
        { label: "About Us", href: "about" },
        { label: "Services", href: "services" },
        { label: "Portfolio", href: "portfolio" },
        { label: "Blog", href: "blog" },
        { label: "Contact", href: "contact" },
    ];
    return (
        <>
            <footer className="footer-area bg-color-primary overflow-hidden">
                {/* === Marquee Section === */}
                <motion.div
                    className="marquee-container fade-anim overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Marquee
                        gradient={false}
                        speed={60}
                        pauseOnHover
                        pauseOnClick
                        className="py-2"
                    >
                        {Array(6)
                            .fill(null)
                            .map((_, index) => (
                                <Link aria-label="Contact" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact`} key={index} className="marquee-item-container overflow-hidden">
                                    <div className="marquee-item text-color-white overflow-hidden color-secondary">
                                        <h1 className="text-color-white color-secondary">
                                            Empowering your business through innovation
                                        </h1>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                                            <path d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                    </Marquee>
                </motion.div>

                {/* === Footer Content === */}
                <div className="footer__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-widgets-wrapper">
                                    {/* Contact Section */}
                                    <motion.div
                                        className="footer-widgets contact text-color-white"
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <h6 className="widget-title text-color-white">Contact</h6>
                                        <p className="address">
                                            Dubai, United Arab Emirates
                                        </p>
                                        <div className="contacts mt-1">
                                            <ul className="custom-ul">
                                                {/* <li>
                                                    <Link className="email" href="mailto:info@fajraan.com">
                                                        info@fajraan.com
                                                    </Link>
                                                </li> */}
                                                <li>
                                                    <Link aria-label="Contact on WhatsApp" className="mobile" href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                                        +971 54 225 9592 (WhatsApp)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* <p className="address mt-4">
                                            76 Wanstead Lane, Ilford IG1 3SE, London UK
                                        </p>
                                        <div className="contacts mt-1">
                                            <ul className="custom-ul">
                                                <li>
                                                    <Link
                                                        className="mobile"
                                                        href="https://wa.me/447830526752"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        +44 7830 526752 (WhatsApp)
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> */}
                                        <div className="contacts">
                                            <ul className="custom-ul">
                                                <li>
                                                    <Link aria-label="Contact us on Email" className="email" href="mailto:info@fajraan.com">
                                                        info@fajraan.com
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </motion.div>

                                    {/* Agency Links */}
                                    <motion.div
                                        className="footer-widgets"
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <h6 className="widget-title text-color-white">Agency</h6>
                                        <div className="widget-links">
                                            <ul className="custom-ul">
                                                {navItems.map((item, index) => (
                                                    <li key={index}>
                                                        <Link aria-label={item.label} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}${item.href}`}>{item.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Services Links */}
                                    <motion.div
                                        className="footer-widgets"
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <h6 className="widget-title text-color-white">Services</h6>
                                        <div className="widget-links">
                                            <ul className="custom-ul">
                                                {services.slice(0, 5).map((service, index) => (
                                                    <li key={index}>
                                                        <Link aria-label={service.title} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}services/${service.slug}`}>{service.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* Social Links */}
                                    <motion.div
                                        className="footer-widgets"
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <h6 className="widget-title text-color-white">Socials</h6>
                                        <div className="social-links">
                                            <ul className="custom-ul flex gap-3">
                                                <li>
                                                    <Link aria-label="Follow us on Instagram" href="https://www.instagram.com/fajraantech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link aria-label="Follow us on Facebook" href="https://www.facebook.com/fajraantech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link aria-label="Follow us on LinkedIn" href="https://www.linkedin.com/company/fajraan-tech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.51v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link aria-label="Follow us on X" href="https://x.com/fajraantech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.1L6.6 22H3.5l7.3-8.4L1 2h6.3l4.4 5.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link aria-label="Follow us on GitHub" href="https://github.com/fajraantech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.2 2.1.5-.3.7-.8.8-1.2-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0C16 5 17 5.3 17 5.3c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.5 5.5-5 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z" />
                                                        </svg>
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link aria-label="Follow us on Behance" href="https://www.behance.net/fajraantech" target="_blank">
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M9.5 11.2c1.3-.6 2-1.6 2-3.1C11.5 6 10 4.7 7.5 4.7H2v14.6h5.9c2.8 0 4.6-1.4 4.6-3.8 0-1.7-1-2.8-3-3.3zM4.2 7h3c1.1 0 1.8.5 1.8 1.5S8.4 10 7.2 10H4.2V7zm3.3 9.9H4.2v-4.2h3.4c1.4 0 2.2.7 2.2 2.1 0 1.3-.9 2.1-2.3 2.1zM15.5 7h6v1.6h-6V7zm3 3.1c-2.5 0-4.3 1.9-4.3 4.7 0 2.8 1.8 4.6 4.3 4.6 2.1 0 3.6-1.2 4-3h-2.2c-.3.8-1 1.2-1.8 1.2-1.3 0-2.2-.9-2.3-2.3h6.5v-.6c0-3-1.7-4.6-4.2-4.6zm-2.3 3.7c.2-1.2 1.1-1.9 2.3-1.9 1.2 0 2 .8 2.1 1.9h-4.4z" />
                                                        </svg>
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === Footer Bottom === */}
                <div className="footer__bottom has-bodder">
                    <div className="container custom-container p-xxl-0 overflow-hidden">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer__bottom-content row-padding-bottom">
                                    <div className="copyright-text text-color-white">
                                        All rights reserved — {new Date().getFullYear()} © Fajraan Tech
                                    </div>
                                    <span
                                        className="scroll-to-top section-link cursor-pointer"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    >
                                        Back to top <ChevronUp size={22} strokeWidth={2.5} />
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
