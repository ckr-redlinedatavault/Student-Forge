"use client";

import React from "react";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";

const FoundationPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
                <div className="space-y-8 max-w-2xl">
                    <div className="text-[10px] font-black text-forge-orange tracking-[0.4em] uppercase">
                        Program // 01
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-black text-forge-navy tracking-tighter uppercase leading-none">
                        Forge Foundation
                    </h1>
                    
                    <p className="text-[13px] font-bold text-forge-navy/40 tracking-widest uppercase leading-relaxed max-w-lg mx-auto">
                        CORE SOFTWARE LOGIC AND MODERN ENGINEERING PRINCIPLES. 
                        CURRICULUM UPDATES IN PROGRESS.
                    </p>
                    
                    <div className="pt-12">
                        <Link 
                            href="/contact" 
                            className="inline-flex h-14 items-center justify-center bg-forge-navy px-12 text-[11px] font-black text-white hover:bg-forge-orange transition-all uppercase tracking-[0.2em]"
                        >
                            Notify Me on Launch
                        </Link>
                    </div>
                </div>
            </div>
            
            <FooterCTA />
        </div>
    );
};

export default FoundationPage;
