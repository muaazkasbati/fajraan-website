import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import VideoAreaSection from '@/components/VideoAreaSection'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion';
import Button from '@/components/Button'
import formatDate from '@/utils/formatDate'

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`https://cms-backend.fajraan.com/api/posts/projects/${slug}`);
    if (!res.ok) return { notFound: true };

    const result = await res.json();
    if (!result?.data) return { notFound: true };

    const item = result?.data;
    const fields = item.dynamicFields || {};
    const seo = item.seo || {};
    const getAssetUrl = (value) => value?.match(/\((https?:\/\/[^)]+)\)/)?.[1] || value || null;

    const data = {
      ...item,
      ...fields,
      id: item._id,
      title: fields.title || '',
      slug: fields.slug || slug,
      date: item.publishDate || item.createdAt || '',
      modified: item.updatedAt || item.publishDate || '',
      content: fields.content || '',
      excerpt: fields.excerpt || '',
      year: fields.year || null,
      client: fields.client || null,
      service: fields.service || null,
      stack: fields.stack || null,
      externalLink: getAssetUrl(fields.externalLink),
      image: getAssetUrl(fields.image),
      seo,
      categories: item.categories?.map((category) => category.name) || [],
      tags: item.tags?.map((tag) => tag.name) || [],
      authorName: item.author?.fullName || '',
      canonicalUrl: seo.canonical || `${process.env.NEXT_PUBLIC_APPFRONTURL}portfolio/${fields.slug || slug}`,
    };

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Portfolio detail page error:', error);
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://cms-backend.fajraan.com/api/posts/projects?limit=100&page=1");
    const result = await res.json();

    const paths = (result?.data || []).map((item) => ({
      params: { slug: item?.dynamicFields?.slug },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Portfolio paths error:", error);

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export default function PortfolioDetail({ data }) {
  const seoTitle = data?.seo?.metaTitle || data?.title || 'Portfolio | Fajraan Tech';
  const seoDescription = data?.seo?.metaDescription || data?.excerpt || '';
  const ogImage = data?.image || `${process.env.NEXT_PUBLIC_APPFRONTURL}images/og/og-image.webp`;
  const canonicalUrl = data?.canonicalUrl;

  const images = [
    'https://quanto-next.vercel.app/images/portfolio-details/portfolio-details-fig-1.png',
    'https://quanto-next.vercel.app/images/portfolio-details/portfolio-details-fig-2.png',
    'https://quanto-next.vercel.app/images/portfolio-details/portfolio-details-fig-3.png',
  ];

  const details = [
    { title: 'Category', value: data?.categories?.join(", ") },
    { title: 'Service', value: data?.service },
    { title: 'Year', value: data?.year || formatDate(data?.date) },
    { title: 'Client', value: data?.client },
    { title: 'Stack', value: data?.stack },
  ];

  return (
    <>
      <Head>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={data?.seo?.metaKeywords?.join(', ')} />
        <meta name="author" content={data?.authorName || 'Fajraan Tech'} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={seoTitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Fajraan Tech" />
        <meta property="article:published_time" content={data?.date} />
        <meta property="article:modified_time" content={data?.modified} />
        <meta property="article:author" content={data?.authorName || 'Fajraan Tech'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={seoTitle} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: data?.title,
              description: seoDescription,
              url: canonicalUrl,
              image: ogImage,
              dateCreated: data?.date,
              dateModified: data?.modified,
              datePublished: data?.date,
              author: {
                "@type": "Person",
                name: data?.authorName || "Fajraan Tech",
              },
              creator: {
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: data?.title,
                  item: canonicalUrl,
                },
              ],
            }),
          }}
        />
      </Head>
      <Header />
      <main>
        <HeroSec title={data?.title} />
        <VideoAreaSection imageUrl={data?.image} scrollDownId="service-section" fullImage />
        <section className="py-24">
          <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
            <div className="grid sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, rotateX: -80, transformPerspective: 400, transformOrigin: "center top", }}
                whileInView={{ opacity: 1, rotateX: 0, transformPerspective: 400, transformOrigin: "center top", }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3, }}
              >
                <h2 className="text-[60px] md:text-[70px] lg:text-[90px] xl:text-[100px] leading-[110%] font-semibold text-primary">
                  Project Overview
                </h2>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  key={data?.id}
                  initial={{ opacity: 0, rotateX: -80, transformPerspective: 400, transformOrigin: "center top", }}
                  whileInView={{ opacity: 1, rotateX: 0, transformPerspective: 400, transformOrigin: "center top", }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3, }}
                  // className="text-[20px] space-y-4"
                  className="blog-body"
                  dangerouslySetInnerHTML={{ __html: data?.content }}
                />
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Button variant="text" link href={data?.externalLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
                    Visit Live Website
                  </Button>
                </motion.div>

                <motion.div
                  className="grid gap-5 pt-10 sm:grid-cols-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {details.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1], }}
                      className="space-y-1"
                    >
                      <span className="text-[18px] leading-[144.444%]">
                        {item.title}
                      </span>

                      <p className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* <div className="mt-24 grid gap-6 sm:grid-cols-2">
              {images.slice(0, 2).map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 50, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Portfolio"
                    width={900}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden sm:col-span-2"
              >
                <img
                  src={images[2]}
                  alt="Portfolio"
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div> */}
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}