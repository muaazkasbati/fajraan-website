import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Fajraan Tech – Your Privacy Matters</title>

                <meta
                    name="description"
                    content="Read Fajraan Tech's Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our website, products, and services worldwide."
                />
                <meta
                    name="keywords"
                    content="privacy policy, data protection, personal information, website privacy, cookies policy, user data protection, privacy practices, Fajraan Tech"
                />

                <link rel="canonical" href="https://www.fajraan.tech/privacy-policy" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/privacy-policy" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/privacy-policy" />

                <meta property="og:title" content="Privacy Policy | Fajraan Tech – Your Privacy Matters" />
                <meta
                    property="og:description"
                    content="Learn how Fajraan Tech collects, uses, stores, and safeguards your personal information across our website and digital services."
                />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Privacy Policy – Data Protection and Privacy" />
                <meta property="og:url" content="https://www.fajraan.tech/privacy-policy" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Privacy Policy | Fajraan Tech – Your Privacy Matters" />
                <meta
                    name="twitter:description"
                    content="Discover how Fajraan Tech protects your personal information and maintains transparency in the collection and use of data."
                />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.jpg" />
                <meta name="twitter:image:alt" content="Fajraan Tech Privacy Policy – Data Protection and Privacy" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Privacy Policy – Fajraan Tech",
                            url: "https://www.fajraan.tech/privacy-policy",
                            description: "Learn how Fajraan Tech collects, uses, stores, and protects personal information when providing digital services worldwide.",
                            provider: {
                                "@type": "Organization",
                                name: "Fajraan Tech",
                                url: "https://www.fajraan.tech",
                                logo: "https://www.fajraan.tech/images/logo.png",
                                sameAs: [
                                    "https://www.linkedin.com/company/fajraan-tech",
                                    "https://twitter.com/fajraantech",
                                    "https://www.instagram.com/fajraantech",
                                    "https://www.facebook.com/fajraantech"
                                ]
                            }
                        })
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
                                    item: "https://www.fajraan.tech/"
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Privacy Policy",
                                    item: "https://www.fajraan.tech/privacy-policy"
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <Header />
            <main>
                <HeroSec title="Privacy Policy" />
                <section className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden">
                    <div className="container custom-container">
                        <motion.div
                            className="row g-4 justify-content-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="col-xl-8">
                                <motion.div
                                    className="blog-body"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="">
                                        At Fajraan Tech, we value your privacy and are committed to protecting your personal information.
                                        This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                                    </p>

                                    <h3 className="">1. Information We Collect</h3>
                                    <p className="">
                                        We may collect personal information such as your name, email address, phone number, and business details when you
                                        contact us, fill out forms, or subscribe to our services.
                                    </p>

                                    <h3 className="">2. How We Use Your Information</h3>
                                    <p className="">
                                        Your data is used to provide services, respond to inquiries, improve our website, and send relevant updates.
                                        We do not sell or share your personal information with third parties.
                                    </p>

                                    <h3 className="">3. Cookies</h3>
                                    <p className="">
                                        Our website uses cookies to enhance your browsing experience and analyze traffic. You can disable cookies in your browser settings.
                                    </p>

                                    <h3 className="">4. Data Security</h3>
                                    <p className="">
                                        We implement industry-standard security measures to protect your information against unauthorized access, alteration, or disclosure.
                                    </p>

                                    <h3 className="">5. Changes to This Policy</h3>
                                    <p className="">
                                        Fajraan Tech reserves the right to update this policy periodically. Updates will be posted on this page with a revised effective date.
                                    </p>

                                    <h3 className="">6. Contact Us</h3>
                                    <p>
                                        If you have any questions about our Privacy Policy, contact us at:
                                        <br />
                                        <strong>Email:</strong> info@fajraan.com
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
