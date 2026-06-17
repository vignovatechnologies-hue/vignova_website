"use client";
// src/components/resources/BlogGrid.tsx
// ─────────────────────────────────────────────────
// Blog post cards grid.
// To add/edit posts: src/constants/resources.ts
// ─────────────────────────────────────────────────

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { blogPosts } from "@/constants/resources";

export default function BlogGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-1">Insights</p>
            <h2 className="text-2xl font-serif font-bold text-[#1B2A6B]">Latest from Our Blog</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(({ title, category, date, read }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.3}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <span className="inline-block px-2.5 py-1 bg-[#eef2ff] text-[#1B2A6B] text-[0.65rem] font-semibold rounded-full mb-4">
                {category}
              </span>
              <h3 className="font-serif font-bold text-[#1B2A6B] text-sm leading-snug mb-4 group-hover:text-[#2196F3] transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {date}
                </span>
                <span>{read}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
