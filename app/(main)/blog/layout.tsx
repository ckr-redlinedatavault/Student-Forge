import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights from the Forge",
  description: "Explore the latest trends in technology, career advice, and success stories from the Student Forge community.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
