import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import BlogCard from '@/components/BlogCard';

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        // Fetch the current post
        const response = await fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?slug=${slug}`);
        if (!response.ok) return { notFound: true };
        const data = await response.json();
        if (data.length === 0) return { notFound: true };

        const post = data[0];

        // Fetch related content in parallel
        const [authorResponse, tagsResponse, categoriesResponse, mediaResponse, morePostsResponse] = await Promise.all([
            fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/users/${post.author}`),
            Promise.all(
                post.tags.map(async (tagId) => {
                    const tagResponse = await fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/tags/${tagId}`);
                    const tagData = await tagResponse.json();
                    return tagData.name;
                })
            ),
            Promise.all(
                post.categories.map(async (categoryId) => {
                    const categoryResponse = await fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/categories/${categoryId}`);
                    const categoryData = await categoryResponse.json();
                    return categoryData.name;
                })
            ),
            fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/media/${post.featured_media}`),
            fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=3&page=1&_=${Date.now()}`)
        ]);

        const [authorData, featuredImageData, morePosts] = await Promise.all([
            authorResponse.json(),
            mediaResponse.json(),
            morePostsResponse.json()
        ]);

        return {
            props: {
                data: {
                    ...post,
                    authorName: authorData.name || "",
                    tags: tagsResponse || [],
                    categories: categoriesResponse || [],
                    featured_media: featuredImageData || null,
                },
                morePosts: morePosts.filter(p => p.id !== post.id)
            }
        };
    } catch (error) {
        console.error('Error fetching blog detail:', error);
        return { notFound: true };
    }
}

export default function BlogDetail({ data, morePosts }) {
    const router = useRouter();
    const { slug } = router.query;

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25, // controls one-by-one animation timing
                delayChildren: 0.1,
            },
        },
    };

    return (
        <>
            <Head>
                <title>{data?.yoast_head_json?.og_title}</title>
                <meta name="description" content={data?.yoast_head_json?.description} />
                <meta name="robots" content={data?.yoast_head_json?.robots} />
                <meta property="og:locale" content={data?.yoast_head_json?.og_locale} />
                <meta property="og:type" content={data?.yoast_head_json?.og_type} />
                <meta property="og:title" content={data?.yoast_head_json?.og_title} />
                <meta property="og:description" content={data?.yoast_head_json?.og_description} />
                <meta property="og:url" content={data?.yoast_head_json?.og_url} />
                <meta property="og:site_name" content={data?.yoast_head_json?.og_site_name} />
                <meta property="article:published_time" content={data?.yoast_head_json?.article_published_time} />
                <meta property="og:image" content={data?.yoast_head_json?.og_image[0]?.url} />
                <meta property="og:image:width" content={data?.yoast_head_json?.og_image[0]?.width} />
                <meta property="og:image:height" content={data?.yoast_head_json?.og_image[0]?.height} />
                <meta name="author" content={data?.yoast_head_json?.author} />
                <meta name="twitter:card" content={data?.yoast_head_json?.twitter_card} />
                <meta name="twitter:label1" content={data?.yoast_head_json?.twitter_misc?.["Written by"]} />
                <meta name="twitter:data1" content={data?.yoast_head_json?.twitter_misc?.["Written by"]} />
                <meta name="twitter:label2" content={data?.yoast_head_json?.twitter_misc?.["Estimated reading time"]} />
                <meta name="twitter:data2" content={data?.yoast_head_json?.twitter_misc?.["Estimated reading time"]} />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`} />
                {/* Dublin Core Metadata */}
                <meta name="DC.title" content={data?.yoast_head_json?.og_title} />
                <meta name="DC.creator" content={data?.authorName} />
                <meta name="DC.description" content={data?.yoast_head_json?.description} />
                <meta name="DC.publisher" content="Fajraan Tech" />
                <meta name="DC.date" content={data?.yoast_head_json?.article_published_time} />

                {/* Article Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": data?.yoast_head_json?.og_title,
                            "image": data?.yoast_head_json?.og_image[0]?.url,
                            "author": {
                                "@type": "Person",
                                "name": data?.authorName
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Fajraan Tech",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": `${process.env.NEXT_PUBLIC_APPFRONTURL}fav-icon.png`
                                }
                            },
                            "datePublished": data?.yoast_head_json?.article_published_time,
                            "dateModified": data?.modified,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${slug}`
                            }
                        })
                    }}
                />
            </Head>
            <Header />
            <section className="blog-page-sec blog-detail-page section-padding-bottom">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-item-wrapper">
                                <div className="blog-item blog-item-details">
                                    <div className="row justify-content-center row-padding-bottom">
                                        <div className="col-xl-9 col-xxl-9">
                                            {/* Title Animation */}
                                            <motion.div
                                                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                                whileInView={{ opacity: 1, rotateX: 0 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="title-box blog-title">
                                                    <h2 className="color-primary">
                                                        {data?.title?.rendered}
                                                    </h2>
                                                </div>
                                            </motion.div>

                                            <div className="meta-box">
                                                <ul className="custom-ul meta-info d-flex">
                                                    <li><span><a>{moment(data?.date).format("MMMM DD, YYYY")}</a></span></li>
                                                    <li><span><a>{data?.categories?.join(', ')}</a></span></li>
                                                    <li><span><a>by Fajraan Tech</a></span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Animation */}
                                    <motion.div
                                        className="img-box overflow-hidden"
                                        initial={{ opacity: 0, y: 60 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            alt="blog"
                                            className="w-100 d-block"
                                            style={{ height: '722px', objectFit: 'cover' }}
                                            src={`${data?.featured_media?.link}`}
                                        />
                                    </motion.div>

                                    {/* Content Animation */}
                                    <motion.div
                                        className="content-box row-padding-top"
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
                                        {/* <div className="social-links sticky-social">
                                            <ul className="custom-ul">
                                                <li><a target="_blank" href="https://x.com/"><i className="fab fa-x-twitter" /></a></li>
                                                <li><a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a></li>
                                                <li><a target="_blank" href="https://linkedin.com/"><i className="fab fa-linkedin" /></a></li>
                                                <li><a target="_blank" href="https://behance.net/"><i className="fab fa-behance" /></a></li>
                                                <li><a target="_blank" href="https://dribbble.com/"><i className="fab fa-dribbble" /></a></li>
                                            </ul>
                                        </div> */}

                                        <div className="row justify-content-center social-links-scroll position-relative">
                                            <div className="col-xl-9 col-xxl-8">
                                                <motion.div
                                                    className="blog-body"
                                                    variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
                                                    dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
                                                />


                                                <div className="blog-tags">
                                                    <ul className="custom-ul">
                                                        {data?.tags?.map(item => (
                                                            <li><a>{item}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {morePosts?.length > 0 && (
                <section className="quanto-blog-section section-padding-bottom overflow-hidden">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="quanto__header text-center text-md-start row-padding-bottom">
                                    <motion.h3
                                        className="title"
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        More articles
                                    </motion.h3>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className="row gx-4 gy-5"
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
            <Footer />
        </>
    )
}
