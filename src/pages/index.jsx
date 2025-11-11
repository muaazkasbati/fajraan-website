import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TextimonialSection from "@/components/home/TextimonialSection";
import OurAchivementSection from "@/components/home/OurAchivementSection";
import ClientsSection from "@/components/home/ClientsSection";
import BlogSection from "@/components/home/BlogSection";

// export async function getStaticProps() {
//   try {
//     const response = await fetch(
//       'https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=3'
//     );
//     if (!response.ok) throw new Error('Failed to fetch latest posts');

//     const data = await response.json();

//     return {
//       props: {
//         posts: data,
//       },
//       revalidate: 300, // Rebuild every 5 minutes (ISR)
//     };
//   } catch (error) {
//     console.error('Home page fetch error:', error);
//     return {
//       props: {
//         posts: [],
//       },
//       revalidate: 300,
//     };
//   }
// }

export async function getStaticProps() {
  try {
    const timestamp = Date.now();

    const [postsRes, portfolioRes] = await Promise.all([
      fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/posts?per_page=3&_=${timestamp}`),
      fetch(`https://blogs.cre8ivesparkx.com/wp-json/wp/v2/portfolio?_embed&_=${timestamp}`)
    ]);

    if (!postsRes.ok || !portfolioRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const [postsData, portfolioData] = await Promise.all([
      postsRes.json(),
      portfolioRes.json()
    ]);

    const mappedPortfolio = portfolioData?.map((item) => ({
      id: item?.id,
      title: item?.title?.rendered,
      slug: item?.slug,
      link: item?.link,
      year: item?.meta?.year || '—',
      category: item?._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
      image:
        item?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        '/images/default.webp',
    }));

    return {
      props: {
        posts: postsData,
        portfolio: mappedPortfolio,
      },
      revalidate: 60, // Re-fetch every 60 seconds (adjust as needed)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [],
        portfolio: [],
      },
      revalidate: 60, // Still revalidate even on error to retry later
    };
  }
}



export default function Home({ posts, portfolio }) {
  return (
    <>
      <Head>
        <title>Fajraan Tech | Custom Web & Mobile App Development Middle East</title>
        <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
        <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
        <meta name="author" content="Fajraan Tech" />
        <meta property="og:title" content="Fajraan Tech | Custom Web & Mobile App Development Middle East" />
        <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
        <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
        <meta property="og:url" content="https://fajraan.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fajraan Tech | Custom Web & Mobile App Development Middle East" />
        <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
        <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
      <OurAchivementSection />
      <PortfolioSection projects={portfolio} />
      <ServiceSection />
      <TextimonialSection />
      {/* <ClientsSection /> */}
      <BlogSection posts={posts} />
      <Footer />
    </>
  );
}
