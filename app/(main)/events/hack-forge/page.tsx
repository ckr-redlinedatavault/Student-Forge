"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";
import Link from "next/link";

const HackForgeDetail = () => {
    return (
        <div className="bg-white min-h-screen pt-4">
            {/* Minimalist Header / Hero */}
            <section className="relative w-full overflow-hidden py-10 lg:py-16 bg-forge-navy">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl space-y-6">
                        <Link href="/events" className="inline-flex items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest hover:text-white transition-colors">
                            ← Back to Archive
                        </Link>
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 text-forge-orange border border-white/10 text-[9px] font-semibold uppercase tracking-[0.2em] w-fit">
                                National Level 48-Hour Hackathon
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                                HACK<span className="text-forge-orange">FORGE</span>
                            </h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white/60">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[1px] bg-forge-orange"></div>
                                <span className="text-[12px] font-semibold uppercase tracking-widest">March 05 – March 07</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-[1px] bg-forge-orange"></div>
                                <span className="text-[12px] font-semibold uppercase tracking-widest">CMR Institute of Technology, Hyderabad</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-forge-orange/5 skew-x-[-20deg] translate-x-12"></div>
            </section>

            {/* Quick Stats / Info-Graphic */}
            <section className="py-12 border-b border-zinc-100 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Duration", value: "48 Hours" },
                            { label: "Team Size", value: "Max 4 Members" },
                            { label: "Registration", value: "₹599 / Person" },
                            { label: "Total Prize Pool", value: "₹35,000+" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-2xl font-semibold text-forge-navy tracking-tight">{stat.value}</div>
                                <div className="text-[10px] font-semibold text-forge-navy/40 uppercase tracking-[0.2em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About the Event - Descriptive Paragraphs */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 translate-y-2">
                            <div className="text-[10px] font-bold text-forge-orange uppercase tracking-[0.4em] mb-4">Event Deep-Dive</div>
                            <h2 className="text-3xl font-semibold text-forge-navy tracking-tight uppercase leading-tight">
                                Breaking Down <br />
                                The <span className="text-forge-orange">Forge</span> Spirit
                            </h2>
                            <div className="w-16 h-[4px] bg-forge-navy mt-6"></div>
                        </div>

                        <div className="lg:col-span-8 space-y-8">
                            <div className="space-y-6">
                                <p className="text-[16px] font-semibold text-forge-navy/80 leading-relaxed font-sans">
                                    HACKFORGE 2026 was a key part of the Student Forge ecosystem. It was a 48-hour event at the CMR Central Auditorium where students from over 15 universities built real-world projects.
                                </p>
                                <p className="text-[15px] font-medium text-forge-navy/60 leading-relaxed font-sans">
                                    Our goal was to help students bridge the gap between college and the industry. By working on tasks like AI, IoT, and Automation, participants built professional-grade solutions with the help of industry mentors.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                                <div className="space-y-3 p-6 border-l-2 border-forge-orange bg-zinc-50">
                                    <h3 className="text-[12px] font-bold text-forge-navy uppercase tracking-widest">Inclusive Innovation</h3>
                                    <p className="text-[13px] font-medium text-forge-navy/50 leading-relaxed">
                                        We broke the barrier of entry by welcoming students from all disciplines—not just Computer Science. This cross-pollination of ideas led to some of the most unique solutions of the event.
                                    </p>
                                </div>
                                <div className="space-y-3 p-6 border-l-2 border-forge-navy bg-zinc-50">
                                    <h3 className="text-[12px] font-bold text-forge-navy uppercase tracking-widest">Real-World Impact</h3>
                                    <p className="text-[13px] font-medium text-forge-navy/50 leading-relaxed">
                                        Every project submitted underwent rigorous technical scrutiny by our panel of industry experts, ensuring that the solutions built were viable for real-world application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upgraded Rewards Section */}
            <section className="py-16 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-forge-navy"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center space-y-4 mb-12">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-forge-navy text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                            Total Prize Pool: ₹35,000+
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-forge-navy tracking-tight uppercase">The <span className="text-forge-orange">Rewards</span></h2>
                        <div className="w-20 h-1 bg-forge-navy mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-end gap-0 max-w-6xl mx-auto">
                        {/* Runner Up */}
                        <div className="flex-1 w-full lg:order-1 group">
                            <div className="bg-white border-2 border-forge-navy p-10 space-y-6 text-center shadow-[4px_4px_0px_0px_rgba(28,34,55,1)] group-hover:-translate-y-2 transition-all duration-500">
                                <div className="text-[10px] font-bold text-forge-navy/40 uppercase tracking-[0.3em]">🥈 Runner-Up</div>
                                <div className="text-5xl font-bold text-forge-navy tracking-tighter">₹10,000</div>
                                <div className="space-y-1">
                                    <div className="text-[9px] font-bold text-forge-navy/60 uppercase tracking-widest">Premium Swags</div>
                                    <div className="text-[9px] font-bold text-forge-navy/60 uppercase tracking-widest">Cloud Credits</div>
                                </div>
                            </div>
                        </div>

                        {/* 1st Prize - The Main Highlight */}
                        <div className="flex-1 w-full lg:order-2 z-20 group">
                            <div className="bg-[#FEC70B] border-4 border-forge-navy p-12 lg:p-16 space-y-8 text-center shadow-[12px_12px_0px_0px_rgba(28,34,55,1)] lg:scale-110 group-hover:-translate-y-4 transition-all duration-500 relative">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-forge-navy text-[#FEC70B] px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                                    Winner 2026
                                </div>
                                <div className="text-[11px] font-bold text-forge-navy uppercase tracking-[0.4em] opacity-80">🏆 Grand Champion</div>
                                <div className="text-7xl font-black text-forge-navy tracking-tighter">₹20,000</div>
                                <div className="pt-4 border-t border-forge-navy/10 space-y-2">
                                    <div className="text-[10px] font-black text-forge-navy uppercase tracking-[0.3em]">Elite Membership</div>
                                    <div className="text-[10px] font-black text-forge-navy uppercase tracking-[0.3em]">Ecosystem Access</div>
                                </div>
                            </div>
                        </div>

                        {/* 2nd Runner Up */}
                        <div className="flex-1 w-full lg:order-3 group">
                            <div className="bg-white border-2 border-forge-navy p-10 space-y-6 text-center shadow-[4px_4px_0px_0px_rgba(28,34,55,1)] group-hover:-translate-y-2 transition-all duration-500">
                                <div className="text-[10px] font-bold text-forge-navy/40 uppercase tracking-[0.3em]">🥉 2nd Runner-Up</div>
                                <div className="text-5xl font-bold text-forge-navy tracking-tighter">₹5,000</div>
                                <div className="space-y-1">
                                    <div className="text-[9px] font-bold text-forge-navy/60 uppercase tracking-widest">Forge Swags</div>
                                    <div className="text-[9px] font-bold text-forge-navy/60 uppercase tracking-widest">Digital Badge</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-forge-navy/40 text-[9px] font-bold uppercase tracking-[0.5em] animate-pulse">
                        + Exciting Prizes, Certifications & Cloud Infrastructure Support
                    </div>
                </div>
            </section>

            {/* Themes & Goals */}
            <section className="py-12 bg-zinc-50 border-y border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-forge-navy tracking-tight uppercase">Hackathon Themes</h2>
                                <p className="text-forge-navy/60 text-[14px] font-semibold leading-relaxed">Open Innovation focused on cutting-edge technological sectors.</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {["LLMs (Large Language Models)", "Automations", "IoT (Internet of Things)"].map((theme, i) => (
                                    <div key={i} className="px-6 py-3 bg-white border border-zinc-200 text-forge-navy text-[12px] font-semibold uppercase tracking-widest hover:border-forge-orange transition-all">
                                        {theme}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-forge-navy tracking-tight uppercase">Our Goal</h2>
                                <p className="text-forge-navy/60 text-[14px] font-semibold leading-relaxed">Tackle real-world problems. Build AI-powered solutions. Shape the future.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-forge-orange"></div>
                                    <span className="text-[13px] font-semibold text-forge-navy/80 uppercase tracking-widest">Who Can Join? Students from all disciplines.</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-forge-orange"></div>
                                    <span className="text-[13px] font-semibold text-forge-navy/80 uppercase tracking-widest">No prior experience required – Only curiosity.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chief Guests & Jury Panels */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 space-y-20">
                    {/* Chief Guests */}
                    <div className="space-y-12">
                        <div className="text-center space-y-3">
                            <div className="text-[10px] font-semibold text-forge-orange uppercase tracking-[0.4em]">Distinguished Speakers</div>
                            <h2 className="text-3xl font-semibold text-forge-navy tracking-tight uppercase">Chief Guests</h2>
                            <div className="w-12 h-[3px] bg-forge-navy mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                { name: "Gowrav Reddy", role: "Co-Founder of Godwings", company: "Leadership & Entrepreneurship", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrU93Z7_SUXRQfYcn26E0BKgqTTG4xZpuG5g&s" },
                                { name: "Sana Afreen", role: "CEO & Founder – Sanaa PR", company: "Strategy & Social Media", img: "https://cdn.mentorcruise.com/cdn-cgi/image/width=504,format=auto/https://cdn.mentorcruise.com/cache/da73c3e40ebf2a415905fc5a374bf70a/5e14e3851d822d07/d44ade506e2059288223b2ff38b5d4c5.jpg" }
                            ].map((guest, i) => (
                                <div key={i} className="flex items-center gap-8 p-8 bg-[#FEC70B] border border-forge-navy/5 shadow-[8px_8px_0px_0px_rgba(28,34,55,1)] group hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-24 h-24 shrink-0 border-2 border-forge-navy relative overflow-hidden bg-white">
                                        <Image
                                            src={guest.img}
                                            alt={guest.name}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-xl font-semibold text-forge-navy tracking-tight leading-none">{guest.name}</div>
                                        <div className="text-[10px] font-bold text-forge-navy uppercase tracking-widest opacity-80">{guest.role}</div>
                                        <div className="text-[11px] font-semibold text-forge-navy/60 uppercase tracking-widest">{guest.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Jury Panel - Profile Cards */}
                    <div className="space-y-12">
                        <div className="text-center space-y-3">
                            <div className="text-[10px] font-semibold text-forge-orange uppercase tracking-[0.4em]">Technical Oversight</div>
                            <h2 className="text-3xl font-semibold text-forge-navy tracking-tight uppercase">National Jury Panel</h2>
                            <div className="w-12 h-[3px] bg-forge-navy mx-auto"></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "Jashwanth Sonti", role: "Founder & CEO", org: "Student Forge" },
                                { name: "E Sai Eshwar", role: "Founder", org: "Nirvana" },
                                { name: "Tech Boy Deepak", role: "Ex-PwC", org: "Tech Creator" },
                                { name: "Karthik Nagapuri", role: "Founder", org: "Evolvex Spaces" },
                                { name: "Biradar Saikumar", role: "Software Engineer", org: "Xebia" },
                                { name: "Gayatri G.", role: "Growth & Mentor", org: "Tech Advocacy" },
                                { name: "Rahul Dasari", role: "Specialist Programmer", org: "Infosys" },
                                { name: "S. Lakshmi Mahendra", role: "Author", org: "Startup Strategist" },
                                { name: "Likhitha Gunuri", role: "Associate Consultant", org: "TCE Digital" }
                            ].map((jury, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 bg-[#FEC70B] border border-forge-navy/5 shadow-[4px_4px_0px_0px_rgba(28,34,55,1)] group hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300">
                                    <div className="w-12 h-12 shrink-0 border-2 border-forge-navy flex items-center justify-center bg-white">
                                        <span className="text-[14px] font-black text-forge-navy">0{i + 1}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[14px] font-bold text-forge-navy uppercase tracking-tight leading-none">{jury.name}</div>
                                        <div className="text-[9px] font-semibold text-forge-navy/70 uppercase tracking-widest leading-tight">{jury.role}</div>
                                        <div className="text-[10px] font-bold text-forge-navy/40 uppercase tracking-[0.1em]">{jury.org}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaborations */}
            <section className="py-16 bg-zinc-50 border-t border-zinc-100">
                <div className="container mx-auto px-6 text-center space-y-10">
                    <div className="text-[10px] font-semibold text-forge-navy/30 uppercase tracking-[0.4em]">Ecosystem Powering HACKFORGE</div>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
                        {["CMR", "Ikshana", "Student Forge", "Data Science Society", "CMRIT Prompt Techies"].map((org, i) => (
                            <span key={i} className="text-forge-navy font-semibold text-[14px] uppercase tracking-widest">{org}</span>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default HackForgeDetail;
