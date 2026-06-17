"use client";
// src/components/about/TeamGrid.tsx
// ─────────────────────────────────────────────────
// Leadership team cards.
// To add/edit members: src/constants/about.ts
// ─────────────────────────────────────────────────

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { team } from "@/constants/about";

export default function TeamGrid() {
  return (
    <section className="py-16 bg-[#f8faff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">Our People</p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B]">Leadership Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, desc }, i) => (
            <motion.div
              key={name}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.5}
              className="bg-white rounded-lg p-7 border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-[#1B2A6B]" />
              </div>
              <h3 className="font-bold text-[#1B2A6B] text-sm mb-2">{name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
