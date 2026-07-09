
import React from "react";
import { motion } from "framer-motion";
import BlogCard from "../BlogCard";
import Button from "../Button";

export default function BlogSection({ posts = [] }) {
  return (
    <section className="lg:py-32.5 md:py-20 py-16.25 overflow-hidden">
      <div className="container mx-auto px-4 xl:max-w-350 lg:max-w-242.5 md:max-w-180">
        <motion.div
          className="grid lg:grid-cols-12 grid-cols-1 gap-3 items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="xl:col-span-7 lg:col-span-9 col-span-1">
            <div className="text-center md:text-left">
              <h3 className="text-[40px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[112.5%] tracking-[-2px] font-semibold text-primary">
                Latest blogs to level up your business
              </h3>
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-3 col-span-1">
            <div className="flex justify-center lg:justify-end">
              <Button link ariaLabel="Follow to articles" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog`}>
                View all articles
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 pt-15 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((data, index) => (
            <BlogCard data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
