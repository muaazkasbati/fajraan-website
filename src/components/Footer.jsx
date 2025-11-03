"use client";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import services from "@/utils/services.json";

const Footer = () => {
    const navItems = [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
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
                                <Link href="/contact" key={index} className="marquee-item-container overflow-hidden">
                                    <div
                                        className="marquee-item text-color-white overflow-hidden color-secondary"
                                    >
                                        <h1 className="text-color-white color-secondary">
                                            Empowering your business through innovation
                                        </h1>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="150"
                                            height="150"
                                            viewBox="0 0 150 150"
                                            fill="none"
                                        >
                                            <path
                                                d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z"
                                                fill="currentColor"
                                            />
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
                                        <div className="contacts">
                                            <ul className="custom-ul">
                                                <li>
                                                    <a className="email" href="mailto:info@fajraan.com">
                                                        info@fajraan.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="mobile"
                                                        href="https://wa.me/971542259592"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        +971 54 225 9592 (WhatsApp only)
                                                    </a>
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
                                                        <Link href={item.href}>{item.label}</Link>
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
                                                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
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
                                        <div className="social-links">
                                            {/* <ul className="custom-ul flex gap-3">
                                                <li><a href="https://x.com/" target="_blank"><i className="fab fa-x-twitter" /></a></li>
                                                <li><a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin" /></a></li>
                                                <li><a href="https://behance.net/" target="_blank"><i className="fab fa-behance" /></a></li>
                                                <li><a href="https://dribbble.com/" target="_blank"><i className="fab fa-dribbble" /></a></li>
                                            </ul> */}
                                            <ul className="custom-ul flex gap-3">
                                                <li>
                                                    <a href="https://www.instagram.com/fajraan_tech" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.facebook.com/fajraantech" target="_blank">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.linkedin.com/company/fajraan-tech" target="_blank">
                                                        <i className="fab fa-linkedin" />
                                                    </a>
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
                                    <a
                                        className="scroll-to-top section-link cursor-pointer"
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        Back to top <i className="fas fa-angle-up" />
                                    </a>

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
