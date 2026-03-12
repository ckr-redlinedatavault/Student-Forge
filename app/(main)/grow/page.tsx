"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";
import Link from "next/link";

const GrowPage = () => {
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
                                Professional Transformation
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-forge-navy leading-[1.1]">
                                Accelerate Your <br />
                                <span className="text-forge-orange">Career Trajectory</span>
                            </h1>
                            <div className="space-y-3 max-w-sm">
                                <p className="text-forge-navy/80 text-[14px] font-semibold leading-relaxed">
                                    Become more than just an engineer. We bridge the gap between technical capability and industrial leadership.
                                </p>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <Link href="/get-started" className="px-6 py-2.5 bg-forge-navy text-white font-semibold text-[10px] uppercase tracking-widest hover:bg-forge-orange transition-all">
                                    Start Growing
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT visual */}
                        <div className="relative h-[250px] lg:h-full w-full bg-forge-navy/20 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                alt="Growth and Mentorship"
                                fill
                                className="object-cover opacity-90 transition-all duration-1000"
                            />
                            <div className="absolute bottom-4 right-4 hidden lg:block">
                                <div className="text-[8px] font-mono text-white/50 font-semibold uppercase tracking-[0.3em]">
                                    FORGE_GROW_MOD.03
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Methodology Section */}
            <section className="py-12 bg-zinc-50 border-b border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6 lg:order-2">
                            <div className="space-y-3">
                                <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight leading-tight">
                                    Professional <span className="text-forge-orange">Evolution</span>
                                </h2>
                                <p className="text-forge-navy/70 text-[15px] font-semibold leading-relaxed">
                                    Our growth framework is designed to turn technical proficiency into market-ready professional excellence.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { title: "Personalized Roadmap", desc: "Every student's career path is unique. We help you map out your specific trajectory from college to industry leader." },
                                    { title: "Leadership Activation", desc: "Through our Campus Ambassador programs, develop the soft skills and leadership presence required for management roles." },
                                    { title: "Industrial Mesh", desc: "Direct access to our network of 50+ partner companies and industry veterans for deep-level networking." }
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
                        <div className="relative aspect-video bg-zinc-200 overflow-hidden shadow-sm lg:order-1">
                            <Image
                                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
                                alt="Professional Growth"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl mb-10 space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight">Expansion Vectors</h2>
                        <p className="text-forge-navy/60 text-[14px] font-semibold">Diverse pathways for your continuous professional advancement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Career Guidance", desc: "Personalized career roadmaps and long-term direction setting.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" },
                            { name: "Mentoring Cycles", desc: "One-on-one sessions with industry veterans for career technical growth.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" },
                            { name: "Placement Scaling", desc: "Intensive training for corporate placement and technical interviews.", img: "https://images.unsplash.com/photo-1454165833767-124b8026214b?auto=format&fit=crop&q=80&w=600" },
                            { name: "Global Networks", desc: "Pathways for global higher education and international career opportunities.", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600" }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-zinc-50 border border-zinc-100 p-6 hover:bg-forge-navy transition-all duration-300">
                                <div className="relative z-10 space-y-3">
                                    <h3 className="font-semibold text-base text-forge-navy group-hover:text-white transition-colors tracking-tight">{item.name}</h3>
                                    <p className="text-[12px] text-forge-navy/60 group-hover:text-white/60 leading-relaxed font-semibold transition-colors">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-8 container mx-auto px-6">
                <div className="bg-forge-navy p-8 lg:p-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold text-white tracking-tight">Ready to evolve?</h2>
                                <p className="text-white/60 text-[14px] leading-relaxed font-semibold max-w-sm">
                                    Join the elite circle of students bridge the gap to industrial leadership.
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

export default GrowPage;
