"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";
import Link from "next/link";

const EventsPage = () => {
    return (
        <div className="bg-white min-h-screen pt-4">
            {/* Yellow Hero Section - Compact & Wide */}
            <section className="relative w-full overflow-hidden py-6 lg:py-8">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] bg-[#FEC70B]"></div>
                    <div className="absolute inset-0 bg-white -z-10"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white border border-zinc-100 overflow-hidden shadow-sm">

                        {/* LEFT content */}
                        <div className="p-8 lg:p-10 space-y-4 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 text-[8px] font-semibold uppercase tracking-[0.2em] w-fit">
                                Past Milestones
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-forge-navy leading-[1.1]">
                                Ecosystem <br />
                                <span className="text-black">Event Archive</span>
                            </h1>
                            <div className="space-y-3 max-w-sm">
                                <p className="text-forge-navy/80 text-[13px] font-semibold leading-relaxed">
                                    A chronicle of the hackathons, sessions, and summits that have defined the Student Forge journey.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT visual */}
                        <div className="relative min-h-[220px] lg:min-h-[340px] w-full bg-[#FEC70B]/10 overflow-hidden">
                            <Image
                                src="https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-12%20at%2003.11.30.png"
                                alt="Events Archive"
                                fill
                                className="object-cover transition-all duration-1000"
                            />
                            <div className="absolute bottom-4 right-4 hidden lg:block">
                                <div className="text-[8px] font-mono text-forge-navy/50 font-semibold uppercase tracking-[0.3em]">
                                    FORGE_EVENT_LOG.V2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Completed Events List */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-xl mb-10 space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight">Completed Events</h2>
                        <p className="text-forge-navy/60 text-[14px] font-semibold">Review the highlights and outcomes from our previous engagements.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 max-w-5xl">
                        {[
                            {
                                title: "Hack Forge",
                                type: "National Level Hackathon",
                                status: "Success",
                                date: "March 2026",
                                desc: "Our premier national-level hackathon where teams competed to build high-impact solutions. A 48-hour marathon of innovation and execution.",
                                img: "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2018.03.04.jpeg"
                            },
                            {
                                title: "LinkedIn Mastery Session",
                                type: "Sri Chaitanya Campus",
                                status: "Success",
                                date: "September 2025",
                                desc: "An exclusive career-focused session held at Sri Chaitanya, empowering students with LinkedIn strategies for personal branding and networking.",
                                img: "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2017.48.20.jpeg"
                            }
                        ].map((event, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-stretch bg-zinc-50 border border-zinc-100 overflow-hidden group">
                                <div className="relative w-full md:w-96 min-h-[260px] bg-zinc-200 overflow-hidden">
                                    <Image
                                        src={event.img}
                                        alt={event.title}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 flex flex-col justify-center flex-grow space-y-5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="px-2 py-0.5 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 text-[8px] font-semibold uppercase tracking-widest">{event.type}</span>
                                        <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                            {event.status}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-forge-navy mb-2">{event.title}</h3>
                                        <p className="text-forge-navy/60 text-[13px] leading-relaxed font-semibold max-w-2xl">
                                            {event.desc}
                                        </p>
                                    </div>
                                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-semibold text-forge-navy/40 uppercase tracking-[0.2em]">Timeline</span>
                                                <span className="text-[11px] font-semibold text-forge-navy uppercase tracking-widest">{event.date}</span>
                                            </div>
                                            <div className="h-8 w-[1px] bg-zinc-200"></div>
                                        </div>

                                        <div className="flex gap-3 w-full sm:w-auto">
                                            <Link href={event.title === "Hack Forge" ? "/events/hack-forge" : "/events/hack-forge"} className="flex-1 sm:flex-none px-6 py-2.5 bg-forge-navy text-white text-[10px] font-semibold uppercase tracking-widest hover:bg-forge-orange transition-all text-center">
                                                Event Details
                                            </Link>
                                            <Link href="/gallery" className="flex-1 sm:flex-none px-6 py-2.5 bg-white border border-forge-navy/20 text-forge-navy text-[10px] font-semibold uppercase tracking-widest hover:bg-forge-navy/5 transition-all text-center">
                                                Gallery
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default EventsPage;
