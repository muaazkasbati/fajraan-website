import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'
import OurAchievementSection from '@/components/home/OurAchivementSection';
import TestimonialSection from '@/components/home/TextimonialSection';
import ProcessSection from '@/components/home/ProcessSection';
import HeroSec from '@/components/HeroSec';
import SectionHead from '@/components/SectionHead';
import Reveal from "@/components/Reveal";
import Button from '@/components/Button';

const principles = [
    {
        title: "Speed without shortcuts",
        text: "We ship in short sprints, with a first live version in as little as 10 days, on foundations that are built to grow rather than be thrown away.",
    },
    {
        title: "One team, end to end",
        text: "Developers, designers and AI specialists work on the same project together, so nothing gets lost between hand-offs.",
    },
    {
        title: "Real industry depth",
        text: "Our chauffeur and fleet software runs real businesses every day. That practical experience shapes how we build for everyone else.",
    },
];

export default function About() {
    return (
        <>
            <Head>
                <title>About Us | Fajraan Tech – Global Software Development Company</title>

                <meta name="description" content="Learn about Fajraan Tech: a global software development company building custom web, mobile, and desktop applications, along with AI automation and chatbot solutions, for businesses worldwide." />
                <meta name="keywords" content="about Fajraan Tech, software development company, who we are, tech company, web development agency, mobile app developers, AI automation company, AI chatbot developers, global digital agency" />

                <link rel="canonical" href="https://www.fajraan.tech/about" />

                <link rel="alternate" hrefLang="en" href="https://www.fajraan.tech/about" />
                <link rel="alternate" hrefLang="x-default" href="https://www.fajraan.tech/about" />

                <meta property="og:title" content="About Us | Fajraan Tech – Global Software Development Company" />
                <meta property="og:description" content="Meet the team behind Fajraan Tech: building scalable custom web, mobile, and desktop solutions with UI/UX design, SEO, and data services for businesses around the world." />
                <meta property="og:image" content="https://www.fajraan.tech/images/og/og-image.webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="The Fajraan Tech team – Global Software Development Company" />
                <meta property="og:url" content="https://www.fajraan.tech/about" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@FajraanTech" />
                <meta name="twitter:creator" content="@FajraanTech" />
                <meta name="twitter:title" content="About Us | Fajraan Tech – Global Software Development Company" />
                <meta name="twitter:description" content="Meet the people behind Fajraan Tech: a global team delivering custom web, mobile & desktop apps, UI/UX design, SEO, and data services worldwide." />
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
            <main id="main">
                <HeroSec
                    crumbs={[{ label: "About" }]}
                    title="Empowering brands to grow with digital innovation."
                    intro="Fajraan Tech is a global software team building custom web, mobile and desktop applications, plus AI automation and chatbots, for businesses worldwide."
                >
                    <div className="mt-6 flex items-center gap-4 border-t border-line pt-6">
                        <p className="t-num text-[44px] font-semibold leading-none tracking-[-0.03em] text-primary">4.9</p>
                        <div>
                            <ul className="flex gap-0.5 text-secondary" aria-label="Rated 4.9 out of 5">
                                {[...Array(5)].map((_, i) => (
                                    <li key={i}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor" /></svg>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-1 text-[14px] text-muted">10+ reviews from clients worldwide</p>
                        </div>
                    </div>
                </HeroSec>

                <section aria-hidden="true">
                    <div className="wrap grid grid-cols-12 gap-4 md:gap-6">
                        <Reveal className="col-span-12 overflow-hidden bg-paper md:col-span-7">
                            <img alt="" loading="eager" fetchPriority="high" decoding="async" width={900} height={700} className="aspect-[4/3] h-full w-full object-cover" src="/images/about/about-sec-img-1.webp" />
                        </Reveal>
                        <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1 md:gap-6">
                            <Reveal delay={80} className="overflow-hidden bg-paper">
                                <img alt="" loading="lazy" decoding="async" width={600} height={420} className="aspect-[4/3] h-full w-full object-cover md:aspect-[16/10]" src="/images/about/about-sec-img-2.webp" />
                            </Reveal>
                            <Reveal delay={160} className="overflow-hidden bg-paper">
                                <img alt="" loading="lazy" decoding="async" width={600} height={420} className="aspect-[4/3] h-full w-full object-cover md:aspect-[16/10]" src="/images/about/about-sec-img-3.webp" />
                            </Reveal>
                        </div>
                    </div>
                </section>

                <OurAchievementSection className="!pt-16 md:!pt-24" />

                <section className="section !pt-6" id="about-section">
                    <div className="wrap">
                        <SectionHead index="01" eyebrow="Our approach" title="We create seamless digital experiences that help businesses grow." />
                        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12">
                            <Reveal className="space-y-6 text-muted lg:col-span-6">
                                <p>
                                    At Fajraan Tech, we blend creativity with technology to craft digital solutions that make an impact. We build new products from scratch in fast sprints, develop AI agents and automation that take real work off people's plates, and set up proven business platforms like ERP, school and courier management, all backed by solid web and mobile engineering.
                                </p>
                                <p>
                                    Our team brings together developers, designers, and AI specialists who work closely to build solutions that help brands scale. We&apos;ve also developed a specialty in chauffeur and fleet management software, giving us practical, real-world experience in that industry.
                                </p>
                                <Button link href="/services" variant="text">Explore our services</Button>
                            </Reveal>
                            <ol className="lg:col-span-5 lg:col-start-8">
                                {principles.map((p, i) => (
                                    <Reveal as="li" key={p.title} delay={i * 70} className="border-t border-line py-6 first:pt-0 first:border-t-0 lg:first:pt-6 lg:first:border-t">
                                        <p className="t-num text-[14px] font-semibold text-secondary">{String(i + 1).padStart(2, "0")}</p>
                                        <h3 className="t-h4 mt-2 text-primary">{p.title}</h3>
                                        <p className="mt-2 text-[16px] text-muted">{p.text}</p>
                                    </Reveal>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                <ProcessSection index="02" />
                <TestimonialSection index="03" />
            </main>
            <Footer />
        </>
    )
}
