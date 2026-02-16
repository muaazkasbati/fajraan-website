// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
// import { motion } from "framer-motion";
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import React, { useEffect, useState } from 'react'
// import HeroSec from '@/components/HeroSec'
// import BlogCard from '@/components/BlogCard'

// export default function Blogs() {
//     const router = useRouter();
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const [posts, setPosts] = useState([]);
//     const [loadd, setloadd] = useState(false);


//     const fetchPosts = async () => {
//         try {
//             setloadd(true);
//             setPosts([])
//             const response = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/posts?per_page=18&page=${currentPage}&_=${Date.now()}`);
//             if (!response.ok) {
//                 toast.error('Post Not Found');
//                 return
//             }
//             const data = await response.json();
//             const totalPages = parseInt(response.headers.get('X-WP-TotalPages'));

//             // const postsWithData = await Promise.all(
//             //     data.map(async post => {
//             //         const categoriesResponse = await Promise.all(
//             //             post.categories.map(async categoryId => {
//             //                 const categoryResponse = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/categories/${categoryId}`);
//             //                 if (!categoryResponse.ok) {
//             //                     console.log('Error fetching category data');
//             //                 }
//             //                 const categoryData = await categoryResponse.json();
//             //                 return categoryData.name;
//             //             })
//             //         );

//             //         return {
//             //             ...post,
//             //             categories: categoriesResponse,
//             //         };
//             //     })
//             // );

//             setPosts(data);
//             setTotalPages(totalPages);
//             setloadd(false);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setloadd(false);
//         }
//     };

//     useEffect(() => {
//         fetchPosts();
//     }, [currentPage]);


//     const handlePageChange = (page) => {
//         router.push({
//             pathname: router.pathname,
//             query: { ...router.query, page },
//         });
//         setCurrentPage(page);
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     useEffect(() => {
//         if (router.query.page) {
//             const parsedPage = parseInt(router.query.page, 10);
//             setCurrentPage(parsedPage);
//         }
//     }, [router.query.page]);



//     const containerVariants = {
//         hidden: {},
//         show: {
//             transition: {
//                 staggerChildren: 0.25, // controls one-by-one animation timing
//                 delayChildren: 0.1,
//             },
//         },
//     };

//     return (
//         <>
//             <Head>
//                 <title>Our Blogs | Fajraan Tech</title>
//                 <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
//                 <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
//                 <meta name="author" content="Fajraan Tech" />
//                 <meta property="og:title" content="Our Blogs | Fajraan Tech" />
//                 <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
//                 <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
//                 <meta property="og:url" content="https://fajraan.com" />
//                 <meta property="og:type" content="website" />

//                 <meta name="twitter:card" content="summary_large_image" />
//                 <meta name="twitter:title" content="Our Blogs | Fajraan Tech" />
//                 <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
//                 <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

//             </Head>
//             <Header />
//             <HeroSec title="Explore latest news and insights" />
//             <section className="quanto-blog-section section-padding-bottom overflow-hidden">
//                 <div className="container custom-container">
//                     <motion.div
//                         className="row g-4"
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true, amount: 0.2 }}
//                     >
//                         {posts.map((data, index) => (
//                             <BlogCard data={data} key={index} />
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>
//             <Footer />
//         </>
//     )
// }

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { motion } from "framer-motion";
import Head from 'next/head'
import { useRouter } from 'next/router'
import HeroSec from '@/components/HeroSec'
import BlogCard from '@/components/BlogCard'

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
                <title>Our Blogs | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Our Blogs | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Blogs | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />
            </Head>

            <Header />
            <HeroSec title="Explore latest news and insights" />

            <section className="quanto-blog-section section-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <motion.div
                        className="row g-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {posts?.map((data, index) => (
                            <BlogCard data={data} key={index} />
                        ))}
                    </motion.div>

                    {posts?.length > 18 &&
                        <div className="row row-padding-top">
                            <div className="col-12">
                                <div className="blog-pagination">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end align-items-center custom-ul">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                <li
                                                    key={page}
                                                    className={`page-item ${page === currentPage ? 'active' : ''}`}
                                                >
                                                    <a
                                                        className="page-link"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(page);
                                                        }}
                                                    >
                                                        {page}
                                                    </a>
                                                </li>
                                            ))}

                                            {/* Next button */}
                                            {currentPage < totalPages && (
                                                <li className="page-item">
                                                    <a
                                                        className="page-link next"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageChange(currentPage + 1);
                                                        }}
                                                    >
                                                        Next <i className="fa-solid fa-arrow-right"></i>
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}

// export async function getServerSideProps(context) {
//     const page = parseInt(context.query.page || 1, 10);

//     try {
//         const response = await fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=18&page=${page}`);
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
            `https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=18&page=${page}&_=${timestamp}`,
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

