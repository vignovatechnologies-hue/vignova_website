"use client";
// src/components/careers/PerksGrid.tsx
// ─────────────────────────────────────────────────
// "Why Work at Vignova?" 4-card perks section.
// To edit perks: src/constants/careers.ts
// ─────────────────────────────────────────────────

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { perks } from "@/constants/careers";

export default function PerksGrid() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B]">
            Why Work at Vignova?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.5}
              className="bg-[#f8faff] rounded-lg p-7 border border-gray-100"
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
