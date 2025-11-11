import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
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
            <Header />
            <HeroSec title="Terms & Conditions" />
            <section className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <motion.div
                        className="row g-4 justify-content-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="col-xl-8">
                            <motion.div
                                className="blog-body"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <p>
                                    Welcome to Fajraan Tech. By accessing our website or using our services, you agree to the following terms and conditions.
                                    Please read them carefully before proceeding.
                                </p>

                                <h3>1. Use of Services</h3>
                                <p>
                                    Our services are provided for lawful purposes only. You agree not to misuse our website or engage in any activity that disrupts or harms other users.
                                </p>

                                <h3>2. Intellectual Property</h3>
                                <p>
                                    All content, designs, and code on this website are the intellectual property of Fajraan Tech and may not be copied, distributed, or reproduced without permission.
                                </p>

                                <h3>3. Payment & Refund Policy</h3>
                                <p>
                                    Payment terms are agreed upon before project initiation. Refunds are subject to review based on project stage and deliverables.
                                </p>

                                <h3>4. Limitation of Liability</h3>
                                <p>
                                    Fajraan Tech shall not be held responsible for any direct or indirect damages arising from the use of our website or services.
                                </p>

                                <h3>5. Modifications</h3>
                                <p>
                                    We reserve the right to modify or update these terms at any time. Continued use of the website implies acceptance of any revisions.
                                </p>

                                <h3>6. Governing Law</h3>
                                <p>
                                    These Terms & Conditions are governed by the laws of the United Arab Emirates.
                                    Any disputes will be resolved under UAE jurisdiction.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    )
}
