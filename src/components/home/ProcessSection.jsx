import { accordionData } from '@/utils/data';
import React, { useState } from 'react'

const ProcessSection = () => {
    const [toggle, setToggle] = useState(0);
    const handleToggle = (index) => {
        setToggle(toggle === index ? index : index);
    };
    return (
        <>
            <section className="section-process bg-white">
                <div className="section-space">
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[1fr_minmax(0,0.67fr)] xxl:gap-x-[72px]">
                            <div className="section-block text-center lg:text-start">
                                <h2 className="jos">
                                    Our{" "}
                                    <span>
                                        High-Quality{" "}
                                        <img
                                            src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                            alt="shape-light-lime-5-arms-star"
                                            width="74"
                                            height="70"
                                            className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                    Development Process
                                </h2>
                                <div className="jos mt-6">
                                    <p className="section-para">
                                        At Fajraan Tech, we combine transparency, collaboration, and technical expertise to deliver solutions that align with your business objectives and user needs.
                                    </p>
                                    <p className="section-para">
                                        While our process follows a proven framework, we adapt each step to match the unique goals, scale, and complexity of your project.
                                    </p>
                                </div>
                            </div>

                            <ul className="jos flex flex-col gap-y-6">
                                {accordionData?.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`accordion-item-style-1 accordion-item ${toggle === index ? "accordion-item active" : null
                                            }`}
                                    >
                                        <div
                                            className="accordion-header text-ColorBlack flex items-center justify-between gap-6 text-xl font-semibold"
                                            onClick={() => handleToggle(index)}
                                        >
                                            <button className="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl">
                                                {item.title}
                                            </button>
                                            <div className="accordion-icon">
                                                <img
                                                    src="assets/img/icons/icon-black-arrow-less-down.svg"
                                                    alt="icon-black-arrow-less-down"
                                                />
                                            </div>
                                        </div>
                                        {toggle === index && (
                                            <div className="accordion-body max-w-[826px] opacity-80">
                                                <p className="pt-5">{item.content}</p>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProcessSection