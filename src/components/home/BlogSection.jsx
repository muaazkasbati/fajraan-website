"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import moment from "moment";

export default function BlogSection({ posts = [] }) {
  return (
    <section className="quanto-blog-section section-padding-top-bottom overflow-hidden">
      <div className="container custom-container">
        {/* Section Header */}
        <motion.div
          className="row g-3 align-items-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="quanto__header text-center text-md-start">
              <h3 className="title color-primary">
                Latest blogs to level up your business
              </h3>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-xl-5">
            <div className="quanto__headerr d-flex justify-content-center justify-content-lg-end">
              <Link className="quanto-link-btn" href="/blog">
                View all articles
                <span>
                  <i className="fa-solid fa-arrow-right arry1" />
                  <i className="fa-solid fa-arrow-right arry2" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="row g-4 row-padding-top">
          {posts.map((data, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4"
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
                  <Link href={`/blog/${data.slug}`}>
                    <img
                      alt={data?.title?.rendered}
                      src={
                        data?.yoast_head_json?.og_image?.[0]?.url
                          ? data?.yoast_head_json.og_image[0].url
                          : "https://via.placeholder.com/415x268"
                      }
                      loading="lazy"
                      decoding="async"
                      className="img-fluid"
                      style={{ color: "transparent", aspectRatio: "5 / 4", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="quanto-blog-content">
                  <h5 className="line-clamp-2">
                    <Link href={`/blog/${data.slug}`}>
                      {data?.title?.rendered || "Default Blog Title"}
                    </Link>
                  </h5>
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
