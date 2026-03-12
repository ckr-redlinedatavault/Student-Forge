"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
    LayoutDashboard,
    LogOut,
    Menu,
    X
} from "lucide-react";
import { studentLogout } from "@/lib/actions";

const StudentSidebar = ({ userName }: { userName: string }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    const navItems = [
        { name: "My Dashboard", href: "/dashboard", icon: LayoutDashboard },
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

            {/* Sidebar - Yellow Background */}
            <aside className={`
                fixed top-0 left-0 h-full w-64 bg-[#FEC70B] text-forge-navy z-40 border-r border-black/5 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
                <div className="flex flex-col h-full">
                    {/* Brand / Logo */}
                    <div className="p-8 border-b border-black/5 flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/sf-next-logo.png"
                                alt="Student Forge"
                                width={32}
                                height={32}
                            />
                            <span className="text-lg font-bold tracking-tight">Forge Lab</span>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow p-4 space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-forge-navy/40 mb-4 ml-4">Student Menu</div>
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
                                            ? "bg-forge-navy text-white shadow-md shadow-forge-navy/20" 
                                            : "hover:bg-black/5 text-forge-navy/70 hover:text-forge-navy"
                                        }
                                    `}
                                >
                                    <item.icon size={18} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Account Info & Logout */}
                    <div className="p-4 border-t border-black/5">
                        <div className="px-4 py-3 mb-3 bg-black/5 rounded-lg space-y-1">
                            <div className="text-xs font-bold truncate">{userName}</div>
                            <div className="text-[10px] text-forge-navy/50">Active Candidate</div>
                        </div>
                        <form action={studentLogout}>
                            <button className="w-full h-11 flex items-center justify-center gap-3 px-4 text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all rounded-lg shadow-sm">
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

export default StudentSidebar;
