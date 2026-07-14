import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | Fajraan Tech – Let's Build Something Great</title>

                <meta name="description" content="Get in touch with Fajraan Tech. Whether you have a project in mind or just want to say hello, our team is ready to help you build web, mobile, and AI-powered solutions worldwide." />
                <meta name="keywords" content="contact Fajraan Tech, hire web developers, hire app developers, hire AI automation experts, get a quote, software development inquiry, web development agency contact, tech company contact" />

                <link rel="canonical" href="https://www.fajraan.tech/contact" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/contact" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/contact" />

                <meta property="og:title" content="Contact Us | Fajraan Tech – Let's Build Something Great" />
                <meta property="og:description" content="Get in touch with Fajraan Tech. Whether you have a project in mind or just want to say hello, our team is ready to help you build web, mobile, and AI-powered solutions worldwide." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Contact Fajraan Tech – Global Software Development" />
                <meta property="og:url" content="https://www.fajraan.tech/contact" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Contact Us | Fajraan Tech – Let's Build Something Great" />
                <meta name="twitter:description" content="Get in touch with Fajraan Tech. Whether you have a project in mind or just want to say hello, our team is ready to help you build web, mobile, and AI-powered solutions worldwide." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Contact Fajraan Tech – Global Software Development" />


                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "Contact Us – Fajraan Tech",
                            url: "https://www.fajraan.tech/contact",
                            description: "Get in touch with Fajraan Tech. Whether you have a project in mind or just want to say hello, our team is ready to help you build web, mobile, and AI-powered solutions worldwide.",
                            publisher: {
                                "@type": "Organization",
                                name: "Fajraan Tech",
                                url: "https://www.fajraan.tech",
                                logo: "https://www.fajraan.tech/images/logo.webp",
                                contactPoint: {
                                    "@type": "ContactPoint",
                                    contactType: "customer support",
                                    areaServed: "Worldwide",
                                    availableLanguage: ["English", "Arabic"],
                                },
                                sameAs: [
                                    "https://www.linkedin.com/company/fajraan-tech",
                                    "https://twitter.com/fajraantech",
                                    "https://www.instagram.com/fajraantech",
                                    "https://www.facebook.com/fajraantech"
                                ],
                            },
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                {
                                    "@type": "ListItem",
                                    position: 1,
                                    name: "Home",
                                    item: "https://www.fajraan.tech/",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Contact Us",
                                    item: "https://www.fajraan.tech/contact",
                                },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="We're just a message away to bring your ideas to life" />
                <section className="overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180 relative">
                        <motion.iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9225075315762!2d-114.31232502374964!3d48.18884454759078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650c2d7daf13f%3A0x1ffd14811eec8fbe!2s1001%20S%20Main%20St%20%235965%2C%20Kalispell%2C%20MT%2059901%2C%20USA!5e0!3m2!1sen!2s!4v1784015785330!5m2!1sen!2s"
                            width="600"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block w-full border-0 h-200"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                    </div>
                </section>
                <section id="contact-section" className="bg-white lg:py-32.5 md:py-20 py-16.25">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="pr-20">
                                <motion.div
                                    className=""
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] mb-7 text-primary font-semibold">Let's build something amazing together!</h3>
                                    <p className="text-[20px]">
                                        At Fajraan Tech, we're always ready to discuss your next digital project — whether it's a website, app, AI automation, or chatbot. Reach out to our team and let's turn your vision into reality.
                                    </p>

                                    <div className="mt-12 mb-8">
                                        <h6 className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold">Headquarters:</h6>
                                        <p className="text-[20px]">
                                            1001 S Main St Ste 5965,<br />Kalispell, MT 59901-1498
                                        </p>
                                    </div>

                                    <div className="space-y-1.5">
                                        <p className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold">
                                            <Link aria-label="Contact Us on Email" href="mailto:info@fajraan.com" className="underline underline-offset-3 decoration-2">info@fajraan.com</Link>
                                        </p>
                                        <p>
                                            <Link aria-label="Contact Us on Number" href="tel:+14062299260">
                                                +1 (406) 229-9260
                                            </Link>
                                        </p>
                                        <p>
                                            <Link aria-label="Contact Us on WhatsApp" href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                                +971 54 225 9592 (WhatsApp UAE)
                                            </Link>
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="">
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                                >
                                    <ContactForm />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
