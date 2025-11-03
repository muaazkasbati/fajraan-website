"use client";
import { motion } from "framer-motion";
import HeroVideoSection from "./HeroVideoSection";


const HeroSection = () => {

  return (
    <section className="quanto-hero-section overflow-hidden">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12 position-relative">
            {/* Animated Heading */}
            <motion.div
              initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.45 }}
            >
              <div className="quanto-hero__content move-anim">
                <h1 className="title color-primary">
                  Building smart ideas with a spark of{" "}
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={110} height={110} viewBox="0 0 110 110" fill="none" className="color-secondary">
                      <path
                        d="M60.5 0H49.5L53.0145 50.2065L19.9982 12.22L12.22 19.9982L50.2065 53.0145L1.44248e-06 49.5L0 60.5L50.2065 56.9856L12.22 90.0018L19.9982 97.78L53.0145 59.7935L49.5 110H60.5L56.9855 59.7935L90.0018 97.78L97.78 90.0018L59.7935 56.9855L110 60.5V49.5L59.7936 53.0145L97.78 19.9982L90.0018 12.22L56.9855 50.2065L60.5 0Z"
                        fill="currentColor"
                      />
                    </svg>
                    creativity
                  </span>
                </h1>
              </div>
            </motion.div>

            {/* Info Section */}
            <div className="quanto-hero__info">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              >
                <p>
                  Fajraan Tech is your digital partner for custom web development, mobile
                  apps, UI/UX design, and digital marketing solutions.
                </p>
              </motion.div>

              {/* Client Info */}
              <motion.div
                className="client-info"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                <div className="client-images">
                  <img alt="avatar-add" loading="lazy" width={52} height={52} src="/images/hero/avatar-add.png" />
                  <img alt="avatar-1" loading="lazy" width={52} height={52} src="/images/hero/avatar-1.webp" />
                  <img alt="avatar-2" loading="lazy" width={52} height={52} src="/images/hero/avatar-2.webp" />
                </div>

                <div className="client-data">
                  <h6 className="counter-item d-flex align-items-center">
                    <div>9</div>
                    <em>+ Satisfied Clients</em>
                  </h6>
                  <span>Trusted Web & App Development Agency</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        {/* <div className="row">
          <div className="col-lg-12">
            <motion.div
              className="quanto-hero__thumb section-margin-top"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            >
              <div className="video-wrapper">
                <video loop muted autoPlay playsInline>
                  <source src="https://videos.pexels.com/video-files/8940171/8940171-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div> */}
        <HeroVideoSection />
      </div>
    </section>
  );
};

export default HeroSection;
