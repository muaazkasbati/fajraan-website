import React from "react";
import { motion } from "framer-motion";

const HeroSec = ({ title = "" }) => {
    return (
        <section className="lg:pt-50 md:pt-32.5 pt-28 lg:pb-32.5 md:pb-20 pb-16.25 overflow-hidden">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <div className="w-full max-w-[90%]">
                    <motion.div
                        initial={{ opacity: 0, rotateX: -15, y: 60 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "center top" }}
                    >
                        <h1 className="text-[60px] md:text-[70px] lg:text-[90px] xl:text-[100px] leading-[110%] text-primary font-semibold">
                            {title}
                        </h1>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSec;
