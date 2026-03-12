"use client";

import React, { useState } from "react";
import FooterCTA from "@/components/FooterCTA";
import { submitInquiry } from "@/lib/actions";

const ContactPage = () => {
    const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleInquiry(formData: FormData) {
        setIsPending(true);
        setStatus(null);
        
        const result = await submitInquiry(formData);
        
        if (result.success) {
            setStatus({ success: result.success });
            // Optionally clear the form if it was a real form element
        } else if (result.error) {
            setStatus({ error: result.error });
        }
        setIsPending(false);
    }

    return (
        <div className="bg-white min-h-screen pt-12">
            {/* Simple Hero Section */}
            <section className="w-full py-12 lg:py-16 bg-forge-navy">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl space-y-4">
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                            Get in <span className="text-[#FEC70B]">Touch</span>
                        </h1>
                        <p className="text-white/70 text-base lg:text-lg font-medium leading-relaxed max-w-lg">
                            Have questions about our programs, partnerships, or community? We're here to help you navigate your journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <form action={handleInquiry} className="bg-zinc-50 p-8 border border-zinc-100 space-y-6">
                        <div className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-forge-navy/60">Full Name</label>
                                <input name="name" type="text" required className="w-full h-11 bg-white border border-zinc-200 px-4 focus:outline-none focus:border-[#FEC70B] transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-forge-navy/60">Email Address</label>
                                <input name="email" type="email" required className="w-full h-11 bg-white border border-zinc-200 px-4 focus:outline-none focus:border-[#FEC70B] transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-forge-navy/60">Message</label>
                                <textarea name="message" required className="w-full h-32 bg-white border border-zinc-200 p-4 focus:outline-none focus:border-[#FEC70B] transition-colors resize-none" placeholder="Tell us about your query..."></textarea>
                            </div>
                        </div>
                        
                        {status?.success && (
                            <div className="p-3 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest border border-green-100 italic">
                                {status.success}
                            </div>
                        )}
                        {status?.error && (
                            <div className="p-3 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-widest border border-red-100 italic">
                                {status.error}
                            </div>
                        )}

                        <button 
                            disabled={isPending}
                            className="w-full h-12 bg-forge-navy text-white font-bold text-xs uppercase tracking-widest hover:bg-forge-navy/90 transition-all disabled:opacity-50"
                        >
                            {isPending ? "Processing..." : "Send Inquiry"}
                        </button>
                    </form>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { 
                                l: "Hyderabad Headquarters", 
                                a: "HF2R+CCV, Devender Colony, Kompally, TS 500100", 
                                e: "info@studentforge.in",
                                p: "+91 6304218064"
                            },
                            { 
                                l: "Khammam Branch", 
                                a: "H.no 10-11-860/5, Raparthi Nagar, TS 507003", 
                                e: "info@studentforge.in",
                                p: "+91 6304218064"
                            }
                        ].map((loc, i) => (
                            <div key={i} className="p-6 border border-zinc-100 space-y-4">
                                <h3 className="text-lg font-bold text-forge-navy">{loc.l}</h3>
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-forge-navy/60 leading-relaxed">{loc.a}</p>
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-forge-orange uppercase tracking-wider">{loc.e}</p>
                                        <p className="text-xs font-bold text-forge-navy opacity-40">{loc.p}</p>
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

export default ContactPage;
