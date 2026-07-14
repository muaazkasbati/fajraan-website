import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({
    variant = "primary", // primary | white | text
    type = "button",
    href = "",
    ariaLabel = "",
    id,
    onClick,
    disabled = false,
    loading = false,
    children,
    fullwidth = false,
    link = false,
}) => {
    const classes = {
        primary: "group inline-flex w-max items-center gap-2 rounded-[40px] border border-primary bg-primary px-5 py-2.5 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-white transition-all duration-500 ease-in-out md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3.5 cursor-pointer",
        white: "group inline-flex w-max items-center gap-2 rounded-[40px] border border-primary bg-white px-5 py-2.5 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-primary transition-all duration-500 ease-in-out hover:bg-primary hover:text-white hover:border-white md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3.5 cursor-pointer",
        text: "group inline-flex w-max items-center gap-2 border-b border-primary pb-0 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-black transition-all duration-500 ease-in-out sm:pb-1 cursor-pointer",
        "white-text": "group inline-flex w-max items-center gap-2 border-b border-secondary pb-0 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] text-white transition-all duration-500 ease-in-out sm:pb-1 cursor-pointer",
    };

    const arrowColor = variant === "primary" ? "text-white" : variant === "white" ? "text-primary group-hover:text-white" : variant === "white-text" ? "text-secondary" : "text-primary";

    const content = (
        <>
            {loading ? (
                <div className="loading-dots">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                </div>
            ) : (
                <>
                    {children}

                    <span className={`relative inline-block h-5.5 w-5.5 overflow-hidden ${arrowColor}`}>
                        <ArrowRight
                            size={22}
                            className="absolute left-0 top-0 -rotate-45 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-5.5 group-hover:-top-5.5"
                        />
                        <ArrowRight
                            size={22}
                            className="absolute -left-5.5 top-5.5 -rotate-45 opacity-80 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-0 group-hover:top-0"
                        />
                    </span>
                </>
            )}
        </>
    );

    if (link) {
        return (
            <Link
                id={id}
                href={href}
                aria-label={ariaLabel}
                className={`${classes[variant]} ${fullwidth ? "w-full justify-center" : ""}`}
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
            className={`${classes[variant]} ${fullwidth ? "w-full justify-center" : ""} disabled:cursor-not-allowed disabled:opacity-60`}
        >
            {content}
        </button>
    );
};

export default Button;