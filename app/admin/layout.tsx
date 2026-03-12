import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token");

    // Primary security layer for admin routes
    if (!token || token.value !== "forge_admin_secure_session") {
        redirect("/login");
    }

    return (
        <div className="flex bg-zinc-50 min-h-screen font-sans">
            {/* Clean Sidebar - No Global Navbar visible here */}
            <AdminSidebar />
            
            <main className="flex-grow lg:pl-64 w-full relative">
                <div className="p-8 lg:p-12">
                    {children}
                </div>
            </main>

            {/* Subtle invisible spacer for mobile pull-to-refresh style */}
            <div className="h-20 lg:hidden"></div>
        </div>
    );
};

export default AdminLayout;
