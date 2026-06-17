// src/app/careers/page.tsx
// ─────────────────────────────────────────────
// Careers page — just composes section components.
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import PerksGrid from "@/components/careers/PerksGrid";
import JobsList from "@/components/careers/JobsList";

export default function CareersPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="Join Our Team"
        title="Build the Future with Us"
        subtitle="We are looking for curious, driven people who want to create technology that genuinely matters. If that's you, we'd love to meet you."
      />
      <PerksGrid />
      <JobsList />

      {/* Spontaneous application banner */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-serif font-bold text-[#1B2A6B] mb-3">
            Don&apos;t see your role?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            We&apos;re always looking for exceptional talent. Send us your resume and tell us how
            you can contribute to Vignova&apos;s mission.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#1B2A6B] text-white text-sm font-bold rounded hover:bg-[#162258] transition-colors"
          >
            Send Your CV <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
