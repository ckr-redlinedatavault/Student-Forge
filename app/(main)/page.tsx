import { Metadata } from "next";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import MissionVision from "@/components/MissionVision";
import Ecosystem from "@/components/Ecosystem";
import Testimonials from "@/components/Testimonials";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Home | Forge Your Tech Career",
  description: "Explore the Forge ecosystem. Learn full-stack development, UI/UX design, and AI automation with high-performance industry experts.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white font-sans">
      <Hero />
      <ImpactStats />
      <MissionVision />
      <Ecosystem />
      <Testimonials />
      <FooterCTA />

    </div>
  );
}
