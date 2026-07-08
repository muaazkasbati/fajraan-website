import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

const Button = ({
    variant = "yellow",
    type = "button",
    href = "",
    ariaLabel = "",
    onClick,
    disabled = false,
    loading = false,
    children,
    fullwidth = false,
    link = false,
}) => {
    return link ?
        <Link
            href={href}
            aria-label={ariaLabel}
            className="group inline-flex w-max items-center gap-2 border-b border-primary pb-0 text-[18px] font-semibold leading-[144.444%] tracking-[-0.18px] transition-all duration-500 ease-in-out sm:pb-1 text-black"
        >
            {children}

            <span className="relative inline-block h-5.5 w-5.5 overflow-hidden text-primary">
                <ArrowRight size={22} className="absolute left-0 top-0 -rotate-45 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-5.5 group-hover:-top-5.5" />
                <ArrowRight size={22} className="absolute -left-5.5 top-5.5 -rotate-45 opacity-80 transition-all duration-300 ease-[cubic-bezier(0.37,0.08,0.02,0.93)] group-hover:left-0 group-hover:top-0" />
            </span>
        </Link >
        :
        <button
            // className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${fullwidth ? "w-full" : ""}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {loading
                ? <div className="loading-dots">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                </div>
                : children
            }
        </button>
}

export default Button;
