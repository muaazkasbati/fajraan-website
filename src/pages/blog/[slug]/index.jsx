import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { motion } from "framer-motion";
import BlogCard from '@/components/BlogCard';
import formatDate from '@/utils/formatDate';

// export async function getServerSideProps({ params }) {
//     const { slug } = params;

//     try {
//         // Fetch the current post
//         const response = await fetch(`https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?_embed&slug=${slug}`);
//         if (!response.ok) return { notFound: true };
//         const data = await response.json();
//         if (data.length === 0) return { notFound: true };

//         const post = data[0];
//         const terms = post?._embedded?.['wp:term']?.flat() || [];

//         const categories = terms.filter(term => term.taxonomy === 'category').map(term => term.name);
//         const tags = terms.filter(term => term.taxonomy === 'post_tag').map(term => term.name);

//         const morePostsResponse = await fetch(`https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=3&page=1&_=${Date.now()}`);
//         const morePosts = await morePostsResponse.json();

//         return {
//             props: {
//                 data: {
//                     authorName: post?._embedded?.author.name || "",
//                     tags: tags || [],
//                     categories: categories || [],
//                     featured_media: post?._embedded?.['wp:featuredmedia']?.[0] || null,
//                     title: post?.title?.rendered,
//                     content: post?.content?.rendered,
//                     date: post?.date,
//                     ogTitle: post?.yoast_head_json?.og_title,
//                     ogDescription: post?.yoast_head_json?.og_description,
//                     ogImage: post?.yoast_head_json?.og_image?.[0],
//                     metaDescription: post?.yoast_head_json?.description,
//                     locale: post?.yoast_head_json?.og_locale,
//                     published_time: post?.yoast_head_json?.article_published_time,
//                     modified: post?.modified,
//                     readingTime: post?.yoast_head_json?.twitter_misc?.["Estimated reading time"] || ''
//                 },
//                 morePosts: morePosts.filter(p => p.id !== post.id)
//             }
//         };
//     } catch (error) {
//         console.error('Error fetching blog detail:', error);
//         return { notFound: true };
//     }
// }

export async function getStaticPaths() {
    try {
        const response = await fetch("https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=100");

        const posts = await response.json();

        return {
            paths: posts.map((post) => ({
                params: { slug: post.slug },
            })),
            fallback: "blocking",
        };
    } catch (error) {
        console.error("Error fetching blog paths:", error);

        return {
            paths: [],
            fallback: "blocking",
        };
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    try {
        const response = await fetch(`https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?_embed&slug=${slug}`);

        if (!response.ok) return { notFound: true };

        const data = await response.json();

        if (!data || data.length === 0) {
            return { notFound: true };
        }

        const post = data[0];
        const terms = post?._embedded?.["wp:term"]?.flat() || [];

        const categories = terms
            .filter((term) => term.taxonomy === "category")
            .map((term) => term.name);

        const tags = terms
            .filter((term) => term.taxonomy === "post_tag")
            .map((term) => term.name);

        const morePostsResponse = await fetch(
            "https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=3&page=1"
        );

        const morePosts = await morePostsResponse.json();

        return {
            props: {
                data: {
                    authorName: post?._embedded?.author?.[0]?.name || "",
                    tags,
                    categories,
                    featured_media: post?._embedded?.["wp:featuredmedia"]?.[0] || null,
                    title: post?.title?.rendered || "",
                    content: post?.content?.rendered || "",
                    date: post?.date || "",
                    ogTitle: post?.yoast_head_json?.og_title || "",
                    ogDescription: post?.yoast_head_json?.og_description || "",
                    ogImage: post?.yoast_head_json?.og_image?.[0] || null,
                    metaDescription: post?.yoast_head_json?.description || "",
                    locale: post?.yoast_head_json?.og_locale || "",
                    published_time: post?.yoast_head_json?.article_published_time || "",
                    modified: post?.modified || "",
                    readingTime: post?.yoast_head_json?.twitter_misc?.["Estimated reading time"] || "",
                },
                morePosts: morePosts.filter((p) => p.id !== post.id),
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error("Error fetching blog detail:", error);

        return {
            notFound: true,
        };
    }
}

export default function BlogDetail({ data, morePosts }) {
    const router = useRouter();
    const { slug } = router.query;

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            },
        },
    };
    console.log(data, "data")

    return (
        <>
            <Head>
                <title>{data?.ogTitle}</title>

                <meta name="description" content={data?.metaDescription} />
                <meta name="keywords" content={data?.seoKeywords?.join(", ") || data?.tags?.join(", ")} />
                <meta name="author" content={data?.authorName || "Fajraan Tech"} />

                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`} />

                <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`} />
                <link rel="alternate" hrefLang="x-default" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`} />

                <meta property="og:locale" content={data?.locale} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={data?.ogTitle} />
                <meta property="og:description" content={data?.ogDescription} />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`} />
                <meta property="og:site_name" content="Fajraan Tech" />

                <meta property="article:published_time" content={data?.published_time} />
                <meta property="article:modified_time" content={data?.modified} />
                <meta property="article:author" content={data?.authorName} />

                <meta property="og:image" content={data?.ogImage?.url} />
                <meta property="og:image:width" content={data?.ogImage?.width || 1200} />
                <meta property="og:image:height" content={data?.ogImage?.height || 630} />
                <meta property="og:image:alt" content={data?.ogTitle} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content={data?.ogTitle} />
                <meta name="twitter:description" content={data?.ogDescription} />
                <meta name="twitter:image" content={data?.ogImage?.url} />
                <meta name="twitter:image:alt" content={data?.ogTitle} />

                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={data?.authorName} />
                <meta name="twitter:label2" content="Reading time" />
                <meta name="twitter:data2" content={data?.readingTime} />

                <meta name="DC.title" content={data?.ogTitle} />
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
                            headline: data?.ogTitle,
                            description: data?.metaDescription,
                            image: [data?.ogImage?.url],
                            author: {
                                "@type": "Person",
                                name: data?.authorName
                            },
                            publisher: {
                                "@type": "Organization",
                                name: "Fajraan Tech",
                                logo: {
                                    "@type": "ImageObject",
                                    url: `${process.env.NEXT_PUBLIC_APPFRONTURL}/images/logo.webp`
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
                                    item: `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <Header />
            <main>
                <section className="lg:pt-50 md:pt-32.5 pt-28 lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="w-full xl:w-9/12 2xl:w-9/12 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[60px] md:text-[70px] lg:text-[90px] xl:text-[100px] leading-[110%] font-semibold text-primary">
                                    {data?.title}
                                </h2>
                            </motion.div>

                            <ul className="text-[20px] flex gap-4 flex-wrap mt-6">
                                <li className="pr-6 border-r border-1">
                                    {formatDate(data?.date)}
                                </li>
                                <li className="pr-6 border-r border-1">{data?.categories?.join(', ')}</li>
                                <li>by Fajraan Tech</li>
                            </ul>
                        </div>
                        <motion.div
                            className="overflow-hidden mt-22.5"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <img
                                alt="blog"
                                className="w-full block"
                                style={{ height: '722px', objectFit: 'cover' }}
                                src={data?.featured_media?.source_url_webp || data?.featured_media?.source_url || data?.featured_media?.link}
                            />
                        </motion.div>
                        <motion.div
                            className="pt-15"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}
                        >
                            <div className="w-full xl:w-9/12 2xl:w-8/12 mx-auto">
                                <motion.div
                                    className="blog-body"
                                    variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
                                    dangerouslySetInnerHTML={{ __html: data?.content }}
                                />

                                <ul className="flex gap-2 flex-wrap text-[20px]">
                                    {data?.tags?.map(item => (
                                        <li>#{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {morePosts?.length > 0 && (
                    <section className="lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                        <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                            <div className="text-center md:text-left pb-15">
                                <motion.h3
                                    className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    More articles
                                </motion.h3>
                            </div>

                            <motion.div
                                className="grid sm:grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {morePosts.map((data, index) => (
                                    <BlogCard data={data} key={index} />
                                ))}
                            </motion.div>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    )
}
