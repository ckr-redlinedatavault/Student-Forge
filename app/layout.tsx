import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Student Forge | Professional Tech Ecosystem",
    template: "%s | Student Forge"
  },
  description: "Join Student Forge to learn, build, and grow. High-performance career ecosystem providing industry-relevant training and mentorship for students.",
  keywords: ["tech education", "student mentorship", "software engineering", "full-stack development", "UI/UX design", "career growth", "Student Forge"],
  authors: [{ name: "Student Forge Team" }],
  creator: "Student Forge",
  publisher: "Student Forge",
  metadataBase: new URL("https://studentforge.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/sf-next-logo.png" },
      { url: "/sf-next-logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/sf-next-logo.png",
    apple: "/sf-next-logo.png",
  },
  openGraph: {
    title: "Student Forge | Professional Tech Ecosystem",
    description: "Empowering students to build high-performance careers through real-world projects and mentorship.",
    url: "https://studentforge.in",
    siteName: "Student Forge",
    images: [
      {
        url: "/sf-next-logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Forge | Professional Tech Ecosystem",
    description: "Empowering students to build high-performance careers.",
    images: ["/sf-next-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
