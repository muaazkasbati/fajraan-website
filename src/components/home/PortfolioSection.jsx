"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { toWebP } from "@/utils/data";

const PortfolioSection = ({ theme = "dark", projects = [] }) => {
    const imageAnim = {
        initial: { opacity: 0, x: -300 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" },
    };

    return (
        <section className={`quanto-project-section ${theme === "dark" ? "bg-color-primary" : ""} section-padding-top-bottom overflow-hidden`}>
            <div className="container mx-auto px-4 custom-container">
                <div className="flex flex-wrap gap-x-0 gap-y-4 md:gap-y-0 justify-between">
                    {/* Left Column */}
                    <div className="w-full md:w-5/12 order-1 md:order-0">
                        <div className="flex flex-wrap gap-0">
                            {projects.slice(0, Math.ceil(projects.length / 2)).map((proj, index) => (
                                <div key={index} className="w-full project-row-gap">
                                    <div className="quanto-data-box overflow-hidden">
                                        {/* <Link> */}
                                        <motion.div
                                            className="quanto-project-thumb overflow-hidden"
                                            {...imageAnim}
                                            transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                        >
                                            {/* <Image
                                                src={proj.image}
                                                alt={proj.title}
                                                width={573}
                                                height={717}
                                                priority
                                                decoding="async"
                                                className="w-100"
                                                style={{ objectFit: "cover" }}
                                            /> */}
                                            <Image
                                                src={toWebP(proj?.image)}
                                                alt={proj.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </motion.div>
                                        {/* </Link> */}
                                        <div className="quanto-project-content">
                                            <p className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <span>{proj?.title}</span>
                                            </p>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj?.year} - {proj?.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-6/12 order-0 md:order-1">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="quanto__header text-center md:text-right mb-4">
                                    <Link className="quanto-link-btn btn-dark" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}portfolio`}>
                                        View more works
                                        <span>
                                            <ArrowRight className="arry1" size={22} />
                                            <ArrowRight className="arry2" size={22} />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {projects.slice(Math.ceil(projects.length / 2)).map((proj, index) => (
                                <div key={index} className="w-full md:w-10/12 mx-auto project-row-gap">
                                    <div className="quanto-data-box overflow-hidden">
                                        {/* <Link> */}
                                        <motion.div
                                            className="quanto-project-thumb overflow-hidden"
                                            {...imageAnim}
                                            transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                                        >
                                            {/* <Image
                                                src={proj.image}
                                                alt={proj.title}
                                                width={573}
                                                height={717}
                                                priority
                                                decoding="async"
                                                className="w-100"
                                                style={{ objectFit: 'cover', }}
                                            /> */}
                                            <Image
                                                src={toWebP(proj?.image)}
                                                alt={proj?.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </motion.div>
                                        {/* </Link> */}
                                        <div className="quanto-project-content">
                                            <p className={`${theme === "dark" ? "text-color-white" : ""} line-clamp-1`}>
                                                <span>{proj?.title}</span>
                                            </p>
                                            <span className={`quanto-data-date ${theme === "dark" ? "text-color-white" : ""}`}>
                                                {proj?.year} - {proj?.category}
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