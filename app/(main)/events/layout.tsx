import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Community Forge",
  description: "Stay connected with the tech community. Join our workshops, webinars, and networking events to grow your professional network and stay ahead of industry trends.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
