"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="quanto-about-section section-padding-top overflow-hidden">
      <div className="container mx-auto px-4 custom-container">
        <div className="flex justify-end">
          <div className="w-full lg:w-10/12 xl:w-9/12 2xl:w-10/12">
            <div className="quanto-about__content">

              {/* Top Paragraph Animation */}
              <motion.div
                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <p className="text_invert title">
                  We build smart digital strategies and creative designs that help social
                  brands, modern startups, and green companies grow. Our aim is to inspire
                  people to choose better, sustainable options with trust and confidence.
                </p>
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

                  <Link className="quanto-link-btn" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}about`}>
                    More about us
                    <span>
                      <ArrowRight className="arry1" size={22} />
                      <ArrowRight className="arry2" size={22} />
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
