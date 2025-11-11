"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { motion } from "framer-motion";

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
      image: "images/testimonial/Testimonial-1.jpg",
    },
    {
      text: `"This was a complex project involving booking management, payment integration, and multiple advanced features—and Fajraan Tech nailed it. They built a powerful, user-friendly platform that streamlined our operations and impressed our clients. Truly reliable and skilled."`,
      author: "Ahmed Al Qureshi",
      role: "AB Limousine",
      image: "images/testimonial/Testimonial-2.jpg",
    },
    {
      text: `"Fajraan Tech developed a stunning animated website for us that perfectly captured our brand’s personality. The creativity, smooth functionality, and attention to detail were outstanding. We couldn’t be happier with the results."`,
      author: "Layla Al Rashid",
      role: "TheForCollective",
      image: "images/testimonial/Testimonial-3.jpg",
    },
  ];



  return aboutPage ?
    <section className="quanto-testimonial3-section bg-color-2 section-padding-top-bottom">
      <div className="container custom-container">
        <div className="row g-4 justify-content-between overflow-hidden">
          {/* Left Title */}
          <div className="col-lg-6 col-xxl-5 pe-xxl-0">
            <motion.div
              className="quanto__header h-100"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="title color-primary">What clients say about Fajraan Tech</h3>
            </motion.div>
          </div>

          {/* Right Slider */}
          <div className="col-lg-6 col-xxl-5">
            <motion.div
              className="fade-anim"
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
                      <div className="testimonial3-content">
                        <p>{item.text}</p>
                        <div className="client-info">
                          <h5 className="client-name">{item.author}</h5>
                          <span className="client-designation">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div
                className="testimonial3-navigation"
                style={{ cursor: "pointer" }}
              >
                <div className="prev-btn bg-color-white">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="next-btn bg-color-white">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    :
    // <section className="quanto-testimonial-section section-padding-top overflow-hidden">
    //   <div className="container custom-container">
    //     <div className="quanto__header text-center mb-10">
    //       <h3 className="title">Client Testimonials</h3>
    //     </div>

    //     <div className="row g-4 justify-content-between">
    //       <div className="col-12 col-lg-6 col-xl-5">
    //         <Swiper
    //           modules={[Autoplay, EffectFade]}
    //           effect="fade"
    //           autoplay={{ delay: 4000 }}
    //           loop
    //           className="h-100"
    //         >
    //           {testimonials.map((t, index) => (
    //             <SwiperSlide key={index}>
    //               <div
    //                 className="testimonial-img rounded-xl"
    //                 style={{
    //                   backgroundImage: `url(${t.image})`,
    //                   backgroundPosition: "center",
    //                   backgroundSize: "cover",
    //                   height: "100%",
    //                 }}
    //               />
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>

    //       <div className="col-12 col-lg-6 col-xl-6">
    //         <Swiper
    //           modules={[Navigation, Autoplay]}
    //           navigation={{
    //             nextEl: ".next-slide",
    //             prevEl: ".prev-slide",
    //           }}
    //           autoplay={{ delay: 4000 }}
    //           loop
    //           className="testimonial-text-slider"
    //         >
    //           {testimonials.map((t, index) => (
    //             <SwiperSlide key={index}>
    //               <div className="testimonial-content">
    //                 <p>{t.text}</p>
    //                 <div className="author">
    //                   <h5 className="author-title color-primary">{t.author}</h5>
    //                   <span className="author-designation">{t.role}</span>
    //                 </div>
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>

    //         <div className="quanto-testimonial__navigation flex gap-4 mt-4">
    //           <div className="quanto-testimonial__prev prev-slide cursor-pointer">
    //             <i className="fa-solid fa-arrow-left" />
    //           </div>
    //           <div className="quanto-testimonial__next next-slide cursor-pointer">
    //             <i className="fa-solid fa-arrow-right" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="quanto-testimonial-section section-padding-top overflow-hidden">
      <div className="container custom-container">
        <div className="quanto__header text-center mb-10">
          <h3 className="title">Client Testimonials</h3>
        </div>

        <div className="row g-4 justify-content-between">
          {/* IMAGE SLIDER */}
          <div className="col-12 col-lg-6 col-xl-5">
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
              className="h-100"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="testimonial-img rounded-xl"
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
          <div className="col-12 col-lg-6 col-xl-6">
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
              className="testimonial-text-slider"
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-content">
                    <p>{t.text}</p>
                    <div className="author">
                      <h5 className="author-title color-primary">{t.author}</h5>
                      <span className="author-designation">{t.role}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="quanto-testimonial__navigation flex gap-4 mt-4">
              <div className="quanto-testimonial__prev prev-slide cursor-pointer">
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className="quanto-testimonial__next next-slide cursor-pointer">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
}