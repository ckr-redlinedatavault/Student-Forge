"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const ElevatePage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071823991-b5182046d38a?auto=format&fit=crop&q=80&w=1600"
                        alt="Forge Elevate"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEC70B] text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Intermediate Level // 02
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            Forge <br />
                            <span className="text-[#FEC70B]">Elevate</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            Expanding technical potential through advanced architecture and engineering patterns.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">Evolving Technical Paths</h2>
                            <p className="text-forge-navy/60 text-[15px] font-bold leading-relaxed italic text-center">
                                Elevate focuses on the transformation from coder to engineer. Our updated modular roadmap is currently in the final stages of verification.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-[#FEC70B] font-black text-2xl">Updating</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Advanced System <br /> Architecture Modules</span>
                            </div>
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-[#FEC70B] font-black text-2xl">Cohort 02</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Next Enrollment <br /> Window Coming Soon</span>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-forge-navy px-10 text-[11px] font-black text-white hover:bg-[#FEC70B] transition-all uppercase tracking-widest">
                                Notify Me on Update
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default ElevatePage;
