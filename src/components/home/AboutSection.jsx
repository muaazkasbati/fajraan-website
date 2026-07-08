"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="lg:pt-32.5 md:pt-20 pt-16.25 overflow-hidden">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="flex justify-end">
          <div className="w-full lg:w-10/12 xl:w-9/12 2xl:w-10/12">
            <div className="">

              {/* Top Paragraph Animation */}
              <motion.div
                initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                <p className="text-[30px] md:text-[38px] lg:text-[42px] xl:text-[44px] leading-[116.667%] tracking-[-1.5px] font-semibold">
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
                <div className="mt-15 max-w-163 ml-auto">
                  <p className="text-[20px] mb-4">
                    From shaping a unique brand image to creating smooth digital experiences
                    and running smart marketing campaigns, we handle every project with care,
                    skill, and full focus on quality results.
                  </p>
                  <Button link ariaLabel="Follow to about" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}about`}>
                    More about us
                  </Button>
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
