import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { cloudinaryUrl, cmsSrcSet } from "@/utils/image";

export default function BlogCard({ data, index = 0 }) {
    const href = `/blog/${data?.slug}`;
    return (
        <Reveal as="article" delay={(index % 3) * 70} className="group">
            <Link href={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden bg-paper">
                {data?.image && (
                    <img
                        alt=""
                        src={cloudinaryUrl(data.image, 800)}
                        srcSet={cmsSrcSet(data.image, [400, 800, 1200])}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                )}
            </Link>
            <div className="pt-5">
                {data?.date && <p className="t-num text-[14px] text-muted">{data.date}</p>}
                <h3 className="t-h4 mt-2 line-clamp-3 text-primary">
                    <Link href={href} className="link-u">{data?.title || "Untitled post"}</Link>
                </h3>
            </div>
        </Reveal>
    );
}
