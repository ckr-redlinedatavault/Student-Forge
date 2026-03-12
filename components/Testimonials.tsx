"use client";

import React from "react";
import Image from "next/image";

const uniqueTestimonials = [
    {
        name: "Harsha Vardhan",
        role: "Forge Member",
        content: "Student Forge completely changed how I look at my career. The mentorship and real-world projects helped me land my dream role. It's a high-performance environment where everyone is building for the future."
    },
    {
        name: "Rahul Dasari",
        role: "Specialist Programmer",
        content: "Being part of the Student Forge ecosystem gave me access to technical resources and a community I couldn't find anywhere else. The focus on industrial-grade skills is what makes this place special."
    },
    {
        name: "Lakshmi Mahendra",
        role: "Startup Strategist",
        content: "The transition from academic theory to real execution happened the moment I joined a Forge hackathon. It's more than just learning; it's about validating your spirit as a builder."
    },
    {
        name: "Sravani G.",
        role: "CMRIT Student",
        content: "The Student Forge chapter at CMRIT has been instrumental in my growth. I've built projects that actually solve problems, moving beyond simple classroom exercises into real-world engineering."
    },
    {
        name: "Abhinav R.",
        role: "MBA Student",
        content: "Forge bridged the gap between my business studies and the tech world. It provided the perfect platform to practice agile management and lead technical teams in high-pressure scenarios."
    }
];

// Double the list for seamless looping
const testimonials = [...uniqueTestimonials, ...uniqueTestimonials];

const Testimonials = () => {
    return (
        <section className="relative w-full py-24 bg-[#111111] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-white">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                            Trusted by the next generation.
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed">
                            Don't just take our word for it. Here is what our builders have to say about their journey with Student Forge.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                            <svg className="w-5 h-5 text-zinc-400 group-hover:text-[#FEC70B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-12 h-12 border border-[#FEC70B] flex items-center justify-center hover:bg-[#FEC70B]/5 transition-colors group">
                            <svg className="w-5 h-5 text-[#FEC70B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Infinite Loop Row */}
                <div className="relative w-full">
                    <div className="flex gap-6 animate-scroll-infinite">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85vw] md:w-[400px] bg-[#1a1a1a] p-8 md:p-10 border border-white/5 relative group hover:border-[#FEC70B]/30 transition-all duration-300"
                            >
                                {/* Quote Icon */}
                                <div className="mb-8">
                                    <svg className="w-10 h-10 text-[#FEC70B] opacity-60" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 8.44772 2.01697 9V11C2.01697 11.5523 1.56925 12 1.01697 12H0.0169678V5H10.017V15C10.017 18.3137 7.33065 21 4.01697 21H2.01697Z" />
                                    </svg>
                                </div>

                                <blockquote className="mb-10">
                                    <p className="text-zinc-400 text-[15px] leading-relaxed font-medium group-hover:text-white transition-colors duration-300">
                                        "{testimonial.content}"
                                    </p>
                                </blockquote>

                                <div className="flex items-center gap-4 border-t border-white/5 pt-8 mt-auto">
                                    <div className="w-10 h-10 bg-[#FEC70B]/10 border border-[#FEC70B]/20 flex items-center justify-center p-2.5">
                                        <svg className="w-full h-full text-[#FEC70B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <cite className="not-italic font-bold text-sm text-white">{testimonial.name}</cite>
                                        <span className="text-[11px] font-bold text-[#FEC70B] uppercase tracking-wider">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-400px * 5 - 1.5rem * 5)); }
                }
                @media (max-width: 768px) {
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-80vw * 5 - 1.5rem * 5)); }
                    }
                }
                .animate-scroll-infinite {
                    animation: scroll 40s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-scroll-infinite:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
