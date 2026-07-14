import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { motion } from "framer-motion";
import PricingSection from '@/components/PricingSection'
import services from "@/utils/servicesNew.json";
import Link from 'next/link'
import VideoAreaSection from '@/components/VideoAreaSection'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/Button'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Fajraan Tech – Web, Mobile & AI Automation Solutions</title>
        <meta name="description" content="Explore Fajraan Tech's core services — custom web development, mobile & desktop application development, and AI automation & AI chatbot solutions for businesses worldwide." />
        <meta name="keywords" content="web development services, mobile app development services, desktop application development, AI automation services, AI chatbot development, software development agency, digital solutions company" />

        <link rel="canonical" href="https://www.fajraan.tech/services" />

        <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/services" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/services" />

        <meta property="og:title" content="Our Services | Fajraan Tech – Web, Mobile & AI Automation Solutions" />
        <meta property="og:description" content="Explore Fajraan Tech's core services — custom web development, mobile & desktop application development, and AI automation & AI chatbot solutions for businesses worldwide." />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Fajraan Tech Services – Web, Mobile & Digital Solutions" />
        <meta property="og:url" content="https://www.fajraan.tech/services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content="Our Services | Fajraan Tech – Web, Mobile & AI Automation Solutions" />
        <meta name="twitter:description" content="Explore Fajraan Tech's core services — custom web development, mobile & desktop application development, and AI automation & AI chatbot solutions for businesses worldwide." />
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
              description: "Explore Fajraan Tech's core services — custom web development, mobile & desktop application development, and AI automation & AI chatbot solutions for businesses worldwide.",
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
      <main>
        <HeroSec title="Inspiring leadership through design" />
        <VideoAreaSection imageUrl="/images/service/service-detail-img.webp" scrollDownId="service-section" />
        <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden" id="service-section">
          <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="w-full xl:w-5/12">
                <motion.div
                  initial={{ opacity: 0, rotateX: -80 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "top center" }}
                  className="sm:text-left text-center mb-3"
                >
                  <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">We help you to build digital business</h3>
                </motion.div>
              </div>

              <div className="w-full xl:w-6/12">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {services.slice(0, 8).map((service, index) => (
                    <motion.div
                      key={index}
                      className="w-full border-l border-1 sm:pl-10 pl-8"
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="sm:mb-15 mb-5">
                        <img src={service.icon} alt="service-icon" loading="lazy" width="52" height="52" />
                      </div>
                      <div>
                        <div className="sm:mb-22.5 mb-3">
                          <h5 className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold">{service.title}</h5>
                          <p className="text-[20px]">{service.description}</p>
                        </div>
                        <Button variant="text" link ariaLabel={`Follow to ${service.title}`} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}services/${service.slug}`}>
                          View details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
