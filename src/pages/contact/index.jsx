import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/utils/site";
import Reveal from "@/components/Reveal";

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
            <main id="main">
                <HeroSec
                    crumbs={[{ label: "Contact" }]}
                    title="We're a message away from bringing your idea to life."
                />
                <section id="contact-section" className="pb-20 md:pb-28">
                    <div className="wrap grid gap-12 lg:grid-cols-12">
                        <Reveal className="lg:col-span-4">
                            <p className="text-muted">
                                Whether it&apos;s a website, an app, AI automation or a chatbot, tell us about it. We&apos;ll reply with honest next steps.
                            </p>
                            <dl className="mt-10 divide-y divide-line border-y border-line">
                                <div className="py-5">
                                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">Email</dt>
                                    <dd className="t-h4 mt-1"><a href={`mailto:${contact.email}`} className="text-primary underline decoration-secondary underline-offset-4">{contact.email}</a></dd>
                                </div>
                                <div className="py-5">
                                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">WhatsApp (UAE)</dt>
                                    <dd className="mt-1"><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="link-u text-primary">{contact.whatsappLabel}</a></dd>
                                </div>
                                <div className="py-5">
                                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">Phone (US)</dt>
                                    <dd className="mt-1"><a href={contact.phoneHref} className="link-u text-primary">{contact.phoneLabel}</a></dd>
                                </div>
                                <div className="py-5">
                                    <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-muted">Headquarters</dt>
                                    <dd className="mt-1 text-muted">1001 S Main St Ste 5965,<br />Kalispell, MT 59901-1498, USA</dd>
                                </div>
                            </dl>
                        </Reveal>

                        <Reveal delay={100} className="bg-paper p-6 sm:p-10 lg:col-span-7 lg:col-start-6 lg:p-12">
                            <h2 className="t-h3 mb-8 text-primary">Tell us about your project</h2>
                            <ContactForm />
                        </Reveal>
                    </div>
                </section>

                <section aria-label="Map" className="pb-20 md:pb-28">
                    <div className="wrap">
                        <iframe
                            title="Fajraan Tech headquarters on Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9225075315762!2d-114.31232502374964!3d48.18884454759078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650c2d7daf13f%3A0x1ffd14811eec8fbe!2s1001%20S%20Main%20St%20%235965%2C%20Kalispell%2C%20MT%2059901%2C%20USA!5e0!3m2!1sen!2s!4v1784015785330!5m2!1sen!2s"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block h-[360px] w-full border-0 grayscale md:h-[440px]"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
