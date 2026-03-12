"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const FoundationPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600"
                        alt="Forge Foundation"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Base Level // 01
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                            Forge <br />
                            <span className="text-forge-orange">Foundation</span>
                        </h1>
                        <p className="text-white/70 text-lg lg:text-xl font-medium max-w-xl leading-relaxed">
                            A high-intensity immersion into the core logic of software engineering. Designed for those ready to transition from consumer to creator.
                        </p>
                        <div className="pt-4">
                            <Link href="/get-started" className="inline-flex h-14 items-center justify-center bg-white px-10 text-[12px] font-black text-forge-navy hover:bg-forge-orange hover:text-white transition-all uppercase tracking-widest">
                                Apply for Admission
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Breakdown */}
            <section className="py-24 border-b border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">The Curriculum</h2>
                            <div className="space-y-12">
                                {[
                                    { week: "01-04", title: "Logic & Architecture", items: ["Core Computational Thinking", "Data Structures Fundamentals", "Algorithmic Efficiency", "Version Control Ecosystems"] },
                                    { week: "05-08", title: "Modern Web Core", items: ["Semantic Structure Design", "Advanced Layout Systems", "JavaScript Engine Mechanics", "Asynchronous Execution Flow"] },
                                    { week: "09-12", title: "Deployment & Scale", items: ["Cloud Infrastructure Basics", "Performance Optimization", "Security Best Practices", "Final Capstone Integration"] }
                                ].map((phase, i) => (
                                    <div key={i} className="group flex gap-8">
                                        <div className="text-forge-orange font-black text-xl tabular-nums leading-none pt-1">
                                            {phase.week}
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-forge-navy uppercase tracking-wide">{phase.title}</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                                {phase.items.map((item, j) => (
                                                    <li key={j} className="flex items-center gap-3 text-forge-navy/60 text-sm font-semibold">
                                                        <span className="w-1.5 h-1.5 bg-forge-orange rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="sticky top-32 p-10 bg-zinc-50 border border-zinc-200 space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-black text-forge-navy/30 uppercase tracking-[0.3em]">Program Logistics</h4>
                                    <p className="text-2xl font-bold text-forge-navy">Enrollment Protocol</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-4 border-b border-zinc-200">
                                        <span className="text-forge-navy/50 font-semibold uppercase text-[10px] tracking-widest">Duration</span>
                                        <span className="text-forge-navy font-bold">12 Weeks</span>
                                    </div>
                                    <div className="flex justify-between py-4 border-b border-zinc-200">
                                        <span className="text-forge-navy/50 font-semibold uppercase text-[10px] tracking-widest">Intensity</span>
                                        <span className="text-forge-navy font-bold">15-20 Hours/Week</span>
                                    </div>
                                    <div className="flex justify-between py-4 border-b border-zinc-200">
                                        <span className="text-forge-navy/50 font-semibold uppercase text-[10px] tracking-widest">Location</span>
                                        <span className="text-forge-navy font-bold">Hybrid // Campus + Virtual</span>
                                    </div>
                                </div>
                                <Link href="/get-started" className="flex items-center justify-center w-full py-5 bg-forge-navy text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-forge-orange transition-all">
                                    Start Your Application
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

export default FoundationPage;
