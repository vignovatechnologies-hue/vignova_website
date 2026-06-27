"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Layers, Lightbulb, Globe } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustPills = [
  { icon: Shield, label: "Secure" },
  { icon: Layers, label: "Scalable" },
  { icon: Lightbulb, label: "Innovative" },
  { icon: Globe, label: "Future-Ready" },
];

const floatingWords = [
  { word: "AI", top: "12%", left: "6%", delay: 0, size: "text-xs" },
  { word: "Cloud", top: "22%", right: "8%", delay: 0.3, size: "text-xs" },
  { word: "SaaS", top: "65%", left: "4%", delay: 0.6, size: "text-xs" },
  { word: "Automation", top: "72%", right: "5%", delay: 0.9, size: "text-xs" },
  { word: "API", top: "42%", left: "2%", delay: 1.2, size: "text-xs" },
  { word: "Data", top: "50%", right: "3%", delay: 0.5, size: "text-xs" },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full pt-24 pb-16 md:pb-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020617 0%, #0a1330 40%, #0d1f4e 70%, #0a1330 100%)",
      }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-80 h-80 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

      {/* Floating tech words */}
      {floatingWords.map(({ word, top, left, right, delay, size }, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${size} font-mono font-bold text-blue-400/40 select-none pointer-events-none tracking-widest uppercase`}
          style={{ top, left, right }}
        >
          {word}
        </motion.span>
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow pill */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Vignova Technologies Private Limited
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.08] mb-6 max-w-5xl"
          >
            Building Intelligent Software{" "}
            <br className="hidden sm:block" />
            for{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #60a5fa, #818cf8, #60a5fa)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              People & Businesses.
            </span>
          </motion.h1>

          <style>{`
            @keyframes shimmer {
              from { background-position: 0% center; }
              to   { background-position: 200% center; }
            }
          `}</style>

          {/* Subheading */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            We create innovative software products that help individuals and businesses
            simplify operations, improve productivity, and accelerate digital transformation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#2196F3] text-white text-sm font-semibold rounded-xl hover:bg-[#1976d2] transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
            >
              Explore Our Products <ArrowRight size={15} />
            </Link>
            <Link
              href="/vconnect"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/8 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/15 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              Discover VConnect <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex flex-wrap gap-6 justify-center"
          >
            {trustPills.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-xs font-medium text-gray-400">
                <Icon size={13} className="text-blue-400" /> {label}
              </span>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={5}
            className="mt-16 w-full max-w-3xl grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            {[
              ["1+", "Products Built"],
              ["2026", "Founded"],
              ["∞", "Vision"],
            ].map(([val, label], i) => (
              <div key={i} className="flex flex-col items-center py-5 px-4 bg-white/[0.03] hover:bg-white/[0.07] transition-colors">
                <span className="text-2xl font-medium text-white font-sans">{val}</span>
                <span className="text-xs text-gray-500 mt-1 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
