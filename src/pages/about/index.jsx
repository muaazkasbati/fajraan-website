import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutSection from '@/components/home/AboutSection'
import TeamSection from '@/components/home/TeamSection'
import Head from 'next/head'
import React from 'react'

export default function About() {
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
            <div className="page-wrapper">
                <Header />
                <main className="main-wrapper">
                    <BreadCrumb page="About Us" />
                    <AboutSection />
                    <section class="section-about-gallery">
                        <div class="section-space">
                            <div class="container">
                                <div class="section-block mb-10 md:mb-[60px] xl:mb-20">
                                    <h2 class="jos mx-auto max-w-[966px] text-center">
                                        Our story is {" "}
                                        <span>
                                            <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                                alt="shape-light-lime-5-arms-star"
                                                width="74"
                                                height="70"
                                                class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                                        </span> {" "}
                                        worth sharing
                                    </h2>
                                    <div class="mx-auto mt-6 max-w-[813px] text-center">
                                        <p class="jos section-para">
                                            Founded with a vision to bridge creativity and technology, Fajraan Tech has grown into a trusted digital partner for businesses across the Middle East and beyond.
                                            We help brands thrive by delivering innovative solutions that blend design, development, and strategy.
                                        </p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    <a href="/assets/img/new/about-img-1.jpg" data-fslightbox="gallery"
                                        class="group block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black md:col-span-1 lg:col-span-2">
                                        <img src="/assets/img/new/about-img-1.jpg"
                                            alt="about-gallery-img-1" width="846" height="392"
                                            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                                    </a>
                                    <a href="/assets/img/new/about-img-4.jpg" data-fslightbox="gallery"
                                        class="group col-span-1 block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black">
                                        <img src="/assets/img/new/about-img-4.jpg"
                                            alt="about-gallery-img-2" width="408" height="392"
                                            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                                    </a>
                                    <a href="/assets/img/new/about-img-3.jpg" data-fslightbox="gallery"
                                        class="group col-span-1 block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black">
                                        <img src="/assets/img/new/about-img-3.jpg"
                                            alt="about-gallery-img-3" width="408" height="392"
                                            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                                    </a>
                                    <a href="/assets/img/new/about-img-2.jpg" data-fslightbox="gallery"
                                        class="group block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black md:col-span-1 lg:col-span-2">
                                        <img src="/assets/img/new/about-img-2.jpg"
                                            alt="about-gallery-img-4" width="846" height="392"
                                            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110" />
                                    </a>
                                </div>

                                <div class="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
                                    <div class="rich-text">
                                        <h4 class="mb-4">Our Vision</h4>
                                        <p>
                                            To empower businesses with innovative digital solutions that create lasting impact, strengthen brand presence, and drive measurable growth in today’s fast-moving world.
                                        </p>
                                        <p>
                                            Our team brings together experienced developers, designers, and strategists with diverse skill sets, enabling us to take on projects of all sizes and industries with creativity and precision.
                                        </p>
                                    </div>
                                    <div class="rich-text">
                                        <h4 class="mb-4">Our Mission</h4>
                                        <p>
                                            To partner with startups, enterprises, and organizations in building custom solutions that merge technology with creativity. We aim to deliver products that not only meet business goals but also exceed expectations.
                                        </p>
                                        <p>
                                            Every project we take on is guided by our commitment to innovation, collaboration, and excellence — ensuring that our clients stay ahead in the digital landscape.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
                <TeamSection />
                <Footer />
            </div>
        </>
    )
}
