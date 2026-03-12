"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { adminLogin } from "@/lib/actions";
import { LogIn, ShieldCheck } from "lucide-react";

const LoginPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    async function handleLogin(formData: FormData) {
        setIsPending(true);
        setError(null);
        
        const result = await adminLogin(formData);
        
        if (result?.error) {
            setError(result.error);
        }
        setIsPending(false);
    }

    return (
        <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="w-full max-w-sm space-y-8">
                {/* Minimal Header */}
                <div className="text-center space-y-4">
                    <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                        <Image
                            src="/sf-next-logo.png"
                            alt="Student Forge"
                            width={48}
                            height={48}
                            className="mx-auto"
                        />
                    </Link>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-forge-navy">Admin Portal</h1>
                        <p className="text-sm text-zinc-500 font-medium">Please enter your credentials to continue.</p>
                    </div>
                </div>

                {/* Clean Login Card */}
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100">
                    <form action={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-forge-navy ml-1">Email address</label>
                            <input 
                                name="email" 
                                type="email" 
                                required 
                                className="w-full h-11 bg-zinc-50 border border-zinc-200 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" 
                                placeholder="name@company.com" 
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-sm font-semibold text-forge-navy">Password</label>
                                <span className="text-xs font-bold text-forge-orange cursor-pointer hover:underline">Forgot?</span>
                            </div>
                            <input 
                                name="password" 
                                type="password" 
                                required 
                                className="w-full h-11 bg-zinc-50 border border-zinc-200 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all" 
                                placeholder="••••••••" 
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 text-red-700 text-xs font-bold rounded-xl border border-red-100 flex items-center gap-2">
                                <ShieldCheck size={14} className="flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        <button 
                            disabled={isPending}
                            className="w-full h-12 bg-forge-navy text-white font-bold text-sm rounded-xl hover:bg-forge-orange transition-all shadow-lg shadow-forge-navy/10 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <LogIn size={18} />
                            {isPending ? "Signing in..." : "Sign in to Dashboard"}
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <div className="text-center">
                    <Link href="/" className="text-xs font-bold text-zinc-400 hover:text-forge-navy transition-colors flex items-center justify-center gap-2">
                        ← Back to website
                    </Link>
                </div>
            </div>

            {/* Subtle Security Badge */}
            <div className="mt-12 opacity-20 flex items-center gap-2 grayscale brightness-0">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Entry Terminal</span>
            </div>
        </div>
    );
};

export default LoginPage;
