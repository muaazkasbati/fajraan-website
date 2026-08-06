import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqData } from "@/utils/data";



const FaqsSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <section className="bg-white overflow-hidden lg:py-32.5 md:py-20 py-16.25">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <div className="flex flex-wrap gap-4 justify-between">
                    <motion.div
                        className="w-full md:w-1/2 lg:w-5/12 xl:w-4/12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">Frequently Asked Questions</h3>
                        <p className="text-[20px] text-3 mt-2">
                            Everything you need to know about working with Fajraan Tech, from project flow to support.
                        </p>
                    </motion.div>

                    <div className="w-full md:w-1/2 lg:w-7/12 xl:w-7/12">
                        <div className="">
                            {faqData.map((item, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        className="border-t border-1"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <h6 className="text-[20px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[141.667%] tracking-[-0.24px] font-semibold">
                                            <button
                                                aria-label={item.question}
                                                type="button"
                                                aria-expanded={isOpen}
                                                onClick={() => toggleAccordion(index)}
                                                className={`pt-9 pb-4 w-full text-left cursor-pointer ${isOpen ? "" : "collapsed"}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h6>

                                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                            <div className="pb-8">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;
