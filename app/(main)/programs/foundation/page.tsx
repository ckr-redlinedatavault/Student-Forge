"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const FoundationPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Simple Hero Section */}
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600"
                        alt="Forge Foundation"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Base Level // 01
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                            Forge <br />
                            <span className="text-forge-orange">Foundation</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            Building a strong base in software logic and modern engineering principles.
                        </p>
                    </div>
                </div>
            </section>

            {/* Placeholder Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">Curriculum Update in Progress</h2>
                            <p className="text-forge-navy/60 text-[15px] font-bold leading-relaxed italic">
                                We are currently refining this program's roadmap to align with the latest industry shifts. Practical, high-impact modules are being forged by our engineering team.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-forge-orange font-black text-2xl">Coming</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Comprehensive Curriculum <br /> Breakdown</span>
                            </div>
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-forge-orange font-black text-2xl">Soon</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Registration & <br /> Enrollment Portal</span>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-forge-navy px-10 text-[11px] font-black text-white hover:bg-forge-orange transition-all uppercase tracking-widest">
                                Get Early Access Notification
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default FoundationPage;
