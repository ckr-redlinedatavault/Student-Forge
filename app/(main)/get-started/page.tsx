"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { submitEnrollment } from "@/lib/actions";
import { UserPlus, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";

const GetStartedPage = () => {
    const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleEnrollment(formData: FormData) {
        setIsPending(true);
        setStatus(null);
        
        const result = await submitEnrollment(formData);
        
        if (result.success) {
            setStatus({ success: result.success });
        } else if (result.error) {
            setStatus({ error: result.error });
        }
        setIsPending(false);
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center py-10 sm:py-16 px-4 sm:px-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-full max-w-2xl space-y-8 sm:space-y-10">
                
                {/* Minimal Header */}
                <div className="text-center space-y-4">
                    <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                        <Image
                            src="/sf-next-logo.png"
                            alt="Student Forge"
                            width={42}
                            height={42}
                            className="mx-auto"
                        />
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-forge-navy tracking-tight px-4">Begin Your Journey</h1>
                        <p className="text-xs sm:text-sm text-zinc-500 font-medium max-w-md mx-auto px-6">
                            Fill out the enrollment form below to join our ecosystem of high-performance tech professionals.
                        </p>
                    </div>
                </div>

                {/* Enrollment Card */}
                <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
                    <div className="flex items-center gap-4 mb-8 sm:mb-10 pb-6 border-b border-zinc-50">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forge-navy text-[#FEC70B] flex items-center justify-center rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0">
                            <UserPlus size={20} className="sm:size-[24px]" />
                        </div>
                        <div>
                            <h2 className="text-base sm:text-lg font-bold text-forge-navy">Enrollment Form</h2>
                            <p className="text-[10px] sm:text-xs text-zinc-400 font-medium italic">Application response time: 24-48 hours.</p>
                        </div>
                    </div>

                    <form action={handleEnrollment} className="space-y-5 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                            <div className="space-y-2">
                                <label className="text-[13px] font-semibold text-forge-navy ml-1">First Name</label>
                                <input name="firstName" required type="text" placeholder="John" className="w-full h-11 sm:h-12 bg-zinc-50 border border-zinc-100 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[13px] font-semibold text-forge-navy ml-1">Last Name</label>
                                <input name="lastName" required type="text" placeholder="Doe" className="w-full h-11 sm:h-12 bg-zinc-50 border border-zinc-100 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-forge-navy ml-1">Email Address</label>
                            <input name="email" required type="email" placeholder="john@example.com" className="w-full h-11 sm:h-12 bg-zinc-50 border border-zinc-100 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-forge-navy ml-1">Institution / University</label>
                            <input name="institution" required type="text" placeholder="Your University" className="w-full h-11 sm:h-12 bg-zinc-50 border border-zinc-100 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[13px] font-semibold text-forge-navy ml-1">Primary Learning Goal</label>
                            <div className="relative">
                                <select 
                                    name="goal" 
                                    required 
                                    className="w-full h-11 sm:h-12 bg-zinc-50 border border-zinc-100 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all appearance-none cursor-pointer"
                                >
                                    <option value="Full-Stack Development">Full-Stack Development</option>
                                    <option value="UI/UX Product Design">UI/UX Product Design</option>
                                    <option value="AI & Automation">AI & Automation</option>
                                    <option value="Chapter Leadership">Chapter Leadership</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {status?.success && (
                            <div className="p-4 bg-green-50 text-green-700 text-[13px] font-bold rounded-xl border border-green-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                                <CheckCircle2 size={18} />
                                {status.success}
                            </div>
                        )}
                        {status?.error && (
                            <div className="p-4 bg-red-50 text-red-700 text-[13px] font-bold rounded-xl border border-red-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                                <AlertCircle size={18} />
                                {status.error}
                            </div>
                        )}

                        <button 
                            disabled={isPending}
                            className="w-full h-14 bg-forge-navy text-white font-bold text-sm rounded-xl hover:bg-forge-orange transition-all shadow-lg shadow-forge-navy/10 flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98] mt-4"
                        >
                            {isPending ? "Submitting Application..." : "Submit Enrollment Request"}
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <div className="text-center pt-2">
                    <Link href="/" className="text-xs font-bold text-zinc-400 hover:text-forge-navy transition-colors inline-flex items-center gap-2">
                        <ArrowLeft size={14} />
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;
