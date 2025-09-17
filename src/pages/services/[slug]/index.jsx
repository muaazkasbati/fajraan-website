import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import services from '@/utils/services'
import Head from 'next/head'
import TextSliderSection from '@/components/home/TextSliderSection'
import TextimonialSection from '@/components/home/TextimonialSection'
import Link from 'next/link'

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
      <div className="page-wrapper">
        <Header />
        <main className="main-wrapper">
          <BreadCrumb page={serviceData.content.breadcrumb} />

          {/* Hero Section */}
          <section className="section-service">
            <div className="section-space">
              <div className="container">
                <article>
                  <div className="mb-20 block overflow-hidden rounded-[35px] border-2 border-black lg:border-[5px]">
                    <img
                      src={serviceData.content?.hero?.image}
                      alt="service-details-img"
                      width="1286"
                      height="590"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <div className="max-w-[650px] md:mb-[60px] xl:max-w-[856px]">
                    <h2>
                      {serviceData.content?.hero.title} {serviceData.content.hero.highlight} {' '}
                      <img
                        src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                        alt="shape"
                        width="74"
                        height="70"
                        className="inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                      /> {' '}
                      {serviceData.content.hero.subtitle}
                    </h2>
                    <div className="rich-text mt-6 text-lg leading-[1.4] lg:text-[21px]">
                      {serviceData.content.hero.description.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>

                {/* Sections */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                  {serviceData.content.sections.map((section, i) => (
                    <div key={i}>
                      <h4>{section.title}</h4>
                      <ul className="ml-4 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                        {section.points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section className="section-service-content">
            <div className="section-space-bottom">
              <div className="container">
                <div className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1fr_minmax(0,0.6fr)] xl:gap-x-20">
                  <div className="jos" data-jos_animation="fade-left">
                    <h2 className="mb-6">
                      Our Approach {" "}
                      <span>
                        <img
                          src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                          alt="shape"
                          width="74"
                          height="70"
                          className="inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                        />
                      </span>
                    </h2>
                    <p className="text-lg leading-[1.42] lg:text-[21px]">
                      {serviceData.content.approach.description}
                    </p>
                    <ul className="mt-[50px] flex flex-col gap-y-6">
                      {serviceData.content.approach.steps.map((step, i) => (
                        <li key={i}>
                          <div className="flex gap-x-5">
                            <img
                              src={`/assets/img/new/${i === 0 ? "icon-black-search" : i === 1 ? "icon-black-edit" : "icon-black-rocket"}.svg`}
                              alt={step.title}
                              width="40"
                              height="40"
                              className="h-10 w-auto"
                            />
                            {/* icon-black-search */}
                            {/* icon-black-edit */}
                            {/* icon-black-rocket */}
                            <h4 className="flex-1">{step.title}</h4>
                          </div>
                          <ul className="ml-20 mt-4 flex list-outside list-disc flex-col gap-y-[30px]">
                            {step.points.map((point, j) => (
                              <li key={j}>{point}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="jos" data-jos_animation="fade-right">
                    <div className="mx-auto h-full max-w-[495px] overflow-hidden rounded-[25px] border-2 border-black lg:mx-0 lg:max-w-full lg:border-[5px]">
                      <img
                        src="/assets/img/new/service-detail-img.jpg"
                        alt="service-details-inner-img"
                        width="548"
                        height="632"
                        className="h-[632px]! w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-service" id='sub-services'>
            <div className="bg-white">
              <div className="section-space">
                <div className="container">
                  <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                    <h2 className="jos">
                      {serviceData.title} Sub-Services{' '}
                      <span>

                        <img
                          src="/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                          alt="star"
                          width={74}
                          height={70}
                          className="relative inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                        />
                      </span>
                    </h2>
                    <p className="mt-4 text-lg lg:text-xl">End-to-end technology solutions to empower businesses across the Middle East and beyond.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
                    {serviceData.subServices.map((service, idx) => (
                      <div key={idx} className="jos group" data-jos_delay={idx * 0.3}>
                        <div className="shadow-bg group h-full">
                          <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-white p-[30px] transition duration-300 group-hover:bg-colorLightLime">
                            <img
                              src={`/assets/img/icons/${serviceData.icon}`}
                              alt={service.title}
                              className="h-[70px] w-auto"
                            />
                            <h4 className="mb-[15px] mt-[30px]">{service.title}</h4>
                            <p className="mb-7">{service.description}</p>
                            {/* <Link
                            href={`/services/${service.slug}`}
                            className="mt-auto inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-5"
                          >
                            <img
                              src="/assets/img/icons/icon-black-arrow-right.svg"
                              alt="arrow"
                              width={34}
                              height={28}
                            />
                          </Link> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="horizontal-line bg-[#e6e6e6]"></div>
          <TextimonialSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
