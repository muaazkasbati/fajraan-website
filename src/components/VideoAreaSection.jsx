import React from "react";
import Reveal from "./Reveal";

/**
 * Full-width image band used under inner-page heroes.
 * (Previously also streamed 4K stock videos from Pexels; those were heavy
 * and off-brand, so the `video` variant now renders nothing.)
 */
export default function VideoAreaSection({ video = false, imageUrl, alt = "", fullImage = false, priority = true }) {
    if (video || !imageUrl) return null;

    return (
        <section aria-hidden={alt ? undefined : true}>
            <div className="wrap">
                <Reveal className="overflow-hidden bg-paper">
                    <img
                        alt={alt}
                        src={imageUrl}
                        width={1600}
                        height={800}
                        loading={priority ? "eager" : "lazy"}
                        fetchPriority={priority ? "high" : undefined}
                        decoding="async"
                        className={`block w-full object-cover ${fullImage ? "h-auto max-h-[80vh]" : "aspect-[4/3] sm:aspect-[2/1] lg:aspect-[21/9]"}`}
                    />
                </Reveal>
            </div>
        </section>
    );
}
