"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function submitInquiry(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Required fields are missing" };
    }

    try {
        await prisma.inquiry.create({
            data: {
                name,
                email,
                phone: phone || null,
                message,
            },
        });

        revalidatePath("/admin/dashboard");
        return { success: "Inquiry submitted successfully!" };
    } catch (error) {
        console.error("Submission Error:", error);
        return { error: "Failed to submit inquiry. Please try again." };
    }
}

export async function submitEnrollment(formData: FormData) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const institution = formData.get("institution") as string;
    const goal = formData.get("goal") as string;

    if (!firstName || !lastName || !email || !institution || !goal) {
        return { error: "Review all required fields" };
    }

    try {
        await prisma.enrollment.create({
            data: {
                firstName,
                lastName,
                email,
                institution,
                goal,
            },
        });

        revalidatePath("/admin/dashboard");
        return { success: "Enrollment received. Welcome to the Forge!" };
    } catch (error) {
        console.error("Enrollment Error:", error);
        return { error: "Failed to process enrollment. Contact support." };
    }
}

export async function adminLogin(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const correctEmail = process.env.ADMIN_EMAIL;
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (email === correctEmail && password === correctPassword) {
        const cookieStore = await cookies();
        cookieStore.set("admin_token", "forge_admin_secure_session", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 24 hours
            path: "/",
        });
        redirect("/admin/dashboard");
    } else {
        return { error: "Invalid credentials" };
    }
}

export async function adminLogout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_token");
    redirect("/login");
}

export async function studentSignUp(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
        return { error: "All fields are required" };
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return { error: "Email already in use" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        const cookieStore = await cookies();
        cookieStore.set("student_token", `student_${user.id}`, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });
    } catch (error) {
        if (error instanceof Error && error.message === "NEXT_REDIRECT") throw error;
        console.error("SignUp Error:", error);
        return { error: "An error occurred during registration" };
    }
    
    redirect("/dashboard");
}

export async function studentLogin(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return { error: "All fields are required" };
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.role !== "STUDENT") {
            return { error: "Invalid credentials" };
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return { error: "Invalid credentials" };
        }

        const cookieStore = await cookies();
        cookieStore.set("student_token", `student_${user.id}`, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });
    } catch (error) {
        if (error instanceof Error && error.message === "NEXT_REDIRECT") throw error;
        console.error("Login Error:", error);
        return { error: "An error occurred during login" };
    }

    redirect("/dashboard");
}

export async function studentLogout() {
    const cookieStore = await cookies();
    cookieStore.delete("student_token");
    redirect("/student/login");
}

export async function clearInquiries() {
    try {
        await prisma.inquiry.deleteMany({});
        revalidatePath("/admin/dashboard");
        revalidatePath("/admin/inquiries");
        return { success: "All inquire data cleared successfully" };
    } catch (error) {
        console.error("Clear Inquiries Error:", error);
        return { error: "Failed to clear inquire data" };
    }
}

export async function submitSupportTicket(formData: FormData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("student_token");
    
    if (!token || !token.value.startsWith("student_")) {
        return { error: "Authentication required" };
    }
    
    const userId = token.value.replace("student_", "");
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    
    if (!subject || !message) {
        return { error: "Subject and message are required" };
    }
    
    try {
        await prisma.supportTicket.create({
            data: {
                userId,
                subject,
                message,
            },
        });
        
        revalidatePath("/dashboard/support");
        revalidatePath("/admin/support"); // We'll create this soon
        return { success: "Support ticket submitted successfully. Our team will review it shortly." };
    } catch (error) {
        console.error("Support Ticket Error:", error);
        return { error: "Failed to submit support ticket" };
    }
}

export async function resetEntireDatabase() {
    try {
        await prisma.supportTicket.deleteMany({});
        await prisma.inquiry.deleteMany({});
        await prisma.enrollment.deleteMany({});
        await prisma.user.deleteMany({
            where: {
                role: "STUDENT"
            }
        });

        revalidatePath("/admin/dashboard");
        revalidatePath("/admin/students");
        revalidatePath("/admin/inquiries");
        revalidatePath("/admin/enrollments");
        revalidatePath("/admin/support");
        
        return { success: "Database has been completely reset to factory state." };
    } catch (error) {
        console.error("Database Reset Error:", error);
        return { error: "Critical failure during database reset." };
    }
}
