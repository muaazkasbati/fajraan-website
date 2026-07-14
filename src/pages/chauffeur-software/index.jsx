import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import VideoAreaSection from '@/components/VideoAreaSection'
import Button from '@/components/Button'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
import {
    CalendarClock,
    Users,
    CreditCard,
    Radio,
    MessageCircle,
    BarChart3,
} from 'lucide-react'
import LeadForm from '@/components/LeadForm'

const problems = [
    'Bookings coming in through phone calls, email, and third-party platforms — with no single source of truth',
    'Dispatching drivers manually over WhatsApp, with no real-time visibility into who\u2019s available',
    'No clear picture of driver payouts, vendor commissions, or monthly performance until you dig through spreadsheets',
    'Customers left guessing about driver ETA, flight delays, or booking status',
]

const features = [
    {
        icon: CalendarClock,
        title: 'Booking Engine',
        description:
            'Multi-step booking flow for airport transfers, hourly hire, and one-off rides — with flight tracking, meet & greet options, recurring bookings, and bulk CSV upload for existing schedules. Full lifecycle tracking from pending to completed.',
    },
    {
        icon: Users,
        title: 'Driver & Fleet Management',
        description:
            'Driver onboarding and approval workflows, vehicle assignment, live availability and location tracking, and automated driver payouts — including bank-ready ABA file exports for finance teams.',
    },
    {
        icon: CreditCard,
        title: 'Pricing & Payments',
        description:
            'Configurable pricing by zone, distance, or suburb — with tolls, surcharges, waiting charges, and after-hours pricing built in. Stripe-powered payments, automated invoicing, and vendor commission tracking.',
    },
    {
        icon: Radio,
        title: 'Dispatch & Live Operations',
        description:
            'Real-time driver assignment with accept/decline notifications, live socket-based tracking, and automatic no-show and cancellation handling.',
    },
    {
        icon: MessageCircle,
        title: 'Notifications',
        description:
            'Automated SMS, email, and WhatsApp updates for drivers and customers — booking confirmations, reminders, and status changes, without manual follow-up.',
    },
    {
        icon: BarChart3,
        title: 'Reporting & Admin Tools',
        description:
            'Full visibility into bookings, driver jobs, payouts, vendor performance, and customer activity — so owners and dispatchers always know what\u2019s happening across the fleet.',
    },
]

const packages = [
    {
        title: 'Custom Platform Build',
        description:
            'A fully bespoke system built around exactly how your business operates — like the platform we built for Empire Chauffeurs Australia.',
    },
    {
        title: 'Fast-Track Deployment',
        description:
            'A faster, lower-cost option for smaller fleets, built on our existing proven system architecture — live in weeks, not months.',
    },
    {
        title: 'Ongoing Support & Feature Development',
        description:
            'Your business keeps evolving — new payment methods, new reporting needs, new integrations. We stay on as your technical partner, not a one-off vendor.',
    },
]

const techStack = ['Node.js', 'Express', 'MongoDB', 'Next.js', 'React', 'Stripe', 'Socket.IO', 'Twilio', 'Google Maps']

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
}

export default function ChauffeurSoftware() {
    return (
        <>
            <Head>
                <title>Chauffeur & Limousine Booking, Dispatch & Fleet Management Software | Fajraan Tech</title>

                <meta name="description" content="Replace spreadsheets, WhatsApp groups, and disconnected booking tools with one platform built for chauffeur and limousine operators — bookings, dispatch, driver payouts, and reporting, all in one place." />
                <meta name="keywords" content="chauffeur booking software, limousine dispatch software, fleet management platform, chauffeur software Australia, driver payout software, chauffeur app development" />

                <link rel="canonical" href="https://www.fajraan.tech/chauffeur-software" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/chauffeur-software" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/chauffeur-software" />

                <meta property="og:title" content="Chauffeur & Limousine Booking, Dispatch & Fleet Management Software | Fajraan Tech" />
                <meta property="og:description" content="One platform for chauffeur and limousine operators — bookings, dispatch, driver payouts, and reporting, replacing spreadsheets and WhatsApp groups." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Fajraan Tech Chauffeur Software" />
                <meta property="og:url" content="https://www.fajraan.tech/chauffeur-software" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="Chauffeur & Limousine Booking, Dispatch & Fleet Management Software | Fajraan Tech" />
                <meta name="twitter:description" content="Bookings, dispatch, driver payouts, and reporting — one platform built for how chauffeur operations actually run." />
                <meta property="twitter:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta name="twitter:image:alt" content="Fajraan Tech Chauffeur Software" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: 'Chauffeur & Limousine Booking, Dispatch & Fleet Management Software',
                            description:
                                'A full-stack booking, dispatch, and fleet management platform for chauffeur and limousine companies covering bookings, driver payouts, pricing, and reporting.',
                            url: 'https://www.fajraan.tech/chauffeur-software',
                            provider: {
                                '@type': 'Organization',
                                name: 'Fajraan Tech',
                                url: 'https://www.fajraan.tech',
                                logo: 'https://www.fajraan.tech/images/logo.webp',
                                sameAs: [
                                    'https://www.linkedin.com/company/fajraan-tech',
                                    'https://twitter.com/fajraantech',
                                    'https://www.instagram.com/fajraantech',
                                    'https://www.facebook.com/fajraantech',
                                ],
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
                                { '@type': 'ListItem', position: 2, name: 'Chauffeur Software', item: 'https://www.fajraan.tech/chauffeur-software' },
                            ],
                        }),
                    }}
                />
            </Head>
            <Header />
            <main>
                <HeroSec title="Booking, Dispatch & Fleet Management Software for Chauffeur & Limousine Companies" />

                <section className="pb-15">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.div className="w-full xl:w-8/12" {...fadeInUp}>
                            <p className="text-[20px] mb-6">
                                Replace spreadsheets, WhatsApp groups, and disconnected booking tools with one system built for how chauffeur operations actually run — bookings, dispatch, driver payouts, and reporting, all in one platform.
                            </p>
                            <div className="flex flex-wrap items-center gap-6">
                                <Button variant="text" link ariaLabel="See the platform in action" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}case-studies/empire-chauffeurs-australia`}>
                                    See the Platform in Action
                                </Button>
                                <Button variant="text" link ariaLabel="Book a 15-min demo" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact`}>
                                    Book a 15-min Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <VideoAreaSection imageUrl="/images/service/image-custom-dashboard.webp" scrollDownId="chauffeur-problem" />

                {/* PROBLEM */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2" id="chauffeur-problem">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary w-full lg:w-9/12 xl:w-8/12"
                            {...fadeInUp}
                        >
                            Running a chauffeur fleet shouldn&apos;t mean juggling five different tools
                        </motion.h3>

                        <div className="grid gap-5 pt-15 md:grid-cols-2">
                            {problems.map((point, i) => (
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

                        <motion.p className="text-[20px] mt-10 xl:w-8/12" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
                            If this sounds familiar, you&apos;re not alone — most chauffeur companies outgrow generic booking tools long before they can justify building custom software. That&apos;s where we come in.
                        </motion.p>
                    </div>
                </section>

                {/* SOLUTION / FEATURES */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary"
                            {...fadeInUp}
                        >
                            One platform. Every part of your operation.
                        </motion.h3>

                        <div className="grid gap-5 pt-15 md:grid-cols-2 xl:grid-cols-3">
                            {features.map((feature, i) => {
                                const Icon = feature.icon
                                return (
                                    <motion.div
                                        key={i}
                                        className="bg-2 w-full sm:px-8 px-6 pt-10 pb-9"
                                        {...fadeInUp}
                                        transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
                                    >
                                        <div className="mb-6 text-primary">
                                            <Icon size={40} strokeWidth={1.5} />
                                        </div>
                                        <p className="text-[22px] md:text-[24px] leading-[135.714%] tracking-[-0.28px] font-semibold mb-3">
                                            {i + 1}. {feature.title}
                                        </p>
                                        <p className="text-[19px]">{feature.description}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <VideoAreaSection video videoUrl="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" />

                {/* PROOF */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="grid md:grid-cols-12 gap-6">
                            <motion.div className="md:col-span-6" {...fadeInUp}>
                                <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">
                                    Built for real chauffeur operators — not a template
                                </h3>
                                <p className="text-[20px] mt-6">
                                    We designed and built the full booking, dispatch, and payout platform running Empire Chauffeurs Australia&apos;s entire fleet operation — from customer bookings to driver payouts to business reporting. We&apos;ve delivered a similar system for a chauffeur company in Canada.
                                </p>
                                <div className="mt-8">
                                    <Button variant="text" link ariaLabel="Read the full case study" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}case-studies/empire-chauffeurs-australia`}>
                                        Read the Full Case Study
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                className="md:col-span-5 md:col-start-8 bg-white p-8 md:p-10 flex flex-col justify-center"
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                            >
                                <p className="font-normal leading-[133.333%] tracking-[-0.36px] text-primary text-[22px] md:text-[25px]">
                                    &quot;Fajraan Tech transformed the way we manage our chauffeur business. They delivered a complete booking and fleet management platform with real-time dispatching, driver management, Stripe payments, reporting, and countless custom features tailored to our operations. The attention to detail, technical expertise, and ongoing support have been exceptional. They truly became a trusted technology partner for our business.&quot;
                                </p>
                                <div className="mt-8">
                                    <p className="text-[20px] font-semibold text-black">Hass Gill</p>
                                    <span className="text-[18px] text-primary">Co-Founder at Empire Chauffeurs Australia</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PACKAGES */}
                <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.h3
                            className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-center lg:text-start text-primary"
                            {...fadeInUp}
                        >
                            Built to fit your fleet size and stage
                        </motion.h3>

                        <div className="grid gap-4 pt-15 md:grid-cols-3">
                            {packages.map((pkg, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-2 h-full w-full p-6.25 sm:p-7.5 md:p-10"
                                    {...fadeInUp}
                                    transition={{ ...fadeInUp.transition, delay: 0.15 * i }}
                                >
                                    <h5 className="text-[22px] md:text-[24px] lg:text-[26px] leading-[135.714%] tracking-[-0.28px] font-semibold mb-3">
                                        {pkg.title}
                                    </h5>
                                    <p className="text-[19px]">{pkg.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRUST / TECH */}
                <section className="lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <motion.div className="bg-primary p-8 md:p-12 xl:p-15" {...fadeInUp}>
                            <p className="text-[20px] md:text-[22px] text-white mb-6">
                                Powered by proven, secure technology built to scale with your fleet:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-[16px] md:text-[18px] font-semibold text-primary bg-secondary rounded-[40px] px-5 py-2.5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FINAL CTA / LEAD FORM */}
                <section className="lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
                    <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                        <div className="grid md:grid-cols-12 gap-8">
                            <motion.div className="md:col-span-5" {...fadeInUp}>
                                <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">
                                    See how it works for your fleet
                                </h3>
                                <p className="text-[20px] mt-6">
                                    Book a 15-minute demo and we&apos;ll walk you through the exact platform running a live chauffeur operation today. Tell us a bit about your fleet and we&apos;ll get back to you.
                                </p>
                            </motion.div>
                            <motion.div
                                className="md:col-span-6 md:col-start-7"
                                // className="md:col-span-6 md:col-start-7 bg-2/20 p-6.25 sm:p-7.5 md:p-10"
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                            >
                                <LeadForm />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}