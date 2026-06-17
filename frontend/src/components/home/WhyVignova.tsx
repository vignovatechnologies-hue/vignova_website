"use client";
// src/components/home/WhyVignova.tsx
// ─────────────────────────────────────────────
// "Why Choose Vignova?" 4-card section on Home page.
// ─────────────────────────────────────────────

import { Lightbulb, CheckCircle2, Shield, Globe } from "lucide-react";

const reasons = [
  { icon: Lightbulb,    title: "Innovation Driven", sub: "Futuristic products using latest tech." },
  { icon: CheckCircle2, title: "Customer First",    sub: "Designed to solve real user problems." },
  { icon: Shield,       title: "Secure & Private",  sub: "Security at the core of everything." },
  { icon: Globe,        title: "Scalable & Reliable", sub: "Built to scale with your business." },
];

export default function WhyVignova() {
  return (
    <section className="py-14 bg-[#f8faff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">Why Us</p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B] mb-3">Why Choose Vignova?</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10">
          We combine technical depth with business understanding to deliver outcomes that matter.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="bg-white rounded-lg p-6 border border-gray-100 text-left hover:shadow-md transition-shadow">
              <Icon size={20} className="text-[#2196F3] mb-3" />
              <h4 className="font-bold text-[#1B2A6B] text-sm mb-1">{title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
