import { motion } from "framer-motion";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import Head from 'next/head'
import React from 'react'
import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            // Send form data to API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, plan: router.query.plan ? router.query.plan : '' }),
            });

            // Check response status
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData.message);
                return;
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us | Fajraan Tech</title>
                <meta name="description" content="Fajraan Tech builds custom web, mobile, and desktop applications with UI/UX design, SEO, and data services for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta name="keywords" content="custom web development, mobile app development, UI UX design, SEO services, software company Saudi Arabia, app development UAE, tech company Middle East" />
                <meta name="author" content="Fajraan Tech" />
                <meta property="og:title" content="Contact Us | Fajraan Tech" />
                <meta property="og:description" content="We deliver scalable custom web, mobile, and desktop applications with UI/UX and SEO for businesses in Saudi, UAE, Bahrain & beyond." />
                <meta property="og:image" content="https://fajraan.com/your-og-image.jpg" />
                <meta property="og:url" content="https://fajraan.com" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Fajraan Tech" />
                <meta name="twitter:description" content="Scalable and smart digital solutions: web, mobile, desktop apps, UI/UX, SEO and data services across the Middle East." />
                <meta name="twitter:image" content="https://fajraan.com/your-twitter-image.jpg" />

            </Head>
            <Header />
            <HeroSec title="We’re just a message away to bring your ideas to life" />
            <div className="quanto-map-area style-2 overflow-hidden">
                <div className="container custom-container position-relative">
                    <a className="scroll-down section-link" href="#service-section">
                        Scroll down
                        <img
                            src="/images/icons/scroll-down.svg"
                            alt="Scroll down"
                            width="16"
                            height="28"
                            loading="lazy"
                            style={{ color: "transparent" }}
                        />
                    </a>
                    <div className="row">
                        <div className="col-12">
                            <motion.iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0383690874!2d54.897151952799646!3d25.07565689924587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1755890374332!5m2!1sen!2s"
                                width="600"
                                height="400"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="d-block w-100"
                                style={{ border: 0 }}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <section
                id="quanto-contact-section"
                className="quanto-contact-section bg-color-white section-padding-top-bottom"
            >
                <div className="container custom-container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6 col-xxl-5">
                            <motion.div
                                className="quanto-contact__content"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h3 className="title color-primary">Let’s build something amazing together!</h3>
                                <p>
                                    At Fajraan Tech, we’re always ready to discuss your next digital project — whether it’s a website, app,
                                    design, or marketing campaign. Reach out to our team and let’s turn your vision into reality.
                                </p>

                                <div className="address">
                                    <h6>Address:</h6>
                                    <span>
                                        Sheikh Zayed Road, <br />
                                        Dubai, United Arab Emirates
                                    </span>
                                </div>

                                <div className="contact-info">
                                    <h5>
                                        <a href="mailto:info@fajraan.com">info@fajraan.com</a>
                                    </h5>
                                    <a href="https://wa.me/971542259592" target="_blank" rel="noopener noreferrer">
                                        +971 54 225 9592 (WhatsApp only)
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-lg-6 col-xxl-6">
                            <motion.form
                                onSubmit={handleSubmit}
                                action="#"
                                className="quanto-contact__form"
                                autoComplete="off"
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className="row g-3 g-xl-4">
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Your name"
                                            required
                                            className="form-control"
                                            pattern="[A-Za-z\s]+"
                                            title="Please enter only alphabets and spaces"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            placeholder="Company name"
                                            className="form-control"
                                            type="text"
                                            name="company"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="Enter your phone number"
                                            required
                                            className="form-control"
                                            type="tel"
                                            name="phone"
                                            pattern="^\+?[0-9]{7,15}$"
                                            title="Please enter a valid phone number (digits only, with optional + and 7–15 digits)"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="Enter your e-mail address"
                                            required
                                            className="form-control"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                            title="Please enter a valid email address"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            placeholder="What is the subject of your query?"
                                            className="form-control"
                                            type="text"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            rows="6"
                                            placeholder="Describe about your project"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button type="submit" className="quanto-link-btn btn-pill">
                                            Submit
                                            <span>
                                                <i className="fa-solid fa-arrow-right arry1"></i>
                                                <i className="fa-solid fa-arrow-right arry2"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </motion.form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
