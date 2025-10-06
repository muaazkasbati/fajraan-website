import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import React from 'react'

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | Fajraan Tech</title>
                <meta
                    name="description"
                    content="Read the Terms and Conditions governing the use of Fajraan Tech’s website, services, and digital solutions."
                />
                <meta
                    name="keywords"
                    content="terms and conditions, fajraan tech, website terms, service agreement, uae business policy"
                />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Terms & Conditions | Fajraan Tech" />
                <meta property="og:description" content="These Terms & Conditions outline your rights and responsibilities when using Fajraan Tech’s services." />
                <meta property="og:image" content="https://fajraan.com/assets/img/og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com/terms-and-conditions" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms & Conditions | Fajraan Tech" />
                <meta name="twitter:description" content="Understand Fajraan Tech’s terms of use for all services, solutions, and website content." />
                <meta name="twitter:image" content="https://fajraan.com/assets/img/og-image.jpg" />
            </Head>

            <div className="page-wrapper">
                <Header />
                <main className="main-wrapper">
                    <BreadCrumb page="Terms & Conditions" />

                    <section className="section-policy">
                        <div className="section-space">
                            <div className="container max-w-[900px] mx-auto">
                                <h2 className="jos text-center mb-8">Terms & Conditions</h2>
                                <p className="mb-5">
                                    Welcome to Fajraan Tech. By accessing our website or using our services, you agree to the following terms and conditions.
                                    Please read them carefully before proceeding.
                                </p>

                                <h4 className="font-semibold mb-2">1. Use of Services</h4>
                                <p className="mb-5">
                                    Our services are provided for lawful purposes only. You agree not to misuse our website or engage in any activity that disrupts or harms other users.
                                </p>

                                <h4 className="font-semibold mb-2">2. Intellectual Property</h4>
                                <p className="mb-5">
                                    All content, designs, and code on this website are the intellectual property of Fajraan Tech and may not be copied, distributed, or reproduced without permission.
                                </p>

                                <h4 className="font-semibold mb-2">3. Payment & Refund Policy</h4>
                                <p className="mb-5">
                                    Payment terms are agreed upon before project initiation. Refunds are subject to review based on project stage and deliverables.
                                </p>

                                <h4 className="font-semibold mb-2">4. Limitation of Liability</h4>
                                <p className="mb-5">
                                    Fajraan Tech shall not be held responsible for any direct or indirect damages arising from the use of our website or services.
                                </p>

                                <h4 className="font-semibold mb-2">5. Modifications</h4>
                                <p className="mb-5">
                                    We reserve the right to modify or update these terms at any time. Continued use of the website implies acceptance of any revisions.
                                </p>

                                <h4 className="font-semibold mb-2">6. Governing Law</h4>
                                <p>
                                    These Terms & Conditions are governed by the laws of the United Arab Emirates.  
                                    Any disputes will be resolved under UAE jurisdiction.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
