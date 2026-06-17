"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Layers, Lightbulb, Globe, Cloud, BarChart3, Users } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const trustPills = [
  { icon: Shield,    label: "Secure" },
  { icon: Layers,    label: "Scalable" },
  { icon: Lightbulb, label: "Innovative" },
  { icon: Globe,     label: "Future-Ready" },
];

// Floating icons positioned around the logo — matching reference image
const floatingIcons = [
  { icon: Cloud,    top: "8%",  left: "30%",  delay: 0,    size: 18, color: "#2196F3" },
  { icon: Shield,   top: "30%", left: "5%",   delay: 0.4,  size: 16, color: "#1B2A6B" },
  { icon: BarChart3,top: "15%", right: "5%",  delay: 0.8,  size: 18, color: "#2196F3" },
  { icon: Users,    top: "55%", right: "3%",  delay: 0.6,  size: 16, color: "#1B2A6B" },
];

export default function HeroSection() {
  return (
    <section className="w-full pt-20 md:pt-24 pb-0 bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#e0f2fe] overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center min-h-[480px] md:min-h-[520px] gap-6 lg:gap-0">

          {/* ── Left — text ── */}
          <div className="flex-1 w-full pb-8 lg:pb-16 text-center lg:text-left z-10">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-serif font-bold text-[#0f1f5c] leading-[1.12] mb-4 md:mb-5"
            >
              Building Intelligent<br />
              Software for{" "}
              <span className="text-[#2196F3]">People,</span><br />
              <span className="text-[#2196F3]">Businesses,</span> and<br />
              the Future.
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-gray-500 text-sm md:text-base leading-relaxed mb-7 max-w-md mx-auto lg:mx-0"
            >
              We create innovative software products that help individuals and businesses simplify
              operations, improve productivity, and accelerate digital transformation.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start"
            >
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1B2A6B] text-white text-sm font-semibold rounded-lg hover:bg-[#162258] transition-colors shadow-md">
                Explore Our Products <ArrowRight size={15} />
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/70 border border-[#1B2A6B]/20 text-[#1B2A6B] text-sm font-semibold rounded-lg hover:bg-white transition-colors">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              {trustPills.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                  <Icon size={13} className="text-[#2196F3]" /> {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right — 3D logo on platform ── */}
          <div className="hidden md:flex flex-1 relative items-end justify-center min-h-[420px] lg:min-h-[520px]">

            {/* Big background glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#bfdbfe]/60 to-[#dbeafe]/30 blur-3xl" />
            </div>

            {/* Floating icon cards */}
            {floatingIcons.map(({ icon: Icon, top, left, right, delay, size, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -8, 0] }}
                transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 w-11 h-11 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                style={{ top, left, right }}
              >
                <Icon size={size} style={{ color }} />
              </motion.div>
            ))}

           {/* Logo only — no circle, no platform */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="relative z-10 flex items-center justify-center pb-8"
>
  <Image
    src="/Vlogo.png"
    alt="Vignova Technologies"
    width={380}
    height={380}
    priority
    className="object-contain w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
  />
</motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}