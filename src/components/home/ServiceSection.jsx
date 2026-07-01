"use client";
import React from "react";
import { motion } from "framer-motion";
import services from "@/utils/servicesNew.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            <div className="container mx-auto px-4 custom-container">
                {/* Header */}
                <div className="flex">
                    <div className="w-full lg:w-9/12 xl:w-7/12">
                        <motion.div className="quanto__header" {...headerAnim}>
                            <h3 className="title color-primary">We help you build your online success</h3>
                        </motion.div>
                    </div>
                </div>

                {/* Services */}
                <div className="grid gap-4 row-padding-top md:grid-cols-2">
                    {services.slice(0, 8).map((service, index) => (
                        <div key={index} className="w-full">
                            <motion.div className="quanto-service-box" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.15 * index }}>
                                <div className="quanto-iconbox-icon mb-3">
                                    <img src={service.icon} alt={`${service.title} icon`} width={52} height={52} loading="lazy" />
                                </div>
                                <div className="quanto-iconbox-data">
                                    <div className="quanto-iconbox-data-wrapper">
                                        <p className="title">{service.title}</p>
                                        <p>{service.description}</p>
                                    </div>
                                    <Link aria-label={`Follow to ${service.title}`} className="quanto-link-btn" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}services/${service.slug}`}>
                                        View details
                                        <span>
                                            <ArrowRight className="arry1" size={22} />
                                            <ArrowRight className="arry2" size={22} />
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
