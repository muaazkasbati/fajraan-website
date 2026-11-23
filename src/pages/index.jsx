import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import OurAchievementSection from "@/components/home/OurAchivementSection";
import AboutSection from "@/components/home/AboutSection";
import ServiceSection from "@/components/home/ServiceSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import MvpSprintSection from "@/components/home/MvpSprintSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialSection from "@/components/home/TextimonialSection";
import BlogSection from "@/components/home/BlogSection";
import formatDate from "@/utils/formatDate";
import { cmsFetchSafe } from "@/utils/cms";

export async function getStaticProps() {
  const [postsData, portfolioData] = await Promise.all([
    cmsFetchSafe("/blogs?limit=3&page=1", { data: [] }),
    cmsFetchSafe("/projects?limit=4&page=1", { data: [] }),
  ]);

  const portfolio = (portfolioData?.data || []).map((item) => ({
    id: item?._id || null,
    title: item?.dynamicFields?.title || "",
    slug: item?.dynamicFields?.slug || "",
    year: item?.dynamicFields?.year || "",
    category: item?.categories?.[0]?.name || "",
    image: item?.dynamicFields?.image || null,
  })).filter((p) => p.slug);

  const posts = (postsData?.data || []).map((post) => ({
    id: post?._id || null,
    title: post?.dynamicFields?.title || "",
    slug: post?.dynamicFields?.slug || "",
    date: post?.publishDate ? formatDate(post.publishDate) : "",
    image: post?.dynamicFields?.featured_image || null,
  })).filter((p) => p.slug);

  const failed = !postsData?.data?.length && !portfolioData?.data?.length;

  return {
    props: { posts, portfolio },
    // retry sooner if the CMS was unreachable
    revalidate: failed ? 300 : 3600,
  };
}

export default function Home({ posts, portfolio }) {
  return (
    <>
      <Head>
        <title>Fajraan Tech | 10-Day MVPs, AI Agents, Automation & Business Software</title>

        <meta name="description" content="Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and automation systems, and sets up ERP, school, courier and other business platforms for companies worldwide." />
        <meta name="keywords" content="custom web development, mobile app development, AI automation, AI chatbot development, chauffeur software, fleet management software, software development company, app development agency, digital solutions, tech company" />

        <link rel="canonical" href="https://www.fajraan.tech/" />

        <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/" />


        <meta property="og:title" content="Fajraan Tech | 10-Day MVPs, AI Agents, Automation & Business Software" />
        <meta property="og:description" content="Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and automation systems, and sets up ERP, school, courier and other business platforms for companies worldwide." />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fajraan Tech – Global Software Development Company" />
        <meta property="og:url" content="https://www.fajraan.tech/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content="Fajraan Tech | 10-Day MVPs, AI Agents, Automation & Business Software" />
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
              description: "Fajraan Tech builds products from scratch with a live MVP in as little as 10 days, develops AI agents and automation systems, and sets up ERP, school, courier and other business platforms for companies worldwide.",
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
      <main id="main">
        <HeroSection />
        <OurAchievementSection />
        <AboutSection />
        <MvpSprintSection index="02" />
        <ServiceSection index="03" />
        <SolutionsSection index="04" />
        <PortfolioSection projects={portfolio} index="05" />
        <TestimonialSection index="06" />
        <BlogSection posts={posts} index="07" />
      </main>
      <Footer />
    </>
  );
}
