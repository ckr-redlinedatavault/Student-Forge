"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
    LayoutDashboard, 
    MessageSquare, 
    Users, 
    Settings, 
    LogOut,
    Menu,
    X,
    LifeBuoy
} from "lucide-react";
import { adminLogout } from "@/lib/actions";

const AdminSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Student Profiles", href: "/admin/students", icon: Users },
        { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
        { name: "Enrollments", href: "/admin/enrollments", icon: Users },
        { name: "Support Tickets", href: "/admin/support", icon: LifeBuoy },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-forge-navy text-white rounded-lg shadow-lg"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div 
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-forge-navy/20 backdrop-blur-sm z-40 lg:hidden"
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`
                fixed top-0 left-0 h-full w-64 bg-white text-forge-navy z-40 border-r border-zinc-200 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                <div className="flex flex-col h-full">
                    {/* Brand / Logo */}
                    <div className="p-8 border-b border-zinc-100 flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/sf-next-logo.png"
                                alt="Student Forge"
                                width={32}
                                height={32}
                            />
                            <span className="text-lg font-bold tracking-tight">Admin Portal</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow p-4 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 ml-4">Main Menu</div>
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`
                                        flex items-center gap-3 px-4 h-11 text-sm font-semibold transition-all rounded-lg
                                        ${isActive 
                                            ? "bg-[#FEC70B] text-forge-navy shadow-sm" 
                                            : "hover:bg-zinc-50 text-zinc-500 hover:text-forge-navy"
                                        }
                                    `}
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer / Account */}
                    <div className="p-4 border-t border-zinc-100">
                        <form action={adminLogout}>
                            <button className="w-full h-11 flex items-center justify-center gap-3 px-4 text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all rounded-lg shadow-md hover:shadow-lg">
                                <LogOut size={16} />
                                Log Out
                            </button>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default AdminSidebar;
