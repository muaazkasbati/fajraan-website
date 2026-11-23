import React from "react";
import Link from "next/link";

const Arrow = () => (
    <span aria-hidden="true" className="relative inline-block h-4 w-4 shrink-0 overflow-hidden">
        <svg viewBox="0 0 16 16" className="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(.4,.1,.1,1)] group-hover:translate-x-4 group-hover:-translate-y-4">
            <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <svg viewBox="0 0 16 16" className="absolute inset-0 h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(.4,.1,.1,1)] group-hover:translate-x-0 group-hover:translate-y-0">
            <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
    </span>
);

const base =
    "group inline-flex w-max items-center gap-2.5 font-semibold text-[16px] leading-none tracking-[-0.01em] transition-colors duration-200 cursor-pointer select-none";

const pill = "h-12 rounded-full px-6 border";

const classes = {
    primary: `${base} ${pill} border-primary bg-primary text-white hover:bg-primary-2 hover:border-primary-2`,
    accent: `${base} ${pill} border-secondary bg-secondary text-primary hover:bg-white hover:border-white`,
    white: `${base} ${pill} border-primary/20 bg-white text-primary hover:border-primary`,
    "outline-light": `${base} ${pill} border-white/30 bg-transparent text-white hover:border-white`,
    text: `${base} h-auto pb-1.5 border-b border-primary/30 text-primary hover:border-primary`,
    "white-text": `${base} h-auto pb-1.5 border-b border-white/30 text-white hover:border-secondary`,
};

const Button = ({
    variant = "primary",
    type = "button",
    href = "",
    ariaLabel,
    id,
    onClick,
    disabled = false,
    loading = false,
    children,
    fullwidth = false,
    link = false,
    target,
    rel,
    referrerPolicy,
    arrow = true,
    className = "",
}) => {
    const cls = `${classes[variant] || classes.primary} ${fullwidth ? "w-full justify-center" : ""} ${className}`;

    const content = (
        <>
            <span>{loading ? "Sending…" : children}</span>
            {arrow && !loading && <Arrow />}
        </>
    );

    if (link) {
        return (
            <Link
                id={id}
                href={href}
                aria-label={ariaLabel}
                target={target}
                rel={rel}
                referrerPolicy={referrerPolicy}
                className={cls}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            aria-label={ariaLabel}
            aria-busy={loading || undefined}
            className={`${cls} disabled:cursor-not-allowed disabled:opacity-60`}
        >
            {content}
        </button>
    );
};

export default Button;
