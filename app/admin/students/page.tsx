import React from "react";
import { prisma } from "@/lib/prisma";
import { User, Mail, Calendar, Shield } from "lucide-react";

interface Student {
    id: string;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
}

const AdminStudentsPage = async () => {
    // Fetch all users with STUDENT role
    const students: Student[] = await prisma.user.findMany({
        where: {
            role: "STUDENT"
        },
        orderBy: {
            createdAt: "desc"
        }
    });

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-10">
            {/* Simple Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Student Profiles</h1>
                    <p className="text-sm text-zinc-500 mt-1">Verified student accounts in the Forge ecosystem.</p>
                </div>
                <div className="bg-white border border-zinc-200 px-4 py-2 rounded-lg shadow-sm flex items-center gap-3">
                    <span className="text-[10px] uppercase font-black text-zinc-400">Total Registered</span>
                    <span className="text-xl font-bold text-forge-navy">{students.length}</span>
                </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-100">
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Identity</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Authentication</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Joined Date</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest">Role Type</th>
                                <th className="p-5 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Access</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="p-20 text-center text-zinc-400 text-sm">No registered students found</td>
                                </tr>
                            ) : (
                                students.map((student: Student) => (
                                    <tr key={student.id} className="hover:bg-zinc-50 transition-colors">
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-200 text-sm font-bold text-forge-navy">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-forge-navy text-sm">{student.name}</div>
                                                    <div className="text-[10px] text-zinc-400 uppercase font-black">ID: {student.id.slice(-6)}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2 text-sm text-forge-navy/80">
                                                <Mail size={14} className="text-zinc-300" />
                                                {student.email}
                                            </div>
                                        </td>
                                        <td className="p-5 text-xs text-zinc-400 font-medium">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {new Date(student.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="p-5">
                                            <span className="text-[10px] font-black px-2 py-1 bg-green-50 text-green-600 border border-green-100 rounded uppercase tracking-widest">
                                                {student.role}
                                            </span>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-[10px] font-bold text-forge-navy hover:text-forge-orange uppercase tracking-wider transition-colors border border-zinc-200 px-3 py-1.5 rounded-lg hover:bg-white shadow-sm">Manage</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-zinc-100">
                    {students.length === 0 ? (
                        <div className="p-10 text-center text-zinc-400 text-sm">No registered students found</div>
                    ) : (
                        students.map((student: Student) => (
                            <div key={student.id} className="p-6 space-y-4 hover:bg-zinc-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-200 text-lg font-bold text-forge-navy">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-forge-navy">{student.name}</div>
                                        <div className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">ID: {student.id.slice(-6)}</div>
                                    </div>
                                    <span className="text-[8px] font-black px-2 py-1 bg-green-50 text-green-600 border border-green-100 rounded uppercase tracking-tighter">
                                        {student.role}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 gap-3 pt-2">
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Authentication</div>
                                        <div className="text-xs font-semibold text-forge-navy/70 break-all">{student.email}</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Joined Date</div>
                                        <div className="text-xs font-semibold text-forge-navy/70">
                                            {new Date(student.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pt-2">
                                    <button className="w-full h-12 text-[10px] font-bold text-forge-navy uppercase tracking-widest border border-zinc-200 rounded-lg hover:bg-white shadow-sm transition-all focus:ring-2 focus:ring-[#FEC70B]">
                                        Manage Student Profile
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminStudentsPage;
