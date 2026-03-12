"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const CoursesPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="relative w-full h-[50vh] flex items-center bg-forge-navy">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600"
                        alt="Professional Courses"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-forge-orange text-forge-navy text-[10px] font-black uppercase tracking-widest">
                            Pathways // Courses
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
                            Professional <span className="text-forge-orange">Courses</span>
                        </h1>
                        <p className="text-white/70 text-lg font-medium max-w-xl leading-relaxed">
                            Structured learning pathways covering UI/UX design, Frontend Engineering, and Full-Stack Mastery with industry certifications.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "Frontend Architecture", level: "Intermediate", icon: "⚡" },
                            { name: "Pro UI/UX Design", level: "Beginner", icon: "🎨" },
                            { name: "Backend Logic & SQL", level: "Intermediate", icon: "🗄️" },
                            { name: "SaaS Fundamentals", level: "Beginner", icon: "🚀" },
                            { name: "Mobile App mastery", level: "Advanced", icon: "📱" },
                            { name: "Cybersecurity Basics", level: "Beginner", icon: "🔒" }
                        ].map((course, i) => (
                            <div key={i} className="group p-8 bg-zinc-50 border border-zinc-200 hover:bg-forge-navy transition-all duration-300">
                                <div className="text-4xl mb-6">{course.icon}</div>
                                <h3 className="text-xl font-bold text-forge-navy group-hover:text-white uppercase tracking-tight mb-2 transition-colors">{course.name}</h3>
                                <p className="text-[10px] font-black text-forge-navy/30 group-hover:text-white/40 uppercase tracking-widest transition-colors mb-6">{course.level}</p>
                                <Link href="/get-started" className="inline-flex h-10 items-center justify-center border border-zinc-300 group-hover:border-white/20 text-forge-navy group-hover:text-white text-[10px] font-black uppercase tracking-widest px-6 transition-all">
                                    Enrolment Open
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default CoursesPage;
