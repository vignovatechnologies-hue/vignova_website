"use client";
// src/components/home/AboutSnippet.tsx
// ─────────────────────────────────────────────
// "Who We Are" two-column block on the Home page.
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  { label: "Innovation Driven",    desc: "We build futuristic products using the latest technologies." },
  { label: "Customer First",       desc: "Products designed to solve real problems for users." },
  { label: "Secure & Private",     desc: "Security and privacy are at the core of everything we do." },
  { label: "Scalable & Reliable",  desc: "Built to scale with your business and future needs." },
];

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B] mb-4">Who We Are</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Vignova Technologies Private Limited is an Indian technology company dedicated to building
              intelligent software that solves real-world problems. We are a team of passionate engineers,
              designers, and product thinkers committed to innovation and excellence.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              From startups to enterprises, we partner with organizations to design, build, and scale
              software products that make a meaningful difference.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2196F3] hover:gap-3 transition-all">
              Learn More <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ label, desc }) => (
              <div key={label} className="bg-[#f8faff] rounded-lg p-5 border border-gray-100">
                <CheckCircle2 size={16} className="text-[#2196F3] mb-2" />
                <h4 className="font-bold text-[#1B2A6B] text-sm mb-1">{label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
