
import React from "react";
import { motion } from "framer-motion";
import services from "@/utils/servicesNew.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../Button";

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
        <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <motion.div className="w-full lg:w-9/12 xl:w-7/12" {...headerAnim}>
                    <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">We help you build your online success</h3>
                </motion.div>


                <div className="grid gap-5 pt-15 md:grid-cols-2">
                    {services.slice(0, 8).map((service, index) => (
                        <motion.div key={index} className="bg-white w-full sm:px-10 px-8 pt-12 pb-11" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.15 * index }}>
                            <div className="sm:mb-15 mb-5">
                                <img src={service.icon} alt={`${service.title} icon`} width={52} height={52} loading="lazy" />
                            </div>
                            <div className="sm:space-y-22.5 space-y-3">
                                <div className="">
                                    <p className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold mb-4">{service.title}</p>
                                    <p className="text-[20px]">{service.description}</p>
                                </div>
                                <Button link ariaLabel={`Follow to ${service.title}`} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}services/${service.slug}`}>
                                    View details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
