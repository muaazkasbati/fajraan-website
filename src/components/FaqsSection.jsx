import React from "react";

const faqsData = [
    {
        question: "What services does Fajraan Tech offer?",
        answer:
            "We provide end-to-end digital solutions including web development, mobile apps, desktop software, UI/UX design, branding, digital marketing, SEO, and more.",
    },
    {
        question: "What is your development process like?",
        answer:
            "Our process includes discovery & requirements, design & architecture, development, testing, and launch. We ensure full transparency and collaboration at every stage.",
    },
    {
        question: "How much does a project cost?",
        answer:
            "Costs vary depending on the complexity and requirements of your project. We provide tailored quotes after discussing your goals in detail.",
    },
    {
        question: "How do you handle client feedback?",
        answer:
            "We work closely with our clients, incorporating feedback at every stage. We also offer structured revision rounds to ensure complete satisfaction.",
    },
    {
        question: "Can we see samples of your work?",
        answer:
            "Yes, you can explore our portfolio on the website to see case studies and examples of projects we've delivered for clients across industries.",
    },
    {
        question: "Do you provide post-launch support and maintenance?",
        answer:
            "Yes, we offer ongoing support and maintenance packages to keep your website, app, or software updated, secure, and running smoothly after launch.",
    },
];


const FaqsSection = () => {
    return (
        <section className="section-faq">
            <div className="section-space">
                <div className="container">
                    <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                        <h2 className="jos">
                            These FAQs help{" "}
                            <span>
                                <img
                                    src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                    alt="star"
                                    width="74"
                                    height="70"
                                    className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                />
                            </span>{" "}
                            clients learn about us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
                        {faqsData.map((faq, index) => (
                            <div
                                key={index}
                                className="jos flex flex-col gap-y-4"
                            >
                                <h4 className="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(/assets/img/icons/icon-lightlime-question.svg)]">
                                    {faq.question}
                                </h4>
                                <div className="ml-10 text-[#0C0C0C]">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;
