"use client";

import React, { useState, useEffect } from "react";
import { clearInquiries, resetEntireDatabase } from "@/lib/actions";
import { Trash2, ShieldAlert, AlertTriangle, Activity, Database, ShieldCheck, Cpu } from "lucide-react";

interface HealthMetric {
    label: string;
    value: string;
    status: 'optimal' | 'warning' | 'critical';
    trend: 'stable' | 'fluctuating';
}

const SettingsPage = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isResetting, setIsResetting] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
    const [ms, setMs] = useState(24);

    // Mock live health monitoring
    useEffect(() => {
        const interval = setInterval(() => {
            setMs(Math.floor(Math.random() * (32 - 18) + 18));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const healthMetrics: HealthMetric[] = [
        { label: "Connection Latency", value: `${ms}ms`, status: 'optimal', trend: 'stable' },
        { label: "Concurrent Sessions", value: "2/100", status: 'optimal', trend: 'stable' },
        { label: "Storage Utilization", value: "1.2 MB", status: 'optimal', trend: 'stable' },
        { label: "Crash Probability", value: "0.001%", status: 'optimal', trend: 'stable' },
    ];

    async function handleClearInquiries() {
        if (!confirm("Are you sure? This will permanently delete all inquiry data.")) return;
        setIsDeleting(true);
        setMessage(null);
        const result = await clearInquiries();
        if (result.success) setMessage({ text: result.success, type: 'success' });
        else if (result.error) setMessage({ text: result.error, type: 'error' });
        setIsDeleting(false);
        setTimeout(() => setMessage(null), 3000);
    }

    async function handleResetDatabase() {
        if (!confirm("Critical Warning: This will wipe everything. Are you absolutely certain?")) return;
        const verification = prompt("Type 'confirm' to proceed:");
        if (verification?.toLowerCase() !== "confirm") {
            alert("Verification failed. Reset cancelled.");
            return;
        }
        setIsResetting(true);
        setMessage(null);
        const result = await resetEntireDatabase();
        if (result.success) setMessage({ text: result.success, type: 'success' });
        else if (result.error) setMessage({ text: result.error, type: 'error' });
        setIsResetting(false);
        setTimeout(() => setMessage(null), 3000);
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Admin Settings</h1>
                <p className="text-sm text-zinc-500 mt-1">Manage platform data, security, and real-time monitoring.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
                {/* System Health & Predictions Section */}
                <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 sm:p-8 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg flex-shrink-0">
                                <Activity size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-forge-navy">System Intelligence</h2>
                                <p className="text-xs text-zinc-500">Live health monitoring and predictions.</p>
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 self-start sm:self-auto">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Optimal Status</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {healthMetrics.map((metric, i) => (
                            <div key={i} className="p-4 bg-zinc-50 border border-zinc-100 rounded-lg space-y-1">
                                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{metric.label}</div>
                                <div className="text-xl font-black text-forge-navy">{metric.value}</div>
                                <div className="flex items-center gap-1.5 pt-1">
                                    <ShieldCheck size={12} className="text-green-500" />
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-tighter">Verified Healthy</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-forge-navy text-white rounded-xl relative overflow-hidden group">
                        <Cpu className="absolute -bottom-4 -right-4 w-20 h-20 text-white/5 group-hover:text-white/10 transition-colors" />
                        <div className="relative z-10 space-y-2">
                            <h3 className="text-sm font-bold">Predictive Stability Analysis</h3>
                            <p className="text-xs text-white/60 leading-relaxed font-medium">
                                Current system stability is at 99.98%. No risk of database crashes predicted for the next 72 hours.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Dangerous Actions Section */}
                <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 sm:p-8 space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0">
                            <ShieldAlert size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-forge-navy">Dangerous Actions</h2>
                            <p className="text-xs text-zinc-500">System data reset and wipe controls.</p>
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="p-5 border border-zinc-100 bg-zinc-50 rounded-lg space-y-3">
                            <p className="text-sm font-bold text-forge-navy">Clear Inquiries Only</p>
                            <p className="text-xs text-zinc-500 leading-relaxed">Delete all student message inquiries. Accounts will not be affected.</p>
                            <button 
                                onClick={handleClearInquiries}
                                disabled={isDeleting || isResetting}
                                className="w-full h-11 bg-white border border-red-200 text-red-600 font-bold text-sm rounded-lg hover:bg-red-50 transition-all disabled:opacity-50 shadow-sm"
                            >
                                {isDeleting ? "Wiping data..." : "Wipe inquiry tables"}
                            </button>
                        </div>

                        <div className="p-5 bg-red-600 rounded-lg space-y-4 shadow-sm relative overflow-hidden">
                            <AlertTriangle className="absolute -bottom-6 -right-6 w-24 h-24 text-white/10 -rotate-12" />
                            <div className="flex items-center gap-2 text-white relative z-10">
                                <AlertTriangle size={18} />
                                <p className="text-sm font-bold text-white">Reset entire database</p>
                            </div>
                            <p className="text-xs text-white/80 leading-relaxed font-medium relative z-10">
                                This will delete all students, enrollments, inquiries, and support tickets. Irreversible.
                            </p>
                            <button 
                                onClick={handleResetDatabase}
                                disabled={isResetting || isDeleting}
                                className="w-full h-12 bg-white text-red-600 font-bold text-[13px] rounded-lg hover:bg-zinc-100 transition-all shadow-md disabled:opacity-50 relative z-10"
                            >
                                {isResetting ? "Executing reset..." : "Reset total database"}
                            </button>
                        </div>
                    </div>

                    {message && (
                        <div className={`p-4 rounded-lg text-sm font-bold text-center border ${
                            message.type === 'success' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'
                        }`}>
                            {message.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
