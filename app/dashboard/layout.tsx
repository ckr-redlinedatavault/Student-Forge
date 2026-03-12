import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import StudentSidebar from "@/components/StudentSidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("student_token");

    if (!token || !token.value.startsWith("student_")) {
        redirect("/student/login");
    }

    const userId = token.value.replace("student_", "");
    
    // We fetch user name to pass to the sidebar for a personalized touch
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { name: true }
    });

    if (!user) {
        redirect("/student/login");
    }

    return (
        <div className="flex bg-zinc-50 min-h-screen">
            <StudentSidebar userName={user.name} />
            <main className="flex-grow lg:pl-64 w-full">
                <div className="p-8 lg:p-12">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
