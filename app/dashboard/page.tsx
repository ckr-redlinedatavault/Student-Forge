import React from "react";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { ShieldCheck, Rocket, Calendar } from "lucide-react";
import Link from "next/link";

const StudentDashboard = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("student_token");
    
    // Safety check for token
    const userId = token?.value.replace("student_", "") || "";
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) return null;

    return (
        <div className="max-w-4xl mx-auto space-y-12 py-6">
            {/* Enrollment Confirmation Header */}
            <div className="bg-white border border-zinc-200 p-10 lg:p-16 rounded-3xl shadow-sm text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-forge-navy/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-50 text-green-600 flex items-center justify-center rounded-2xl shadow-inner">
                        <ShieldCheck size={40} />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-forge-navy tracking-tight">
                        Registration Confirmed
                    </h1>
                    <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Welcome to the ecosystem, <span className="text-forge-navy font-bold">{user.name.split(' ')[0]}</span>. 
                        Your high-performance dashboard is currently being calibrated for your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto pt-4">
                    <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                        <Calendar className="text-forge-orange" size={20} />
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-zinc-400">Launch Date</div>
                            <div className="text-sm font-bold text-forge-navy">April 1st, 2026</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                        <Rocket className="text-forge-navy" size={20} />
                        <div className="text-left">
                            <div className="text-[10px] uppercase font-bold text-zinc-400">Profile Status</div>
                            <div className="text-sm font-bold text-forge-navy">Setting Up</div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-50">
                    <p className="text-sm font-medium text-zinc-400">
                        You will gain full access to your <span className="text-forge-navy font-bold">Courses</span>, 
                        <span className="text-forge-navy font-bold text-black border-b-2 border-[#FEC70B] mx-1">Certificates</span>, and 
                        <span className="text-forge-navy font-bold ml-1">Labs</span> from April 1st.
                    </p>
                </div>
            </div>

            {/* Support/Info Note */}
            <div className="p-6 bg-forge-navy text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-forge-navy/10 border border-white/5">
                <div className="space-y-1 text-center md:text-left">
                    <h3 className="text-sm font-bold tracking-tight">Need assistance with your profile?</h3>
                    <p className="text-xs text-white/60 font-medium">Our technical support team is standing by.</p>
                </div>
                <Link href="/dashboard/support">
                    <button className="px-6 h-10 bg-[#FEC70B] text-forge-navy text-xs font-bold rounded-lg hover:bg-white transition-all whitespace-nowrap">
                        Open Support Ticket
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default StudentDashboard;
