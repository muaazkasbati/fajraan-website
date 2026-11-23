import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import VideoAreaSection from '@/components/VideoAreaSection'
import Head from 'next/head'
import React from 'react'
import Button from '@/components/Button'
import formatDate from '@/utils/formatDate'
import Reveal from "@/components/Reveal";
import { cmsDetail, cmsFetchSafe } from "@/utils/cms";

export async function getStaticProps({ params }) {
  const { slug } = params;

  const result = await cmsDetail(`/projects/${encodeURIComponent(slug)}`);
  if (!result.data) return result;
  {
    const item = result.data;
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
      props: { data: JSON.parse(JSON.stringify(data)) },
      revalidate: 600,
    };
  }
}

export async function getStaticPaths() {
  const json = await cmsFetchSafe("/projects?limit=100&page=1", { data: [] });
  return {
    paths: (json?.data || [])
      .map((item) => item?.dynamicFields?.slug)
      .filter(Boolean)
      .map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export default function PortfolioDetail({ data }) {
  const seoTitle = data?.seo?.metaTitle || data?.title || 'Portfolio | Fajraan Tech';
  const seoDescription = data?.seo?.metaDescription || data?.excerpt || '';
  const ogImage = data?.image || `${process.env.NEXT_PUBLIC_APPFRONTURL}images/og/og-image.webp`;
  const canonicalUrl = data?.canonicalUrl;


  const details = [
    { title: 'Category', value: data?.categories?.join(", ") },
    { title: 'Service', value: data?.service },
    { title: 'Year', value: data?.year || formatDate(data?.date) },
    { title: 'Client', value: data?.client },
    { title: 'Stack', value: data?.stack },
  ].filter((d) => d.value);

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
      <main id="main">
        <HeroSec
          crumbs={[{ label: "Work", href: "/portfolio" }, { label: data?.title }]}
          title={data?.title}
          intro={data?.excerpt || undefined}
        />
        <VideoAreaSection imageUrl={data?.image} alt={data?.title} fullImage />
        <section className="section">
          <div className="wrap grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="t-eyebrow">Project details</p>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {details.map((item) => (
                    <div key={item.title} className="flex justify-between gap-6 py-4">
                      <dt className="text-[15px] text-muted">{item.title}</dt>
                      <dd className="text-right text-[15px] font-semibold text-primary">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                {data?.externalLink && (
                  <div className="mt-8">
                    <Button link href={data.externalLink} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
                      Visit live website
                    </Button>
                  </div>
                )}
              </div>
            </aside>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="t-h2 text-primary">Project overview</h2>
              <div className="blog-body mt-8" dangerouslySetInnerHTML={{ __html: data?.content }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}