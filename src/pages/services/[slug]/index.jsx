import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import services from '@/utils/services'
import VideoAreaSection from '@/components/VideoAreaSection'

export async function getServerSideProps(context) {
  const { slug } = context.params
  const serviceData = services.find(service => service.slug === slug) || null

  return {
    props: {
      serviceData,
    },
  }
}


export default function ServiceDetail({ serviceData }) {
  const benefitsLeft = [
    "Custom Website Design",
    "Responsive Web Development",
    "E-Commerce Solutions",
    "JavaScript",
    "API Integration",
    "Front End Development",
  ];

  const benefitsRight = [
    "Front End Development",
    "Content Management Systems (CMS)",
    "Website Maintenance and Support",
    "SEO Optimization",
    "UX Research & Testing",
    "Mobile Optimization",
  ];


  return (
    <>
      <Head>
        <title>{serviceData.seoTitle}</title>
        <meta name="description" content={serviceData.seoDescription} />
        <meta name="keywords" content={serviceData.seoKeywords.join(', ')} />
        <meta name="author" content="Fajraan Tech" />
        <meta property="og:title" content={serviceData.seoTitle} />
        <meta property="og:description" content={serviceData.seoDescription} />
        <meta property="og:image" content={serviceData.content?.hero?.image} />
        <meta property="og:url" content={`https://fajraan.com/services/${serviceData.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={serviceData.seoTitle} />
        <meta name="twitter:description" content={serviceData.seoDescription} />
        <meta name="twitter:image" content={serviceData.content?.hero?.image} />
      </Head>
      <Header />
      <HeroSec title={serviceData.content.breadcrumb} />
      <VideoAreaSection imageUrl={serviceData.content?.hero?.image} scrollDownId='service-details' />
      {/* <section className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden" id='service-details'>
        <div className="container custom-container">
          <motion.div
            className="row g-4 justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-xl-8">
              <motion.div
                className="quanto-service-details__content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p>
                  This service package is designed to create seamless, engaging, and innovative
                  digital experiences. It combines intuitive User Interface (UI) design with
                  strategic User Experience (UX) principles, ensuring your product not only looks
                  great but also functions flawlessly. The focus extends beyond aesthetics,
                  integrating product innovation strategies to help businesses stay competitive in
                  an ever-evolving market. By leveraging user research, data analytics, and
                  cutting-edge technologies, we deliver products.
                </p>
                <p className="service-text">
                  This package is ideal for businesses aiming to launch new products, enhance
                  existing ones, or establish competitive edge in their industry. By combining
                  thoughtful design, strategic innovation, and a user-first approach, we create
                  products that are not only relevant today but are also adaptable to the
                  challenges of tomorrow.
                </p>

                <div className="service-benefits">
                  <h4>Benefits of this service</h4>
                  <p>
                    The UI/UX & Product Innovation Service Package offers a multitude of tangible
                    and strategic benefits that help businesses enhance user satisfaction, achieve
                    measurable outcomes, and stay ahead of the competition. Here's a detailed
                    breakdown:
                  </p>

                  <div className="benefits-list">
                    <div className="row g-3 justify-content-start">
                      <div className="col-sm-6 col-xl-5">
                        <ul className="custom-ul">
                          {benefitsLeft.map((benefit, index) => (
                            <li key={index}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                  fill="currentColor"
                                />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-sm-6 col-xl-5">
                        <ul className="custom-ul">
                          {benefitsRight.map((benefit, index) => (
                            <li key={index}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                  fill="currentColor"
                                />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <section className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden" id="service-details">
        <div className="container custom-container">
          <motion.div
            className="row g-4 justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-xl-8">
              <motion.div
                className="quanto-service-details__content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Hero Description */}
                {serviceData.content?.hero?.description?.map((para, i) => (
                  <p key={i} className="mb-3">{para}</p>
                ))}

                {/* Sub Services */}
                {serviceData.subServices?.length > 0 && (
                  <div className="service-benefits mt-4">
                    <h4>Our Core Services</h4>
                    <div className="benefits-list">
                      <div className="row g-3 justify-content-start">
                        {serviceData.subServices.map((sub, i) => (
                          <div key={i} className="col-sm-6 col-xl-5">
                            <div className="d-flex align-items-start gap-3 mb-3">
                              {/* <img src={sub.icon} alt={sub.title} width={32} height={32} /> */}
                              <div>
                                <h6>{sub.title}</h6>
                                <p>{sub.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Detailed Sections */}
                {serviceData.content.sections?.length > 0 && (
                  <div className="service-benefits mt-5">
                    {serviceData.content.sections.map((section, i) => (
                      <div key={i} className="mb-4">
                        <h4>{section.title}</h4>
                        <ul className="custom-ul">
                          {section.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Approach Section */}
                {serviceData.content.approach && (
                  <div className="service-benefits mt-5">
                    <h4>{serviceData.content.approach.title}</h4>
                    <p>{serviceData.content.approach.description}</p>
                    <div className="row g-4 align-items-start mt-3">
                      <div className="col-lg-7">
                        {serviceData.content.approach.steps.map((step, i) => (
                          <div key={i} className="d-flex align-items-start gap-3 mb-3">
                            {/* <img src={step.icon} alt={step.title} width={32} height={32} /> */}
                            <div>
                              <h6>{step.title}</h6>
                              <ul className="custom-ul">
                                {step.points.map((p, idx) => (
                                  <li key={idx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <VideoAreaSection video videoUrl="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" />
      {/* <section className="quanto-choose-us-section row-padding-top section-padding-bottom">
        <div className="container custom-container">
          <motion.div
            className="row g-4 justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-xl-8">
              <div className="quanto-choose-us__content">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Why choose this service?
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  The UI/UX & Product Innovation Service Package offers a multitude of
                  tangible and strategic benefits that help businesses enhance user
                  satisfaction, achieve measurable outcomes, and stay ahead of the
                  competition. Here's a detailed breakdown:
                </motion.p>
                <motion.p
                  className="choose-us-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  This package is ideal for businesses aiming to launch new products,
                  enhance existing ones, or establish competitive edge in their
                  industry. By combining thoughtful design, strategic innovation, and
                  a user-first approach, we create products that are not only relevant
                  today but are also adaptable to the challenges.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <section className="quanto-choose-us-section row-padding-top section-padding-bottom">
        <div className="container custom-container">
          <motion.div
            className="row g-4 justify-content-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="col-xl-8">
              <div className="quanto-choose-us__content">
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Why choose {serviceData.title}?
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {serviceData.description}
                </motion.p>
                <motion.p
                  className="choose-us-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Fajraan Tech focuses on modern, scalable, and performance-driven solutions that
                  align with your business goals. Every project we deliver is crafted for
                  long-term growth, user engagement, and technical excellence.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  )
}
