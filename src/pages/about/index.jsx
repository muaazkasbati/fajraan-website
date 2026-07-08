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
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

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
                <title>About Us | Fajraan Tech – Global Software Development Company</title>

                <meta name="description" content="Learn about Fajraan Tech — a global software development company passionate about building custom web, mobile, and desktop applications with expert UI/UX design, SEO, and data services for businesses worldwide." />
                <meta name="keywords" content="about Fajraan Tech, software development company, who we are, tech company, web development agency, mobile app developers, UI UX design team, global digital agency" />

                <link rel="canonical" href="https://www.fajraan.tech/about" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/about" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/about" />

                <meta property="og:title" content="About Us | Fajraan Tech – Global Software Development Company" />
                <meta property="og:description" content="Meet the team behind Fajraan Tech — building scalable custom web, mobile, and desktop solutions with UI/UX design, SEO, and data services for businesses around the world." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="The Fajraan Tech team – Global Software Development Company" />
                <meta property="og:url" content="https://www.fajraan.tech/about" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="About Us | Fajraan Tech – Global Software Development Company" />
                <meta name="twitter:description" content="Meet the people behind Fajraan Tech — a global team delivering custom web, mobile & desktop apps, UI/UX design, SEO, and data services worldwide." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="The Fajraan Tech team – Global Software Development Company" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            name: "About Us – Fajraan Tech",
                            url: "https://www.fajraan.tech/about",
                            description:
                                "Fajraan Tech is a global software development company building custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses worldwide.",
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
                                    name: "About Us",
                                    item: "https://www.fajraan.tech/about",
                                },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <section className="pt-27.5 pb-16.25 md:pt-32.5 md:pb-25 xl:pt-50 xl:pb-32.5 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="grid md:grid-cols-12 grid-cols-1 gap-8 items-end">
                            <div className="xl:col-span-10 md:col-span-9 col-span-1">
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className=""
                                >
                                    <h1 className="text-[55px] md:text-[65px] lg:text-[85px] xl:text-[130px] leading-[107.143%] tracking-[-4.2px] font-semibold text-primary">
                                        Empowering brands to grow with digital innovation
                                    </h1>
                                </motion.div>
                            </div>

                            <div className="xl:col-span-2 md:col-span-3 col-span-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className=""
                                >
                                    <motion.h4
                                        className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] leading-[116.667%] tracking-[-1.5px] font-semibold text-primary"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        4.9
                                    </motion.h4>

                                    <motion.div
                                        className="my-1.5 text-secondary"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <ul className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z" fill="currentColor" />
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
                                        className="text-[20px]"
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
                <section className="lg:pt-32.5 md:pt-20 pt-16.25 bg-white" id='about-section'>
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="w-full xl:w-8/12 2xl:w-8/12 mx-auto">
                            <motion.div
                                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">
                                    We create seamless digital experiences that help businesses grow
                                </h3>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-12 lg:pt-32.5 md:pt-20 pt-16.25 overflow-hidden">
                            <div className="md:col-span-6 xl:col-span-4 col-span-12 self-center order-1 xl:order-0 overflow-hidden">
                                <motion.div
                                    className="overflow-hidden"
                                    initial={{ opacity: 0, x: -150 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <img alt="about-thumb" loading="lazy" className="h-140.75 object-cover" src="/images/about/about-img-5.webp" />
                                </motion.div>
                            </div>

                            <div className="md:col-span-5 xl:col-span-4 xl:col-start-6 col-span-12 order-0 xl:order-1">
                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="mb-7"
                                >
                                    <p className="text-[20px]">
                                        At Fajraan Tech, we blend creativity with technology to craft digital
                                        solutions that make an impact. From web and mobile apps to branding and
                                        design, we focus on simplicity, usability, and performance—turning your
                                        ideas into real business results.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                                    whileInView={{ opacity: 1, rotateX: 0 }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="mb-7"
                                >
                                    <p className="text-[20px]">
                                        Our team brings together developers, designers, and strategists who work
                                        closely to build innovative solutions that help brands scale. Every project
                                        we deliver is guided by passion, precision, and a shared vision for
                                        excellence.
                                    </p>
                                </motion.div>

                                <Button link ariaLabel="Follow to about" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}about`}>
                                    More about us
                                </Button>

                                <figure className="overflow-hidden w-100 mt-7">
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
                                            className="w-100 object-cover"
                                            style={{ aspectRatio: "1.08" }}
                                            src="/images/about/about-img-2.webp"
                                        />
                                    </motion.div>
                                </figure>
                            </div>

                            <div className="md:col-span-6 xl:col-span-2 xl:col-start-11 col-span-12 self-center xl:order-2 overflow-hidden">
                                <motion.div
                                    className="overflow-hidden w-100"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <img alt="about-thumb" loading="lazy" className="w-100 h-73.75 object-cover" src="/images/about/about-img-1.webp" />
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="lg:mt-32.5 md:mt-20 mt-16.25 overflow-hidden"
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
                                    <h1 className="text-[65px] md:text-[75px] lg:text-[95px] xl:text-[140px] leading-[107.143%] tracking-[-4.2px] font-semibold text-secondary overflow-hidden">{text}</h1>
                                </div>
                            ))}
                        </Marquee>

                    </motion.div>
                </section>
                <TeamSection />
                <TestimonialSection aboutPage />
            </main>
            <Footer />
        </>
    )
}
