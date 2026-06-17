"use client";
// src/components/services/ServicesList.tsx
// ─────────────────────────────────────────────────────────
// Alternating-bg service detail cards.
// Data comes from: src/constants/services.ts
// ─────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { services } from "@/constants/services";

export default function ServicesList() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {services.map(({ icon: Icon, title, tagline, desc, features }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={0}
              className={`flex flex-col lg:flex-row gap-8 rounded-xl border border-gray-100 p-8 hover:shadow-md transition-shadow ${
                i % 2 === 1 ? "bg-[#f8faff]" : "bg-white"
              }`}
            >
              {/* Left — title + description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-[#1B2A6B] flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#2196F3] text-xs font-semibold">{tagline}</p>
                    <h2 className="font-serif font-bold text-lg text-[#1B2A6B]">{title}</h2>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>

              {/* Right — feature list */}
              <div className="lg:w-72 shrink-0">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Includes</h4>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-[#2196F3] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
