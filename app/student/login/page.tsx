"use client";

import React, { useState } from "react";
import LinkNext from "next/link";
import { studentLogin } from "@/lib/actions";
import Image from "next/image";

const StudentLoginPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleLogin(formData: FormData) {
        setIsPending(true);
        setError(null);
        
        const result = await studentLogin(formData);
        
        if (result?.error) {
            setError(result.error);
        }
        setIsPending(false);
    }

    return (
        <div className="h-screen w-screen bg-white flex overflow-hidden font-sans">
            {/* Left Side: Form Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 relative z-10 bg-white">
                <div className="w-full max-w-sm space-y-10">
                    <div className="space-y-4">
                        <LinkNext href="/" className="inline-block">
                            <Image
                                src="/sf-next-logo.png"
                                alt="Student Forge"
                                width={44}
                                height={44}
                            />
                        </LinkNext>
                        <div className="space-y-1">
                            <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Student Login</h1>
                            <p className="text-sm font-medium text-forge-navy/40">Access your high-performance lab.</p>
                        </div>
                    </div>

                    <form action={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-forge-navy/60">Email address</label>
                            <input 
                                name="email" 
                                type="email" 
                                required 
                                className="w-full h-12 bg-zinc-50 border border-zinc-200 px-4 focus:outline-none focus:border-forge-orange transition-all text-sm font-medium rounded-lg" 
                                placeholder="name@email.com" 
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-forge-navy/60">Password</label>
                                <span className="text-xs font-semibold text-forge-orange cursor-pointer hover:underline">Reset password?</span>
                            </div>
                            <input 
                                name="password" 
                                type="password" 
                                required 
                                className="w-full h-12 bg-zinc-50 border border-zinc-200 px-4 focus:outline-none focus:border-forge-orange transition-all text-sm font-medium rounded-lg" 
                                placeholder="••••••••" 
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-700 text-sm font-medium border border-red-100 rounded-lg">
                                {error}
                            </div>
                        )}

                        <button 
                            disabled={isPending}
                            className="w-full h-14 bg-forge-navy text-white font-bold text-sm hover:bg-forge-orange transition-all shadow-xl shadow-forge-navy/10 disabled:opacity-50 rounded-lg"
                        >
                            {isPending ? "Authenticating..." : "Sign in"}
                        </button>
                    </form>

                    <div className="text-center pt-4">
                        <p className="text-sm font-medium text-forge-navy/40">
                            New candidate? <LinkNext href="/student/signup" className="text-forge-navy font-bold hover:text-forge-orange transition-colors underline underline-offset-4">Create account</LinkNext>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Content/Brand Container */}
            <div className="hidden lg:flex lg:w-1/2 bg-forge-navy relative items-center justify-center p-24 overflow-hidden">
                {/* Fixed Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <div className="relative z-10 space-y-8 max-w-md">
                    <div className="h-1 w-12 bg-[#FEC70B]"></div>
                    <h2 className="text-5xl font-bold text-white leading-tight tracking-tighter">
                        Forge your <br />
                        <span className="text-[#FEC70B]">future.</span>
                    </h2>
                    <p className="text-white/40 text-lg font-medium leading-relaxed italic border-l border-white/10 pl-8">
                        Join 800+ high-performing students building technical excellence and industry-leading careers in our secure ecosystem.
                    </p>
                    <div className="flex gap-4 pt-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-[#FEC70B]/40 rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* Subtle Branding Accent */}
                <div className="absolute bottom-12 right-12 text-xs font-medium text-white/10 select-none">
                    Session protocol alpha
                </div>
            </div>
        </div>
    );
};

export default StudentLoginPage;
