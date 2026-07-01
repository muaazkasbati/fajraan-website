import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | Fajraan Tech – Terms of Service & Website Use</title>

                <meta name="description" content="Read Fajraan Tech's Terms & Conditions governing the use of our website, digital products, software solutions, and professional services worldwide." />
                <meta name="keywords" content="terms and conditions, terms of service, website terms, service agreement, user responsibilities, legal terms, digital services agreement, Fajraan Tech" />

                <link rel="canonical" href="https://www.fajraan.tech/terms-and-conditions" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/terms-and-conditions" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/terms-and-conditions" />

                <meta property="og:title" content="Terms & Conditions | Fajraan Tech – Terms of Service & Website Use" />
                <meta property="og:description" content="Review the terms governing access to and use of Fajraan Tech's website, software solutions, and digital services." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Terms & Conditions – Website and Service Usage Terms" />
                <meta property="og:url" content="https://www.fajraan.tech/terms-and-conditions" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Terms & Conditions | Fajraan Tech – Terms of Service & Website Use" />
                <meta name="twitter:description" content="Understand the rights, responsibilities, and conditions that apply when using Fajraan Tech's website and services." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Terms & Conditions – Website and Service Usage Terms" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Terms & Conditions – Fajraan Tech",
                            url: "https://www.fajraan.tech/terms-and-conditions",
                            description: "Terms and Conditions governing the use of Fajraan Tech's website, software solutions, and professional digital services.",
                            provider: {
                                "@type": "Organization",
                                name: "Fajraan Tech",
                                url: "https://www.fajraan.tech",
                                logo: "https://www.fajraan.tech/images/logo.webp",
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
                                    name: "Terms & Conditions",
                                    item: "https://www.fajraan.tech/terms-and-conditions"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="Terms & Conditions" />
                <section className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden">
                    <div className="container mx-auto px-4 custom-container">
                        <motion.div
                            className="grid gap-4 justify-items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full xl:w-8/12">
                                <motion.div
                                    className="blog-body"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <p>
                                        Welcome to Fajraan Tech. By accessing our website or using our services, you agree to the following terms and conditions.
                                        Please read them carefully before proceeding.
                                    </p>

                                    <h3>1. Use of Services</h3>
                                    <p>
                                        Our services are provided for lawful purposes only. You agree not to misuse our website or engage in any activity that disrupts or harms other users.
                                    </p>

                                    <h3>2. Intellectual Property</h3>
                                    <p>
                                        All content, designs, and code on this website are the intellectual property of Fajraan Tech and may not be copied, distributed, or reproduced without permission.
                                    </p>

                                    <h3>3. Payment & Refund Policy</h3>
                                    <p>
                                        Payment terms are agreed upon before project initiation. Refunds are subject to review based on project stage and deliverables.
                                    </p>

                                    <h3>4. Limitation of Liability</h3>
                                    <p>
                                        Fajraan Tech shall not be held responsible for any direct or indirect damages arising from the use of our website or services.
                                    </p>

                                    <h3>5. Modifications</h3>
                                    <p>
                                        We reserve the right to modify or update these terms at any time. Continued use of the website implies acceptance of any revisions.
                                    </p>

                                    <h3>6. Governing Law</h3>
                                    <p>
                                        These Terms & Conditions are governed by the laws of the United Arab Emirates.
                                        Any disputes will be resolved under UAE jurisdiction.
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
