"use client";
import React from "react";
import { motion } from "framer-motion";
import services from "@/utils/services.json";
import Link from "next/link";

const ServiceSection = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 80, rotateX: -80, transformOrigin: "top center" },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    const headerAnim = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" },
    };

    return (
        <section className="quanto-service-section section-padding-top-bottom overflow-hidden">
            <div className="container custom-container">
                {/* Header */}
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-7 col-xxl-6">
                        <motion.div className="quanto__header" {...headerAnim}>
                            <h3 className="title color-primary">We help you build your online success</h3>
                        </motion.div>
                    </div>
                </div>

                {/* Services */}
                <div className="row g-4 row-padding-top">
                    {services.slice(0,8).map((service, index) => (
                        <div key={index} className="col-md-6 col-lg-4 col-xxl-3">
                            <motion.div
                                className="quanto-service-box"
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: 0.15 * index }}
                            >
                                <div className="quanto-iconbox-icon mb-3">
                                    <img
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={52}
                                        height={52}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="quanto-iconbox-data">
                                    <div className="quanto-iconbox-data-wrapper">
                                        <h5>{service.title}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                    <Link className="quanto-link-btn" href={`/services/${service.slug}`}>
                                        View details
                                        <span>
                                            <i className="fa-solid fa-arrow-right arry1" />
                                            <i className="fa-solid fa-arrow-right arry2" />
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
