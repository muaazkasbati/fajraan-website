import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
                <meta property="og:image" content="https://www.fajraan.tech/images/about/about-img-5.webp" />
                <meta property="og:url" content="https://www.fajraan.tech" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="404 | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://www.fajraan.tech/your-twitter-image.webp" />

            </Head>

            <div className="py-32.5 h-screen">
                <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                    <div className="flex justify-center">
                        <div className="w-full xl:w-8/12 2xl:w-6/12">
                            <div className="text-center space-y-3">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={124} height={124} viewBox="0 0 124 124" fill="none">
                                        <g clipPath="url(#clip0_906_4263)">
                                            <mask id="mask0_906_4263" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x={0} y={-1} width={125} height={126}>
                                                <path d="M0 -1.00001H124.016V124.998H0V-1.00001Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_906_4263)">
                                                <path d="M118.565 61.999C118.565 93.2363 93.2427 118.559 62.0054 118.559C30.7679 118.559 5.44531 93.2363 5.44531 61.999C5.44531 30.7617 30.7679 5.43893 62.0054 5.43893C93.2427 5.43893 118.565 30.7617 118.565 61.999Z" stroke="currentColor" strokeWidth={8} strokeMiterlimit={10} />
                                                <path d="M33.0039 93.6353C37.8864 82.4633 49.0326 74.6553 62.0043 74.6553C74.9762 74.6553 86.1224 82.4633 91.0049 93.6353" stroke="currentColor" strokeWidth={8} strokeMiterlimit={10} />
                                                <path d="M75.1328 39.9678V52.624" stroke="currentColor" strokeWidth={8} strokeMiterlimit={10} />
                                                <path d="M48.8828 39.9678V52.624" stroke="currentColor" strokeWidth={8} strokeMiterlimit={10} />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_906_4263">
                                                <rect width={124} height={124} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h1 className="text-[65px] md:text-[75px] lg:text-[95px] xl:text-[140px] leading-[107.143%] tracking-[-4.2px] font-semibold">Sorry there’s nothing here</h1>
                                <p className="text-[20px]">The page you are looking for was moved, removed, renamed or never existed.</p>
                                <Link
                                    aria-label="Home"
                                    href={`${process.env.NEXT_PUBLIC_APPFRONTURL}`}
                                    className="group inline-flex w-max items-center gap-2 rounded-[40px] border border-primary bg-primary px-5 py-2.5 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-white transition-all duration-500 ease-in-out md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3.5 cursor-pointer"
                                >
                                    <span className="relative inline-block h-5.5 w-5.5 overflow-hidden text-white">
                                        <ArrowRight size={22} className="absolute left-0 top-0 -rotate-45 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-5.5 group-hover:-top-5.5" />
                                        <ArrowRight size={22} className="absolute -left-5.5 top-5.5 -rotate-45 opacity-80 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-0 group-hover:top-0" />
                                    </span>
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 -z-10">
                        <img alt="Error 404" className="w-full" src="/images/404.webp" />
                    </div>
                </div>
            </div>

        </>
    )
}
