
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

    const PortfolioCard = ({ proj, index, second = false }) => {
        return (
            <>
                <div className={`w-full ${second ? "md:w-10/12 mx-auto" : ""} lg:mb-37.5 md:mb-20 mb-15`}>
                    <div className="overflow-hidden">
                        <motion.div
                            className="w-full aspect-573/458 relative overflow-hidden"
                            {...imageAnim}
                            transition={{ ...imageAnim.transition, delay: 0.2 * index }}
                        >
                            <Image
                                src={toWebP(proj?.image)}
                                alt={proj.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover block"
                            />
                        </motion.div>
                        <div className="mt-5">
                            {/* <p className={`text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold ${theme === "dark" ? "text-white" : "text-primary"} line-clamp-1`}>
                                <span>{proj?.title}</span>
                            </p> */}
                            <p
                                className={`text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold ${theme === "dark" ? "text-white" : "text-primary"
                                    } line-clamp-1`}
                            >
                                <Link
                                    href={proj?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    referrerPolicy="no-referrer"
                                    className="transition-all duration-300 hover:opacity-70 hover:underline underline-offset-4"
                                >
                                    {proj?.title}
                                </Link>
                            </p>
                            <span className={`text-[20px] ${theme === "dark" ? "text-white" : ""}`}>
                                {proj?.year} - {proj?.category}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <section className={`lg:py-32.5 md:py-20 py-16.25 ${theme === "dark" ? "bg-primary" : ""} overflow-hidden`}>
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <div className="flex flex-wrap gap-x-0 gap-y-4 md:gap-y-0 justify-between">
                    <div className="w-full md:w-5/12 order-1 md:order-0">
                        <div className="flex flex-wrap gap-0">
                            {projects.slice(0, Math.ceil(projects.length / 2)).map((proj, index) => (
                                <PortfolioCard key={index} index={index} proj={proj} />
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 order-0 md:order-1">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="mb-22.5 text-center md:text-right">
                                    <Link
                                        href={`${process.env.NEXT_PUBLIC_APPFRONTURL}portfolio`}
                                        className={`group inline-flex w-max items-center gap-2 border-b border-primary pb-0 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] transition-all duration-500 ease-in-out sm:pb-1 ${theme === "dark" ? "bg-primary text-white border-white" : "text-primary"}`}
                                    >
                                        View more works

                                        <span className={`relative inline-block h-5.5 w-5.5 overflow-hidden ${theme === "dark" ? "text-white" : "text-primary"}`}>
                                            <ArrowRight size={22} className="absolute left-0 top-0 -rotate-45 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-5.5 group-hover:-top-5.5" />
                                            <ArrowRight size={22} className="absolute -left-5.5 top-5.5 -rotate-45 opacity-80 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-0 group-hover:top-0" />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {projects.slice(Math.ceil(projects.length / 2)).map((proj, index) => (
                                <PortfolioCard key={index} proj={proj} second />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;