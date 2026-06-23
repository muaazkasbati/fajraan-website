"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioSection = ({ theme = "dark", projects = [] }) => {
    const imageAnim = {
        initial: { opacity: 0, x: -300 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    return (
        <section className={`quanto-project-section ${theme === "dark" ? "bg-color-primary" : ""} section-padding-top-bottom overflow-hidden`}>
            <div className="container custom-container">
                <div className="row g-0 gy-4 gy-md-0 justify-content-between">
                    {/* Left Column */}
                    <div className="col-12 col-md-5 order-1 order-md-0">
                        <div className="row g-0">
                            {projects.slice(0, Math.ceil(projects.length / 2)).map((proj, index) => (
                                <div key={index} className="col-md-12 project-row-gap">
                                    <div className="quanto-data-box overflow-hidden">
                                        {/* <Link> */}
                                        <motion.div
                                            className="quanto-project-thumb overflow-hidden"
                                            {...imageAnim}
                                            transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                        >
                                            <Image
                                                src={proj.image}
                                                alt={proj.title}
                                                width={573}
                                                height={717}
                                                priority
                                                decoding="async"
                                                className="w-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </motion.div>
                                        {/* </Link> */}
                                        <div className="quanto-project-content">
                                            <h5 className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <span>{proj.title}</span>
                                            </h5>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj.year} - {proj.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="quanto__header text-center text-md-end mb-4">
                                    <Link className="quanto-link-btn btn-dark" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}portfolio`}>
                                        View more works
                                        <span>
                                            <i className="fa-solid fa-arrow-right arry1" />
                                            <i className="fa-solid fa-arrow-right arry2" />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {projects.slice(Math.ceil(projects.length / 2)).map((proj, index) => (
                                <div key={index} className="col-md-10 mx-auto project-row-gap">
                                    <div className="quanto-data-box overflow-hidden">
                                        {/* <Link> */}
                                        <motion.div
                                            className="quanto-project-thumb overflow-hidden"
                                            {...imageAnim}
                                            transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                        >
                                            <Image
                                                src={proj.image}
                                                alt={proj.title}
                                                width={573}
                                                height={717}
                                                priority
                                                decoding="async"
                                                className="w-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </motion.div>
                                        {/* </Link> */}
                                        <div className="quanto-project-content">
                                            <h5 className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <span>{proj.title}</span>
                                            </h5>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj.year} - {proj.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;