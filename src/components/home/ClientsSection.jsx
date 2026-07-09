
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
    "/images/clients/logo-10.webp",
];

export default function ClientsSection() {
    return (
        <div className="lg:pt-32.5 md:pt-20 pt-16.25 overflow-hidden">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <div className="grid md:grid-cols-2 items-end">
                    <div className="text-center md:text-left">
                        <motion.p
                            className="text-[24px] max-w-60 tracking-[-.18px] font-semibold mb-12 mx-auto md:mx-0"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            We worked with the largest global brands
                        </motion.p>
                    </div>

                    <div className="md:pl-0">
                        <motion.div
                            className="grid grid-cols-3"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            {/* Top Two Logos */}
                            {clientLogos.slice(0, 2).map((logo, i) => (
                                <div className="aspect-square border border-1 grid place-content-center" key={i}>
                                    <img
                                        src={logo}
                                        alt={`client-logo-${i + 1}`}
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Clients Grid */}
                <motion.div
                    className=""
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="grid grid-cols-6"
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
                                className="aspect-square border border-1 grid place-content-center"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`client-logo-${index + 3}`}
                                    className="max-w-full h-auto"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
