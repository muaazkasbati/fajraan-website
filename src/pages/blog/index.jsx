import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { motion } from "framer-motion";
import Head from 'next/head'
import { useRouter } from 'next/router'
import HeroSec from '@/components/HeroSec'
import BlogCard from '@/components/BlogCard'
import { ArrowRight } from 'lucide-react';

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
                <title>Blog | Fajraan Tech – Insights on Web, Mobile & Digital Innovation</title>

                <meta name="description" content="Read the Fajraan Tech blog for expert insights, tutorials, and industry trends on web development, mobile apps, UI/UX design, SEO, and digital innovation for businesses worldwide." />
                <meta name="keywords" content="Fajraan Tech blog, web development blog, mobile app development articles, UI UX design tips, SEO insights, software development tutorials, tech industry trends, digital innovation" />

                <link rel="canonical" href="https://www.fajraan.tech/blog" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/blog" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/blog" />

                <meta property="og:title" content="Blog | Fajraan Tech – Insights on Web, Mobile & Digital Innovation" />
                <meta property="og:description" content="Stay ahead with Fajraan Tech's blog — expert articles on web development, mobile apps, UI/UX design, SEO, and the latest in digital technology." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Blog – Web, Mobile & Digital Insights" />
                <meta property="og:url" content="https://www.fajraan.tech/blog" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Blog | Fajraan Tech – Insights on Web, Mobile & Digital Innovation" />
                <meta name="twitter:description" content="Expert articles on web development, mobile apps, UI/UX design, SEO, and digital innovation — straight from the Fajraan Tech team." />
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
                            description: "Expert insights, tutorials, and industry trends on web development, mobile apps, UI/UX design, SEO, and digital innovation.",
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

                        {/* {posts?.length > 18 &&
                            <div className="grid row-padding-top">
                                <div className="w-full">
                                    <div className="blog-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="flex flex-wrap justify-end items-center custom-ul gap-2">
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                    <li
                                                        key={page}
                                                        className={`${page === currentPage ? 'active' : ''}`}
                                                    >
                                                        <span
                                                            className="inline-flex px-3 py-2 text-sm leading-tight rounded-md"
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
                                                    <li className="inline-block">
                                                        <span
                                                            className="inline-flex px-3 py-2 text-sm leading-tight rounded-md next"
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
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        } */}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const page = parseInt(context.query.page || 1, 10);

//     try {
//         const response = await fetch(`http://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=18&page=${page}`);
//         if (!response.ok) {
//             return {
//                 props: {
//                     posts: [],
//                     totalPages: 1,
//                     currentPage: page,
//                 },
//             };
//         }

//         const data = await response.json();
//         const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;

//         return {
//             props: {
//                 posts: data,
//                 totalPages,
//                 currentPage: page,
//             },
//         };
//     } catch (error) {
//         console.error('SSR fetch error:', error);
//         return {
//             props: {
//                 posts: [],
//                 totalPages: 1,
//                 currentPage: page,
//             },
//         };
//     }
// }
export async function getServerSideProps(context) {
    const page = parseInt(context.query.page || 1, 10);
    const timestamp = Date.now(); // prevents cached responses

    try {
        const response = await fetch(
            `https://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=18&page=${page}&_=${timestamp}`,
            { cache: 'no-store' } // tells Next.js not to cache this request
        );

        if (!response.ok) {
            return {
                props: {
                    posts: [],
                    totalPages: 1,
                    currentPage: page,
                },
            };
        }

        const data = await response.json();
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;

        return {
            props: {
                posts: data,
                totalPages,
                currentPage: page,
            },
        };
    } catch (error) {
        console.error('SSR fetch error:', error);
        return {
            props: {
                posts: [],
                totalPages: 1,
                currentPage: page,
            },
        };
    }
}

