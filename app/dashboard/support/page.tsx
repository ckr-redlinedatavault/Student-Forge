"use client";

import React, { useState } from "react";
import { submitSupportTicket } from "@/lib/actions";
import { LifeBuoy, Send, CheckCircle2, AlertCircle } from "lucide-react";

const SupportPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(event.currentTarget);
        const result = await submitSupportTicket(formData);

        if (result.success) {
            setStatus({ text: result.success, type: 'success' });
            (event.target as HTMLFormElement).reset();
        } else if (result.error) {
            setStatus({ text: result.error, type: 'error' });
        }
        
        setIsSubmitting(false);
    }

    return (
        <div className="max-w-4xl mx-auto space-y-10 py-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-forge-navy text-[#FEC70B] flex items-center justify-center rounded-2xl shadow-lg">
                    <LifeBuoy size={24} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Technical Support</h1>
                    <p className="text-sm text-zinc-500 font-medium">Need help? Submit a ticket and our team will assist you.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Form Section */}
                <div className="lg:col-span-2 bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-forge-navy uppercase tracking-widest ml-1">Subject</label>
                            <input 
                                required
                                name="subject"
                                type="text"
                                placeholder="Brief summary of the issue"
                                className="w-full h-12 bg-zinc-50 border border-zinc-200 px-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-forge-navy uppercase tracking-widest ml-1">Message</label>
                            <textarea 
                                required
                                name="message"
                                rows={6}
                                placeholder="Describe your issue in detail..."
                                className="w-full bg-zinc-50 border border-zinc-200 p-4 text-sm font-medium rounded-xl focus:outline-none focus:border-forge-navy transition-all resize-none"
                            ></textarea>
                        </div>

                        {status && (
                            <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold ${
                                status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'
                            }`}>
                                {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                {status.text}
                            </div>
                        )}

                        <button 
                            disabled={isSubmitting}
                            type="submit"
                            className="w-full h-14 bg-forge-navy text-white font-bold rounded-xl hover:bg-forge-orange transition-all shadow-lg shadow-forge-navy/10 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            <Send size={18} />
                            {isSubmitting ? "Transmitting..." : "Submit Support Ticket"}
                        </button>
                    </form>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-[#FEC70B] p-8 rounded-3xl space-y-4 shadow-sm">
                        <h3 className="font-bold text-forge-navy">Average Response Time</h3>
                        <div className="text-4xl font-black text-forge-navy tracking-tighter">2-4 hrs</div>
                        <p className="text-[11px] font-bold text-forge-navy/60 leading-relaxed uppercase tracking-wider">
                            Our technical leads are currently processing tickets for the April 1st Launch.
                        </p>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-3xl text-white space-y-4">
                        <h3 className="font-bold">Knowledge Base</h3>
                        <p className="text-xs text-white/40 leading-relaxed">
                            Check our documentation for quick answers to common synchronization issues.
                        </p>
                        <button className="text-xs font-bold text-[#FEC70B] hover:underline uppercase tracking-widest">
                            View Docs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
