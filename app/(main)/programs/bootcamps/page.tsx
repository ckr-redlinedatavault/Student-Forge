"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const BootcampsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
                        alt="Execution Bootcamps"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Intensive // Bootcamps
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Execution <span className="text-forge-orange">Bootcamps</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            Full-immersion programs built for rapid technical transformation and industry-standard architecture.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-forge-navy uppercase tracking-tighter">Sustainable Engineering</h2>
                            <p className="text-forge-navy/60 text-lg font-semibold leading-relaxed">
                                Our bootcamps are intensive, long-form programs that focus on building sustainable software. We don't just teach code; we teach the architecture, the testing, and the deployment strategies that define elite engineers.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "100% Project-Based Learning",
                                    "Direct Access to Mentors",
                                    "Industry-Standard Tech Stack",
                                    "Career Placement Assistance"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 text-forge-navy font-bold uppercase tracking-widest text-sm">
                                        <div className="w-2 h-2 bg-forge-orange" />
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-50 border border-zinc-200 p-10 space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-forge-navy">Upcoming Intensives</h3>
                                <p className="text-forge-navy/50 text-[11px] font-black uppercase tracking-widest">Enrollment strictly limited</p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { name: "Full-Stack Titan", date: "April 2026", seats: "12 Seats Left" },
                                    { name: "UI/UX Architect", date: "May 2026", seats: "8 Seats Left" },
                                    { name: "DevOps Engineer", date: "June 2026", seats: "15 Seats Left" }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-zinc-200">
                                        <div>
                                            <h4 className="font-bold text-forge-navy">{item.name}</h4>
                                            <p className="text-[10px] font-black text-forge-navy/30 uppercase tracking-widest">{item.date}</p>
                                        </div>
                                        <span className="px-3 py-1 bg-forge-navy text-[#FEC70B] text-[9px] font-black uppercase tracking-widest">{item.seats}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/get-started" className="flex items-center justify-center w-full py-5 bg-forge-navy text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-forge-orange transition-all">
                                Request Access
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default BootcampsPage;
