import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section className="section-hero">
                <div className="bg-gradient-to-b from-[#092a54] via-[#092a54] to-[#00839f]">
                    <div className="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]">
                        <div className="container">
                            <div className="relative z-10 grid grid-cols-1 items-center justify-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]">
                                <div className="text-center text-white lg:text-start">
                                    <h1>
                                        A {" "}
                                        <span className="inline-flex items-center gap-5">
                                            Powerful
                                            <img
                                                src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                                alt="Fajraan Tech Star Shape"
                                                width="74"
                                                height="70"
                                                className="w-12 md:w-14 lg:w-auto h-auto"
                                            />
                                        </span> {" "}
                                        Tech Solutions Partner
                                    </h1>
                                    <p className="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
                                        Fajraan Tech is your trusted partner for end-to-end digital solutions.
                                        We specialize in custom web, mobile, and desktop applications while delivering creative design, powerful development, and result-driven marketing strategies.
                                        Serving businesses across Saudi Arabia, UAE, Bahrain, and beyond — we help brands innovate, scale, and thrive in the digital era.
                                    </p>


                                    <div className="mb-[50px] flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                                        <div className="flex -space-x-3">
                                            <img
                                                src="assets/img/images/th-1/hero-user-1.png"
                                                alt="client-1"
                                                width="60"
                                                height="60"
                                                className="z-0 h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                                            />
                                            <img
                                                src="assets/img/images/th-1/hero-user-2.png"
                                                alt="client-2"
                                                width="60"
                                                height="60"
                                                className="z-[2] h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                                            />
                                            <img
                                                src="assets/img/images/th-1/hero-user-3.png"
                                                alt="client-3"
                                                width="60"
                                                height="60"
                                                className="z-[3] h-[66px] w-[66px] rounded-[50%] border-[6px] border-black"
                                            />
                                        </div>
                                        <span className="text-base font-semibold">
                                            Trusted by 1,000+ satisfied clients across industries
                                        </span>
                                    </div>

                                    <a
                                        href="#contact"
                                        className="btn-primary relative pr-20 md:pr-[118px]"
                                    >
                                        Book a free consultation
                                        <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                                            <img
                                                src="assets/img/icons/icon-buttery-white-phone.svg"
                                                alt="Contact Fajraan Tech"
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                    </a>
                                </div>

                                <div className="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-white p-[5px] lg:mx-0">
                                    <img
                                        src="assets/img/new/image-hero.jpeg"
                                        alt="hero-img"
                                        width="485"
                                        height="540"
                                        className="h-full w-full rounded-[20px] object-cover"
                                        style={{ minHeight: "540px", objectFit: "cover" }}
                                    />
                                </div>

                                <img
                                    src="assets/img/elemnts/element-light-lime-curve-arrow.svg"
                                    alt="element-light-lime-curve-arrow"
                                    width="284"
                                    height="153"
                                    className="absolute bottom-0 left-1/2 -z-10 hidden h-auto max-w-52 -translate-x-1/2 lg:inline-block xl:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection