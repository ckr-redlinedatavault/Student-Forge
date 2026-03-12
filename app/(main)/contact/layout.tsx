import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Have questions about our programs or ecosystem? Reach out to the Student Forge team for support, partnerships, or general inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
