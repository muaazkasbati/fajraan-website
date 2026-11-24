import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import PricingSection from '@/components/PricingSection'
import VideoAreaSection from '@/components/VideoAreaSection'
import Button from '@/components/Button'
import IndustrySpotlightSection from '@/components/IndustrySpotlightSection'
import ServiceSection from '@/components/home/ServiceSection'
import SolutionsSection from '@/components/SolutionsSection'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | 10-Day MVPs, AI Agents, Automation & Business Platforms – Fajraan Tech</title>
        <meta name="description" content="Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and LLM apps, automates business operations, and sets up ERP, school, courier and other business platforms, plus web and mobile development." />
        <meta name="keywords" content="web development services, mobile app development services, desktop application development, AI automation services, AI chatbot development, software development agency, digital solutions company" />

        <link rel="canonical" href="https://www.fajraan.tech/services" />

        <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/services" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/services" />

        <meta property="og:title" content="Services | 10-Day MVPs, AI Agents, Automation & Business Platforms – Fajraan Tech" />
        <meta property="og:description" content="Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and LLM apps, automates business operations, and sets up ERP, school, courier and other business platforms, plus web and mobile development." />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Fajraan Tech Services – Web, Mobile & Digital Solutions" />
        <meta property="og:url" content="https://www.fajraan.tech/services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content="Services | 10-Day MVPs, AI Agents, Automation & Business Platforms – Fajraan Tech" />
        <meta name="twitter:description" content="Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and LLM apps, automates business operations, and sets up ERP, school, courier and other business platforms, plus web and mobile development." />
        <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta name="twitter:image:alt" content="Fajraan Tech Services – Web, Mobile & Digital Solutions" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Services – Fajraan Tech",
              url: "https://www.fajraan.tech/services",
              description: "Explore Fajraan Tech's core services: custom web development, mobile & desktop application development, and AI automation & AI chatbot solutions for businesses worldwide.",
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
              offers: [
                {
                  "@type": "Offer",
                  name: "Custom Web Development",
                  description: "Scalable and performant custom web applications built for businesses worldwide.",
                  url: "https://www.fajraan.tech/services/web-development",
                },
                {
                  "@type": "Offer",
                  name: "Mobile & Desktop Applications",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                  url: "https://www.fajraan.tech/services/mobile-desktop-applications",
                },
                // {
                //   "@type": "Offer",
                //   name: "Desktop Application Development",
                //   description: "Powerful desktop applications tailored to business workflows and requirements.",
                //   url: "https://www.fajraan.tech/services#desktop-development",
                // },
                // {
                //   "@type": "Offer",
                //   name: "UI/UX Design",
                //   description: "User-centered interface and experience design for web and mobile products.",
                //   url: "https://www.fajraan.tech/services#ui-ux-design",
                // },
                // {
                //   "@type": "Offer",
                //   name: "SEO Services",
                //   description: "Search engine optimization strategies to grow organic traffic and visibility.",
                //   url: "https://www.fajraan.tech/services#seo",
                // },
                // {
                //   "@type": "Offer",
                //   name: "Data Services",
                //   description: "Data analysis, visualization, and management solutions for data-driven businesses.",
                //   url: "https://www.fajraan.tech/services#data-services",
                // },
              ],
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
                  name: "Services",
                  item: "https://www.fajraan.tech/services",
                },
              ],
            }),
          }}
        />
      </Head>
      <Header />
      <main id="main">
        <HeroSec
          crumbs={[{ label: "Services" }]}
          title="Fast products, working AI and software that fits."
          intro="Launch a new product in 10 days, put AI agents and automation to work, or get a proven business platform set up under your brand."
        >
          <div className="mt-6">
            <Button link href="/contact">Discuss your project</Button>
          </div>
        </HeroSec>
        <VideoAreaSection imageUrl="/images/service/service-detail-img.webp" />
        <ServiceSection index="01" title="Eight services, one team." showAll={false} />
        <SolutionsSection index="02" />
        <IndustrySpotlightSection index="03" />
        <PricingSection index="04" />
      </main>
      <Footer />
    </>
  )
}
