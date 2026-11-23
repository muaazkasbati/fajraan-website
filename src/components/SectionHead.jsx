import Reveal from "./Reveal";

/**
 * Consistent section heading: small numbered eyebrow, a title,
 * and an optional aside (intro text or a link) on the right.
 */
export default function SectionHead({ index, eyebrow, title, aside, light = false, as: H = "h2", className = "" }) {
    return (
        <div className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
            <Reveal className="lg:col-span-8">
                {eyebrow && (
                    <p className={`t-eyebrow ${light ? "!text-white/60" : ""}`}>
                        {index && <span className="t-num">{index}</span>}
                        {index && <span aria-hidden="true" className="opacity-40">/</span>}
                        {eyebrow}
                    </p>
                )}
                <H className={`t-h2 mt-5 ${light ? "text-white" : "text-primary"}`}>{title}</H>
            </Reveal>
            {aside && (
                <Reveal delay={100} className="lg:col-span-4 lg:justify-self-end lg:pb-2">
                    {aside}
                </Reveal>
            )}
        </div>
    );
}
