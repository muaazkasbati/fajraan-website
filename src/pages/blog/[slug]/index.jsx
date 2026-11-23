import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import Button from '@/components/Button';
import SectionHead from '@/components/SectionHead';
import { cloudinaryUrl, cmsSrcSet } from '@/utils/image';
import formatDate from '@/utils/formatDate';
import Reveal from "@/components/Reveal";
import { cmsDetail, cmsFetchSafe } from "@/utils/cms";

const SITE = process.env.NEXT_PUBLIC_APPFRONTURL || "https://www.fajraan.tech/";

export async function getStaticPaths() {
    const json = await cmsFetchSafe("/blogs?limit=100", { data: [] });
    return {
        paths: (json?.data || [])
            .map((post) => post?.dynamicFields?.slug)
            .filter(Boolean)
            .map((slug) => ({ params: { slug } })),
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const result = await cmsDetail(`/blogs/${encodeURIComponent(slug)}`);
    if (!result.data) return result;

    const post = result.data;
    const fields = post.dynamicFields || {};
    const seo = post.seo || {};
    const canonicalUrl = seo.canonical || `${SITE}blog/${fields.slug || slug}`;

    const more = await cmsFetchSafe("/blogs?limit=4&page=1", { data: [] }, { timeout: 5000, retries: 0 });
    const morePosts = (more?.data || [])
        .filter((p) => p?._id !== post._id && p?.dynamicFields?.slug)
        .slice(0, 3)
        .map((p) => ({
            id: p._id || null,
            title: p.dynamicFields?.title || "",
            slug: p.dynamicFields.slug,
            date: p.publishDate ? formatDate(p.publishDate) : "",
            image: p.dynamicFields?.featured_image || null,
        }));

    return {
        props: {
            data: JSON.parse(JSON.stringify({
                ...post,
                ...fields,
                seo,
                title: fields.title || "",
                content: fields.content || "",
                date: post.publishDate || post.createdAt || "",
                authorName: post.author?.fullName || "",
                categories: post.categories?.map((category) => category.name) || [],
                tags: post.tags?.map((tag) => tag.name) || [],
                image: fields.featured_image || "",
                canonicalUrl,
                metaTitle: seo.metaTitle || fields.metaTitle || fields.title || "",
                metaDescription: seo.metaDescription || fields.metaDescription || "",
                seoKeywords: seo.metaKeywords || [],
                published_time: post.publishDate || "",
                modified: post.updatedAt || post.publishDate || "",
                readingTime: fields.read_time || "",
            })),
            morePosts,
        },
        revalidate: 300,
    };
}

export default function BlogDetail({ data, morePosts }) {
    const router = useRouter();
    const { slug } = router.query;


    function extractFAQ(html) {
        return [...html.matchAll(/<strong>\s*Q:\s*(.*?)\s*<\/strong>\s*<br\s*\/?>\s*A:\s*([\s\S]*?)<\/p>/gi)].map(([, question, answer]) => ({
            question: question?.replace(/&#8217;/g, "'").replace(/&amp;/g, "&").trim(),
            answer: answer?.replace(/<[^>]+>/g, "").replace(/&#8217;/g, "'").replace(/&amp;/g, "&").trim()
        }));
    }
    const faqs = extractFAQ(data?.content);

    return (
        <>
            <Head>
                <title>{data?.metaTitle}</title>

                <meta name="description" content={data?.metaDescription} />
                <meta name="keywords" content={data?.seoKeywords?.join(", ") || data?.tags?.join(", ")} />
                <meta name="author" content={data?.authorName || "Fajraan Tech"} />

                <link rel="canonical" href={data?.canonicalUrl} />

                <link rel="alternate" hrefLang="en" href={data?.canonicalUrl} />
                <link rel="alternate" hrefLang="x-default" href={data?.canonicalUrl} />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={data?.metaTitle} />
                <meta property="og:description" content={data?.metaDescription} />
                <meta property="og:url" content={data?.canonicalUrl} />
                <meta property="og:site_name" content="Fajraan Tech" />

                <meta property="article:published_time" content={data?.published_time} />
                <meta property="article:modified_time" content={data?.modified} />
                <meta property="article:author" content={data?.authorName} />

                <meta property="og:image" content={data?.image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={data?.title} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content={data?.metaTitle} />
                <meta name="twitter:description" content={data?.metaDescription} />
                <meta name="twitter:image" content={data?.image} />
                <meta name="twitter:image:alt" content={data?.title} />

                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={data?.authorName} />
                <meta name="twitter:label2" content="Reading time" />
                <meta name="twitter:data2" content={data?.readingTime} />

                <meta name="DC.title" content={data?.metaTitle} />
                <meta name="DC.creator" content={data?.authorName} />
                <meta name="DC.description" content={data?.metaDescription} />
                <meta name="DC.publisher" content="Fajraan Tech" />
                <meta name="DC.date" content={data?.published_time} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: data?.title,
                            description: data?.metaDescription,
                            image: [data?.image],
                            author: {
                                "@type": "Person",
                                name: data?.authorName
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Fajraan Tech",
                                logo: {
                                    "@type": "ImageObject",
                                    url: `${SITE}images/logo.webp`
                                }
                            },
                            datePublished: data?.published_time,
                            dateModified: data?.modified,
                            mainEntityOfPage: {
                                "@type": "WebPage",
                                "@id": `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`
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
                                    item: process.env.NEXT_PUBLIC_APPFRONTURL
                                },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Blog",
                                    item: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog`
                                },
                                {
                                    "@type": "ListItem",
                                    position: 3,
                                    name: data?.title || data?.ogTitle,
                                    item: data?.canonicalUrl
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
                                mainEntity: faqs?.map(faq => ({
                                    "@type": "Question",
                                    name: faq?.question,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: faq?.answer
                                    }
                                }))
                            })
                        }}
                    />
                )}
            </Head>
            <Header />
            <main id="main">
                <article>
                    <header className="pt-32 pb-12 md:pt-40 md:pb-16 lg:pt-48">
                        <div className="wrap">
                            <div className="mx-auto max-w-4xl">
                                <nav aria-label="Breadcrumb" className="t-eyebrow">
                                    <ol className="flex flex-wrap items-center gap-2">
                                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                                        <li aria-hidden="true">/</li>
                                        <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                                    </ol>
                                </nav>
                                <Reveal>
                                    <h1 className="t-h1 mt-6 !text-[clamp(36px,5vw,68px)] text-primary">{data?.title}</h1>
                                </Reveal>
                                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-[15px] text-muted">
                                    {data?.date && <li><time dateTime={data.date}>{formatDate(data.date)}</time></li>}
                                    {data?.categories?.length > 0 && <li>{data.categories.join(", ")}</li>}
                                    {data?.readingTime && <li>{data.readingTime}</li>}
                                    <li>By {data?.authorName || "Fajraan Tech"}</li>
                                </ul>
                            </div>
                        </div>
                    </header>

                    {data?.image && (
                        <div className="wrap">
                            <div className="overflow-hidden bg-paper">
                                <img
                                    alt=""
                                    src={cloudinaryUrl(data.image, 1600)}
                                    srcSet={cmsSrcSet(data.image)}
                                    sizes="(max-width: 1320px) 100vw, 1320px"
                                    width={1600}
                                    height={800}
                                    fetchPriority="high"
                                    decoding="async"
                                    className="block aspect-[16/9] w-full object-cover lg:aspect-[2/1]"
                                />
                            </div>
                        </div>
                    )}

                    <div className="wrap pt-14 pb-20 md:pt-20 md:pb-28">
                        <div className="mx-auto max-w-[720px]">
                            <div className="blog-body" dangerouslySetInnerHTML={{ __html: data?.content }} />
                            {data?.tags?.length > 0 && (
                                <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
                                    {data.tags.map((tag) => (
                                        <li key={tag} className="rounded-full border border-line px-3 py-1 text-[14px] text-muted">#{tag}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </article>

                {morePosts?.length > 0 && (
                    <section className="section bg-paper">
                        <div className="wrap">
                            <SectionHead eyebrow="Keep reading" title="More articles" aside={<Button variant="text" link href="/blog">All articles</Button>} />
                            <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                {morePosts.map((post, i) => (
                                    <BlogCard data={post} index={i} key={post.id || i} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    )
}
