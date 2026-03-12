import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow | Career Acceleration",
  description: "Scale your professional impact. Learn leadership, strategic networking, and advanced career growth tactics with Student Forge.",
};

export default function GrowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
