"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const LaunchPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
                        alt="Forge Launch"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Apex Level // 03
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                            Forge <br />
                            <span className="text-forge-orange">Launch</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            The definitive bridge between deep technical mastery and professional excellence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">Career Architecture Protocol</h2>
                            <p className="text-forge-navy/60 text-[15px] font-bold leading-relaxed italic">
                                Launch is our exclusive placement and career acceleration engine. We are currently updating our partner network and career modules for the upcoming cycle.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-forge-orange font-black text-2xl">Refining</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Hiring Partner <br /> Network v3.0</span>
                            </div>
                            <div className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center space-y-2">
                                <span className="text-forge-orange font-black text-2xl">August</span>
                                <span className="text-forge-navy/30 text-[10px] font-black uppercase tracking-widest text-center">Next Placement <br /> Intake Cycle</span>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-forge-navy px-10 text-[11px] font-black text-white hover:bg-forge-orange transition-all uppercase tracking-widest">
                                Secure Your Launch Notification
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default LaunchPage;
