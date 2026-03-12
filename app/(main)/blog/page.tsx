"use client";

import React from "react";
import FooterCTA from "@/components/FooterCTA";

const BlogPage = () => {
    return (
        <div className="bg-white min-h-screen pt-12">
            {/* Simple Hero Section */}
            <section className="w-full py-12 lg:py-16 bg-zinc-50 border-b border-zinc-100">
                <div className="container mx-auto px-6 text-center space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-forge-navy leading-tight">
                        The Forge Blog
                    </h1>
                    <p className="text-forge-navy/60 text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                        Ideas, tutorials, and success stories from the student ecosystem.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { t: "Building Modular Systems", d: "How to design React architectures that scale with your student community.", cat: "Technical" },
                        { t: "The Art of Mentorship", d: "Why Peer-to-Peer learning is the most effective way to master soft skills.", cat: "Community" },
                        { t: "V2.6 Release Notes", d: "A deep dive into the latest architectural updates to the Forge platform.", cat: "Updates" }
                    ].map((post, i) => (
                        <div key={i} className="group cursor-pointer p-6 border border-zinc-100 hover:border-[#FEC70B] transition-all bg-white">
                            <div className="space-y-4">
                                <span className="inline-block px-2 py-1 bg-forge-navy/5 text-[9px] font-bold uppercase tracking-widest text-forge-navy">
                                    {post.cat}
                                </span>
                                <h3 className="text-lg font-bold text-forge-navy group-hover:text-forge-orange transition-colors leading-tight">{post.t}</h3>
                                <p className="text-forge-navy/60 text-xs leading-relaxed font-medium">{post.d}</p>
                                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-forge-navy">
                                    Read Article
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <FooterCTA />
        </div>
    );
};

export default BlogPage;
