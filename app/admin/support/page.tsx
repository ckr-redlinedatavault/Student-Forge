import React from "react";
import { prisma } from "@/lib/prisma";

const AdminSupportPage = async () => {
    let tickets: any[] = [];
    let error: string | null = null;
    
    try {
        // Direct type casting to access the model dynamically
        const client = prisma as any;
        
        // Find the correct key regardless of case
        const modelKey = Object.keys(client).find(
            key => key.toLowerCase() === "supportticket"
        );

        if (modelKey && client[modelKey]) {
            tickets = await client[modelKey].findMany({
                orderBy: { createdAt: "desc" },
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                }
            });
        } else {
            // Fallback for immediate recovery if model is missing from client
            console.error("SupportTicket model not found in Prisma client keys:", Object.keys(client).filter(k => !k.startsWith('_')));
            error = "The support ticket system is currently synchronizing. Please refresh in a moment.";
        }
    } catch (err) {
        console.error("Prisma Support Ticket Fetch Error:", err);
        error = "Internal database connection issue.";
    }

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Simple Header */}
            <div>
                <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Support Management</h1>
                <p className="text-sm text-zinc-500 mt-1">Review and respond to student technical issues.</p>
            </div>

            {error ? (
                <div className="p-12 border border-yellow-200 bg-yellow-50 rounded-2xl text-center space-y-4">
                    <p className="font-bold text-yellow-700">{error}</p>
                    <p className="text-xs text-yellow-600/60 uppercase font-black tracking-widest">Database Sync in Progress</p>
                </div>
            ) : (
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-100">
                                    <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Student</th>
                                    <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Subject</th>
                                    <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</th>
                                    <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Status</th>
                                    <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                {tickets.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="p-20 text-center text-zinc-400 text-sm">No support tickets found</td>
                                    </tr>
                                ) : (
                                    tickets.map((ticket) => (
                                        <tr key={ticket.id} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-5">
                                                <div className="font-bold text-forge-navy text-sm">{ticket.user?.name || "Unknown"}</div>
                                                <div className="text-[11px] text-zinc-400 font-medium">{ticket.user?.email || "No email"}</div>
                                            </td>
                                            <td className="p-5">
                                                <div className="text-xs font-bold text-forge-navy bg-yellow-50 px-2 py-1 rounded border border-yellow-100 inline-block">
                                                    {ticket.subject}
                                                </div>
                                            </td>
                                            <td className="p-5 max-w-md">
                                                <p className="text-xs text-zinc-500 whitespace-pre-wrap">"{ticket.message}"</p>
                                            </td>
                                            <td className="p-5">
                                                <span className={`text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest border ${
                                                    ticket.status === 'OPEN' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-zinc-100 text-zinc-400 border-zinc-200'
                                                }`}>
                                                    {ticket.status}
                                                </span>
                                            </td>
                                            <td className="p-5 text-right">
                                                <button className="text-[10px] font-bold text-forge-navy hover:text-forge-orange uppercase tracking-wider transition-colors">Resolve</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden divide-y divide-zinc-100">
                        {tickets.length === 0 ? (
                            <div className="p-10 text-center text-zinc-400 text-sm">No support tickets found</div>
                        ) : (
                            tickets.map((ticket) => (
                                <div key={ticket.id} className="p-6 space-y-4 hover:bg-zinc-50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-bold text-forge-navy">{ticket.user?.name || "Unknown"}</div>
                                            <div className="text-[10px] text-zinc-400 font-medium">{ticket.user?.email || "No email provided"}</div>
                                        </div>
                                        <span className={`text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter border ${
                                            ticket.status === 'OPEN' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-zinc-100 text-zinc-400 border-zinc-200'
                                        }`}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-forge-navy bg-yellow-50 px-2 py-1 rounded border border-yellow-100 inline-block">
                                            {ticket.subject}
                                        </div>
                                        <div className="bg-zinc-50 p-4 rounded-lg">
                                            <p className="text-xs text-zinc-600 leading-relaxed italic">"{ticket.message}"</p>
                                        </div>
                                    </div>
                                    <div className="flex pt-2">
                                        <button className="w-full h-11 bg-white border border-zinc-200 text-forge-navy text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">
                                            Mark as Resolved
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminSupportPage;
