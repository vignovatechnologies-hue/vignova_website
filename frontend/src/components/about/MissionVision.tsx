"use client";
// src/components/about/MissionVision.tsx
// ─────────────────────────────────────────────
// Two cards: Our Mission (dark) + Our Vision (light).
// ─────────────────────────────────────────────

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function MissionVision() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission — dark card */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-[#1B2A6B] text-white rounded-xl p-10"
          >
            <Target size={28} className="text-[#2196F3] mb-4" />
            <h2 className="font-serif font-bold text-2xl mb-4">Our Mission</h2>
            <p className="text-white/70 leading-relaxed">
              To simplify complexity through technology — building software products that empower
              individuals and organizations to achieve more, operate smarter, and grow faster.
            </p>
          </motion.div>

          {/* Vision — light card */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            className="bg-[#f8faff] border border-gray-100 rounded-xl p-10"
          >
            <Eye size={28} className="text-[#2196F3] mb-4" />
            <h2 className="font-serif font-bold text-2xl text-[#1B2A6B] mb-4">Our Vision</h2>
            <p className="text-gray-500 leading-relaxed">
              To become a globally recognized technology company — known for building products that
              stand the test of time, serve millions, and leave a lasting impact on the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
