"use client";
// src/components/products/ProductsGrid.tsx
// ─────────────────────────────────────────────────────────
// 3-column product cards grid.
// To add/edit products: src/constants/products.ts
// ─────────────────────────────────────────────────────────

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { products } from "@/constants/products";

export default function ProductsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, tag, title, desc, platforms, features }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.3}
              className="bg-white border border-gray-100 rounded-xl p-7 hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-[#eef2ff] flex items-center justify-center">
                  <Icon size={20} className="text-[#1B2A6B]" />
                </div>
                {/* Status badge */}
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    tag === "Current"
                      ? "bg-[#2196F3] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tag}
                </span>
              </div>

              <h3 className="font-serif font-bold text-[#1B2A6B] text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

              {/* Available platforms */}
              <div className="mb-4">
                <p className="text-[0.65rem] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Available on
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platforms.map((p) => (
                    <span
                      key={p}
                      className="text-xs px-2.5 py-1 bg-[#f8faff] border border-gray-100 text-[#1B2A6B] rounded-full font-medium"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 size={12} className="text-[#2196F3] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* "Learn More" only for live products */}
              {tag === "Current" && (
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2196F3] hover:gap-2.5 transition-all"
                >
                  Learn More <ArrowRight size={12} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
