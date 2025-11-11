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
                <meta property="og:title" content="404 | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="404 | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

            </Head>
            {/* <Header />
            <Footer /> */}
            <div className="error-section section-padding-top-bottom min-vh-100">
                <div className="container custom-container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-xxl-6">
                            <div className="error__content text-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={124}
                                    height={124}
                                    viewBox="0 0 124 124"
                                    fill="none"
                                >
                                    <g clipPath="url(#clip0_906_4263)">
                                        <mask
                                            id="mask0_906_4263"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={0}
                                            y={-1}
                                            width={125}
                                            height={126}
                                        >
                                            <path
                                                d="M0 -1.00001H124.016V124.998H0V-1.00001Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_906_4263)">
                                            <path
                                                d="M118.565 61.999C118.565 93.2363 93.2427 118.559 62.0054 118.559C30.7679 118.559 5.44531 93.2363 5.44531 61.999C5.44531 30.7617 30.7679 5.43893 62.0054 5.43893C93.2427 5.43893 118.565 30.7617 118.565 61.999Z"
                                                stroke="currentColor"
                                                strokeWidth={8}
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M33.0039 93.6353C37.8864 82.4633 49.0326 74.6553 62.0043 74.6553C74.9762 74.6553 86.1224 82.4633 91.0049 93.6353"
                                                stroke="currentColor"
                                                strokeWidth={8}
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M75.1328 39.9678V52.624"
                                                stroke="currentColor"
                                                strokeWidth={8}
                                                strokeMiterlimit={10}
                                            />
                                            <path
                                                d="M48.8828 39.9678V52.624"
                                                stroke="currentColor"
                                                strokeWidth={8}
                                                strokeMiterlimit={10}
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_906_4263">
                                            <rect width={124} height={124} fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className="title">Sorry there’s nothing here</h1>
                                <p>
                                    The page you are looking for was moved, removed, renamed or never
                                    existed.
                                </p>
                                <Link className="quanto-link-btn btn-pill" href="/">
                                    <span>
                                        <i className="fa-solid fa-arrow-left arry1" />
                                        <i className="fa-solid fa-arrow-left arry2" />
                                    </span>
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="error__thumb position-absolute bottom-0 z-n1">
                        <img
                            alt="Error 404"
                            className="w-100"
                            style={{ color: "transparent" }}
                            src="/images/404.webp"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
