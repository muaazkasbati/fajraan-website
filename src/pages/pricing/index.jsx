import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import PricingSection from '@/components/PricingSection'
import FaqsSection from '@/components/FaqsSection'
import VideoAreaSection from '@/components/VideoAreaSection'

export default function Pricing() {

    return (
        <>
            <Head>
                <title>Pricing | Fajraan Tech – Transparent Plans for Every Business</title>

                <meta name="description" content="View Fajraan Tech's pricing plans for web development, mobile & desktop application development, and AI automation & chatbot solutions. Transparent, USD pricing for businesses of all sizes worldwide." />
                <meta name="keywords" content="Fajraan Tech pricing, web development cost, mobile app development pricing, AI automation pricing, AI chatbot pricing, software development rates, digital agency pricing" />

                <link rel="canonical" href="https://www.fajraan.tech/pricing" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/pricing" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/pricing" />

                <meta property="og:title" content="Pricing | Fajraan Tech – Transparent Plans for Every Business" />
                <meta property="og:description" content="View Fajraan Tech's pricing plans for web development, mobile & desktop application development, and AI automation & chatbot solutions. Transparent, USD pricing for businesses of all sizes worldwide." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Pricing – Flexible Plans for Every Business" />
                <meta property="og:url" content="https://www.fajraan.tech/pricing" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Pricing | Fajraan Tech – Transparent Plans for Every Business" />
                <meta name="twitter:description" content="View Fajraan Tech's pricing plans for web development, mobile & desktop application development, and AI automation & chatbot solutions. Transparent, USD pricing for businesses of all sizes worldwide." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Pricing – Flexible Plans for Every Business" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "Pricing – Fajraan Tech",
                            url: "https://www.fajraan.tech/pricing",
                            description: "View Fajraan Tech's pricing plans for web development, mobile & desktop application development, and AI automation & chatbot solutions. Transparent, USD pricing for businesses of all sizes worldwide.",
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
                                    name: "Pricing",
                                    item: "https://www.fajraan.tech/pricing",
                                },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="Clear Plans. Fair Pricing. Built for Your Growth." />
                <VideoAreaSection imageUrl="/images/hero/pricing-hero-banner.webp" />
                <PricingSection />
                <FaqsSection />
            </main>
            <Footer />
        </>
    )
}
