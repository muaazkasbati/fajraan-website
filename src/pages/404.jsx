import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import React from 'react'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Services | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Services | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <main className="main-wrapper">
                    <BreadCrumb page="404" />
                    <section class="section-404-error">
                        <div class="section-space">
                            <div class="container">
                                <div class="jos mb-10 flex justify-center md:mb-[60px] lg:mb-20">
                                    <img src="assets/img/images/th-1/404-image.svg" alt="404-image" width="636" height="471" class="max-w-full" />
                                </div>

                                <div class="section-block mx-auto mb-10 max-w-[650px] text-center xl:max-w-[870px]">
                                    <h2 class="jos">
                                        We can’t find the page you are looking for {" "}
                                        <span>
                                            <img src="assets/img/elemnts/shape-light-lime-5-arms-star.svg" alt="shape-light-lime-5-arms-star" width="74" height="70" class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]" />
                                        </span>
                                    </h2>
                                </div>

                                <div class="flex justify-center">
                                    <Link href="/" class="btn-primary relative justify-start bg-black pr-20 text-white">
                                        Return to homepage
                                        <span class="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-colorLightLime">
                                            <img src="assets/img/icons/icon-black-arrow-right.svg" alt="icon-black-arrow-right" width="34" height="28" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
