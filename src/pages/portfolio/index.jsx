import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import PortfolioSection from '@/components/home/PortfolioSection'
import Head from 'next/head'
import React from 'react'

export async function getServerSideProps() {
    try {
        const res = await fetch(
            'https://blogs.cre8ivesparkx.com/wp-json/wp/v2/portfolio?_embed&per_page=20'
        );
        if (!res.ok) throw new Error('Failed to fetch portfolio');
        const data = await res.json();

        const mapped = data.map((item) => ({
            id: item.id,
            title: item.title.rendered,
            slug: item.slug,
            link: item.link,
            year: item.meta?.year || '—',
            category: item._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
            image:
                item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                '/images/default.webp',
        }));

        return { props: { projects: mapped } };
    } catch (error) {
        console.error('Portfolio page error:', error);
        return { props: { projects: [] } };
    }
}

export default function Portfolio({ projects }) {
    return (
        <>
            <Head>
                <title>Portfolio | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Portfolio | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfolio | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

            </Head>
            <Header />
            <HeroSec title="Creating unforgettable digital impressions" />
            <PortfolioSection theme='light' projects={projects} />
            <Footer />
        </>
    )
}
