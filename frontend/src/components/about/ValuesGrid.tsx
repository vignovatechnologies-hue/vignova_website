"use client";
// src/components/about/ValuesGrid.tsx
// ─────────────────────────────────────────────────
// 6-card grid of company values.
// To add/edit values: src/constants/about.ts
// ─────────────────────────────────────────────────

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { values } from "@/constants/about";

export default function ValuesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">What We Stand For</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B]">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.5}
              className="bg-[#f8faff] rounded-lg p-7 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Icon size={20} className="text-[#2196F3] mb-3" />
              <h3 className="font-bold text-[#1B2A6B] text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
