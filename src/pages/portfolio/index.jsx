import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import PortfolioSection from '@/components/home/PortfolioSection'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
    try {
        const res = await fetch(`https://blog.devsolsystems.co.uk/wp-json/wp/v2/portfolio?_embed&per_page=20&_=${Date.now()}`);
        if (!res.ok) throw new Error('Failed to fetch portfolio');
        const data = await res.json();

        const mapped = data.map((item) => ({
            id: item.id,
            title: item.title.rendered,
            slug: item.slug,
            link: item.link,
            year: item.meta?.year || '—',
            link: item?.meta?.custom_link || '#',
            category: item._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
            image: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/default.webp',
        }));

        return {
            props: { projects: mapped },
            revalidate: 60, // re-fetch every 60 seconds
        };
    } catch (error) {
        console.error('Portfolio page error:', error);
        return { props: { projects: [] }, revalidate: 60 };
    }
}


export default function Portfolio({ projects }) {
    return (
        <>
            <Head>
                <title>Portfolio | Fajraan Tech – Our Work & Case Studies</title>

                <meta name="description" content="Browse Fajraan Tech's portfolio of web, mobile, and AI-powered projects, including our chauffeur & fleet management software case studies, built for businesses worldwide." />
                <meta name="keywords" content="Fajraan Tech portfolio, web development projects, mobile app case studies, AI automation projects, chauffeur software case study, fleet management software, software development examples, digital agency work" />

                <link rel="canonical" href="https://www.fajraan.tech/portfolio" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/portfolio" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/portfolio" />

                <meta property="og:title" content="Portfolio | Fajraan Tech – Our Work & Case Studies" />
                <meta property="og:description" content="Browse Fajraan Tech's portfolio of web, mobile, and AI-powered projects, including our chauffeur & fleet management software case studies, built for businesses worldwide." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Portfolio – Web & Mobile Projects" />
                <meta property="og:url" content="https://www.fajraan.tech/portfolio" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Portfolio | Fajraan Tech – Our Work & Case Studies" />
                <meta name="twitter:description" content="Browse Fajraan Tech's portfolio of web, mobile, and AI-powered projects, including our chauffeur & fleet management software case studies, built for businesses worldwide." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Portfolio – Web & Mobile Projects" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "Portfolio – Fajraan Tech",
                            url: "https://www.fajraan.tech/portfolio",
                            description: "Browse Fajraan Tech's portfolio of web, mobile, and AI-powered projects, including our chauffeur & fleet management software case studies, built for businesses worldwide.",
                            publisher: {
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
                                    name: "Portfolio",
                                    item: "https://www.fajraan.tech/portfolio",
                                },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="Creating unforgettable digital impressions" />
                <PortfolioSection theme='light' projects={projects} />
            </main>
            <Footer />
        </>
    )
}
