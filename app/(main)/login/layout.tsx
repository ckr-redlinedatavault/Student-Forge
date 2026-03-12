import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Portal Access",
  description: "Secure login for Student Forge administrators. Access the management dashboard to oversee student enrollments, inquiries, and platform health.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
