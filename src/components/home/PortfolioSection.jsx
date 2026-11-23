import React from "react";
import Link from "next/link";
import { cloudinaryUrl, cmsSrcSet } from "@/utils/image";
import Reveal from "../Reveal";
import SectionHead from "../SectionHead";
import Button from "../Button";

export function ProjectCard({ proj, index = 0, sizes = "(max-width: 768px) 100vw, 50vw" }) {
    const href = `/portfolio/${proj?.slug}`;
    return (
        <Reveal as="article" delay={(index % 2) * 80} className="group">
            <Link href={href} className="block overflow-hidden bg-paper" tabIndex={-1} aria-hidden="true">
                <div className="relative aspect-[5/4] w-full">
                    {proj?.image && (
                        <img
                            src={cloudinaryUrl(proj.image, 1200)}
                            srcSet={cmsSrcSet(proj.image)}
                            sizes={sizes}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                    )}
                </div>
            </Link>
            <div className="mt-5 flex items-start justify-between gap-6">
                <h3 className="t-h3 text-primary">
                    <Link href={href} className="link-u">{proj?.title}</Link>
                </h3>
                <p className="t-num shrink-0 pt-1 text-[14px] text-muted">{proj?.year}</p>
            </div>
            {proj?.category && <p className="mt-1 text-[15px] text-muted">{proj.category}</p>}
        </Reveal>
    );
}

const PortfolioSection = ({ projects = [], index = "03" }) => {
    if (!projects?.length) return null;

    return (
        <section className="section" id="work">
            <div className="wrap">
                <SectionHead
                    index={index}
                    eyebrow="Selected work"
                    title="Recent projects we've shipped."
                    aside={<Button variant="text" link href="/portfolio">View all work</Button>}
                />
                <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2">
                    {projects.slice(0, 4).map((proj, i) => (
                        <div key={proj.id || i} className={i % 2 ? "md:mt-24" : ""}>
                            <ProjectCard proj={proj} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
