import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import VideoAreaSection from '@/components/VideoAreaSection'
import Button from '@/components/Button'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const quickFacts = [
    { label: 'Industry', value: 'Chauffeur & Limousine Transport' },
    { label: 'Location', value: 'Australia' },
    { label: 'Stack', value: 'Node.js, Next.js, MongoDB, Stripe, Socket.IO' },
    { label: 'Scope', value: 'End-to-end platform, booking to payouts' },
]

const challenges = [
    'Managing bookings across phone calls, emails, and separate booking tools with no central system',
    'Dispatching drivers manually with no live visibility into availability or job status',
    'Calculating driver payouts, vendor commissions, and pricing (zone-based, tolls, surcharges) by hand',
    'No unified reporting across bookings, payments, drivers, and clients',
    'No system for handling recurring corporate bookings, concierge services, or bulk booking uploads',
]

const solutionGroups = [
    {
        title: 'Multi-Role Access System',
        points: [
            'Master Admin, Admin, Dispatcher (with granular per-module permissions), Driver, and Customer roles — each with tailored access and functionality',
        ],
    },
    {
        title: 'Core Booking Engine',
        points: [
            'Multi-step booking flow (pickup/drop-off, stops, passengers, luggage, flight details, meet & greet)',
            'Airport transfers, suburb-to-suburb, hourly rides, one-off and third-party bookings',
            'Recurring bookings auto-generated via cron jobs',
            'Bulk CSV upload for past and future bookings',
            'Full lifecycle status tracking, from pending through completed/cancelled/no-show',
            'Flight tracking integration with delay detection and terminal/gate info',
            'Driver assignment with availability checks, accept/decline via link, live socket-based updates',
        ],
    },
    {
        title: 'Pricing & Payments',
        points: [
            'Configurable pricing (zone-based, per-km, suburb-based)',
            'Toll, parking, waiting-charge, public holiday, after-hours, and surcharge calculations',
            'Discount approval workflow with OTP verification',
            'Full Stripe integration (checkout sessions, invoices, webhooks)',
            'Separate client-facing charges vs. driver payout calculations',
            'Vendor commission tracking',
        ],
    },
    {
        title: 'Driver & Fleet Operations',
        points: [
            'Driver onboarding (including ad-hoc/temporary drivers) with approval workflows',
            'Vehicle management and vehicle-to-driver assignment',
            'Live availability and location tracking via Socket.IO',
            'Automated driver payouts with ABA bank-file export for finance/admin',
            'Auto-generated invoices and driver ratings/reviews with admin moderation',
        ],
    },
    {
        title: 'Concierge Services',
        points: [
            'A separate concierge job workflow running parallel to standard bookings, with its own availability checks and status tracking',
        ],
    },
    {
        title: 'Client & Vendor Management',
        points: [
            'Corporate client and vendor CRUD tools',
            '"Join Fleet" applications for prospective drivers and partners',
        ],
    },
    {
        title: 'Notifications & Communication',
        points: [
            'WhatsApp messaging (via Sent.dm), SMS and email (Twilio, Nodemailer)',
            'Automated 30-minute pre-pickup reminders and real-time status notifications',
        ],
    },
    {
        title: 'Reporting & Admin Tools',
        points: [
            'Reporting suite covering payouts, driver jobs, total jobs, vendors, bookings, customers, clients, concierge, client payouts, discount approvals, and payments',
            'Activity/response logging, public holiday calendar, job type configuration',
        ],
    },
    {
        title: 'Frontend Application',
        points: [
            'Next.js admin/dispatcher dashboard covering all operational areas',
            'Customer-facing multi-step booking flow with Google Maps autocomplete and route calculation',
            'Driver onboarding portal, accept/decline pages, e-signature capture, Stripe payment pages',
            'Real-time updates throughout via Socket.IO',
        ],
    },
]

const outcomes = [
    'Eliminated manual dispatch over phone and WhatsApp',
    'Automated driver payout calculations and bank file generation',
    'Centralized reporting replacing manual spreadsheet tracking',
    'Faster booking-to-dispatch turnaround with live status updates',
]

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
}

export default function EmpireChauffeursCaseStudy() {
    return (
        <>
            <Head>
                <title>Empire Chauffeurs Australia | Fleet Management & Booking Platform Case Study | Fajraan Tech</title>

                <meta name="description" content="How Fajraan Tech built a complete fleet management, booking, and driver payout platform for Empire Chauffeurs Australia — covering dispatch, pricing, payments, and reporting." />
                <meta name="keywords" content="Empire Chauffeurs Australia, chauffeur booking platform case study, fleet management software case study, driver payout system, chauffeur dispatch software" />

                <link rel="canonical" href="https://www.fajraan.tech/case-studies/empire-chauffeurs-australia" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/case-studies/empire-chauffeurs-australia" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/case-studies/empire-chauffeurs-australia" />

                <meta property="og:title" content="Empire Chauffeurs Australia | Fleet Management & Booking Platform Case Study | Fajraan Tech" />
                <meta property="og:description" content="A full-stack chauffeur dispatch and operations system covering bookings, driver management, payments, payouts, and reporting — built to run an entire fleet digitally." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Empire Chauffeurs Australia Case Study" />
                <meta property="og:url" content="https://www.fajraan.tech/case-studies/empire-chauffeurs-australia" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Empire Chauffeurs Australia | Fleet Management & Booking Platform Case Study" />
                <meta name="twitter:description" content="How we built a complete fleet management and booking platform for Empire Chauffeurs Australia." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Empire Chauffeurs Australia Case Study" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'CreativeWork',
                            name: 'Empire Chauffeurs Australia — Fleet Management & Booking Platform',
                            description:
                                'A full-stack chauffeur dispatch and operations system covering bookings, driver management, payments, payouts, and reporting.',
                            url: 'https://www.fajraan.tech/case-studies/empire-chauffeurs-australia',
                            creator: {
                                '@type': 'Organization',
                                name: 'Fajraan Tech',
                                url: 'https://www.fajraan.tech',
                                logo: 'https://www.fajraan.tech/images/logo.webp',
                            },
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fajraan.tech/' },
                                { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.fajraan.tech/portfolio' },
                                { '@type': 'ListItem', position: 3, name: 'Empire Chauffeurs Australia', item: 'https://www.fajraan.tech/case-studies/empire-chauffeurs-australia' },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="How We Built a Complete Fleet Management & Booking Platform for Empire Chauffeurs Australia" />

                <section className="pb-15">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.p className="text-[20px] w-full xl:w-8/12" {...fadeInUp}>
                            A full-stack chauffeur dispatch and operations system covering bookings, driver management, payments, payouts, and reporting — built to run an entire fleet digitally.
                        </motion.p>
                    </div>
                </section>

                <VideoAreaSection imageUrl="/images/case-studies-ec.jpg" scrollDownId="case-study-challenge" />

                {/* QUICK FACTS */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="grid sm:grid-cols-4 items-start gap-5">
                            {quickFacts.map((fact, i) => (
                                <motion.div
                                    key={i}
                                    className="sm:border-l border-1 sm:pl-7"
                                    {...fadeInUp}
                                    transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                                >
                                    <p className="text-[16px] uppercase tracking-[0.5px] text-3 mb-2">{fact.label}</p>
                                    <p className="text-[20px] font-semibold text-primary">{fact.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CHALLENGE */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2" id="case-study-challenge">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary w-full lg:w-9/12 xl:w-8/12"
                            {...fadeInUp}
                        >
                            The Problem
                        </motion.h3>
                        <motion.p className="text-[20px] mt-6 xl:w-8/12" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
                            Empire Chauffeurs Australia needed to move their entire fleet operation off manual processes and disconnected tools. Before this platform, running the business meant:
                        </motion.p>

                        <div className="grid gap-5 pt-10 md:grid-cols-2">
                            {challenges.map((point, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white w-full p-8"
                                    {...fadeInUp}
                                    transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                                >
                                    <p className="text-[20px]">{point}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p className="text-[20px] mt-10 xl:w-8/12" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.5 }}>
                            They needed a system that could handle the full complexity of a real chauffeur operation — not a generic booking widget.
                        </motion.p>
                    </div>
                </section>

                {/* SOLUTION */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary"
                            {...fadeInUp}
                        >
                            What We Built
                        </motion.h3>
                        <motion.p className="text-[20px] mt-6 xl:w-8/12" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
                            We designed and built a full-stack chauffeur/limousine fleet management and booking platform, covering every part of the business:
                        </motion.p>

                        <div className="mt-15 space-y-4">
                            {solutionGroups.map((group, i) => (
                                <motion.div
                                    key={i}
                                    className="border-t border-1 pt-9 pb-4"
                                    {...fadeInUp}
                                    transition={{ ...fadeInUp.transition, delay: 0.05 * i }}
                                >
                                    <h6 className="text-[20px] md:text-[22px] lg:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold mb-3">
                                        {group.title}
                                    </h6>
                                    <ul className="text-[19px] list-disc list-inside space-y-1.5">
                                        {group.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <VideoAreaSection video videoUrl="https://videos.pexels.com/video-files/8345157/8345157-uhd_2560_1440_25fps.mp4" />

                {/* RESULT */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary w-full lg:w-9/12 xl:w-8/12"
                            {...fadeInUp}
                        >
                            The Outcome
                        </motion.h3>
                        <motion.p className="text-[20px] mt-6 xl:w-8/12" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
                            Empire Chauffeurs Australia now runs their entire fleet operation on a single, unified platform — from the moment a customer books a ride to the moment a driver gets paid.
                        </motion.p>

                        <div className="grid gap-5 pt-10 md:grid-cols-2">
                            {outcomes.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-start gap-3 bg-white w-full p-6"
                                    {...fadeInUp}
                                    transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                                >
                                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                                    <p className="text-[20px]">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.div className="bg-2 p-8 md:p-12 xl:p-15 xl:w-9/12 mx-auto" {...fadeInUp}>
                            <p className="font-normal leading-[133.333%] tracking-[-0.36px] text-primary text-[22px] md:text-[25px]">
                                    &quot;Fajraan Tech transformed the way we manage our chauffeur business. They delivered a complete booking and fleet management platform with real-time dispatching, driver management, Stripe payments, reporting, and countless custom features tailored to our operations. The attention to detail, technical expertise, and ongoing support have been exceptional. They truly became a trusted technology partner for our business.&quot;
                            </p>
                            <div className="mt-8">
                                <p className="text-[20px] font-semibold text-black">Hass Gill</p>
                                <span className="text-[18px] text-primary">Co-Founder at Empire Chauffeurs Australia</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.div className="bg-primary text-center p-10 md:p-15 xl:p-20" {...fadeInUp}>
                            <h3 className="text-[32px] md:text-[45px] lg:text-[55px] leading-[112.5%] tracking-[-2px] font-semibold text-white">
                                Looking for something similar for your fleet?
                            </h3>
                            <p className="text-[20px] text-white mt-6 xl:w-7/12 mx-auto">
                                We&apos;ve built this exact type of platform for chauffeur operators in Australia and Canada, and we can build it for you — whether that&apos;s a full custom platform or a faster, lower-cost version for a smaller fleet.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
                                <Button
                                variant="white"
                                    link
                                    aria-label="Book a Demo"
                                    href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact`}
                                    className="group inline-flex w-max items-center gap-2 rounded-[40px] border border-white bg-white px-6 py-3.5 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-primary transition-all duration-500 ease-in-out"
                                >
                                    Book a Demo
                                </Button>
                                <Button variant="white-text" link ariaLabel="See the chauffeur software overview" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}chauffeur-software`}>
                                    See the Chauffeur Software Overview
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}