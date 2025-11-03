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
                <title>Privacy Policy | Fajraan Tech</title>
                <meta
                    name="description"
                    content="Fajraan Tech respects your privacy. Learn how we collect, use, and protect your personal data when you visit our website or use our services."
                />
                <meta
                    name="keywords"
                    content="privacy policy, fajraan tech, data protection, website privacy, cookies policy, uae privacy law"
                />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Privacy Policy | Fajraan Tech" />
                <meta property="og:description" content="Understand how Fajraan Tech protects your personal data and privacy across all services and platforms." />
                <meta property="og:image" content="https://fajraan.com/assets/img/og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com/privacy-policy" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy | Fajraan Tech" />
                <meta name="twitter:description" content="Learn how Fajraan Tech safeguards your personal data and ensures compliance with global privacy standards." />
                <meta name="twitter:image" content="https://fajraan.com/assets/img/og-image.jpg" />
            </Head>

            <Header />
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
            <Footer />
        </>
    )
}
