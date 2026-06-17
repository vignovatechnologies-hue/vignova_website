"use client";
// src/components/careers/JobsList.tsx
// ─────────────────────────────────────────────────
// List of current job openings.
// To add/remove jobs: src/constants/careers.ts
// ─────────────────────────────────────────────────

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { openings } from "@/constants/careers";

export default function JobsList() {
  return (
    <section className="py-14 bg-[#f8faff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">
            Open Positions
          </p>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B]">
            Current Openings
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {openings.map(({ title, dept, location, type }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.3}
              className="bg-white border border-gray-100 rounded-lg px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-bold text-[#1B2A6B] text-sm mb-1">{title}</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="text-xs text-gray-400">{dept}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={11} /> {location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={11} /> {type}
                  </span>
                </div>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2 bg-[#1B2A6B] text-white text-xs font-semibold rounded hover:bg-[#162258] transition-colors"
              >
                Apply Now <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
