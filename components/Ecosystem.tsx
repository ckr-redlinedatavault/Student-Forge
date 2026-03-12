"use client";

import React from "react";
import Image from "next/image";

const Ecosystem = () => {
    const cards = [
        {
            title: "Learn with Forge",
            desc: "Students learn industry-relevant skills through workshops, bootcamps, and hands-on sessions.",
            image: "https://ik.imagekit.io/dypkhqxip/Education-pana.svg"
        },
        {
            title: "Build with Forge",
            desc: "They apply their skills by building apps, websites, and real projects within the community.",
            image: "https://ik.imagekit.io/dypkhqxip/Developer%20activity-bro.svg"
        },
        {
            title: "Grow with Forge",
            desc: "Students gain exposure, internships, leadership roles, and opportunities that help them grow into future-ready professionals.",
            image: "https://ik.imagekit.io/dypkhqxip/Growth%20curve-pana.svg"
        }
    ];

    return (
        <section className="relative w-full py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 rounded-none text-[10px] font-bold uppercase tracking-widest">
                        The Student Forge Ecosystem
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-forge-navy">
                        Our <span className="italic font-serif">Ecosystem</span>
                    </h2>
                    <p className="text-forge-navy/60 max-w-2xl font-medium leading-relaxed italic">
                        The definitive place where building begins.
                    </p>
                </div>

                {/* Grid - Balanced 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative p-6 sm:p-8 lg:p-10 bg-white border border-forge-navy/10 rounded-none hover:bg-forge-navy transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col"
                        >
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FEC70B]/10 group-hover:bg-[#FEC70B]/20 blur-2xl transition-all"></div>

                            {/* Illustration Space */}
                            <div className="w-full h-48 relative mb-8 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Diagonal Labels Overlay for the 3rd Card (Grow) */}
                                {index === 2 && (
                                    <div className="absolute inset-0 pointer-events-none z-20">
                                        <div className="absolute top-[10%] right-[10%]">
                                            <div className="px-2 py-0.5 bg-forge-navy text-white text-[8px] font-bold uppercase tracking-tighter shadow-sm">
                                                Career
                                            </div>
                                        </div>
                                        <div className="absolute bottom-[20%] left-[15%]">
                                            <div className="px-2 py-0.5 bg-[#FEC70B] text-forge-navy text-[8px] font-bold uppercase tracking-tighter shadow-sm">
                                                College
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-forge-navy group-hover:text-white mb-5 transition-colors leading-tight">
                                {card.title}
                            </h3>
                            <p className="text-forge-navy/70 group-hover:text-white/80 text-[15px] leading-relaxed font-medium transition-colors mb-8">
                                {card.desc}
                            </p>

                            {/* Sharp Explore CTA */}
                            <div className="mt-auto flex items-center gap-3 text-forge-navy group-hover:text-[#FEC70B] text-[13px] font-bold uppercase tracking-[0.15em] transition-all">
                                <span className="relative overflow-hidden group/link text-current">
                                    Explore
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                </span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                            {/* Serial Number */}
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-forge-navy/20 group-hover:text-white/20 transition-colors">
                                [0{index + 1}]
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Ecosystem;
