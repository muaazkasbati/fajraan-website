

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

// const pricingData = [
//     {
//         title: "Launch",
//         info: "Perfect for startups or small businesses needing a professional online presence.",
//         price: "6,000",
//         // price: "AED 3,500 - AED 6,000",
//         features: [
//             "Custom responsive website (up to 7 pages)",
//             "Mobile-friendly design",
//             "Basic CMS integration",
//             "Basic functionality",
//             "Standard UI/UX design",
//             "Basic on-page SEO setup",
//             "1 month of post-launch support",
//         ],
//     },
//     {
//         title: "Scale",
//         info: "Best for growing businesses ready to scale with advanced features or e-commerce.",
//         price: "15,000",
//         // price: "AED 9,000 - AED 15,000",
//         features: [
//             "Custom web app or e-commerce platform",
//             "Advanced UI/UX design & prototyping",
//             "CMS or Admin panel for content management",
//             "SEO setup + Google Analytics integration",
//             "3 months of free support",
//         ],
//     },
//     {
//         title: "Transform",
//         info: "Ideal for established companies or startups building large-scale digital platforms.",
//         price: "25,000+",
//         features: [
//             "Full-stack web or mobile platform (scalable architecture)",
//             "Payment gateways & API integrations",
//             "Complete UI/UX strategy with user testing",
//             "Branding & localization support",
//             "12 months of maintenance & technical support",
//         ],
//     },
// ];

const pricingData = [
    {
        title: "Launch",
        info: "Perfect for startups or small businesses needing a professional online presence.",
        price: "$6,000",
        features: [
            "Custom responsive website (up to 7 pages)",
            "Mobile-friendly design",
            "Basic CMS integration",
            "Basic functionality",
            "Standard UI/UX design",
            "Basic on-page SEO setup",
            "1 month of post-launch support",
            "Optional: basic AI chatbot add-on (custom quote)",
        ],
    },
    {
        title: "Scale",
        info: "Best for growing businesses ready to scale with advanced features or e-commerce.",
        price: "$15,000",
        features: [
            "Custom web app or e-commerce platform",
            "Advanced UI/UX design & prototyping",
            "CMS or Admin panel for content management",
            "SEO setup + Google Analytics integration",
            "3 months of free support",
            "Optional: AI chatbot or workflow automation add-on (custom quote)",
        ],
    },
    {
        title: "Transform",
        info: "Ideal for established companies or startups building large-scale digital platforms.",
        price: "$25,000+",
        features: [
            "Full-stack web or mobile platform (scalable architecture)",
            "Payment gateways & API integrations",
            "Complete UI/UX strategy with user testing",
            "12 months of maintenance & technical support",
            "Optional: custom AI automation & chatbot system, scoped and quoted separately",
        ],
    },
];

// Note: AI Automation & AI Chatbot work is priced as a custom, scoped add-on
// (not a fixed tier) since scope varies widely — from a simple support chatbot
// to a full multi-step automation system. Quote separately per project after discovery.

const PricingSection = () => {
    return (
        <section className="lg:py-32.5 md:py-20 py-16.25 bg-2">
            <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
                <motion.h3
                    className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-center lg:text-start text-primary"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Choose the perfect plan for your business.
                </motion.h3>

                <div className="grid gap-4 pt-15 md:grid-cols-2 xl:grid-cols-3">
                    {pricingData.map((plan, index) => {
                        const overlayVariants = {
                            initial: { x: "-100%", opacity: 0, visibility: "hidden" },
                            hover: { x: "0%", opacity: 1, visibility: "visible" },
                        };

                        return (
                            <motion.div
                                key={index}
                                className="h-full w-full"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="group hover:text-white relative z-0 h-full overflow-hidden bg-white p-6.25 sm:p-7.5 md:p-10 xl:px-15 xl:pt-13.5 xl:pb-12"
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <motion.div
                                        className="absolute inset-0 -z-10 bg-primary opacity-0"
                                        variants={overlayVariants}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />

                                    <h5 className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold mb-1.5 transition-all duration-300">
                                        {plan.title}
                                    </h5>

                                    <p className="text-[20px] mb-3.75 md:mb-5 lg:mb-8">
                                        {plan.info}
                                    </p>

                                    <h3 className="mb-3.75 text-[40px] text-secondary transition-all duration-300 md:mb-5 lg:mb-8 lg:text-[66px] leading-none font-semibold">
                                        $ {plan.price}
                                    </h3>

                                    <ul className="mb-5 space-y-2.5 text-[19px]">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-1.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 md:h-6 md:w-6">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z" fill="currentColor" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="white" link ariaLabel={`Follow to Contact`} href={`${process.env.NEXT_PUBLIC_APPFRONTURL}contact?plan=${plan.title}`}>
                                        Go with this plan
                                    </Button>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default PricingSection;
