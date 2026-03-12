"use client";

import React from "react";

const TopBanner = () => {
    return (
        <div className="relative w-full bg-[#FEC70B] py-2 text-forge-navy border-b border-forge-navy/10 shadow-sm overflow-hidden">
            <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-[12px] sm:text-[13px] font-bold">

                {/* Refined Pill Badge */}
                <span className="hidden sm:flex items-center justify-center px-2.5 py-0.5 rounded-full bg-forge-navy/10 border border-forge-navy/10 text-[10px] font-bold uppercase tracking-widest text-forge-navy">
                    New
                </span>

                {/* Text & Animated Link - Strictly Single Line */}
                <p className="flex items-center justify-center gap-1.5 whitespace-nowrap overflow-hidden">
                    <span className="text-forge-navy/90 truncate max-w-[200px] xs:max-w-none">
                        Join the high-performance technical ecosystem.
                    </span>
                    <a
                        href="/learn"
                        className="group inline-flex items-center gap-1 font-bold text-forge-navy hover:text-black transition-colors"
                    >
                        Learn more
                        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                            &rarr;
                        </span>
                    </a>
                </p>

            </div>
        </div>
    );
};

export default TopBanner;