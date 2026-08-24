import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { motion } from "framer-motion";
import Head from 'next/head'
import { useRouter } from 'next/router'
import HeroSec from '@/components/HeroSec'
import BlogCard from '@/components/BlogCard'
import { ArrowRight } from 'lucide-react';
import { decodeHtml } from '@/utils/decodeHtml';
import formatDate from '@/utils/formatDate';
import { toWebP } from '@/utils/data';

export async function getServerSideProps(context) {
    const page = parseInt(context.query?.page || "1", 10);

    try {
        const response = await fetch(`https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=18&page=${page}`);

        if (!response.ok) {
            return {
                props: {
                    posts: [],
                    totalPages: 1,
                    currentPage: page,
                },
            };
        }

        const posts = await response.json();
        const totalPages = parseInt(response.headers.get("X-WP-TotalPages")) || 1;

        const mappedPosts = posts?.map((post) => ({
            id: post?.id,
            title: decodeHtml(post?.title?.rendered),
            slug: post?.slug,
            date: formatDate(post?.date),
            image: toWebP(post?.yoast_head_json?.og_image?.[0]?.url ? post?.yoast_head_json.og_image[0].url : "https://via.placeholder.com/415x268"),
        }));

        return {
            props: {
                posts: mappedPosts,
                totalPages,
                currentPage: page,
            },
        };
    } catch (error) {
        console.error("Blog fetch error:", error);

        return {
            props: {
                posts: [],
                totalPages: 1,
                currentPage: page,
            },
        };
    }
}

export default function Blogs({ posts, totalPages, currentPage }) {
    const router = useRouter();

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        router.push({
            pathname: router.pathname,
            query: { ...router.query, page },
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <>
            <Head>
                <title>Blog | Fajraan Tech – Insights on Web, Mobile & AI Innovation</title>

                <meta name="description" content="Read the Fajraan Tech blog for expert insights, tutorials, and industry trends on web development, mobile apps, AI automation, and digital innovation for businesses worldwide." />
                <meta name="keywords" content="Fajraan Tech blog, web development blog, mobile app development articles, UI UX design tips, SEO insights, software development tutorials, tech industry trends, digital innovation" />

                <link rel="canonical" href="https://www.fajraan.tech/blog" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/blog" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/blog" />

                <meta property="og:title" content="Blog | Fajraan Tech – Insights on Web, Mobile & AI Innovation" />
                <meta property="og:description" content="Read the Fajraan Tech blog for expert insights, tutorials, and industry trends on web development, mobile apps, AI automation, and digital innovation for businesses worldwide." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Blog – Web, Mobile & Digital Insights" />
                <meta property="og:url" content="https://www.fajraan.tech/blog" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Blog | Fajraan Tech – Insights on Web, Mobile & AI Innovation" />
                <meta name="twitter:description" content="Read the Fajraan Tech blog for expert insights, tutorials, and industry trends on web development, mobile apps, AI automation, and digital innovation for businesses worldwide." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Blog – Web, Mobile & Digital Insights" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Blog",
                            name: "Fajraan Tech Blog",
                            url: "https://www.fajraan.tech/blog",
                            description: "Read the Fajraan Tech blog for expert insights, tutorials, and industry trends on web development, mobile apps, AI automation, and digital innovation for businesses worldwide.",
                            publisher: {
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
                                    name: "Blog",
                                    item: "https://www.fajraan.tech/blog",
                                },
                            ],
                        }),
                    }}
                />
            </Head>

            <Header />
            <main>
                <HeroSec title="Explore latest news and insights" />
                <section className="lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {posts?.map((data, index) => (
                                <BlogCard data={data} key={index} />
                            ))}
                        </motion.div>

                        {totalPages > 1 && (
                            <div className="pt-15">
                                <ul className="flex flex-wrap justify-end items-center gap-3">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <li key={page} className="flex items-center justify-center">
                                            <span
                                                className={`border border-1 rounded-full w-17.5 h-17.5 flex items-center justify-center text-[18px] font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer ${page === currentPage ? 'bg-primary text-white' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(page);
                                                }}
                                            >
                                                {page}
                                            </span>
                                        </li>
                                    ))}

                                    {currentPage < totalPages && (
                                        <li className="flex items-center justify-center">
                                            <span
                                                className="inline-flex items-center gap-2 px-3 py-2 text-[18px] font-semibold leading-tight next cursor-pointer hover:text-primary transition-all duration-300"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(currentPage + 1);
                                                }}
                                            >
                                                Next <ArrowRight size={18} />
                                            </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}