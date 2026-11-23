import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/Button'
import { cmsFetchSafe } from '@/utils/cms'
import HeroSec from '@/components/HeroSec'
import BlogCard from '@/components/BlogCard'
import formatDate from '@/utils/formatDate';

export async function getServerSideProps({ query, res }) {
    const page = Math.max(1, parseInt(query?.page || "1", 10) || 1);
    // Cache at the CDN: fast repeat visits, and the last good page keeps
    // being served while the CMS is slow or down.
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");

    const json = await cmsFetchSafe(`/blogs?limit=18&page=${page}`, null);
    const posts = (json?.data || []).map((post) => ({
        id: post?._id || null,
        title: post?.dynamicFields?.title || "",
        slug: post?.dynamicFields?.slug || "",
        date: post?.publishDate ? formatDate(post.publishDate) : "",
        image: post?.dynamicFields?.featured_image || null,
    })).filter((p) => p.slug);

    return {
        props: {
            posts,
            totalPages: json?.pagination?.pages || 1,
            currentPage: page,
            failed: !json,
        },
    };
}

export default function Blogs({ posts, totalPages, currentPage, failed }) {
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
            <main id="main">
                <HeroSec
                    crumbs={[{ label: "Blog" }]}
                    title="Notes on building better software."
                    intro="Practical writing on web, mobile and AI automation, from the team doing the work."
                />
                <section className="pb-20 md:pb-28">
                    <div className="wrap">
                        {posts.length ? (
                            <div className="grid gap-x-8 gap-y-14 border-t border-line pt-14 md:grid-cols-2 lg:grid-cols-3">
                                {posts.map((data, i) => (
                                    <BlogCard data={data} index={i} key={data.id || i} />
                                ))}
                            </div>
                        ) : (
                            <p className="border-t border-line pt-14 text-muted">
                                {failed ? "Articles are temporarily unavailable. Please check back in a few minutes." : "No articles yet."}
                            </p>
                        )}

                        {totalPages > 1 && (
                            <nav aria-label="Blog pages" className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
                                <ul className="flex flex-wrap items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <li key={page}>
                                            <Link
                                                href={page === 1 ? "/blog" : `/blog?page=${page}`}
                                                aria-current={page === currentPage ? "page" : undefined}
                                                className={`t-num grid h-11 w-11 place-items-center rounded-full border text-[15px] font-semibold transition-colors ${page === currentPage ? "border-primary bg-primary text-white" : "border-line text-primary hover:border-primary"}`}
                                            >
                                                {page}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                {currentPage < totalPages && (
                                    <Button variant="text" link href={`/blog?page=${currentPage + 1}`}>Next page</Button>
                                )}
                            </nav>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}