import React from "react";
import { prisma } from "@/lib/prisma";

interface EnrollmentItem {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    institution: string;
    goal: string;
    createdAt: Date;
}

const EnrollmentsPage = async () => {
    const enrollments = await prisma.enrollment.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Simple Header */}
            <div>
                <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Active Enrollments</h1>
                <p className="text-sm text-zinc-500 mt-1">Manage and review student applications in the queue.</p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-100">
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Candidate</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Affiliation</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Goal</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Date</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {enrollments.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-20 text-center text-zinc-400 text-sm">No enrollments found</td>
                                </tr>
                            ) : (
                                enrollments.map((item: EnrollmentItem) => (
                                    <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
                                        <td className="p-5">
                                            <div className="font-bold text-forge-navy text-sm">{item.firstName} {item.lastName}</div>
                                            <div className="text-[11px] text-forge-orange font-medium">{item.email}</div>
                                        </td>
                                        <td className="p-5">
                                            <div className="text-xs font-medium text-forge-navy/80">{item.institution}</div>
                                        </td>
                                        <td className="p-5">
                                            <div className="text-xs font-semibold text-forge-navy bg-zinc-50 px-2 py-1 rounded-md inline-block">
                                                {item.goal}
                                            </div>
                                        </td>
                                        <td className="p-5 text-xs text-zinc-400 font-medium">
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-5 text-right">
                                            <div className="flex justify-end gap-3 text-[10px] font-bold uppercase tracking-wider">
                                                <button className="text-green-600 hover:text-green-700">Approve</button>
                                                <button className="text-red-500 hover:text-red-600">Reject</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-zinc-100">
                    {enrollments.length === 0 ? (
                        <div className="p-10 text-center text-zinc-400 text-sm">No enrollments found</div>
                    ) : (
                        enrollments.map((item: EnrollmentItem) => (
                            <div key={item.id} className="p-6 space-y-4 hover:bg-zinc-50 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-bold text-forge-navy">{item.firstName} {item.lastName}</div>
                                        <div className="text-[11px] text-forge-orange font-medium">{item.email}</div>
                                    </div>
                                    <div className="text-[10px] text-zinc-400 font-medium bg-zinc-100 px-2 py-1 rounded">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs">
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Institution</span>
                                        <span className="font-medium text-forge-navy/80">{item.institution}</span>
                                    </div>
                                    <div className="text-xs">
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">Primary Goal</span>
                                        <span className="text-forge-navy bg-zinc-100 px-2 py-0.5 rounded text-[10px] font-bold">{item.goal}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button className="flex-1 h-11 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-green-100">Approve</button>
                                    <button className="flex-1 h-11 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-red-100">Reject</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentsPage;
