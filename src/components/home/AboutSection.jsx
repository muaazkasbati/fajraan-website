
import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const AboutSection = () => {
  return (
    <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden min-h-135">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <div className="flex justify-end">
          <div className="w-full md:w-10/12 lg:w-9/12 xl:w-10/12">
            <motion.div
              initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-[30px] md:text-[38px] lg:text-[42px] xl:text-[44px] leading-[116.667%] tracking-[-1.5px] font-semibold">
                We build smart digital strategies and creative designs that help startups, growing businesses, and enterprises scale. Our aim is to give every client a focused, high-quality result rather than a scattered list of services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotateX: -80, transformOrigin: "top center" }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <div className="mt-15 max-w-163 ml-auto">
                <p className="text-[20px] mb-4">
                  From web and mobile development to AI-powered automation, we handle every project with care, technical depth, and full focus on quality results — wherever in the world our clients are.
                </p>
                <Button variant="text" link ariaLabel="Follow to about" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}about`}>
                  More about us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
