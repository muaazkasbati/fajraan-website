import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import TextimonialSection from "@/components/home/TextimonialSection";
import TextSliderSection from "@/components/home/TextSliderSection";
import TeamSection from "@/components/home/TeamSection";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      const id = router.asPath.split('#')[1]; // Get the ID from the URL
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleScroll();
  }, [router.asPath]);
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
      <div className="page-wrapper">
        <Header />

        <main className="main-wrapper">
          <HeroSection />
          <ServiceSection />
          <div className="horizontal-line bg-[#e6e6e6]"></div>
          <AboutSection />
          <PortfolioSection />
          <ProcessSection />
          <div className="horizontal-line bg-[#e6e6e6]"></div>
          <TextimonialSection />
          <TextSliderSection />
{/*           <TeamSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
