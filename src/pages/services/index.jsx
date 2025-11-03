import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { motion } from "framer-motion";
import PricingSection from '@/components/PricingSection'
import services from "@/utils/services.json";
import Link from 'next/link'
import VideoAreaSection from '@/components/VideoAreaSection'

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
      <Header />
      <HeroSec title="Inspiring leadership through design" />
      <VideoAreaSection imageUrl="/images/service/service-detail-img.jpg" scrollDownId="service-section" />
      <section
        className="quanto-service2-section section-padding-top-bottom overflow-hidden"
        id="service-section"
      >
        <div className="container custom-container">
          <div className="row gx-4 gy-5 justify-content-between">
            {/* Header */}
            <div className="col-12 col-xl-6 col-xxl-5">
              <div className="quanto__header text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, rotateX: -80 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top center" }}
                >
                  <h3 className="title color-primary">We help you to build digital business</h3>
                </motion.div>
              </div>
            </div>

            {/* Service Boxes */}
            <div className="col-12 col-xl-6 col-xxl-6">
              <div className="row g-114 quanto-service2__row">
                {services.slice(0, 8).map((service, index) => (
                  <motion.div
                    key={index}
                    className="col-md-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="quanto-service-box style-2">
                      <div className="quanto-iconbox-icon">
                        <img
                          src={service.icon}
                          alt="service-icon"
                          loading="lazy"
                          width="52"
                          height="52"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <div className="quanto-iconbox-data">
                        <div className="quanto-iconbox-data-wrapper">
                          <h5>{service.title}</h5>
                          <p>{service.description}</p>
                        </div>
                        <Link className="quanto-link-btn" href={`/services/${service.slug}`}>
                          View details
                          <span>
                            <i className="fa-solid fa-arrow-right arry1"></i>
                            <i className="fa-solid fa-arrow-right arry2"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
      <Footer />
    </>
  )
}
