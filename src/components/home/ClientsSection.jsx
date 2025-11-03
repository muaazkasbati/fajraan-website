"use client";
import React from "react";
import { motion } from "framer-motion";

const clientLogos = [
    "/images/clients/logo-1.webp",
    "/images/clients/logo-2.webp",
    "/images/clients/logo-3.webp",
    "/images/clients/logo-4.webp",
    "/images/clients/logo-5.webp",
    "/images/clients/logo-6.webp",
    "/images/clients/logo-7.webp",
    "/images/clients/logo-8.webp",
    "/images/clients/logo-9.webp",
    "/images/clients/logo-10.png",
];

export default function ClientsSection() {
    return (
        <div className="clients-area overflow-hidden section-padding-top">
            <div className="container custom-container">
                {/* Header Section */}
                <div className="row align-items-end">
                    <div className="col-md-6">
                        <div className="quanto__header text-center text-md-start">
                            <motion.p
                                className="title mx-auto mx-md-0"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                We worked with the largest global brands
                            </motion.p>
                        </div>
                    </div>

                    <div className="col-md-6 ps-md-0">
                        <motion.div
                            className="quanto__header logo"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {/* Top Two Logos */}
                            {clientLogos.slice(0, 2).map((logo, i) => (
                                <div className="client-box" key={i}>
                                    <img
                                        src={logo}
                                        alt={`client-logo-${i + 1}`}
                                        className="img-fluid"
                                        style={{ height: "auto", width: "auto" }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Clients Grid */}
                <motion.div
                    className="row"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="col-12 clients__box-wrapper"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    staggerChildren: 0.1,
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        {clientLogos.slice(2).map((logo, index) => (
                            <motion.div
                                key={index}
                                className="client-box"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`client-logo-${index + 3}`}
                                    className="img-fluid"
                                    style={{ height: "auto", width: "auto" }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
