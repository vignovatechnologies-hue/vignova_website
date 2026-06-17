// src/app/about/page.tsx
// ─────────────────────────────────────────────
// About page — just composes section components.
// ─────────────────────────────────────────────

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import ValuesGrid from "@/components/about/ValuesGrid";
import TeamGrid from "@/components/about/TeamGrid";
import CtaBanner from "@/components/shared/CtaBanner";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="About Us"
        title="Who We Are"
        subtitle="Vignova Technologies Private Limited is an Indian technology company building intelligent software for people, businesses, and the future."
      />
      <MissionVision />
      <OurStory />
      <ValuesGrid />
      <TeamGrid />
      <CtaBanner />
      <Footer />
    </div>
  );
}
