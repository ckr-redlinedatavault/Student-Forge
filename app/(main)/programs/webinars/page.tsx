"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const WebinarsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1600"
                        alt="Industry Webinars"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Live Sessions // Webinars
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Industry <span className="text-forge-orange">Webinars</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            Live insights from Lead Engineers and Tech Leaders discussing the modern digital workforce and emerging industry trends.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {[
                            { title: "Building at Scale", speaker: "Sandeep, Lead Engineer @ SF", date: "March 25, 2026", time: "6:00 PM IST" },
                            { title: "The Future of AI in Dev", speaker: "Divya, Senior Architect", date: "April 02, 2026", time: "7:00 PM IST" },
                            { title: "Product Thinking for Engs", speaker: "Pavan, Product Lead", date: "April 10, 2026", time: "6:30 PM IST" }
                        ].map((webinar, i) => (
                            <div key={i} className="flex flex-col sm:flex-row bg-zinc-50 border border-zinc-200 overflow-hidden hover:border-forge-orange transition-colors">
                                <div className="sm:w-1/3 p-8 flex flex-col justify-center items-center bg-forge-navy text-white space-y-2 text-center">
                                    <span className="text-3xl font-black tabular-nums">{webinar.date.split(" ")[1].replace(",", "")}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{webinar.date.split(" ")[0]}</span>
                                </div>
                                <div className="p-8 flex-1 space-y-4">
                                    <h3 className="text-xl font-bold text-forge-navy uppercase tracking-tight">{webinar.title}</h3>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-forge-navy/80">{webinar.speaker}</p>
                                        <p className="text-[11px] font-black text-forge-orange uppercase tracking-widest">{webinar.time}</p>
                                    </div>
                                    <button className="px-6 py-2 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest hover:bg-forge-navy hover:text-white transition-all">
                                        Join Live Session
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-forge-navy text-center space-y-6">
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Missed a session?</h2>
                        <p className="text-white/60 font-semibold max-w-md mx-auto">Access our complete archive of technical webinars and industry deep-dives.</p>
                        <Link href="/login" className="inline-flex h-12 items-center justify-center px-10 bg-white text-forge-navy text-[10px] font-black uppercase tracking-widest hover:bg-forge-orange hover:text-white transition-all">
                            View Archives
                        </Link>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default WebinarsPage;
