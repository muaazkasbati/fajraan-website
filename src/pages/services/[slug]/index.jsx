import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSec from '@/components/HeroSec';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import services from '@/utils/servicesNew';
import VideoAreaSection from '@/components/VideoAreaSection';

export async function getStaticPaths() {
  return {
    paths: services.map(service => ({
      params: { slug: service.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const serviceData = services.find(service => service.slug === params.slug);

  if (!serviceData) {
    return {
      notFound: true
    };
  }

  return {
    props: { serviceData },
    revalidate: 86400 // Regenerate once every 24 hours
  };
}


export default function ServiceDetail({ serviceData }) {
  return (
    <>
      <Head>
        <title>{serviceData.seoTitle}</title>
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta name="description" content={serviceData.seoDescription} />
        <meta name="keywords" content={serviceData.seoKeywords.join(", ")} />

        <link rel="canonical" href={`https://www.fajraan.tech/services/${serviceData.slug}`} />

        <link rel="alternate" hrefLang="en" href={`https://www.fajraan.tech/services/${serviceData.slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://www.fajraan.tech/services/${serviceData.slug}`} />

        <meta property="og:title" content={serviceData.seoTitle} />
        <meta property="og:description" content={serviceData.seoDescription} />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={serviceData.title} />
        <meta property="og:url" content={`https://www.fajraan.tech/services/${serviceData.slug}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content={serviceData.seoTitle} />
        <meta name="twitter:description" content={serviceData.seoDescription} />
        <meta name="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta name="twitter:image:alt" content={serviceData.title} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: serviceData.title,
              name: serviceData.title,
              description: serviceData.seoDescription,
              url: `https://www.fajraan.tech/services/${serviceData.slug}`,
              areaServed: "Worldwide",
              provider: {
                "@type": "Organization",
                name: "Fajraan Tech",
                url: "https://www.fajraan.tech",
                logo: "https://www.fajraan.tech/images/logo.webp"
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
                  name: "Services",
                  item: "https://www.fajraan.tech/services"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: serviceData.title,
                  item: `https://www.fajraan.tech/services/${serviceData.slug}`
                }
              ]
            })
          }}
        />
      </Head>
      <Header />
      <main>
        <HeroSec title={serviceData.content.breadcrumb} />
        <VideoAreaSection imageUrl={serviceData.content?.hero?.image} scrollDownId='service-details' />
        <section className="py-15 overflow-hidden" id="service-details">
          <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
            <motion.div
              className="w-full xl:w-8/12 mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-3!">
                  {serviceData.content?.hero?.description?.map((para, i) => (
                    <p className="text-[20px]" key={i}>{para}</p>
                  ))}
                </div>
                {serviceData.subServices?.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-[30px] md:text-[40px] mb-4 leading-[116.667%] tracking-[-1.5px] font-semibold">Our Core Services</h4>
                    <div className="grid gap-3 justify-items-start sm:grid-cols-2 xl:grid-cols-2 max-w-3xl">
                      {serviceData.subServices.map((sub, i) => (
                        <div key={i}>
                          <h6 className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-2">{sub.title}</h6>
                          <p className="text-[20px]">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {serviceData.content.sections?.length > 0 && (
                  <div className="mt-5 space-y-4">
                    {serviceData.content.sections.map((section, i) => (
                      <div key={i} >
                        <h4 className="text-[30px] md:text-[40px] mb-4 leading-[116.667%] tracking-[-1.5px] font-semibold">{section.title}</h4>
                        <ul className="text-[20px] list-disc list-inside">
                          {section.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {serviceData.content.approach && (
                  <div className="service-benefits mt-5">
                    <h4 className="text-[30px] md:text-[40px] mb-4 leading-[116.667%] tracking-[-1.5px] font-semibold">{serviceData.content.approach.title}</h4>
                    <p className="text-[20px] mb-3">{serviceData.content.approach.description}</p>
                    <div className="w-full lg:w-7/12 space-y-3">
                      {serviceData.content.approach.steps.map((step, i) => (
                        <div key={i}>
                          <h6 className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-2">{step.title}</h6>
                          <ul className="text-[20px] list-disc list-inside">
                            {step.points.map((p, idx) => (
                              <li key={idx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
        <VideoAreaSection video videoUrl="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" />
        <section className="pt-15 lg:pb-32.5 md:pb-20 pb-16.25">
          <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
            <motion.div
              className="w-full xl:w-8/12 mx-auto space-y-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[30px] md:text-[40px] leading-[116.667%] tracking-[-1.5px] font-semibold"
              >
                Why choose {serviceData.title}?
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[20px]"
              >
                {serviceData.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[20px]"
              >
                Fajraan Tech focuses on modern, scalable, and performance-driven solutions that
                align with your business goals. Every project we deliver is crafted for
                long-term growth, user engagement, and technical excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
