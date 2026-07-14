import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const IndustrySpotlightSection = () => {
    return (
        <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden bg-2">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            alt="Chauffeur & fleet management software dashboard"
                            loading="lazy"
                            className="w-full h-100 md:h-110 lg:h-125 object-cover"
                            src="/images/service/image-custom-dashboard.webp"
                        />
                    </motion.div>

                    <motion.div
                        className="order-1 md:order-2"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[65px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">
                            A Niche We Know Well: Chauffeur & Fleet Software
                        </h3>
                        <p className="text-[20px] mt-6">
                            Alongside our core services, we&apos;ve built deep, hands-on experience developing software for the chauffeur and fleet management industry. See our dedicated solutions and case study on our Chauffeur Software page.
                        </p>
                        <div className="mt-8">
                            <Button
                                link
                                ariaLabel="Explore Chauffeur & Fleet Software"
                                href={`${process.env.NEXT_PUBLIC_APPFRONTURL}chauffeur-software`}
                            >
                                Explore Chauffeur & Fleet Software
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySpotlightSection;