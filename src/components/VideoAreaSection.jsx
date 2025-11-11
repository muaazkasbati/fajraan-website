import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";

export default function VideoAreaSection({ video = false, videoUrl = "https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4", imageUrl = "/images/hero/common-hero-thumb.png", scrollDownId = "service-section" }) {
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
                <section className="quanto-video-area style-2 overflow-hidden">
                    <div className="container custom-container position-relative">
                                            <motion.a
                            onClick={() => {
                                const element = document.getElementById(scrollDownId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="scroll-down section-link d-inline-flex align-items-center cursor-pointer z-10"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Scroll down
                            <motion.img
                                src="/images/icons/scroll-down.svg"
                                alt="Scroll down"
                                width="16"
                                height="28"
                                loading="lazy"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.a>
                        <motion.div
                            className="row"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="col-12 position-relative">
                                <motion.video
                                    ref={videoRef}
                                    className="quanto-video"
                                    src={videoUrl}
                                    loop
                                    playsInline
                                    data-speed="0.8"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <motion.button
                                    type="button"
                                    className="play-btn"
                                    aria-label="Play video"
                                    onClick={handlePlayPause}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isPlaying ? "Pause" : "Play"}
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </section>
                :
                <div className="quanto-video-area style-2 overflow-hidden">
                    <div className="container custom-container position-relative">
                        {/* Scroll Down Link */}
                        <motion.a
                            onClick={() => {
                                const element = document.getElementById(scrollDownId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="scroll-down section-link d-inline-flex align-items-center cursor-pointer"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Scroll down
                            <motion.img
                                src="/images/icons/scroll-down.svg"
                                alt="Scroll down"
                                width="16"
                                height="28"
                                loading="lazy"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.a>

                        {/* Image Section */}
                        <div className="row">
                            <div className="col-12">
                                <motion.div
                                    className="quanto-hero__thumb text-end"
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <img
                                        alt="hero-thumb"
                                        loading="lazy"
                                        className="w-100"
                                        src={imageUrl}
                                        style={{ color: "transparent", height: '600px', objectFit: 'cover' }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
