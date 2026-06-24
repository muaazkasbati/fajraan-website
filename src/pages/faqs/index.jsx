import FaqsSection from '@/components/FaqsSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { motion } from "framer-motion";
import VideoAreaSection from '@/components/VideoAreaSection'

export default function Faqs() {
    return (
        <>
            <Head>
                <title>FAQs | Fajraan Tech – Frequently Asked Questions</title>

                <meta name="description" content="Find answers to frequently asked questions about Fajraan Tech's web development, mobile app development, UI/UX design, SEO, digital solutions, pricing, and project processes." />
                <meta name="keywords" content="Fajraan Tech FAQs, frequently asked questions, web development FAQ, mobile app development FAQ, UI UX design questions, SEO services FAQ, software development support" />

                <link rel="canonical" href="https://www.fajraan.tech/faqs" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/faqs" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/faqs" />

                <meta property="og:title" content="FAQs | Fajraan Tech – Frequently Asked Questions" />
                <meta property="og:description" content="Get answers to common questions about our web development, mobile applications, UI/UX design, SEO, and digital services." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Frequently Asked Questions" />
                <meta property="og:url" content="https://www.fajraan.tech/faqs" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="FAQs | Fajraan Tech – Frequently Asked Questions" />
                <meta name="twitter:description" content="Browse answers to common questions about our services, development process, pricing, timelines, and support." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Frequently Asked Questions" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            name: "Frequently Asked Questions",
                            url: "https://www.fajraan.tech/faqs",
                            description:
                                "Frequently asked questions about Fajraan Tech's web development, mobile app development, UI/UX design, SEO, and digital services.",
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
                                    name: "FAQs",
                                    item: "https://www.fajraan.tech/faqs"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="Quick answers to common questions" />
                <VideoAreaSection imageUrl="/images/hero/fag-hero-banner.webp" />
                <FaqsSection />
            </main>
            <Footer />
        </>
    )
}
