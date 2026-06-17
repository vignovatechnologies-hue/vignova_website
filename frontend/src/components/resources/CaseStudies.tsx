"use client";
// src/components/resources/CaseStudies.tsx
// ─────────────────────────────────────────────────
// Case study cards list.
// To add/edit case studies: src/constants/resources.ts
// ─────────────────────────────────────────────────

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { caseStudies, resourceTypes } from "@/constants/resources";

// Resource type summary bar (20+ blog articles etc.)
export function ResourceTypesBar() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resourceTypes.map(({ icon: Icon, label, count }) => (
            <div key={label} className="flex items-center gap-4 p-5 bg-[#f8faff] rounded-lg border border-gray-100">
              <div className="w-10 h-10 rounded bg-[#eef2ff] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#1B2A6B]" />
              </div>
              <div>
                <p className="font-bold text-[#1B2A6B] text-sm">{count}</p>
                <p className="text-gray-400 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudies() {
  return (
    <section className="py-14 bg-[#f8faff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-1">Success Stories</p>
          <h2 className="text-2xl font-serif font-bold text-[#1B2A6B]">Case Studies</h2>
        </div>
        <div className="flex flex-col gap-4">
          {caseStudies.map(({ title, industry, outcome }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.3}
              className="bg-white rounded-lg border border-gray-100 px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-xs font-semibold text-[#2196F3] mb-1 block">{industry}</span>
                <h3 className="font-bold text-[#1B2A6B] text-sm">{title}</h3>
              </div>
              <div className="shrink-0 px-4 py-2 bg-[#eef2ff] rounded-full text-xs font-semibold text-[#1B2A6B]">
                {outcome}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
