import React from 'react'
import moment from 'moment'
import { motion } from "framer-motion";
import Link from 'next/link';

export default function BlogCard({ data }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    return (
        <>
            <motion.div
                className="col-md-6 col-lg-4"
                variants={cardVariants}
                style={{ opacity: 1, transform: "none" }}
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
        </>
    )
}
