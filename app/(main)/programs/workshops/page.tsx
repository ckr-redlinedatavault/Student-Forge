"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const WorkshopsPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
                        alt="Strategic Workshops"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Sprint Series // Workshops
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Strategic <span className="text-forge-orange">Workshops</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            High-intensity, tool-specific sessions designed to bridge technical gaps in record time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-forge-navy uppercase tracking-tight italic line-through decoration-forge-orange decoration-4">Legacy Training</h2>
                            <h2 className="text-4xl font-black text-forge-navy uppercase tracking-tighter">The Forge Sprint Methodology</h2>
                            <p className="text-forge-navy/60 text-lg font-semibold leading-relaxed">
                                Our workshops are not lectures. They are 4-8 hour execution sprints where you master a single tool or framework by building a production-ready module. No fluff, just technical mastery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Next.js 15 Masterclass", type: "Framework Sprint", duration: "6 Hours" },
                                { title: "Advanced Tailwind UI", type: "Design Systems", duration: "4 Hours" },
                                { title: "Prisma & PostgreSQL", type: "Database Deep-Dive", duration: "5 Hours" },
                                { title: "CI/CD with GitHub Actions", type: "DevOps Sprint", duration: "4 Hours" }
                            ].map((workshop, i) => (
                                <div key={i} className="p-8 bg-zinc-50 border border-zinc-200 space-y-4 hover:border-forge-orange transition-colors">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[10px] font-black text-forge-navy/30 uppercase tracking-[0.2em]">{workshop.type}</span>
                                        <span className="text-[10px] font-black text-forge-orange uppercase tracking-widest">{workshop.duration}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-forge-navy uppercase tracking-tight">{workshop.title}</h3>
                                    <Link href="/get-started" className="inline-flex text-[10px] font-black text-forge-navy border-b-2 border-forge-orange pb-0.5 hover:text-forge-orange transition-colors uppercase tracking-widest">
                                        Register for Next Cohort
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default WorkshopsPage;
