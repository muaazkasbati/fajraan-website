import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";

export default function VideoAreaSection({ video = false, videoUrl = "https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4", imageUrl = "/images/hero/common-hero-thumb.webp", scrollDownId = "service-section" }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <>
            {video ?
                <section className="relative overflow-hidden">
                    <div className="container relative mx-auto px-4 md:max-w-180 lg:max-w-242.5 xl:max-w-350">
                        <motion.span
                            onClick={() => {
                                const element = document.getElementById(scrollDownId);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="section-link absolute -right-7.5 top-0 z-10 flex cursor-pointer items-center gap-3 [writing-mode:vertical-lr] [text-orientation:mixed]"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Scroll down
                            <img
                                src="/images/icons/scroll-down.svg"
                                alt="Scroll down"
                                width="16"
                                height="28"
                                loading="lazy"
                                className="animate-[upDown_1.5s_ease-in-out_infinite_alternate]"
                            />
                        </motion.span>

                        <motion.div
                            className="relative w-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.video
                                ref={videoRef}
                                src={videoUrl}
                                loop
                                playsInline
                                data-speed="0.8"
                                className={`block max-h-200 w-full object-cover object-center ${!isPlaying ? "cursor-pointer" : ""}`}
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />

                            <motion.button
                                type="button"
                                aria-label="Play video"
                                onClick={handlePlayPause}
                                whileHover={{ scale: isPlaying ? 1 : 1.1 }}
                                whileTap={{ scale: isPlaying ? 1 : 0.95 }}
                                className="absolute left-1/2 top-1/2 grid place-content-center rounded-full bg-primary font-semibold tracking-[-0.18px] text-white transition-all duration-500 cursor-pointer -translate-x-1/2 -translate-y-1/2 opacity-100 visible h-20 w-20 text-[15px] sm:h-25 sm:w-25 sm:text-[18px] md:h-30 md:w-30 lg:h-45 lg:w-45 leading-[144.444%]"
                            >
                                {isPlaying ? "Pause" : "Play"}
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
                :
                <section className="relative overflow-hidden">
                    <div className="container relative mx-auto px-4 md:max-w-180 lg:max-w-242.5 xl:max-w-350">
                        <motion.span
                            onClick={() => {
                                const element = document.getElementById(scrollDownId);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="section-link absolute -right-7.5 top-0 z-10 flex cursor-pointer items-center gap-3 [writing-mode:vertical-lr] [text-orientation:mixed]"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Scroll down
                            <img
                                src="/images/icons/scroll-down.svg"
                                alt="Scroll down"
                                width="16"
                                height="28"
                                loading="lazy"
                                className="animate-[upDown_1.5s_ease-in-out_infinite_alternate]"
                            />
                        </motion.span>

                        <motion.div
                            className=""
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <img
                                alt="hero-thumb"
                                loading="lazy"
                                className="w-full h-150 object-cover"
                                src={imageUrl}
                            />
                        </motion.div>
                    </div>
                </section>
            }
        </>
    )
}
