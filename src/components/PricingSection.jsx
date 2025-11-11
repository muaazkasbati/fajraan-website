"use client";

import React from "react";
import { motion } from "framer-motion";

const pricingData = [
    {
        title: "Launch",
        info: "Perfect for startups or small businesses needing a professional online presence.",
        price: "6,000",
        // price: "AED 3,500 - AED 6,000",
        features: [
            "Custom responsive website (up to 7 pages)",
            "Basic CMS integration",
            "Standard UI/UX design",
            "Basic on-page SEO setup",
            "1 month of post-launch support",
        ],
    },
    {
        title: "Scale",
        info: "Best for growing businesses ready to scale with advanced features or e-commerce.",
        price: "15,000",
        // price: "AED 9,000 - AED 15,000",
        features: [
            "Custom web app or e-commerce platform (React + Node.js)",
            "Advanced UI/UX design & prototyping",
            "CMS or Admin panel for content management",
            "SEO setup + Google Analytics integration",
            "3 months of free support",
        ],
    },
    {
        title: "Transform",
        info: "Ideal for established companies or startups building large-scale digital platforms.",
        price: "25,000+",
        features: [
            "Full-stack web or mobile platform (MERN / scalable architecture)",
            "Payment gateways & API integrations",
            "Complete UI/UX strategy with user testing",
            "Branding & localization support",
            "12 months of maintenance & technical support",
        ],
    },
];

const PricingSection = () => {
    return (
        <section className="quanto-pricing-area section-padding-top-bottom bg-color-2">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="quanto__header">
                            <motion.h3
                                className="title text-center text-lg-start color-primary"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                  Choose the perfect plan for your business
                            </motion.h3>
                        </div>
                    </div>
                </div>

                <div className="row g-4 row-padding-top">
                    {pricingData.map((plan, index) => {
                        const overlayVariants = {
                            initial: { x: "-100%", opacity: 0, visibility: "hidden" },
                            hover: { x: "0%", opacity: 1, visibility: "visible" },
                        };

                        return (
                            <motion.div
                                key={index}
                                className="col-md-6 col-xl-4"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                            >
                                {/* Parent box */}
                                <motion.div
                                    className="quanto-pricing-box bg-white"
                                    style={{ position: "relative", overflow: "hidden" }}
                                    whileHover="hover" // triggers children variants
                                    initial="initial"
                                >
                                    {/* Overlay child controlled by parent hover */}
                                    <motion.div
                                        className="hover-overlay"
                                        variants={overlayVariants}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />

                                    <h5 className="pricing-title">{plan.title}</h5>
                                    <p className="pricing-info">{plan.info}</p>
                                    <h3 className="pricing color-secondary">{plan.price} <small style={{fontSize:'30px'}}>AED</small></h3>

                                    <div className="pricing-list">
                                        <ul className="custom-ul">
                                            {plan.features.map((feature, i) => (
                                                <li key={i}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a className="quanto-link-btn btn-pill" href={`/contact?plan=${plan.title}`}>
                                        Go with this plan
                                        <span>
                                            <i className="fa-solid fa-arrow-right arry1" />
                                            <i className="fa-solid fa-arrow-right arry2" />
                                        </span>
                                    </a>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default PricingSection;
