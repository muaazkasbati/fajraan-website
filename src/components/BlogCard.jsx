import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { toWebP } from '@/utils/data';
import formatDate from '@/utils/formatDate';

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
                className=""
                variants={cardVariants}
                style={{ opacity: 1, transform: "none" }}
            >
                <div className="">
                    <div className="overflow-hidden">
                        <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data.slug}`}>
                            <img
                                alt={data?.title?.rendered}
                                src={toWebP(data?.yoast_head_json?.og_image?.[0]?.url ? data?.yoast_head_json.og_image[0].url : "https://via.placeholder.com/415x268")}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto aspect-5/4 object-cover hover:scale-110 ease-out transition-transform duration-500"
                            />
                        </Link>
                    </div>
                    <div className="pt-6">
                        <p className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] leading-[135.714%] tracking-[-0.28px] line-clamp-2 font-semibold">
                            <Link href={`${process.env.NEXT_PUBLIC_APPFRONTURL}blog/${data.slug}`}>
                                {data?.title?.rendered || "Default Blog Title"}
                            </Link>
                        </p>
                        <span className="relative mt-2.5 block pl-10.5 text-[18px] font-normal leading-[144.444%] before:absolute before:left-0 before:top-1/2 before:h-px before:w-7.5 before:-translate-y-1/2 before:bg-primary before:content-['']">
                            {formatDate(data?.date)}
                        </span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
