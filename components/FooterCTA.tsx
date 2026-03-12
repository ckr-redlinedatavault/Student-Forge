"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterCTA = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden py-10 lg:py-14">
            {/* Background Rectangle - Yellow on the LEFT */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-[#FEC70B]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

                    {/* Left Content (on Yellow) */}
                    <div className="max-w-2xl space-y-8 py-4 sm:py-8 lg:py-12 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 rounded-none text-[10px] font-bold uppercase tracking-widest mx-auto lg:mx-0">
                                Final Step
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forge-navy leading-tight px-2 sm:px-0">
                                Ready to <span className="text-black">Forge</span> Your Future?
                            </h2>
                            <p className="text-forge-navy/60 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                                Join hundreds of students who are already building high-performance careers. Start your journey today.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start px-6 sm:px-0">
                            <Link
                                href="/get-started"
                                className="w-full sm:w-auto h-14 items-center justify-center bg-forge-navy px-10 text-[14px] font-bold text-white transition-all duration-300 hover:bg-forge-navy/90 hover:-translate-y-1 shadow-lg shadow-forge-navy/20 rounded-none group flex"
                            >
                                Enroll Now
                                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto h-14 items-center justify-center bg-white px-10 text-[14px] font-bold text-forge-navy border-2 border-forge-navy transition-all duration-300 hover:bg-forge-navy/5 rounded-none flex"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>

                    {/* Right Image - Full Frame Fit */}
                    <div className="relative min-h-[300px] lg:h-auto w-full overflow-hidden border border-forge-navy/10">
                        <Image
                            src="https://media.istockphoto.com/id/1461630610/photo/group-of-happy-students-checking-results-on-laptop-while-sitting-on-college-campus-concept-of.jpg?s=612x612&w=0&k=20&c=cFO_ROJ_yxhk7lv8Xwm13iaIUOnL_nJMO1EU2lKhPVQ="
                            alt="Students on Campus"
                            fill
                            className="object-cover rounded-none hover:scale-105 transition-transform duration-700"
                            priority
                        />

                        {/* Decorative Element Overlay */}
                        <div className="absolute bottom-4 right-4 z-10 hidden lg:block">
                            <div className="flex flex-col items-end gap-1 font-mono text-[10px] text-white uppercase tracking-[0.3em] drop-shadow-md">
                                <span>Forge V2</span>
                                <span>Deployment Module</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
