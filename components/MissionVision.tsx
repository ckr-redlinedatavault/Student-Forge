"use client";

import React from "react";

const MissionVision = () => {
    return (
        <section className="relative w-full py-12 bg-white overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-forge-navy/[0.02] -skew-x-12 transform origin-top transition-transform"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">

                    {/* Mission Block */}
                    <div className="space-y-6 group">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-1 bg-forge-navy"></div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forge-navy/50">Our Purpose</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-forge-navy leading-tight">
                                Our <span className="italic font-serif">Mission</span>
                            </h2>
                        </div>

                        <div className="relative p-7 sm:p-10 bg-[#FEC70B] text-forge-navy rounded-none shadow-xl overflow-hidden group-hover:translate-y-[-8px] transition-transform duration-500 border border-forge-navy/5">
                            {/* Decorative background element */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-black/5 rotate-45"></div>

                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-bold relative z-10">
                                To provide high-quality, industry-relevant training that empowers students to learn essential skills, build real-world projects, and grow through structured programs, mentorship, and community-driven opportunities.
                            </p>

                            <div className="mt-8 flex items-center gap-4 text-forge-navy font-bold text-xs uppercase tracking-widest relative z-10">
                                <span className="w-6 h-[1px] bg-forge-navy"></span>
                                Building Futures
                            </div>
                        </div>
                    </div>

                    {/* Vision Block */}
                    <div className="space-y-6 lg:mt-0 group">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-12 h-1 bg-[#FEC70B]"></div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-forge-navy/50">Our Aspiration</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-forge-navy leading-tight">
                                Our <span className="italic font-serif">Vision</span>
                            </h2>
                        </div>

                        <div className="relative p-7 sm:p-10 bg-forge-navy text-white rounded-none shadow-2xl overflow-hidden group-hover:translate-y-[-8px] transition-transform duration-500">
                            {/* Decorative background element */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rotate-45"></div>

                            <p className="text-base sm:text-lg lg:text-xl leading-relaxed font-medium relative z-10">
                                To build a dynamic student platform where every learner can learn new skills, build real projects, and grow into a confident, future-ready professional.
                            </p>

                            <div className="mt-8 flex items-center gap-4 text-[#FEC70B] font-bold text-xs uppercase tracking-widest relative z-10">
                                <span className="w-6 h-[1px] bg-[#FEC70B]"></span>
                                Global Standard
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionVision;
