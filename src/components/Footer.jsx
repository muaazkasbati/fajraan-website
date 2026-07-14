
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
        // { label: "Portfolio", href: "portfolio" },
        { label: "Blog", href: "blog" },
        // { label: "Contact", href: "contact" },
        { label: "Privacy Policy", href: "privacy-policy" },
        { label: "Terms & Conditions", href: "terms-and-conditions" },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/fajraantech",
            label: "Follow us on Instagram",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/fajraantech",
            label: "Follow us on Facebook",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/fajraan-tech",
            label: "Follow us on LinkedIn",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.51v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0z" />
                </svg>
            ),
        },
        {
            name: "X",
            href: "https://x.com/fajraantech",
            label: "Follow us on X",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.1L6.6 22H3.5l7.3-8.4L1 2h6.3l4.4 5.5L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "https://github.com/fajraantech",
            label: "Follow us on GitHub",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.7-1.3-3.7-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.2 2.1.5-.3.7-.8.8-1.2-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.7 10.7 0 0 1 5.8 0C16 5 17 5.3 17 5.3c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.5 5.5-5 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.4-1.5 7.6-5.7 7.6-10.7C23.2 5.4 18.3.5 12 .5z" />
                </svg>
            ),
        },
        {
            name: "Behance",
            href: "https://www.behance.net/fajraantech",
            label: "Follow us on Behance",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 11.2c1.3-.6 2-1.6 2-3.1C11.5 6 10 4.7 7.5 4.7H2v14.6h5.9c2.8 0 4.6-1.4 4.6-3.8 0-1.7-1-2.8-3-3.3zM4.2 7h3c1.1 0 1.8.5 1.8 1.5S8.4 10 7.2 10H4.2V7zm3.3 9.9H4.2v-4.2h3.4c1.4 0 2.2.7 2.2 2.1 0 1.3-.9 2.1-2.3 2.1zM15.5 7h6v1.6h-6V7zm3 3.1c-2.5 0-4.3 1.9-4.3 4.7 0 2.8 1.8 4.6 4.3 4.6 2.1 0 3.6-1.2 4-3h-2.2c-.3.8-1 1.2-1.8 1.2-1.3 0-2.2-.9-2.3-2.3h6.5v-.6c0-3-1.7-4.6-4.2-4.6zm-2.3 3.7c.2-1.2 1.1-1.9 2.3-1.9 1.2 0 2 .8 2.1 1.9h-4.4z" />
                </svg>
            ),
        },
    ];
    return (
        <>
            <footer className="bg-primary overflow-hidden">
                <motion.div
                    className="fade-anim overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Marquee gradient={false} speed={60} pauseOnHover pauseOnClick className="py-2">
                        {Array(6).fill(null).map((_, index) => (
                            <Link aria-label="Contact" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact`} key={index} className="marquee-item-container overflow-hidden">
                                <div className="relative flex items-center whitespace-nowrap overflow-hidden text-secondary">
                                    <h1 className="text-[65px] md:text-[75px] lg:text-[95px] xl:text-[140px] leading-[107.143%] tracking-[-4.2px] text-secondary font-semibold">
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


                <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180 lg:py-32.5 md:py-20 py-16.25">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6.25 lg:grid-cols-4 lg:gap-5">
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-5 text-white">Contact</p>
                            <p className="text-[20px] mb-3">
                                1001 S Main St Ste 5965, Kalispell, Montana 59901-1498, United States
                            </p>
                            <p className="text-[20px]">
                                <Link aria-label="Contact on WhatsApp" className="hover:underline transition-all duration-200 underline-offset-3 decoration-2" href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                    +971 54 225 9592 (WhatsApp)
                                </Link>
                            </p>
                            <p className="text-[20px] mb-3">
                                <Link aria-label="Contact Us on Number" className="hover:underline transition-all duration-200 underline-offset-3 decoration-2" href="tel:+14062299260">
                                    +1 (406) 229-9260
                                </Link>
                            </p>
                            <p className="text-[20px]">
                                <Link aria-label="Contact us on Email" className="underline underline-offset-3 decoration-2" href="mailto:info@fajraan.com">
                                    info@fajraan.com
                                </Link>
                            </p>
                        </motion.div>

                        <motion.div
                            className=""
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-5 text-white">Agency</p>
                            <ul className="text-[20px] text-white space-y-2.5">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            aria-label={item.label}
                                            href={`${process.env.NEXT_PUBLIC_APPFRONTURL}${item.href}`}
                                            className="relative inline-block leading-[144.444%] before:absolute before:bottom-0.5 before:left-0 before:h-px before:w-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:before:w-full"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className=""
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-5 text-white">Services</p>
                            <ul className="text-[20px] text-white space-y-2.5">
                                {services.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            aria-label={item.title}
                                            href={`${process.env.NEXT_PUBLIC_APPFRONTURL}services/${item.slug}`}
                                            className="relative inline-block leading-[144.444%] before:absolute before:bottom-0.5 before:left-0 before:h-px before:w-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:before:w-full"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className=""
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-5 text-white">Socials</p>
                            <ul className="flex flex-wrap justify-start gap-2">
                                {socialLinks.map(({ name, href, label, icon }) => (
                                    <li key={name}>
                                        <Link
                                            aria-label={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-11.25 w-11.25 items-center justify-center rounded-[40px] bg-secondary text-primary transition-all duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-primary md:h-13 md:w-13"
                                        >
                                            {icon}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180 p-xxl-0 overflow-hidden border-t border-white/10">
                    <div className="flex sm:flex-row flex-col gap-2.5 justify-between items-center pt-7 pb-15">
                        <div className="text-[18px] font-normal leading-tight text-white">
                            All rights reserved — {new Date().getFullYear()} © Fajraan Tech
                        </div>
                        <span className="flex cursor-pointer items-center justify-between gap-2 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-white hover:text-white active:text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            Back to top
                            <ChevronUp size={22} strokeWidth={2.5} />
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
