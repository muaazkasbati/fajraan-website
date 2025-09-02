import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import moment from 'moment';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

export async function getServerSideProps({ params }) {
    const { slug } = params;

    try {
        const response = await fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?slug=${slug}`);
        if (!response.ok) {
            return {
                notFound: true,
            };
        }
        const data = await response.json();

        if (data.length === 0) {
            return {
                notFound: true,
            };
        }

        const post = data[0];

        // Fetching author, tags, categories, and featured image data for the post
        const [authorResponse, tagsResponse, categoriesResponse, mediaResponse] = await Promise.all([
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
            fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/media/${post.featured_media}`)
        ]);

        const authorData = await authorResponse.json();
        const featuredImageData = await mediaResponse.json();

        return {
            props: {
                data: {
                    ...post,
                    authorName: authorData.name || "",
                    tags: tagsResponse || [],
                    categories: categoriesResponse || [],
                    featured_media: featuredImageData || null
                }
            }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            notFound: true,
        };
    }
}

export default function BlogDetail({ data }) {
    const router = useRouter();
    const { slug } = router.query;

    const shareCurrentPage = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Share this link',
                    url: window.location.href,
                });
            } else {
                const fallbackUrl = `${process.env.NEXT_PUBLIC_APPFRONTURL}/share?url=${encodeURIComponent(window.location.href)}`;
                window.open(fallbackUrl, '_blank');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const shareOnFacebook = () => {
        const url = window.location.href;
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookShareUrl, '_blank');
    };

    const shareOnWhatsApp = () => {
        const url = window.location.href;
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
        window.open(whatsappShareUrl, '_blank');
    };

    console.log(data, 'data');

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
            <div className="page-wrapper">
                <Header />
                <main class="main-wrapper">
                    <BreadCrumb page={data?.title?.rendered} />
                    <div class="section-blog">
                        <div class="section-space">
                            <div class="container">
                                <div class="gapy-10 grid grid-cols-1 gap-x-[60px] gap-y-10">
                                    <div>
                                        <article class="jos overflow-hidden">
                                            <div class="mb-7 block overflow-hidden rounded-[20px]">
                                                <img src={`${data?.featured_media?.link}`} alt="blog-img-1" width="820" height="500" class="h-[500px] max-h-[500px] min-h-[500px] w-full object-cover" />
                                            </div>
                                            <div class="mb-5 mt-6 flex items-center gap-x-6">
                                                <div class="flex flex-wrap gap-4">
                                                    <a class="rounded-[50px] border border-black px-6 py-3 text-base font-semibold tracking-[0.5px] hover:bg-black hover:text-white">{data?.categories?.join(', ')}</a>
                                                </div>
                                                <span>{moment(data?.date).format("MMMM DD, YYYY")}</span>
                                            </div>

                                            <h2 class="dispay-heading display-heading-4 mb-4">
                                                {data?.title?.rendered}
                                            </h2>
                                            <div className="rich-text" dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />

                                            {/* <div class="rich-text">
                                                <p>
                                                    By definition, most high-value skill stacks can’t be
                                                    taught in schools. If the masses could easily access
                                                    them, they wouldn’t be high-value skills anymore. You
                                                    would become replaceable. And value comes from scarcity.
                                                    Here’s the skill stack to thrive as a one-person
                                                    business.
                                                </p>
                                                <p>
                                                    <strong class="block font-semibold">#1: Learn to Tweet your way into a boardroom
                                                    </strong>
                                                    As a first-generation immigrant, money and networks
                                                    weren’t given to me. So instead of going through the
                                                    front door, I tried a back door approach.
                                                </p>
                                                <p>
                                                    <strong class="block font-semibold">#2: Web Development and Design
                                                    </strong>
                                                    Proficiency in web development and design allows you to
                                                    create and maintain websites for clients. As more
                                                    businesses and individuals seek an online presence.
                                                </p>
                                                <blockquote>
                                                    "Mastering high-income skills can empower you to build a
                                                    one-person business and create the path to financial."
                                                </blockquote>
                                                <p>
                                                    <strong class="block font-semibold">#3: Copywriting and Content Creation
                                                    </strong>
                                                    Strong copywriting and content creation skills are
                                                    essential for creating persuasive, engaging, and
                                                    valuable content for websites, blogs, marketing
                                                    materials, and social media.
                                                </p>
                                                <p>
                                                    <strong class="block font-semibold">#4: Digital Product Creation
                                                    </strong>
                                                    Creating digital products like e-books, online courses,
                                                    webinars, or software can generate substantial income.
                                                    This skill involves not only product creation but also
                                                    marketing and selling these digital assets to your
                                                    target audience.
                                                </p>
                                                <p>
                                                    <strong class="block font-semibold">#5: Sales and Persuasion
                                                    </strong>
                                                    Mastering the art of sales and persuasion can help you
                                                    sell products or services, whether they are your own or
                                                    those of other businesses. Understanding consumer.
                                                </p>
                                                <p>
                                                    While these skills can help you build a one-person
                                                    business and increase your income potential, it's
                                                    changing market trends. Additionally, starting and
                                                    growing a business often involves more than just one
                                                    skill, so consider a holistic approach to building your
                                                    business and wealth.
                                                </p>
                                            </div> */}
                                        </article>

                                        <div class="my-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border-y border-[#E6E6E6] py-6">
                                            <div class="flex items-center gap-x-6">
                                                <span class="display-heading display-heading-4">Tags:</span>
                                                <div class="flex gap-4">
                                                    {data?.tags?.map(item => (
                                                        <a class="rounded-[50px] bg-black/5 px-6 py-2 text-base tracking-[0.5px] hover:bg-black hover:text-white">{item}</a>
                                                    ))}
                                                </div>
                                            </div>
                                            <div class="flex items-center gap-x-6">
                                                <span class="display-heading display-heading-4">Share:</span>
                                                <div class="flex gap-4">
                                                    {/* <a href="../../../external.html?link=http://www.twitter.com/" target="_blank" rel="noopener noreferrer" class="group/link inline-flex items-center justify-center">
                                                        <img src="/assets/img/icons/icon-logo-black-twitter.svg" alt="icon-logo-black-twitter" width="19" height="16" class="h-5 w-auto opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                        <img src="/assets/img/icons/icon-logo-orange-twitter.svg" alt="icon-logo-orange-twitter" width="23" height="19" class="absolute h-5 w-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                    </a> */}
                                                    <a onClick={shareOnFacebook} target="_blank" rel="noopener noreferrer" class="group/link inline-flex items-center justify-center">
                                                        <img src="/assets/img/icons/icon-logo-black-facebook.svg" alt="icon-logo-black-facebook" width="19" height="16" class="h-5 w-auto opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                        <img src="/assets/img/icons/icon-logo-orange-facebook.svg" alt="icon-logo-orange-facebook" width="23" height="19" class="absolute h-5 w-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                    </a>
                                                    {/* <a href="../../../external.html?link=http://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="group/link inline-flex items-center justify-center">
                                                        <img src="/assets/img/icons/icon-logo-black-instagram.svg" alt="icon-logo-black-instagram" width="19" height="16" class="h-5 w-auto opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                        <img src="/assets/img/icons/icon-logo-orange-instagram.svg" alt="icon-logo-orange-instagram" width="23" height="19" class="absolute h-5 w-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                    </a>
                                                    <a href="../../../external.html?link=http://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="group/link inline-flex items-center justify-center">
                                                        <img src="/assets/img/icons/icon-logo-black-linkedin.svg" alt="icon-logo-black-linkedin" width="19" height="16" class="h-5 w-auto opacity-100 transition-all duration-300 group-hover/link:opacity-0" />
                                                        <img src="/assets/img/icons/icon-logo-orange-linkedin.svg" alt="icon-logo-orange-linkedin" width="23" height="19" class="absolute h-5 w-auto opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="jos">
                                            <div class="display-heading display-heading-4 mb-6">
                                                Comments:
                                            </div>

                                            <ul class="flex flex-col gap-y-[30px] border-b border-[#EAEDF0] pb-10">
                                                
                                                <li class="border-b border-[#EAEDF0] last:border-b-0">
                                                    <div class="flex gap-x-5">
                                                        
                                                        <div class="h-[80px] w-[80px] overflow-hidden rounded-full">
                                                            <img src="/assets/img/images/th-1/blog-comment-large-user-img-1.jpg" alt="blog-comment-large-user-img-1" width="80" height="80" />
                                                        </div>
                                                        
                                                        
                                                        <div class="flex flex-1 flex-col gap-y-4">
                                                            
                                                            <div class="flex items-center justify-between gap-x-5">
                                                                <div class="flex flex-col gap-y-1 text-base">
                                                                    <div class="text-ColorBlack font-semibold">
                                                                        Ricky Smith
                                                                    </div>
                                                                    <div class="text-ColorBlack/80">
                                                                        June 14, 2025
                                                                    </div>
                                                                </div>
                                                                <button class="hover:text-ColorBlue text-base font-bold transition-all duration-300">
                                                                    Reply
                                                                </button>
                                                            </div>
                                                            
                                                            
                                                            <p class="max-w-[616px]">
                                                                It is a long established fact that a reader will
                                                                be distrac readable content of a page when looking
                                                                at its layout. The point of using is that it has
                                                                two.
                                                            </p>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <ul class="mt-[30px] flex flex-col pl-8 sm:pl-32">
                                                        
                                                        <li class="border-t border-[#EAEDF0] py-[30px]">
                                                            <div class="flex gap-x-5">
                                                                
                                                                <div class="h-[50px] w-[50px] overflow-hidden rounded-full">
                                                                    <img src="/assets/img/images/th-1/blog-comment-small-user-img-1.jpg" alt="blog-comment-large-user-img-1" width="50" height="50" />
                                                                </div>
                                                                
                                                                
                                                                <div class="flex flex-1 flex-col gap-y-4">
                                                                    
                                                                    <div class="flex items-center justify-between gap-x-5">
                                                                        <div class="flex flex-col gap-y-1 text-base">
                                                                            <div class="text-ColorBlack font-semibold">
                                                                                Joshua Jones
                                                                            </div>
                                                                            <div class="text-ColorBlack/80">
                                                                                June 15, 2025
                                                                            </div>
                                                                        </div>
                                                                        <button class="hover:text-ColorBlue font-bold transition-all duration-300">
                                                                            Reply
                                                                        </button>
                                                                    </div>
                                                                    
                                                                    
                                                                    <p class="max-w-[536px]">
                                                                        It is a long established fact that a reader
                                                                        will be distra readable content of a page when
                                                                        looking its layout. The point of using.
                                                                    </p>
                                                                    
                                                                </div>
                                                                
                                                            </div>
                                                        </li>
                                                        
                                                    </ul>
                                                    
                                                </li>
                                                <li class="border-b border-[#EAEDF0] last:border-b-0">
                                                    <div class="flex gap-x-5">
                                                        
                                                        <div class="h-[80px] w-[80px] overflow-hidden rounded-full">
                                                            <img src="/assets/img/images/th-1/blog-comment-large-user-img-2.jpg" alt="blog-comment-large-user-img-1" width="80" height="80" />
                                                        </div>
                                                        
                                                        
                                                        <div class="flex flex-1 flex-col gap-y-4">
                                                            
                                                            <div class="flex items-center justify-between gap-x-5">
                                                                <div class="flex flex-col gap-y-1 text-base">
                                                                    <div class="text-ColorBlack font-semibold">
                                                                        Stephanie Nicol
                                                                    </div>
                                                                    <div class="text-ColorBlack/80">
                                                                        Jan 28, 2023
                                                                    </div>
                                                                </div>
                                                                <button class="hover:text-ColorBlue text-base font-bold transition-all duration-300">
                                                                    Reply
                                                                </button>
                                                            </div>
                                                            
                                                            
                                                            <p class="max-w-[616px]">
                                                                It is a long established fact that a reader will
                                                                be distrac readable content of a page when looking
                                                                at its layout. The point of using is that it has
                                                                two.
                                                            </p>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div class="jos mt-8">
                                            <div class="display-heading display-heading-4 mb-6">
                                                Leave a comments:
                                            </div>

                                            <form action="#" method="post" class="grid grid-cols-1 gap-y-6 rounded-[10px] border-2 border-black bg-[#FFFDF8] p-10">
                                                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                                                    <input type="text" placeholder="Your Name*" class="w-full border-b border-[#999999] bg-[#FFFDF8] py-4 font-bold outline-none" required />
                                                    <input type="email" placeholder="Email Address*" class="w-full border-b border-[#999999] bg-[#FFFDF8] py-4 font-bold outline-none" required />
                                                </div>
                                                <div class="grid grid-cols-1 gap-6">
                                                    <textarea class="min-h-[150px] w-full border-b border-[#999999] bg-[#FFFDF8] py-4 font-bold outline-none" placeholder="Write us your comment" required></textarea>
                                                </div>
                                                <div class="mt-7 flex justify-start gap-6">
                                                    <button type="submit" class="inline-block rounded-[50px] bg-black px-8 py-[18px] text-base font-bold leading-none text-white hover:bg-colorLightLime hover:text-black">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </form>
                                        </div> */}
                                    </div>
                                    {/* <aside>
                                        <ul class="flex flex-col gap-y-[50px]">  
                                            <li>
                                                <h4 class="mb-4">Search:</h4>
                                                <form action="#" method="get">
                                                    <div class="relative">
                                                        <input type="search" placeholder="Type keyword here" class="w-full rounded-[50px] border border-black bg-colorIvory px-[30px] py-[14px] pr-16 outline-none placeholder:text-black" required />
                                                        <button type="submit" class="absolute right-[5px] top-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                                                            <img src="/assets/img/icons/icon-buttery-white-search.svg" alt="icon-buttery-white-search" width="24" height="24" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </li>
                                            <li>
                                                <h4 class="mb-4">Categories:</h4>
                                                <ul class="flex flex-col gap-y-4">
                                                    <li>
                                                        <label for="category-business" class="flex gap-x-3 text-[21px]">
                                                            <span class="relative">
                                                                <input type="checkbox" name="category-business" id="category-business" class="peer opacity-0" />
                                                                <span class="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                                                            </span>
                                                            Business
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label for="category-development" class="flex gap-x-3 text-[21px]">
                                                            <span class="relative">
                                                                <input type="checkbox" name="category-development" id="category-development" class="peer opacity-0" />
                                                                <span class="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                                                            </span>
                                                            Development
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label for="category-technology" class="flex gap-x-3 text-[21px]">
                                                            <span class="relative">
                                                                <input type="checkbox" name="category-technology" id="category-technology" class="peer opacity-0" />
                                                                <span class="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                                                            </span>
                                                            Technology
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label for="category-creative" class="flex gap-x-3 text-[21px]">
                                                            <span class="relative">
                                                                <input type="checkbox" name="category-creative" id="category-creative" class="peer opacity-0" />
                                                                <span class="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                                                            </span>
                                                            Creative Director
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label for="category-uncategorized" class="flex gap-x-3 text-[21px]">
                                                            <span class="relative">
                                                                <input type="checkbox" name="category-uncategorized" id="category-uncategorized" class="peer opacity-0" />
                                                                <span class="absolute left-0 top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-[50%] border border-black peer-checked:bg-black"></span>
                                                            </span>
                                                            Uncategorized
                                                        </label>
                                                    </li>
                                                </ul>
                                                
                                            </li>

                                            <li>
                                                <h4 class="mb-4">Recent Posts:</h4>
                                                <ul class="flex flex-col gap-y-4">
                                                    <li class="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                                                        <a href="blog-details.html" class="block overflow-hidden rounded-[10px]">
                                                            <img src="/assets/img/images/th-1/recent-blog-img-1.jpg" alt="recent-blog-img-1" width="150" height="100" class="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                                                        </a>
                                                        <div class="flex-1">
                                                            <span class="mb-[10px] block text-base">June 18, 2025</span>
                                                            <a href="blog-details.html" class="display-heading display-heading-5">7 businesses for easy money</a>
                                                        </div>
                                                    </li>
                                                    <li class="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                                                        <a href="blog-details.html" class="block overflow-hidden rounded-[10px]">
                                                            <img src="/assets/img/images/th-1/recent-blog-img-2.jpg" alt="recent-blog-img-2" width="150" height="100" class="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                                                        </a>
                                                        <div class="flex-1">
                                                            
                                                            <span class="mb-[10px] block text-base">June 16, 2025</span>
                                                            
                                                            <a href="blog-details.html" class="display-heading display-heading-5">My 3 tips for business ideas</a>
                                                        </div>
                                                    </li>
                                                    <li class="group flex flex-col items-start gap-x-[10px] gap-y-5 sm:flex-row sm:items-center">
                                                        <a href="blog-details.html" class="block overflow-hidden rounded-[10px]">
                                                            <img src="/assets/img/images/th-1/recent-blog-img-3.jpg" alt="recent-blog-img-3" width="150" height="100" class="h-auto w-full transition-all duration-300 group-hover:scale-110" />
                                                        </a>
                                                        <div class="flex-1">
                                                            
                                                            <span class="mb-[10px] block text-base">June 14, 2025</span>
                                                            
                                                            <a href="blog-details.html" class="display-heading display-heading-5">12 Halloween costume ideas</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4 class="mb-4">Tags:</h4>
                                                <ul class="flex flex-wrap gap-x-[10px] gap-y-3">
                                                    <li>
                                                        <a href="blog-1.html" class="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Marketing</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-1.html" class="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Business</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-1.html" class="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Studio</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-1.html" class="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Solutions</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-1.html" class="inline-block rounded-[50px] bg-black/5 px-6 py-2 text-base hover:bg-black hover:text-white">Brand</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </aside> */}
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
