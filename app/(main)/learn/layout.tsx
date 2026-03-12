import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn | Modern Pedagogy & Skills",
  description: "Master industry-relevant skills with Student Forge. Our project-first philosophy and expert mentorship prepare you for the modern tech workforce.",
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
