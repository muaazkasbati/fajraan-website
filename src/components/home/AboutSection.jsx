"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="quanto-about-section section-padding-top overflow-hidden">
      <div className="container custom-container">
        <div className="row justify-content-end">
          <div className="col-lg-10 col-xl-9 col-xxl-10">
            <div className="quanto-about__content">

              {/* Top Paragraph Animation */}
              <motion.div
                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <h4 className="text_invert">
                  We build smart digital strategies and creative designs that help social
                  brands, modern startups, and green companies grow. Our aim is to inspire
                  people to choose better, sustainable options with trust and confidence.
                </h4>
              </motion.div>

              {/* About Info Section */}
              <motion.div
                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                <div className="about-info row-margin-top">
                  <p className="text_invert">
                    From shaping a unique brand image to creating smooth digital experiences
                    and running smart marketing campaigns, we handle every project with care,
                    skill, and full focus on quality results.
                  </p>

                  <Link className="quanto-link-btn" href="/about">
                    More about us
                    <span>
                      <i className="fa-solid fa-arrow-right arry1" />
                      <i className="fa-solid fa-arrow-right arry2" />
                    </span>
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
