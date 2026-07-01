import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Contact() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            // Send form data to API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, plan: router.query.plan ? router.query.plan : '' }),
            });

            // Check response status
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData.message);
                return;
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us | Fajraan Tech – Let's Build Something Great</title>

                <meta name="description" content="Get in touch with Fajraan Tech. Whether you have a project in mind or just want to say hello, our team is ready to help you build custom web, mobile, and desktop solutions worldwide." />
                <meta name="keywords" content="contact Fajraan Tech, hire web developers, hire app developers, get a quote, software development inquiry, web development agency contact, tech company contact" />

                <link rel="canonical" href="https://www.fajraan.tech/contact" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/contact" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/contact" />

                <meta property="og:title" content="Contact Us | Fajraan Tech – Let's Build Something Great" />
                <meta property="og:description" content="Have a project in mind? Reach out to Fajraan Tech and let's discuss how we can build your next custom web, mobile, or desktop solution." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Contact Fajraan Tech – Global Software Development" />
                <meta property="og:url" content="https://www.fajraan.tech/contact" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Contact Us | Fajraan Tech – Let's Build Something Great" />
                <meta name="twitter:description" content="Ready to start your next project? Get in touch with the Fajraan Tech team — custom web, mobile & desktop development for businesses worldwide." />
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
                            description: "Contact Fajraan Tech to discuss your custom web, mobile, or desktop development project. Our global team is ready to help.",
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
                <HeroSec title="We’re just a message away to bring your ideas to life" />
                <div className="quanto-map-area style-2 overflow-hidden">
                    <div className="container mx-auto px-4 custom-container relative">
                        <div className="flex">
                            <div className="w-full">
                                <motion.iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.706867964713!2d0.05159407660142838!3d51.5736070718285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6e6b8f4dd5b%3A0xc0b05abcd40481bd!2sWanstead%20Ln%2C%20Ilford%2C%20UK!5e0!3m2!1sen!2s!4v1770044643021!5m2!1sen!2s"
                                    width="600"
                                    height="400"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block w-full"
                                    style={{ border: 0 }}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <section
                    id="quanto-contact-section"
                    className="quanto-contact-section bg-color-white section-padding-top-bottom"
                >
                    <div className="container mx-auto px-4 custom-container">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="pr-20">
                                <motion.div
                                    className="quanto-contact__content"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <h3 className="title color-primary">Let’s build something amazing together!</h3>
                                    <p>
                                        At Fajraan Tech, we’re always ready to discuss your next digital project — whether it’s a website, app,
                                        design, or marketing campaign. Reach out to our team and let’s turn your vision into reality.
                                    </p>

                                    <div className="address">
                                        <h6>Address:</h6>
                                        <span>
                                            Sheikh Zayed Road, <br />
                                            Dubai, United Arab Emirates
                                        </span>
                                        {/* <br /> */}
                                        {/* <br />
                                    <span>
                                        76 Wanstead Lane, Ilford IG1 3SE,<br /> London, United Kingdom
                                    </span> */}
                                    </div>

                                    <div className="contact-info">
                                        <h5>
                                            <Link aria-label="Contact Us on Email" href="mailto:info@fajraan.com">info@fajraan.com</Link>
                                        </h5>
                                        <Link aria-label="Contact Us on WhatsApp" href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                            +971 54 225 9592 (WhatsApp UAE)
                                        </Link>
                                        {/* <Link href="https://wa.me/447830526752" target="_blank" rel="noopener noreferrer">
                                        +44 7830 526752 (WhatsApp UK)
                                    </Link> */}
                                    </div>
                                </motion.div>
                            </div>

                            <div className="">
                                <motion.form
                                    id="contact-form"
                                    onSubmit={handleSubmit}
                                    action="#"
                                    className="quanto-contact__form"
                                    autoComplete="off"
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                                >
                                    <div className="space-y-4">
                                        <div className="grid md:grid-col-2 gap-3">
                                            <div className="">
                                                <input
                                                    placeholder="Your name"
                                                    required
                                                    className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                                    pattern="[A-Za-z\s]+"
                                                    title="Please enter only alphabets and spaces"
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                />
                                            </div>
                                            <div className="">
                                                <input
                                                    placeholder="Company name"
                                                    className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <input
                                                placeholder="Enter your phone number"
                                                required
                                                className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                pattern="^\+?[0-9]{7,15}$"
                                                title="Please enter a valid phone number (digits only, with optional + and 7–15 digits)"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                placeholder="Enter your e-mail address"
                                                required
                                                className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                title="Please enter a valid email address"
                                                type="email"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="">
                                            <input
                                                placeholder="What is the subject of your query?"
                                                className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                                type="text"
                                                name="subject"
                                                id="subject"
                                            />
                                        </div>
                                        <div className="">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="6"
                                                placeholder="Describe about your project"
                                                className="w-full rounded border border-gray-200 px-4 py-3 focus:outline-none focus:border-slate-400"
                                            ></textarea>
                                        </div>
                                        <div className="w-full mt-5">
                                            <button id="submit-form" aria-label="Submit" type="submit" className="quanto-link-btn btn-pill">
                                                Submit
                                                <span>
                                                    <ArrowRight className="arry1" size={22} />
                                                    <ArrowRight className="arry2" size={22} />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
