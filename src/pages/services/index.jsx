import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProcessSection from '@/components/home/ProcessSection'
import ServiceSection from '@/components/home/ServiceSection'
import TextSliderSection from '@/components/home/TextSliderSection'
import Head from 'next/head'
import React from 'react'

export default function Services() {
  return (
        <>
      <Head>
        <title>Services | Fajraan Tech</title>
        <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
        <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
        <meta name="author" content="Fajraan Tech" />
        <meta property="og:title" content="Services | Fajraan Tech" />
        <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
        <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
        <meta property="og:url" content="https://fajraan.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Fajraan Tech" />
        <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
        <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

      </Head>
      <div className="page-wrapper">
        <Header />

        <main className="main-wrapper">
            <BreadCrumb page="Our Services" />
            <ServiceSection />
            <TextSliderSection />
            <ProcessSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
