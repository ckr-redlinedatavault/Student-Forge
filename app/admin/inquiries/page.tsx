import React from "react";
import { prisma } from "@/lib/prisma";

// Define the type for an Inquiry item
interface InquiryItem {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    type: string | null;
    createdAt: Date;
}

const InquiriesPage = async () => {
    // Explicitly type the result of findMany
    const inquiries: InquiryItem[] = await prisma.inquiry.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Simple Header */}
            <div>
                <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Recent Inquiries</h1>
                <p className="text-sm text-zinc-500 mt-1">Student submissions from the contact forms.</p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-100">
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Name</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Contact</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Message</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Date</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {inquiries.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-20 text-center text-zinc-400 text-sm">No inquiries found</td>
                                </tr>
                            ) : (
                                inquiries.map((item: InquiryItem) => (
                                    <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
                                        <td className="p-5">
                                            <div className="font-bold text-forge-navy text-sm">{item.name}</div>
                                            <div className="text-[10px] text-zinc-400 uppercase font-black">{item.type || "General"}</div>
                                        </td>
                                        <td className="p-5">
                                            <div className="text-sm font-medium text-forge-navy/80">{item.email}</div>
                                            <div className="text-[10px] text-zinc-400 font-bold">{item.phone || "---"}</div>
                                        </td>
                                        <td className="p-5">
                                            <p className="text-xs text-zinc-500 whitespace-pre-wrap max-w-xs">{item.message}</p>
                                        </td>
                                        <td className="p-5 text-xs text-zinc-400 font-medium">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-[10px] font-bold text-[#FEC70B] hover:text-forge-orange uppercase tracking-wider transition-colors">Archive</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-zinc-100">
                    {inquiries.length === 0 ? (
                        <div className="p-10 text-center text-zinc-400 text-sm">No inquiries found</div>
                    ) : (
                        inquiries.map((item: InquiryItem) => (
                            <div key={item.id} className="p-6 space-y-4 hover:bg-zinc-50 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-bold text-forge-navy">{item.name}</div>
                                        <div className="text-[10px] text-zinc-400 uppercase font-black">{item.type || "General"}</div>
                                    </div>
                                    <div className="text-[10px] text-zinc-400 font-medium bg-zinc-100 px-2 py-1 rounded">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-semibold text-forge-navy/70">{item.email}</div>
                                    <div className="text-[10px] text-zinc-400">{item.phone || "No phone provided"}</div>
                                </div>
                                <div className="bg-zinc-50 p-4 rounded-lg">
                                    <p className="text-xs text-zinc-600 leading-relaxed">"{item.message}"</p>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button className="text-[10px] font-bold text-[#FEC70B] uppercase tracking-widest">Archive Item</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default InquiriesPage;
