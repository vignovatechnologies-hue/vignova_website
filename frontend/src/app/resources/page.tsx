// src/app/resources/page.tsx
// ─────────────────────────────────────────────
// Resources page — just composes section components.
// ─────────────────────────────────────────────

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import BlogGrid from "@/components/resources/BlogGrid";
import CaseStudies, { ResourceTypesBar } from "@/components/resources/CaseStudies";

export default function ResourcesPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="Knowledge Hub"
        title="Resources"
        subtitle="Insights, case studies, and guides from the Vignova team to help you navigate the world of modern technology and digital transformation."
      />
      <ResourceTypesBar />
      <BlogGrid />
      <CaseStudies />

      {/* Newsletter section */}
      <section className="py-14 bg-[#1B2A6B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-white/60 text-sm mb-7">
            Get the latest insights on technology, products, and digital transformation delivered
            to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#2196F3]"
            />
            <button
              onClick={() => { alert("Subscribed!"); setEmail(""); }}
              className="px-6 py-3 bg-[#2196F3] text-white text-sm font-bold rounded hover:bg-[#1976D2] transition-colors flex items-center gap-2 justify-center"
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
