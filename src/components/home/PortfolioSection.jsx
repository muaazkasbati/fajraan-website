import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // If you plan to add navigation
import "swiper/css/pagination"; // If you plan to add pagination
import "swiper/css/scrollbar"; // Optional
import { useEffect, useRef, useState } from "react";
import { slides } from '@/utils/data';

const PortfolioSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            // Set navigation elements
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            // Initialize and update navigation
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);
    return (
        <>
            <section className="section-portfolio" id='portfolio'>
                <div className="bg-primary">
                    <div className="section-space">
                        <div className="container">
                            <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
                                <h2 className="jos text-secondary">
                                    Bringing ideas to life through{" "}
                                    <span>
                                        digital design{" "}
                                        <img
                                            src="assets/img/elemnts/shape-light-lime-5-arms-star-2.svg"
                                            alt="creative star"
                                            width="74"
                                            height="70"
                                            className="inline-block h-auto w-8 md:w-10 lg:w-[57px]"
                                        />
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <div className="relative group/nav">
                            {/* Slider */}
                            <Swiper
                                modules={[Navigation, Pagination]}
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={true}
                                pagination={{ clickable: true, el: null }} // Pagination enabled but hidden to match current styling
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper; // Store Swiper instance
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="projectSliderOne slider-center-inline"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="group relative overflow-hidden rounded-[20px] border-[5px] border-white">
                                            <img
                                                src={slide.img}
                                                alt={slide.title}
                                                width={516}
                                                height={390}
                                                style={{minHeight:"390px", objectFit:"cover"}}
                                                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                                            />
                                            <div className="w-full bg-gradient-to-b from-transparent to-secondary z-10 absolute bottom-0 flex flex-col items-start gap-x-10 gap-y-8 p-6 sm:flex-row sm:items-center">
                                                <div className="max-w-[380px] flex-1 text-white">
                                                    <a
                                                        // href="portfolio-details.html"
                                                        className="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] group-hover:text-colorLightLime md:text-3xl"
                                                    >
                                                        {slide.title}
                                                    </a>
                                                    <p className="line-clamp-2">
                                                        {slide.description}
                                                    </p>
                                                </div>
                                                <a
                                                    // href="portfolio-details.html"
                                                    className="relative inline-flex items-start justify-center overflow-hidden"
                                                >
                                                    <img
                                                        src="assets/img/icons/icon-buttery-white-arrow-right.svg"
                                                        alt="icon"
                                                        width={34}
                                                        height={28}
                                                        className="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src="assets/img/icons/icon-light-lime-arrow-right.svg"
                                                        alt="hover icon"
                                                        width={34}
                                                        height={28}
                                                        className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Nav Buttons */}
                            <div className="static xl:absolute w-full mt-16 xl:mt-0 z-20 flex justify-center xl:justify-between top-1/2 -translate-y-1/2 gap-x-10 px-10">
                                <div className="project-button-prev inline-flex h-14 w-14 rounded-[50%] items-center justify-center border-b-2 border-white bg-colorLightLime xl:opacity-0 group-hover/nav:opacity-100 xl:invisible group-hover/nav:visible xl:translate-x-10 group-hover/nav:translate-x-0 transition-all duration-300">
                                    <button ref={prevRef}>
                                        <img
                                            src="assets/img/icons/icon-black-arrow-right.svg"
                                            alt="icon-black-arrow-right"
                                            width="34"
                                            height="28"
                                            style={{
                                                rotate: "180deg",
                                            }}
                                        />
                                    </button>
                                </div>
                                <div className="project-button-next inline-flex h-14 w-14 rounded-[50%] items-center justify-center border-b-2 border-white bg-colorLightLime xl:opacity-0 group-hover/nav:opacity-100 xl:invisible group-hover/nav:visible xl:-translate-x-10 group-hover/nav:translate-x-0 transition-all duration-300">
                                    <button ref={nextRef}>
                                        <img
                                            src="assets/img/icons/icon-black-arrow-right.svg"
                                            alt="icon-black-arrow-right"
                                            width="34"
                                            height="28"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioSection