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
//       'http://blog.devsolsystems.co.uk/wp-json/wp/v2/posts?per_page=3'
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
    const BASE = "https://blog.devsolsystems.co.uk/wp-json/wp/v2";

    const [postsRes, portfolioRes] = await Promise.all([
      fetch(`${BASE}/posts?per_page=3`),
      fetch(`${BASE}/portfolio?_embed&per_page=20`)
    ]);

    if (!postsRes.ok || !portfolioRes.ok) {
      throw new Error(`API error: posts=${postsRes.status} portfolio=${portfolioRes.status}`);
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
      revalidate: 3600, // Re-fetch every hour — no need for 60s on static content
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
        <title>Fajraan Tech | Custom Web & Mobile App Development Company</title>

        <meta name="description" content="Fajraan Tech is a global software development company building custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses worldwide." />
        <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software development company, app development agency, web design company, digital solutions, tech company" />

        <link rel="canonical" href="https://www.fajraan.tech/" />

        <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/" />


        <meta property="og:title" content="Fajraan Tech | Custom Web & Mobile App Development Company" />
        <meta property="og:description" content="We build scalable custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses around the world." />
        <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fajraan Tech – Global Software Development Company" />
        <meta property="og:url" content="https://www.fajraan.tech/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FajraanTech" />
        <meta name="twitter:creator" content="@FajraanTech" />
        <meta name="twitter:title" content="Fajraan Tech | Custom Web & Mobile App Development Company" />
        <meta name="twitter:description" content="Global software development agency delivering custom web, mobile & desktop apps, UI/UX design, SEO, and data services for businesses worldwide." />
        <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.jpg" />
        <meta name="twitter:image:alt" content="Fajraan Tech – Global Software Development Company" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fajraan Tech",
              url: "https://www.fajraan.tech",
              logo: "https://www.fajraan.tech/images/logo.png",
              description: "Fajraan Tech is a global software development company building custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses worldwide.",
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fajraan Tech",
              url: "https://www.fajraan.tech",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.fajraan.tech/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <OurAchivementSection />
        <PortfolioSection projects={portfolio} />
        <ServiceSection />
        <TextimonialSection />
        {/* <ClientsSection /> */}
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </>
  );
}
