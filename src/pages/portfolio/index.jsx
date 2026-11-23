import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import { ProjectCard } from '@/components/home/PortfolioSection'
import { cmsFetchSafe } from '@/utils/cms'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
    const json = await cmsFetchSafe("/projects?limit=50&page=1", null);
    const projects = (json?.data || []).map((item) => ({
        id: item?._id || null,
        title: item?.dynamicFields?.title || "",
        slug: item?.dynamicFields?.slug || "",
        year: item?.dynamicFields?.year || "",
        category: item?.categories?.[0]?.name || "",
        image: item?.dynamicFields?.image || null,
    })).filter((p) => p.slug);

    return { props: { projects }, revalidate: json ? 600 : 120 };
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
            <main id="main">
                <HeroSec
                    crumbs={[{ label: "Work" }]}
                    title="Creating unforgettable digital impressions."
                    intro="A selection of platforms, apps and websites we've designed and built for clients."
                />
                <section className="pb-20 md:pb-28">
                    <div className="wrap">
                        {projects.length ? (
                            <div className="grid gap-x-8 gap-y-14 border-t border-line pt-14 md:grid-cols-2">
                                {projects.map((proj, i) => (
                                    <ProjectCard key={proj.id || i} proj={proj} index={i} />
                                ))}
                            </div>
                        ) : (
                            <p className="border-t border-line pt-14 text-muted">Projects are temporarily unavailable. Please check back shortly.</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
