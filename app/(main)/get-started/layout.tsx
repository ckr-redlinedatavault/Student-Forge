import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Now | Begin Your Tech Journey",
  description: "Ready to accelerate your tech career? Submit your enrollment request to join the Forge ecosystem and gain access to industry-leading training.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
