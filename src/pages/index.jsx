import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import IndustrySpotlightSection from "@/components/IndustrySpotlightSection";
import { toWebP } from "@/utils/data";
import formatDate from "@/utils/formatDate";
import { decodeHtml } from "@/utils/decodeHtml";

const AboutSection = dynamic(() => import("@/components/home/AboutSection"));
const OurAchivementSection = dynamic(() => import("@/components/home/OurAchivementSection"), { ssr: false });
const PortfolioSection = dynamic(() => import("@/components/home/PortfolioSection"), { ssr: false });
const ServiceSection = dynamic(() => import("@/components/home/ServiceSection"));
const TextimonialSection = dynamic(() => import("@/components/home/TextimonialSection"), { ssr: false });
const BlogSection = dynamic(() => import("@/components/home/BlogSection"), { ssr: false });

export async function getStaticProps() {
  try {
    const BASE = "https://cms-backend.fajraan.com/api/posts";

    const [postsRes, portfolioRes] = await Promise.all([
      fetch(`${BASE}/blogs?limit=3&page=1`),
      fetch(`${BASE}/projects?limit=4&page=1`)
    ]);

    if (!postsRes.ok || !portfolioRes.ok) {
      throw new Error(`API error: posts=${postsRes.status} portfolio=${portfolioRes.status}`);
    }

    const [postsData, portfolioData] = await Promise.all([
      postsRes.json(),
      portfolioRes.json()
    ]);

    const mappedPortfolio = portfolioData?.data?.map((item) => ({
      id: item?._id,
      title: item?.dynamicFields?.title,
      slug: item?.dynamicFields?.slug || '',
      link: item?.dynamicFields?.link || '#',
      year: item?.dynamicFields?.year || '—',
      category: item?.categories?.[0]?.name || 'Uncategorized',
      image: item?.dynamicFields?.image || '/images/default.webp',
    }));

    const mappedPosts = postsData?.data?.map((post) => ({
      id: post?._id,
      title: post?.dynamicFields?.title,
      slug: post?.dynamicFields?.slug || '',
      date: formatDate(post?.publishDate),
      image: post?.dynamicFields?.featured_image || '/images/default.webp',
    }));
    
    return {
      props: {
        posts: mappedPosts,
        portfolio: mappedPortfolio,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [],
        portfolio: [],
      },
      revalidate: 300, // Retry sooner on error (5 min)
    };
  }
}

export default function Home({ posts, portfolio }) {
  return (
    <>
      <Head>
        <title>Fajraan Tech | Web Development, Mobile Apps & AI Automation Company</title>

        <meta name="description" content="Fajraan Tech is a global software development company building custom web, mobile, and desktop applications, plus AI automation and AI chatbot solutions for businesses worldwide." />
        <meta name="keywords" content="custom web development, mobile app development, AI automation, AI chatbot development, chauffeur software, fleet management software, software development company, app development agency, digital solutions, tech company" />

        <link rel="canonical" href="https://www.fajraan.tech/" />

        <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/" />


        <meta property="og:title" content="Fajraan Tech | Web Development, Mobile Apps & AI Automation Company" />
        <meta property="og:description" content="Fajraan Tech is a global software development company building custom web, mobile, and desktop applications, plus AI automation and AI chatbot solutions for businesses worldwide." />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fajraan Tech – Global Software Development Company" />
        <meta property="og:url" content="https://www.fajraan.tech/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content="Fajraan Tech | Web Development, Mobile Apps & AI Automation Company" />
        <meta name="twitter:description" content="Global software development agency delivering custom web, mobile & desktop apps, UI/UX design, SEO, and data services for businesses worldwide." />
        <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta name="twitter:image:alt" content="Fajraan Tech – Global Software Development Company" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fajraan Tech",
              url: "https://www.fajraan.tech",
              logo: "https://www.fajraan.tech/images/logo.webp",
              description: "Fajraan Tech is a global software development company building custom web, mobile, and desktop applications, plus AI automation and AI chatbot solutions for businesses worldwide.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://www.linkedin.com/company/fajraan-tech",
                "https://twitter.com/fajraantech",
                "https://www.instagram.com/fajraantech",
                "https://www.facebook.com/fajraantech"
              ],
            }),
          }}
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <IndustrySpotlightSection />
        <OurAchivementSection />
        <PortfolioSection projects={portfolio} />
        <ServiceSection />
        <TextimonialSection />
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </>
  );
}
