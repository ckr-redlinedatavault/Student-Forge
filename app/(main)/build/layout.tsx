import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build | Real-World Projects",
  description: "Transform your knowledge into impactful products. Join the Student Forge build track to work on real-world engineering challenges and build your professional portfolio.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
