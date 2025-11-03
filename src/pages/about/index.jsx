import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import OurAchievementSection from '@/components/home/OurAchivementSection';
import Marquee from 'react-fast-marquee';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/home/TextimonialSection';
import VideoAreaSection from '@/components/VideoAreaSection';

export default function About() {
    const awards = [
        {
            title: "Winner - Best eCommerce Websites",
            info: "Awwwards ─ 2023",
        },
        {
            title: "Awarded - Top Creative Agency in United State",
            info: "Envato Elements ─ 2022",
        },
        {
            title: "Mentioned - Honorable Mentioned",
            info: "Design Community ─ 2022",
        },
        {
            title: "Winner - Behance Portfolio Review",
            info: "Behance ─ 2021",
        },
        {
            title: "Winner - Featured App Design of the Week",
            info: "UI/UX Global Award ─ 2019",
        },
    ];

    const clients = [
        "/images/clients/logo-3.webp",
        "/images/clients/logo-4.webp",
        "/images/clients/logo-5.webp",
        "/images/clients/logo-6.webp",
        "/images/clients/logo-7.webp",
        "/images/clients/logo-8.webp",
    ];
    const items = Array(6).fill(`building the future of digital experiences ${' '}`);

    return (
        <>
            <Head>
                <title>About Us | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="About Us | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />
            </Head>
            <Header />
            <section className="quanto-hero-about-section overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4 align-items-end">
                        {/* Left Text Section */}
                        <div className="col-lg-9 col-xxl-10">
                            <motion.div
                                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="quanto-hero-about__content"
                            >
                                <h1 className="title color-primary">
                                    Empowering brands to grow with digital innovation
                                </h1>
                            </motion.div>
                        </div>

                        {/* Right Rating Section */}
                        <div className="col-lg-3 col-xxl-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="quanto-hero-about__info"
                            >
                                <motion.h4
                                    className="rating-point color-primary"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    4.9
                                </motion.h4>

                                <motion.div
                                    className="stars color-secondary"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <ul className="custom-ul">
                                        {[...Array(5)].map((_, i) => (
                                            <li key={i}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    10+ reviews from clients worldwide
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoAreaSection video videoUrl="https://videos.pexels.com/video-files/5057529/5057529-uhd_2560_1440_25fps.mp4" scrollDownId='about-section' />
            <OurAchievementSection />
            <section className="quanto-about-area2 section-padding-top bg-color-white" id='about-section'>
                <div className="container custom-container">
                    {/* Header */}
                    <div className="row">
                        <div className="col-xl-9 col-xxl-8 mx-auto">
                            <div className="quanto__header text-center text-lg-start">
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="title color-primary">
                                        We create seamless digital experiences that help businesses grow
                                    </h3>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="row g-4 justify-content-between row-padding-top overflow-hidden">
                        {/* Left Image */}
                        <div className="col-md-6 col-xl-5 col-xxl-4 d-flex align-items-xl-center order-1 order-xl-0 overflow-hidden">
                            <motion.div
                                className="overflow-hidden w-100"
                                initial={{ opacity: 0, x: -150 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <img
                                    alt="about-thumb"
                                    loading="lazy"
                                    className="w-100"
                                    style={{ height: '563px', objectFit: 'cover' }}
                                    src="/images/about/about-img-1.jpg"
                                />
                            </motion.div>
                        </div>

                        {/* Right Text */}
                        <div className="col-xl-5 col-xxl-4 order-0 order-xl-1">
                            <div className="section-content">
                                {/* Paragraph 1 */}
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <p>
                                        At Fajraan Tech, we blend creativity with technology to craft digital
                                        solutions that make an impact. From web and mobile apps to branding and
                                        design, we focus on simplicity, usability, and performance—turning your
                                        ideas into real business results.
                                    </p>
                                </motion.div>

                                {/* Paragraph 2 */}
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <p>
                                        Our team brings together developers, designers, and strategists who work
                                        closely to build innovative solutions that help brands scale. Every project
                                        we deliver is guided by passion, precision, and a shared vision for
                                        excellence.
                                    </p>
                                </motion.div>

                                {/* Link */}
                                <a className="quanto-link-btn" href="about.html">
                                    More about us
                                    <span>
                                        <i className="fa-solid fa-arrow-right arry1"></i>
                                        <i className="fa-solid fa-arrow-right arry2"></i>
                                    </span>
                                </a>

                                {/* Middle Image */}
                                <figure className="overflow-hidden w-100">
                                    <motion.div
                                        className="overflow-hidden"
                                        initial={{ opacity: 0, x: -150 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            alt="about-thumb"
                                            loading="lazy"
                                            width="380"
                                            height="350"
                                            className="w-100"
                                            style={{ aspectRatio: "1.08", objectFit: 'cover' }}
                                            src="/images/about/about-img-2.jpg"
                                        />
                                    </motion.div>
                                </figure>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="col-md-6 col-xl-2 d-flex align-items-xl-center order-xl-2 overflow-hidden">
                            <motion.div
                                className="overflow-hidden w-100"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <img
                                    alt="about-thumb"
                                    loading="lazy"
                                    className="w-100"
                                    style={{ height: '295px', objectFit: 'cover' }}
                                    src="/images/about/about-img-3.jpg"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="marquee-container section-margin-top overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Marquee
                        pauseOnHover
                        pauseOnClick
                        gradient={false}
                        speed={50}
                        className="overflow-hidden"
                    >
                        {items.map((text, idx) => (
                            <div key={idx} className="marquee-item overflow-hidden">
                                <h1 className="color-secondary overflow-hidden">{text}</h1>
                            </div>
                        ))}
                    </Marquee>

                </motion.div>
            </section>
            {/* <section className="quanto-awards-area section-padding-top-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row justify-content-end">
                        <div className="col-lg-10 col-xl-8 col-xxl-7">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    className="quanto-awards-box mb-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2, // stagger effect
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <h6 className="awards-title">{award.title}</h6>
                                    <span className="awards-info">{award.info}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}
            <TeamSection />
            <TestimonialSection aboutPage />
            {/* <div className="quanto-lients-area bg-color-2 section-padding-bottom">
                <div className="container custom-container">
                    <div className="row g-4">
                        <div className="col-12">
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                We worked with the largest global brands
                            </motion.p>
                        </div>

                        <div className="col-12 clients__box-wrapper">
                            {clients.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    className="client-box"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <img
                                        src={logo}
                                        alt={`client-logo-${index + 3}`}
                                        className="client-logo w-100 h-100"
                                        loading="lazy"
                                        style={{ objectFit: "contain", maxWidth: 160, height: "auto" }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    )
}
