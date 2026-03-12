"use client";

import React from "react";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const CoursesPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-forge-navy py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Pathways // Courses
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Professional <span className="text-forge-orange">Courses</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6 text-center max-w-2xl space-y-8">
                    <h2 className="text-3xl font-black text-forge-navy uppercase tracking-tight">Structured Learning Library</h2>
                    <p className="text-forge-navy/60 text-lg font-bold italic leading-relaxed">
                        Our comprehensive course library is undergoing a major structural update. New certification paths in UI/UX, Frontend, and Backend systems are being finalized.
                    </p>
                    <div className="pt-8">
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-forge-navy px-8 text-[11px] font-black text-white hover:bg-forge-orange transition-all uppercase tracking-widest">
                            Explore Current Offerings
                        </Link>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default CoursesPage;
