"use client";
// src/components/home/ServicesOverview.tsx
// ─────────────────────────────────────────────────────────
// 6-card services grid on the Home page.
// Full service details live in: src/constants/services.ts
// ─────────────────────────────────────────────────────────

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { services } from "@/constants/services";

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-[#f8faff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">
              What We Do
            </p>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B]">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#2196F3] hover:gap-2 transition-all"
          >
            View All Services
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.5}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-10 h-10 rounded bg-[#eef2ff] flex items-center justify-center mb-4 group-hover:bg-[#1B2A6B] transition-colors">
                <Icon size={18} className="text-[#1B2A6B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1B2A6B] text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
