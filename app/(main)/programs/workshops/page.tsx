"use client";

import React from "react";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const WorkshopsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-forge-navy py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Sprint Series // Workshops
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Strategic <span className="text-forge-orange">Workshops</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 text-center max-w-2xl space-y-8">
                    <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">Workshop Schedule Updating</h2>
                    <p className="text-forge-navy/60 text-lg font-bold italic leading-relaxed">
                        Our high-intensity technical sprints are being recalibrated for the next quarter. New toolsets and framework deep-dives will be announced shortly.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-forge-navy px-8 text-[11px] font-black text-white hover:bg-forge-orange transition-all uppercase tracking-widest">
                            Inquire about Custom Workshops
                        </Link>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default WorkshopsPage;
