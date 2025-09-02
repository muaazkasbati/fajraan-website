import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import moment from 'moment'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const SkeletonBlogCard = () => (
    <li className="jos group rounded-[20px] border border-black bg-[#FFFDF8] p-6 animate-pulse">
        <div className="block overflow-hidden rounded-[20px]">
            <div className="max-h-[280px] min-h-[280px] w-full bg-gray-200" />
        </div>
        <div className="mb-5 mt-6 flex flex-col gap-y-3">
            <div className="flex flex-wrap gap-4">
                <div className="rounded-[50px] border border-black px-6 py-3 bg-gray-200 w-32 h-10" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-24" />
        </div>
        <div>
            <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-16" />
        </div>
    </li>
)

export default function Blogs() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loadd, setloadd] = useState(false);


    const fetchPosts = async () => {
        try {
            setloadd(true);
            setPosts([])
            const response = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/posts?per_page=18&page=${currentPage}&_=${Date.now()}`);
            if (!response.ok) {
                toast.error('Post Not Found');
                return
            }
            const data = await response.json();
            const totalPages = parseInt(response.headers.get('X-WP-TotalPages'));

            // Fetching author, tags, and categories data for each post
            const postsWithData = await Promise.all(
                data.map(async post => {
                    // Fetch author data
                    // const authorResponse = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/users/${post.author}`);
                    // if (!authorResponse.ok) {
                    //     console.log('Error fetching author data');
                    // }
                    // const authorData = await authorResponse.json();

                    // // Fetch tags data
                    // const tagsResponse = await Promise.all(
                    //     post.tags.map(async tagId => {
                    //         const tagResponse = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/tags/${tagId}`);
                    //         if (!tagResponse.ok) {
                    //             console.log('Error fetching tag data');
                    //         }
                    //         const tagData = await tagResponse.json();
                    //         return tagData.name;
                    //     })
                    // );

                    // Fetch categories data
                    const categoriesResponse = await Promise.all(
                        post.categories.map(async categoryId => {
                            const categoryResponse = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/categories/${categoryId}`);
                            if (!categoryResponse.ok) {
                                console.log('Error fetching category data');
                            }
                            const categoryData = await categoryResponse.json();
                            return categoryData.name;
                        })
                    );

                    // Fetch featured image data
                    // const mediaResponse = await fetch(`https://blogs.cre8ivesparkx.com//wp-json/wp/v2/media/${post.featured_media}`);
                    // if (!mediaResponse.ok) {
                    //     console.log('Error fetching featured image data');
                    // }
                    // const featuredImageResponse = await mediaResponse.json();

                    return {
                        ...post,
                        // authorName: authorData,
                        // tags: tagsResponse,
                        categories: categoriesResponse,
                        // featured_media: featuredImageResponse
                    };
                })
            );

            setPosts(postsWithData);
            setTotalPages(totalPages);
            setloadd(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setloadd(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);


    const handlePageChange = (page) => {
        router.push({
            pathname: router.pathname,
            query: { ...router.query, page },
        });
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        if (router.query.page) {
            const parsedPage = parseInt(router.query.page, 10);
            setCurrentPage(parsedPage);
        }
    }, [router.query.page]);

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
            <div className="page-wrapper">
                <Header />
                <main class="main-wrapper">
                    <BreadCrumb page="Our Blog" />
                    <div class="section-blog">
                        <div class="section-space">
                            <div class="container">
                                <div>
                                    <ul class="grid grid-cols-1 gap-6 xl:grid-cols-3">
                                        {loadd ? (
                                            Array.from({ length: 6 }).map((_, i) => (
                                                <SkeletonBlogCard key={i} />
                                            ))
                                        ) : posts?.map((data, i) => (
                                                <li key={i} class="jos group rounded-[20px] border border-black bg-[#FFFDF8] p-6">
                                                    <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data?.slug}`} class="block overflow-hidden rounded-[20px]">
                                                        <img alt={data?.title?.rendered} src={data?.yoast_head_json?.og_image[0]?.url ? `${data?.yoast_head_json?.og_image[0]?.url}` : "https://via.placeholder.com/415x268"} width="820" height="500" loading="lazy" class="max-h-[280px] min-h-[280px] w-full object-cover transition-all duration-300 group-hover:scale-110" />
                                                    </Link>
                                                    <div class="mb-5 mt-6 flex flex-col gap-y-3">
                                                        <div class="flex flex-wrap gap-4">
                                                            <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data?.slug}`} class="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">{data?.categories?.[0]}</Link>
                                                        </div>
                                                        <span class="text-base">{moment(data?.date).format("MMMM DD, YYYY")}</span>
                                                    </div>
                                                    <div>
                                                        <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data?.slug}`} class="display-heading display-heading-4 mb-4 block">{data?.title?.rendered}</Link>
                                                        <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data?.slug}`}>
                                                            <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" class="transition-all duration-300 group-hover:translate-x-5" />
                                                        </Link>
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>

                                    {/* <nav aria-label="Pagination" class="mt-20 flex justify-center gap-[10px]">
                                        <a href="blog-1.html" aria-current="page" class="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-black font-semibold text-black hover:border-colorLightLime hover:bg-colorLightLime hover:text-black">01</a>
                                        <a href="blog-1.html" aria-current="page" class="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-black font-semibold text-black hover:border-colorLightLime hover:bg-colorLightLime hover:text-black">02</a>
                                        <a href="blog-1.html" aria-current="page" class="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border border-black font-semibold text-black hover:border-colorLightLime hover:bg-colorLightLime hover:text-black"><img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-white-arrow-right-line" width="34" height="28" class="h-auto w-4" /></a>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}
