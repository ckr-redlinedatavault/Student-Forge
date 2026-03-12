"use client";

import React from "react";

const TopBanner = () => {
    return (
        <div className="relative w-full bg-[#FEC70B] py-2.5 text-forge-navy border-b border-forge-navy/10 shadow-sm">
            <div className="container mx-auto px-4 flex items-center justify-center gap-3 text-[13px] sm:text-sm font-medium">

                {/* Refined Pill Badge */}
                <span className="hidden sm:flex items-center justify-center px-2.5 py-0.5 rounded-full bg-forge-navy/10 border border-forge-navy/10 text-[10px] font-bold uppercase tracking-widest text-forge-navy">
                    New
                </span>

                {/* Text & Animated Link */}
                <p className="flex items-center flex-wrap justify-center gap-x-1.5 gap-y-1 text-center">
                    <span className="text-forge-navy/90">Experience the future of SF with our latest update.</span>
                    <a
                        href="#"
                        className="group inline-flex items-center gap-1 font-semibold text-forge-navy hover:text-black transition-colors underline underline-offset-4 decoration-forge-navy/30 hover:decoration-black"
                    >
                        Learn more
                        {/* Arrow animate on hover */}
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