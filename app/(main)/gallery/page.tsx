"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";

const GalleryPage = () => {
    return (
        <div className="bg-white min-h-screen pt-0">
            {/* Minimalist Header with Yellow BG */}
            <section className="bg-[#FEC70B] border-b border-[#EAB308]">
                <header className="container mx-auto px-6 py-10 lg:py-14">
                    <div className="max-w-2xl space-y-3">
                        <div className="text-[9px] font-semibold text-forge-navy/50 uppercase tracking-[0.3em] mb-2">Visual Archive</div>
                        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-forge-navy">
                            Ecosystem <span className="text-white">Moments</span>
                        </h1>
                        <p className="text-forge-navy/80 text-[14px] font-semibold leading-relaxed max-w-lg">
                            A retrospective look at the key milestones, sessions, and hackathons that define the Student Forge journey.
                        </p>
                    </div>
                </header>
            </section>

            {/* Filter Navigation - Aligned with Hero */}
            <section className="border-b border-zinc-100">
                <div className="container mx-auto px-6">
                    <nav className="flex gap-8 overflow-x-auto no-scrollbar py-6">
                        {["All Moments", "Hackathons", "Campus", "Summits"].map((link, i) => (
                            <button key={i} className={`text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-colors relative group ${i === 0 ? 'text-forge-navy' : 'text-forge-navy/40 hover:text-forge-navy'}`}>
                                {link}
                                {i === 0 && (
                                    <div className="absolute -bottom-[25px] left-0 w-full h-[3px] bg-forge-orange"></div>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Gallery Grid - Dynamic Masonry */}
            <main className="container mx-auto px-6 pb-20 pt-10">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {[
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175105.jpg", title: "Chapter Milestone", category: "Community" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131425.jpg", title: "Build Session", category: "Innovation" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175149.jpg", title: "Technical Review", category: "Execution" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175035.jpg", title: "LinkedIn Mastery @ Campus", category: "Personal Branding" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260310_174945.jpg", title: "Forge Chapter Connect", category: "Networking" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131321.jpg", title: "Ecosystem Expansion", category: "Growth" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260227_134707%20(1).jpg", title: "Hack Forge National", category: "Hackathon" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131351.jpg", title: "Leadership Dialogue", category: "Management" },
                        { img: "https://ik.imagekit.io/dypkhqxip/IMG_20260308_132102.jpg", title: "Project Showcase", category: "Building" }
                    ].map((item, i) => (
                        <div key={i} className="break-inside-avoid group space-y-3 mb-6">
                            <div className="relative bg-zinc-50 overflow-hidden border border-zinc-100">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-auto transition-all duration-700 brightness-[0.98] group-hover:brightness-100 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-[1.02]"
                                />
                            </div>
                            <div className="px-1">
                                <span className="text-[8px] font-semibold text-forge-navy/40 uppercase tracking-[0.2em]">{item.category}</span>
                                <h3 className="text-[12px] font-semibold text-forge-navy tracking-tight leading-tight transition-colors group-hover:text-forge-orange">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <FooterCTA />
        </div>
    );
};

export default GalleryPage;
