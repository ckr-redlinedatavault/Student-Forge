"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";
import Image from "next/image";
import Link from "next/link";

const LearnPage = () => {
    return (
        <div className="bg-white min-h-screen pt-4">
            {/* Split Hero Section - Compact & Card Style (Footer CTA Inspired) */}
            <section className="relative w-full overflow-hidden py-8 lg:py-10">
                {/* Background - Partial Navy on the RIGHT, White on LEFT */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] bg-forge-navy"></div>
                    <div className="absolute inset-0 bg-white -z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-zinc-100 overflow-hidden">
                        
                        {/* LEFT content (Over White) */}
                        <div className="p-8 lg:p-12 space-y-5">
                            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-forge-navy/5 text-forge-navy border border-forge-navy/10 text-[8px] font-semibold uppercase tracking-[0.2em]">
                                Excellence in Education
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-forge-navy leading-[1.1]">
                                Future of <br />
                                <span className="text-forge-orange">Practical Learning</span>
                            </h1>
                            <div className="space-y-3 max-w-sm">
                                <p className="text-forge-navy/80 text-[14px] font-semibold leading-relaxed">
                                    At Student Forge, education is as dynamic as the industry. Transformation from a student into a master builder.
                                </p>
                            </div>
                            <div className="flex gap-4 pt-2">
                                <Link href="/get-started" className="px-6 py-2.5 bg-forge-navy text-white font-semibold text-[10px] uppercase tracking-widest hover:bg-forge-orange transition-all">
                                    Apply Now
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT visual (Over Navy) */}
                        <div className="relative h-[250px] lg:h-full w-full bg-forge-navy/20 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
                                alt="Practical Learning"
                                fill
                                className="object-cover opacity-90 transition-all duration-1000"
                            />
                            <div className="absolute bottom-4 right-4 hidden lg:block">
                                <div className="text-[8px] font-mono text-white/50 font-semibold uppercase tracking-[0.3em]">
                                    FORGE_LEARN_MOD.01
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Pedagogy Section - Reduced Redesigned Content */}
            <section className="py-12 bg-zinc-50 border-b border-zinc-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="relative aspect-video bg-zinc-200 overflow-hidden shadow-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                alt="Collaborative Learning"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight leading-tight">
                                    How We <span className="text-forge-orange">Forge</span> Success
                                </h2>
                                <p className="text-forge-navy/70 text-[15px] font-semibold leading-relaxed">
                                    Our approach is built on three pillars that ensure every student excels.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                {[
                                    { id: "01", title: "Project-First Philosophy", desc: "Engaged in hands-on projects that simulate real business challenges from day one." },
                                    { id: "02", title: "Mentorship Mesh", desc: "Guided by industry veterans who provide insights into modern workflows and job markets." },
                                    { id: "03", title: "Community Alchemy", desc: "Peer review and collaborative coding prepare you for modern corporate environments." }
                                ].map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-forge-navy text-[#FEC70B] flex items-center justify-center font-semibold text-base uppercase">
                                            {item.id}
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-forge-navy uppercase tracking-wider text-[11px]">{item.title}</h4>
                                            <p className="text-forge-navy/60 text-[12px] leading-relaxed font-semibold">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6">
                        <div className="max-w-xl space-y-3">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight">
                                Mastery Across Dimensions
                            </h2>
                            <p className="text-forge-navy/60 text-[14px] font-semibold leading-relaxed">
                                Comprehensive suite of learning pathways designed to master the skills that companies are actually hiring for.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "Strategic Workshops", desc: "High-intensity sessions focusing on specific toolkits and emerging tech.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" },
                            { name: "Execution Bootcamps", desc: "Long-form intensive programs on sustainable software architecture.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" },
                            { name: "Professional Courses", desc: "Learning paths covering UI/UX and Frontend with certifications.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" },
                            { name: "Industry Webinars", desc: "Live sessions with Lead Engineers discussing the digital workforce.", img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600" }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-zinc-50 border border-zinc-100 p-6 hover:bg-forge-navy transition-all duration-300">
                                <div className="relative z-10 space-y-3">
                                    <h3 className="font-semibold text-base text-forge-navy group-hover:text-white transition-colors tracking-tight">{item.name}</h3>
                                    <p className="text-[12px] text-forge-navy/60 group-hover:text-white/60 leading-relaxed font-semibold transition-colors">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Programs Section */}
            <section className="py-12 bg-zinc-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-forge-navy tracking-tight">Tailored Programs</h2>
                        <p className="text-forge-navy/60 text-[14px] font-semibold">Tiered to match your current level and future ambitions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Forge Foundation", desc: "Perfect for beginners. Covering core logic and modern web tools.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
                            { title: "Forge Elevate", desc: "Focus on React and Cloud architectures in simulated start-up environments.", img: "https://images.unsplash.com/photo-1522071823991-b5182046d38a?auto=format&fit=crop&q=80&w=600" },
                            { title: "Forge Launch", desc: "Bridge to your career with placement support and live industry projects.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" }
                        ].map((prog, i) => (
                            <div key={i} className="flex flex-col bg-white border border-zinc-200 transition-all group">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image src={prog.img} alt={prog.title} fill className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-forge-navy mb-4 group-hover:text-forge-orange transition-colors">{prog.title}</h3>
                                    <p className="text-forge-navy/70 text-[13px] leading-relaxed mb-6 flex-grow font-semibold">
                                        {prog.desc}
                                    </p>
                                    <Link href="#" className="inline-flex items-center justify-center w-full py-3 bg-forge-navy text-white text-[10px] font-semibold uppercase tracking-widest hover:bg-forge-orange transition-all">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Testimonial */}
            <section className="bg-white py-12 border-y border-zinc-100">
                <div className="container mx-auto px-6 text-center max-w-2xl space-y-6">
                    <p className="text-xl text-forge-navy font-semibold leading-relaxed tracking-tight">
                        “The methodology at Student Forge is lightyears ahead of college. I learned how to build a career in technology.”
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="font-semibold text-forge-navy text-[11px] uppercase tracking-widest">— Harsha, Software Engineer</p>
                    </div>
                </div>
            </section>

            {/* Final CTA - Height Reduced */}
            <section className="py-8 container mx-auto px-6">
                <div className="bg-forge-navy p-8 lg:p-10 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold text-white tracking-tight">Ready to start journey?</h2>
                                <p className="text-white/60 text-[14px] leading-relaxed font-semibold max-w-sm">
                                    Join a community of 2,000+ students already forging their futures.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/get-started" className="px-8 py-3 bg-white text-forge-navy font-semibold text-[10px] uppercase tracking-widest hover:bg-[#FEC70B] transition-all">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-video bg-white/5 overflow-hidden">
                            <Image
                                src="https://media.istockphoto.com/id/1461630610/photo/group-of-happy-students-checking-results-on-laptop-while-sitting-on-college-campus-concept-of.jpg?s=612x612&w=0&k=20&c=cFO_ROJ_yxhk7lv8Xwm13iaIUOnL_nJMO1EU2lKhPVQ="
                                alt="Student Success"
                                fill
                                className="object-cover opacity-70"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};


export default LearnPage;

