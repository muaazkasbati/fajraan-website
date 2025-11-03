import React from "react";
import { motion } from "framer-motion";

const HeroSec = ({ title = "" }) => {
    return (
        <section className="quanto-hero-service-section section-padding-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row g-4">
                    <div className="col-lg-12 col-xxl-11">
                        <div>
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
                                <div className="quanto-hero-service__content">
                                    <h1 className="title color-primary">
                                        {title}
                                    </h1>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSec;
