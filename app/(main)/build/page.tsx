"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";
import Link from "next/link";

const BuildPage = () => {
    return (
        <div className="bg-white min-h-screen pt-4">
            {/* Split Hero Section - Compact & Card Style */}
            <section className="relative w-full overflow-hidden py-8 lg:py-10">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] bg-forge-navy"></div>
                    <div className="absolute inset-0 bg-white -z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-zinc-100 overflow-hidden">
                        
                        {/* LEFT content */}
                        <div className="p-8 lg:p-12 space-y-5">
                            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 text-[8px] font-semibold uppercase tracking-[0.2em]">
                                Execution & Craft
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-forge-navy leading-[1.1]">
                                Where Ideas <br />
                                <span className="text-forge-orange">Become Reality</span>
                            </h1>
                            <div className="space-y-3 max-w-sm">
                                <p className="text-forge-navy/80 text-[14px] font-semibold leading-relaxed">
                                    From lines of code to live deployments. Student Forge is the execution engine for the next generation of builders.
                                </p>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <Link href="/get-started" className="px-6 py-2.5 bg-forge-navy text-white font-semibold text-[10px] uppercase tracking-widest hover:bg-forge-orange transition-all">
                                    Start Building
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT visual */}
                        <div className="relative h-[250px] lg:h-full w-full bg-forge-navy/20 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                                alt="Practical Execution"
                                fill
                                className="object-cover opacity-90 transition-all duration-1000"
                            />
                            <div className="absolute bottom-4 right-4 hidden lg:block">
                                <div className="text-[8px] font-mono text-white/50 font-semibold uppercase tracking-[0.3em]">
                                    FORGE_BUILD_SYS.02
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Execution Engine Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="relative aspect-video bg-zinc-200 overflow-hidden shadow-sm lg:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                                alt="Code Execution"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 lg:order-2">
                            <div className="space-y-3">
                                <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight leading-tight">
                                    The <span className="text-forge-orange">Execution</span> Engine
                                </h2>
                                <p className="text-forge-navy/70 text-[15px] font-semibold leading-relaxed">
                                    Building at Student Forge isn't just a hobby—it's a rigorous process of professionalization. We provide the infrastructure, the feedback loops, and the industry standards.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-5">
                                {[
                                    { title: "Standard Tech Stack", desc: "Build using Industry-standard tools like React, Next.js, and Cloud infrastructures." },
                                    { title: "Version Control", desc: "Master Git workflows and professional pull-request etiquette." },
                                    { title: "Clean Architecture", desc: "Learn to write code that scales, is maintainable, and bug-resistant." },
                                    { title: "Live Deployments", desc: "Every project you build is deployed and accessible to the world." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-[2px] h-full bg-forge-navy/10 group-hover:bg-forge-orange transition-colors shrink-0"></div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-forge-navy uppercase tracking-wider text-[11px]">{item.title}</h4>
                                            <p className="text-forge-navy/50 text-[12.5px] leading-relaxed font-semibold">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Build Grid */}
            <section className="py-12 bg-zinc-50 border-y border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl mb-10 space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight">The Builder's Portfolio</h2>
                        <p className="text-forge-navy/60 text-[14px] font-semibold">Concrete proof of your engineering capabilities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Real-World Projects", desc: "Hands-on industry-style projects that demonstrate real technical capability.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" },
                            { name: "GitHub Presence", desc: "A curated GitHub profile that reflects professional coding standards.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" },
                            { name: "Personal Branding", desc: "A personal portfolio website that articulates your unique value proposition.", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600" },
                            { name: "Optimized Resume", desc: "Technical resumes designed to bypass ATS systems and impress hiring managers.", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600" },
                            { name: "Experience Modules", desc: "Practical internship-equivalent projects that count as years of experience.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" },
                            { name: "Innovation Series", desc: "Original ideas turned into MVPs through our internal hackathon cycles.", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col bg-white border border-zinc-200 group overflow-hidden transition-all duration-300">
                                <div className="relative h-44 w-full overflow-hidden">
                                    <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-forge-navy/5"></div>
                                </div>
                                <div className="p-6 flex flex-col space-y-3">
                                    <h3 className="text-base font-semibold text-forge-navy group-hover:text-forge-orange transition-colors">{item.name}</h3>
                                    <p className="text-[12px] text-forge-navy/60 leading-relaxed font-semibold">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Path to Mastery */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 text-center max-w-2xl space-y-4">
                    <h2 className="text-2xl font-semibold text-forge-navy tracking-tight">The Mastery Journey</h2>
                    <p className="text-forge-navy/60 text-[14px] font-semibold leading-relaxed">
                        At Student Forge, building isn't just about the 'How'. It's about why we build, who we build for, and the impact our code has on the world.
                    </p>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-8 container mx-auto px-6">
                <div className="bg-forge-navy p-8 lg:p-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold text-white tracking-tight">Ready to build something?</h2>
                                <p className="text-white/60 text-[14px] leading-relaxed font-semibold max-w-sm">
                                    Start your journey with a project that defines your career.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/get-started" className="px-8 py-3 bg-white text-forge-navy font-semibold text-[10px] uppercase tracking-widest hover:bg-[#FEC70B] transition-all">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default BuildPage;
