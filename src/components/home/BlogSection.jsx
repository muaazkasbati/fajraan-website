"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { toWebP } from "@/utils/data";

export default function BlogSection({ posts = [] }) {
  return (
    <section className="quanto-blog-section section-padding-top-bottom overflow-hidden">
      <div className="container mx-auto px-4 custom-container">
        {/* Section Header */}
        <motion.div
          className="grid md:grid-cols-12 grid-cols-1 gap-3 items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="xl:col-span-7 lg:col-span-9 col-span-1">
            <div className="quanto__header text-center md:text-left">
              <h3 className="title color-primary">
                Latest blogs to level up your business
              </h3>
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-3 col-span-1">
            <div className="quanto__headerr flex justify-center lg:justify-end">
              <Link className="quanto-link-btn" href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog`}>
                View all articles
                <span>
                  <ArrowRight className="arry1" size={22} />
                  <ArrowRight className="arry2" size={22} />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-6 row-padding-top md:grid-cols-2 xl:grid-cols-3">
          {posts.map((data, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="quanto-blog-box">
                <div className="quanto-blog-thumb">
                  <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data.slug}`}>
                    <Image
                      src={toWebP(data?.yoast_head_json?.og_image?.[0]?.url ||'/images/placeholder.webp')}
                      alt={data?.title?.rendered || 'Blog post'}
                      width={415}
                      height={332}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto"
                      style={{ aspectRatio: '5 / 4', objectFit: 'cover', height: 'auto', width: 'auto' }}
                    />
                  </Link>
                </div>
                <div className="quanto-blog-content">
                  <p className="line-clamp-2">
                    <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data.slug}`}>
                      {data?.title?.rendered || "Default Blog Title"}
                    </Link>
                  </p>
                  <span className="quanto-blog-date">{moment(data?.date).format("MMMM DD, YYYY")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
