import React from 'react'

const AboutSection = () => {
    return (
        <>
            <section className="section-about bg-white" id='about'>
                <div className="section-space">
                    <div className="container">
                        <div className="section-block mb-10 md:mb-[60px] xl:mb-20">
                            <div className="grid items-center gap-x-6 gap-y-10 text-center lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:text-start xl:gap-x-[134px]">
                                <h2 className="jos">
                                    We help {" "}
                                    <span>
                                        Modern {" "}
                                        <img
                                            src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                                            alt="star"
                                            width="74"
                                            height="70"
                                            className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                    Brands Thrive Online
                                </h2>
                                <p className="jos section-para">
                                    Fajraan Tech builds tailor-made digital products—from clean UI/UX to robust web and mobile applications. We turn ideas into powerful tools for growth.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.4fr]">
                            <div className="jos relative flex items-center justify-center overflow-hidden rounded-[25px] border-[5px] border-black">
                                <img
                                    src="assets/img/new/image-about.jpeg"
                                    alt="about-img"
                                    width="846"
                                    height="476"
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                    // style={{}}
                                />
                                {/* <div className="absolute inline-block">
                                    <a
                                        data-fslightbox="gallery"
                                        href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                                        className="btn-primary relative pr-16"
                                        aria-label="video-play"
                                    >
                                        Watch
                                        <span className="rounded-[50% absolute right-[0px] inline-flex items-center justify-center">
                                            <img
                                                src="assets/img/icons/icon-buttery-white-black-play.svg"
                                                alt="play"
                                                width="50"
                                                height="50"
                                            />
                                        </span>
                                    </a>
                                </div> */}
                            </div>

                            <div className="jos rounded-[25px] bg-black p-[30px]">
                                <ul className="divide-y divide-[#333333]">
                                    <li className="py-6 text-center first-of-type:pt-0 last-of-type:pb-0">
                                        <div className="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]" data-module="countup">
                                            <span className="start-number" data-countup-number="6">3</span>+
                                        </div>
                                        <span className="mt-2 inline-block text-colorButteryWhite">
                                            Years of hands-on experience
                                        </span>
                                    </li>
                                    <li className="py-6 text-center first-of-type:pt-0 last-of-type:pb-0">
                                        <div className="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]" data-module="countup">
                                            <span className="start-number" data-countup-number="50">8</span>+
                                        </div>
                                        <span className="mt-2 inline-block text-colorButteryWhite">
                                            Projects launched successfully
                                        </span>
                                    </li>
                                    <li className="py-6 text-center first-of-type:pt-0 last-of-type:pb-0">
                                        <div className="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]" data-module="countup">
                                            <span className="start-number" data-countup-number="100">70</span>%
                                        </div>
                                        <span className="mt-2 inline-block text-colorButteryWhite">
                                            Client satisfaction rate
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutSection