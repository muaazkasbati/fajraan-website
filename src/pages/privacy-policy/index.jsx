import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

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

            <div className="page-wrapper">
                <Header />
                <main className="main-wrapper">
                    <BreadCrumb page="Privacy Policy" />

                    <section className="section-policy">
                        <div className="section-space">
                            <div className="container max-w-[900px] mx-auto">
                                <h2 className="jos text-center mb-8">Privacy Policy</h2>
                                <p className="mb-5">
                                    At Fajraan Tech, we value your privacy and are committed to protecting your personal information.
                                    This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
                                </p>

                                <h4 className="font-semibold mb-2">1. Information We Collect</h4>
                                <p className="mb-5">
                                    We may collect personal information such as your name, email address, phone number, and business details when you
                                    contact us, fill out forms, or subscribe to our services.
                                </p>

                                <h4 className="font-semibold mb-2">2. How We Use Your Information</h4>
                                <p className="mb-5">
                                    Your data is used to provide services, respond to inquiries, improve our website, and send relevant updates.
                                    We do not sell or share your personal information with third parties.
                                </p>

                                <h4 className="font-semibold mb-2">3. Cookies</h4>
                                <p className="mb-5">
                                    Our website uses cookies to enhance your browsing experience and analyze traffic. You can disable cookies in your browser settings.
                                </p>

                                <h4 className="font-semibold mb-2">4. Data Security</h4>
                                <p className="mb-5">
                                    We implement industry-standard security measures to protect your information against unauthorized access, alteration, or disclosure.
                                </p>

                                <h4 className="font-semibold mb-2">5. Changes to This Policy</h4>
                                <p className="mb-5">
                                    Fajraan Tech reserves the right to update this policy periodically. Updates will be posted on this page with a revised effective date.
                                </p>

                                <h4 className="font-semibold mb-2">6. Contact Us</h4>
                                <p>
                                    If you have any questions about our Privacy Policy, contact us at:
                                    <br />
                                    <strong>Email:</strong> info@fajraan.com
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
