"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const LaunchPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
                        alt="Forge Launch"
                        fill
                        className="object-cover opacity-40"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Apex Level // 03
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                            Forge <br />
                            <span className="text-forge-orange">Launch</span>
                        </h1>
                        <p className="text-white/70 text-lg lg:text-xl font-medium max-w-xl leading-relaxed">
                            The bridge between learning and professional excellence. Accelerated placement, live industry projects, and high-performance career coaching.
                        </p>
                        <div className="pt-4">
                            <Link href="/get-started" className="inline-flex h-14 items-center justify-center bg-white px-10 text-[12px] font-black text-forge-navy hover:bg-forge-orange hover:text-white transition-all uppercase tracking-widest">
                                Launch Your Career
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Breakdown */}
            <section className="py-24 border-b border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">The Professional Bridge</h2>
                            <div className="space-y-12">
                                {[
                                    { phase: "01", title: "Industry Immersion", desc: "Collaborate on real-world projects with partner tech companies to understand enterprise workflows." },
                                    { phase: "02", title: "Career Architecture", desc: "Portfolio optimization, interview simulation with lead engineers, and personal branding strategies." },
                                    { phase: "03", title: "Placement Engine", desc: "Direct access to our network of 50+ hiring partners and exclusive job boards for SF graduates." }
                                ].map((step, i) => (
                                    <div key={i} className="group flex gap-8">
                                        <div className="flex-shrink-0 w-12 h-12 bg-forge-navy text-forge-orange flex items-center justify-center font-black text-xl leading-none">
                                            {step.phase}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-forge-navy uppercase tracking-wide">{step.title}</h3>
                                            <p className="text-forge-navy/60 text-sm leading-relaxed font-semibold max-w-md">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="sticky top-32 p-10 bg-forge-navy text-white space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Placement Protocol</h4>
                                    <p className="text-2xl font-bold text-white">Career Acceleration</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-4 border-b border-white/10">
                                        <span className="text-white/50 font-semibold uppercase text-[10px] tracking-widest">Network Size</span>
                                        <span className="text-white font-bold">50+ Hiring Partners</span>
                                    </div>
                                    <div className="flex justify-between py-4 border-b border-white/10">
                                        <span className="text-white/50 font-semibold uppercase text-[10px] tracking-widest">Support</span>
                                        <span className="text-white font-bold">Life-time Career Hub Access</span>
                                    </div>
                                    <div className="flex justify-between py-4 border-b border-white/10">
                                        <span className="text-white/50 font-semibold uppercase text-[10px] tracking-widest">Goal</span>
                                        <span className="text-white font-bold">High-Growth Placement</span>
                                    </div>
                                </div>
                                <Link href="/get-started" className="flex items-center justify-center w-full py-5 bg-forge-orange text-forge-navy text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                                    Secure Your Future
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

export default LaunchPage;
