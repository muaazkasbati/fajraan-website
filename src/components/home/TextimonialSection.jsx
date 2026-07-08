"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSection({ aboutPage = false }) {
  const imgSwiperRef = useRef(null);
  const textSwiperRef = useRef(null);

  // we store swiper instances in state so controller can be set after initialization
  const [imgController, setImgController] = useState(null);
  const [textController, setTextController] = useState(null);
  const testimonials = [
    {
      text: `"Working with Fajraan Tech was a game-changer. They delivered a sleek, animated website that not only elevated our brand presence but also made our online experience more engaging for customers. The team was professional, fast, and exceeded our expectations."`,
      author: "Maaz Khawaja",
      role: "Founder at Meem Products",
      image: "images/testimonial/Testimonial-1.webp",
    },
    {
      text: `"This was a complex project involving booking management, payment integration, and multiple advanced features—and Fajraan Tech nailed it. They built a powerful, user-friendly platform that streamlined our operations and impressed our clients. Truly reliable and skilled."`,
      author: "Ahmed Al Qureshi",
      role: "AB Limousine",
      image: "images/testimonial/Testimonial-2.webp",
    },
    {
      text: `"Fajraan Tech developed a stunning animated website for us that perfectly captured our brand’s personality. The creativity, smooth functionality, and attention to detail were outstanding. We couldn’t be happier with the results."`,
      author: "Layla Al Rashid",
      role: "TheForCollective",
      image: "images/testimonial/Testimonial-3.webp",
    },
  ];



  return aboutPage ?
    <section className="bg-2 lg:py-32.5 md:py-20 py-16.25">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 overflow-hidden">
          <div className="md:col-span-5 col-span-1">
            <motion.div
              className="border-r border-1 md:h-100 pr-27"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">What clients say about Fajraan Tech</h3>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:col-start-8 col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                slidesPerView={1}
                loop={true}
                spaceBetween={30}
                speed={700}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="swiper-slide"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.3,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="">
                        <p className="font-normal leading-[133.333%] tracking-[-0.36px] text-primary md:text-[25px]">{item.text}</p>
                        <div className="mt-8">
                          <p className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold text-black">{item.author}</p>
                          <span className="text-[18px] text-primary mt-4">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>


              <div className="mt-5 flex items-center justify-start gap-2 xl:mt-12">
                <div className="flex items-center justify-center h-12.5 w-12.5 rounded-full text-primary md:h-15 md:w-15 md:text-[18px] lg:h-17.5 lg:w-17.5 prev-btn bg-white cursor-pointer">
                  <ChevronLeft size={22} />
                </div>
                <div className="flex items-center justify-center h-12.5 w-12.5 rounded-full text-primary md:h-15 md:w-15 md:text-[18px] lg:h-17.5 lg:w-17.5 next-btn bg-white cursor-pointer">
                  <ChevronRight size={22} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    :
    <section className="lg:pt-32.5 md:pt-20 pt-16.25 overflow-hidden">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="text-center mb-10">
          <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold z-3 translate-y-[calc(100%+40px)] text-center text-white mix-blend-difference 2xl:translate-y-[calc(100%+60px)] relative">Client Testimonials</h3>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-4 gap-8">
          {/* IMAGE SLIDER */}
          <div className="md:col-span-5 col-span-1">
            <Swiper
              // modules
              modules={[Autoplay, EffectFade, Controller]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              onSwiper={(swiper) => {
                imgSwiperRef.current = swiper;
                setImgController(swiper);
              }}
              controller={{ control: textController }}
              className="md:h-195 h-100"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="rounded-xl"
                    style={{
                      backgroundImage: `url(${t.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      height: "100%",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* TEXT SLIDER */}
          <div className="md:col-span-6 md:col-start-7 col-span-1">
            <Swiper
              modules={[Navigation, Autoplay, Controller]}
              navigation={{
                nextEl: ".next-slide",
                prevEl: ".prev-slide",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              onSwiper={(swiper) => {
                textSwiperRef.current = swiper;
                setTextController(swiper);
              }}
              controller={{ control: imgController }}
              className=""
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="sm:mt-45">
                    <p className="font-normal leading-[133.333%] tracking-[-0.36px] text-black md:text-[25px] xl:text-[36px]">{t.text}</p>
                    <div className="mt-8">
                      <p className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] font-semibold text-primary">{t.author}</p>
                      <span className="text-[18px] mt-4">{t.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-3.75 flex items-center gap-2 md:mt-7.5 lg:gap-4 lg:mt-12">
              <div className="flex h-11.25 w-11.25 items-center justify-center gap-2 rounded-full bg-2 md:h-12.5 md:w-12.5 lg:h-17.5 lg:w-17.5 prev-slide cursor-pointer">
                <ArrowLeft size={22} />
              </div>
              <div className="flex h-11.25 w-11.25 items-center justify-center gap-2 rounded-full bg-2 md:h-12.5 md:w-12.5 lg:h-17.5 lg:w-17.5 next-slide cursor-pointer">
                <ArrowRight size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
}