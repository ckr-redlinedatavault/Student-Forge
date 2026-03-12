"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";


const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden border-b border-zinc-200">
            {/* Split Background with Slant Cut */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Branded slanted background for the left side */}
                <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-[#FEC70B] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]"></div>
                {/* White background for the rest */}
                <div className="absolute inset-0 bg-white -z-10"></div>
            </div>

            <Script
                src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js"
                type="module"
                strategy="afterInteractive"
            />

            <div className="container relative mx-auto px-6 py-12 lg:py-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

                    {/* Text Content - Over Orange */}
                    <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0 z-10">

                        {/* Sharp Status Badge - Transparent on Orange */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/10 border border-black/10 text-forge-navy rounded-none font-bold uppercase tracking-widest text-[10px]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full bg-forge-navy/50 animate-ping"></span>
                                <span className="relative inline-flex h-1.5 w-1.5 bg-forge-navy"></span>
                            </span>
                            Admissions Open 2026
                        </div>

                        {/* Clean Heading - Branded Navy on Orange */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-forge-navy leading-[1.15]">
                            Forge your future with <br className="hidden sm:block" />
                            <span className="opacity-90">Student Forge.</span>
                        </h1>

                        {/* Clean Subheading - High contrast for yellow bg */}
                        <p className="text-base sm:text-[17px] text-zinc-800 leading-relaxed font-semibold max-w-lg mx-auto lg:mx-0">
                            Empowering the next generation of innovators. The place where transformation begins through learn-by-doing, mentorship, and community.
                        </p>

                        {/* Sharp Edge Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                            <Link
                                href="/get-started"
                                className="w-full sm:w-auto px-10 py-3.5 bg-zinc-900 text-white rounded-none text-sm font-bold hover:bg-zinc-800 transition-all border border-zinc-900 text-center"
                            >
                                Enroll Now
                            </Link>

                            <Link
                                href="/learn"
                                className="w-full sm:w-auto px-10 py-3.5 bg-white text-zinc-900 border border-zinc-300 rounded-none text-sm font-bold hover:bg-zinc-50 transition-all text-center"
                            >
                                Explore Programs
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content - Over White - Optimized for Mobile */}
                    <div className="flex-1 relative w-full flex items-center justify-center lg:justify-end lg:-mr-40 min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] z-10">
                        {/* Diagonal Labels Overlay - Adjusted for Mobile */}
                        <div className="absolute inset-0 pointer-events-none z-20">
                            {/* Career Label */}
                            <div className="absolute top-[10%] right-[10%] lg:right-[22%] flex flex-col items-center">
                                <div className="px-4 py-1.5 bg-forge-navy text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-xl -rotate-6">
                                    Career
                                </div>
                                <div className="w-[1px] h-6 sm:h-10 bg-forge-navy/20 mt-1"></div>
                            </div>

                            {/* College Label */}
                            <div className="absolute bottom-[20%] left-[8%] lg:left-[8%] flex flex-col items-center">
                                <div className="w-[1px] h-6 sm:h-10 bg-forge-navy/20 mb-1"></div>
                                <div className="px-4 py-1.5 bg-[#FEC70B] text-forge-navy text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-xl -rotate-6">
                                    College
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-[800px] overflow-hidden">
                            <dotlottie-wc
                                src="https://lottie.host/5de259d2-6d5b-4e7e-9092-5c1e0a2c5676/eXGE18zzMc.lottie"
                                style={{ width: '100%', height: 'auto', scale: '1.2' }}
                                autoplay
                                loop
                            ></dotlottie-wc>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;