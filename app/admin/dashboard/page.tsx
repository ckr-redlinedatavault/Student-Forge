import { prisma } from "@/lib/prisma";
import { 
    Users, 
    MessageSquare, 
    UserCheck, 
    LifeBuoy, 
    Clock,
    ArrowUpRight
} from "lucide-react";
import Link from "next/link";

interface QuickStudent {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

interface QuickInquiry {
    id: string;
    name: string;
    message: string;
    type: string | null;
}

const AdminDashboard = async () => {
    // Fetch counts for all primary data models
    const [
        studentCount,
        inquiryCount,
        enrollmentCount,
        ticketCount
    ] = await Promise.all([
        prisma.user.count({ where: { role: "STUDENT" } }),
        prisma.inquiry.count(),
        prisma.enrollment.count(),
        // Use count() if model exists, otherwise 0 for graceful dev sync
        (prisma as any).supportTicket ? (prisma as any).supportTicket.count() : Promise.resolve(0)
    ]);

    // Fetch recent items for previews
    const recentInquiries: QuickInquiry[] = await prisma.inquiry.findMany({
        take: 5,
        orderBy: { createdAt: "desc" }
    });

    const recentStudents: QuickStudent[] = await prisma.user.findMany({
        where: { role: "STUDENT" },
        take: 5,
        orderBy: { createdAt: "desc" }
    });

    const stats = [
        { label: "Total Students", value: studentCount, icon: Users, color: "bg-blue-500", href: "/admin/students" },
        { label: "Public Inquiries", value: inquiryCount, icon: MessageSquare, color: "bg-forge-orange", href: "/admin/inquiries" },
        { label: "Program Enrollments", value: enrollmentCount, icon: UserCheck, color: "bg-green-500", href: "/admin/enrollments" },
        { label: "Support Tickets", value: ticketCount, icon: LifeBuoy, color: "bg-purple-500", href: "/admin/support" },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-forge-navy tracking-tight">Ecosystem Overview</h1>
                <p className="text-sm text-zinc-500 mt-1">Real-time intelligence from across the Forge portal.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Link key={i} href={stat.href}>
                        <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-forge-orange/30 transition-all group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.color} text-white shadow-lg shadow-black/5`}>
                                    <stat.icon size={20} />
                                </div>
                                <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-forge-orange transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                                <div className="text-3xl font-black text-forge-navy">{stat.value}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Recent Activity Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Recent Students */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <h2 className="text-lg font-bold text-forge-navy items-center gap-2 flex">
                             Recent Registrations
                        </h2>
                        <Link href="/admin/students" className="text-xs font-bold text-forge-orange hover:underline uppercase tracking-widest">View All</Link>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                        {recentStudents.length === 0 ? (
                            <div className="p-10 text-center text-zinc-400 text-sm italic">No recent registrations</div>
                        ) : (
                            <div className="divide-y divide-zinc-50">
                                {recentStudents.map((student: QuickStudent) => (
                                    <div key={student.id} className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-[10px] font-bold text-forge-navy border border-zinc-200">
                                                {student.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-forge-navy">{student.name}</div>
                                                <div className="text-[10px] text-zinc-400 font-medium">{student.email}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                                            <Clock size={12} />
                                            {new Date(student.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Inquiries */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <h2 className="text-lg font-bold text-forge-navy items-center gap-2 flex">
                             Active Inquiries
                        </h2>
                        <Link href="/admin/inquiries" className="text-xs font-bold text-forge-orange hover:underline uppercase tracking-widest">View All</Link>
                    </div>
                    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
                        {recentInquiries.length === 0 ? (
                            <div className="p-10 text-center text-zinc-400 text-sm italic">No active inquiries</div>
                        ) : (
                            <div className="divide-y divide-zinc-50">
                                {recentInquiries.map((inquiry: QuickInquiry) => (
                                    <div key={inquiry.id} className="p-4 flex items-center justify-between hover:bg-zinc-50 transition-colors">
                                        <div className="max-w-[70%]">
                                            <div className="text-sm font-bold text-forge-navy truncate">{inquiry.name}</div>
                                            <p className="text-[10px] text-zinc-400 line-clamp-1 italic">"{inquiry.message}"</p>
                                        </div>
                                        <div className="text-[10px] font-black px-2 py-1 bg-zinc-100 text-zinc-500 rounded uppercase tracking-tighter">
                                            {inquiry.type}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
