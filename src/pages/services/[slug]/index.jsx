import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSec from '@/components/HeroSec';
import Head from 'next/head';
import React from 'react';
import services from '@/utils/servicesNew';
import VideoAreaSection from '@/components/VideoAreaSection';
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHead from "@/components/SectionHead";
import FaqsSection from "@/components/FaqsSection";

// "1/ Frontend Development:" -> "Frontend Development"
const cleanTitle = (t = "") => t.replace(/^\s*\d+\s*\/\s*/, "").replace(/:\s*$/, "");

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
  const faqs = serviceData.content?.faqs || [];
  const hero = serviceData.content?.hero || {};
  const approach = serviceData.content?.approach;

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


        {faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map(faq => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                  }
                }))
              })
            }}
          />
        )}
      </Head>
      <Header />
      <main id="main">
        <HeroSec
          crumbs={[{ label: "Services", href: "/services" }, { label: serviceData.title }]}
          title={hero.title ? `${hero.title} ${hero.highlight || ""} ${hero.subtitle || ""}`.replace(/\s+/g, " ").trim() : serviceData.title}
          intro={serviceData.description}
        >
          <div className="mt-6">
            <Button link href="/contact">Discuss your project</Button>
          </div>
        </HeroSec>
        <VideoAreaSection imageUrl={hero.image} alt={`${serviceData.title} at Fajraan Tech`} />

        <section className="section" id="service-details">
          <div className="wrap grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHead index="01" eyebrow="Overview" title={`What ${serviceData.title.toLowerCase()} covers`} className="!block" />
              <Reveal delay={80} className="mt-8 space-y-5 text-muted">
                {hero.description?.map((para, i) => <p key={i}>{para}</p>)}
              </Reveal>
            </div>
            {serviceData.subServices?.length > 0 && (
              <ol className="grid gap-px self-start bg-line sm:grid-cols-2 lg:col-span-7">
                {serviceData.subServices.map((sub, i) => (
                  <Reveal as="li" key={sub.title} delay={(i % 2) * 60} className="bg-white p-6 md:p-8">
                    <span className="t-num text-[13px] font-semibold text-secondary">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="t-h4 mt-3 text-primary">{sub.title}</h3>
                    <p className="mt-2 text-[15px] text-muted">{sub.description}</p>
                  </Reveal>
                ))}
              </ol>
            )}
          </div>
        </section>

        {serviceData.content.sections?.length > 0 && (
          <section className="section bg-paper">
            <div className="wrap">
              <SectionHead index="02" eyebrow="Capabilities" title="How we build it" />
              <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2">
                {serviceData.content.sections.map((section, i) => (
                  <Reveal key={section.title} delay={(i % 2) * 80} className="border-t border-primary/15 pt-8">
                    <h3 className="t-h3 text-primary">{cleanTitle(section.title)}</h3>
                    <ul className="mt-5 space-y-3">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3 text-muted">
                          <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-secondary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {approach && (
          <section className="section">
            <div className="wrap">
              <SectionHead
                index="03"
                eyebrow="Process"
                title={approach.title}
                aside={approach.description ? <p className="max-w-sm text-muted">{approach.description}</p> : null}
              />
              <ol className={`mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-2 ${approach.steps.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {approach.steps.map((step, i) => (
                  <Reveal as="li" key={step.title} delay={i * 60} className="border-t border-primary/15 pt-6">
                    <span className="t-num text-[14px] font-semibold text-secondary">Step {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="t-h4 mt-3 text-primary">{cleanTitle(step.title)}</h3>
                    <ul className="mt-3 space-y-2 text-[15px] text-muted">
                      {step.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>
        )}

        {faqs.length > 0 && <FaqsSection index="04" items={faqs} />}

        <section className="pb-20 md:pb-28">
          <div className="wrap">
            <p className="t-eyebrow">Other services</p>
            <ul className="mt-6 grid border-l border-t border-line md:grid-cols-2">
              {services.filter((x) => x.slug !== serviceData.slug).map((x) => (
                <li key={x.slug} className="border-r border-b border-line bg-white">
                  <Link href={`/services/${x.slug}`} className="group flex h-full items-start justify-between gap-6 p-6 transition-colors hover:bg-paper md:p-8">
                    <span>
                      <span className="t-h4 block text-primary">{x.title}</span>
                      <span className="mt-2 line-clamp-2 text-[15px] text-muted">{x.description}</span>
                    </span>
                    <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <svg width="16" height="16" viewBox="0 0 16 16"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}