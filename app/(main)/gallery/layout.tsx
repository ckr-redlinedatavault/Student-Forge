import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Life at the Forge",
  description: "Visual glimpses into our ecosystem. Explore photos from our workshops, bootcamps, and community events.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
