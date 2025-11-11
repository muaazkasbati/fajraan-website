import React from "react";
import { motion } from "framer-motion";

const faqData = [
    {
        question: "What happens after I approve the design or proposal?",
        answer:
            "Once you approve the design or proposal, our development team begins implementation — setting up the project structure, creating components, and integrating functionality. You’ll receive regular progress updates until launch.",
    },
    {
        question: "Can you work with my existing website, app, or design files?",
        answer:
            "Yes. Whether you already have wireframes, Figma designs, or a live website, we can improve, rebuild, or scale it. We often take over incomplete projects or outdated systems and modernize them using the latest tech stack.",
    },
    {
        question: "Do you charge for revisions or updates?",
        answer:
            "Minor revisions during the development phase are included. Major scope changes or additional features requested after approval may involve extra cost — but we always confirm before proceeding.",
    },
    {
        question: "Can agencies or startups outsource their work to Fajraan Tech?",
        answer:
            "Absolutely. We regularly partner with agencies, startups, and businesses needing a reliable tech team for white-label or outsourced projects. We maintain full confidentiality and deliver under your brand if required.",
    },
    {
        question: "What do I need to provide before the project starts?",
        answer:
            "We’ll need your brand assets (logo, colors, content), goals, and feature requirements. For larger projects, we conduct a short discovery call to clarify the scope, timeline, and deliverables before signing off.",
    },
    {
        question: "How long does a typical project take?",
        answer:
            "Timelines vary by scope. Basic websites take 3–4 weeks, while custom apps or platforms may take 2–4 months. We provide a detailed timeline and milestones before starting development.",
    },
    {
        question: "Do you handle ongoing maintenance and updates?",
        answer:
            "Yes. We offer monthly maintenance and marketing retainers covering updates, security, performance, and SEO — ensuring your website or app stays optimized and up to date.",
    },
    {
        question: "What technologies does Fajraan Tech specialize in?",
        answer:
            "We primarily use the MERN stack (MongoDB, Express, React, Node.js), along with Next.js, Tailwind CSS, Firebase, and modern tools for performance, scalability, and SEO-friendly solutions.",
    },
];


const FaqsSection = () => {
    return (
        <section className="quanto-faq-area bg-color-white overflow-hidden section-padding-bottom section-padding-top-bottom">
            <div className="container custom-container">
                <div className="row g-4 justify-content-between">
                    <motion.div
                        className="col-lg-6 col-xl-5 col-xxl-4 gsap-sticky"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="quanto__header">
                            <h3 className="title color-primary">Frequently Asked Questions</h3>
                            <p className="subtitle text-gray-500 mt-2">
                                Everything you need to know about working with Fajraan Tech — from project flow to support.
                            </p>
                        </div>

                    </motion.div>

                    <div className="col-lg-6 col-xl-7 col-xxl-7 gsap-scroll">
                        <div className="accordion quanto-faq-accordion" id="accordionExample">
                            {faqData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="accordion-item"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h6 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded={index === 0 ? "true" : "false"}
                                            aria-controls={`collapse${index}`}
                                        >
                                            {item.question}
                                        </button>
                                    </h6>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">{item.answer}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;
