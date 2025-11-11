"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const projectsList = [
    {
        title: "Kinetic Sandscapes",
        year: "2024",
        category: "Branding",
        image: "/images/project/project-1.webp",
    },
    {
        title: "Brooklyn Brewery",
        year: "2024",
        category: "Photography",
        image: "/images/project/project-3.webp",
    },
    {
        title: "Regenerative Farming",
        year: "2024",
        category: "Branding",
        image: "/images/project/project-5.webp",
    },
    {
        title: "Hopscotch Payments",
        year: "2024",
        category: "Development",
        image: "/images/project/project-2.webp",
    },
    {
        title: "Stories Worthwhile",
        year: "2024",
        category: "UI/UX Design",
        image: "/images/project/project-4.webp",
    },
    {
        title: "Fintech Accelerator",
        year: "2024",
        category: "UI/UX Design",
        image: "/images/project/project-6.webp",
    },
];

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
                                        <a>
                                            <motion.div
                                                className="quanto-project-thumb overflow-hidden"
                                                {...imageAnim}
                                                transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                            >
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    className="w-100"
                                                    loading="eager"
                                                    decoding="async"
                                                />
                                            </motion.div>
                                        </a>
                                        <div className="quanto-project-content">
                                            <h5 className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <a>{proj.title}</a>
                                            </h5>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj.year}
                                                <i className="bi bi-dash" />
                                                {proj.category}
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
                                    <Link className="quanto-link-btn btn-dark" href="/portfolio">
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
                                        <a>
                                            <motion.div
                                                className="quanto-project-thumb overflow-hidden"
                                                {...imageAnim}
                                                transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                            >
                                                <img
                                                    src={proj.image}
                                                    alt={proj.title}
                                                    className="w-100"
                                                    loading="eager"
                                                    decoding="async"
                                                />
                                            </motion.div>
                                        </a>
                                        <div className="quanto-project-content">
                                            <h5 className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <a>{proj.title}</a>
                                            </h5>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj.year}
                                                <i className="bi bi-dash" />
                                                {proj.category}
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