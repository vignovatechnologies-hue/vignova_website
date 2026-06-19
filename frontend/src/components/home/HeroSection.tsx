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

const floatingIcons = [
  { icon: Cloud,     top: "2%",  left: "18%", delay: 0,   size: 18, color: "#60a5fa" },
  { icon: Shield,    top: "38%", left: "-4%", delay: 0.4, size: 16, color: "#93c5fd" },
  { icon: BarChart3, top: "4%",  right: "10%", delay: 0.8, size: 18, color: "#60a5fa" },
  { icon: Users,     top: "70%", right: "6%", delay: 0.6, size: 16, color: "#93c5fd" },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full pt-20 md:pt-24 pb-12 md:pb-0 overflow-hidden bg-[#0a1330]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(2,6,23,0.95), rgba(10,19,48,0.85), rgba(10,19,48,0.55)), url('/globe-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center min-h-[480px] md:min-h-[520px] gap-10 lg:gap-0">

          {/* ── Left — text ── */}
          <div className="flex-1 w-full pb-4 lg:pb-16 text-center lg:text-left z-10">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] font-serif font-bold text-white leading-[1.12] mb-4 md:mb-5"
            >
              Building Intelligent Software for{" "}
              <span className="text-[#60a5fa]">People,</span>{" "}
              <span className="text-[#60a5fa]">Businesses,</span> and the Future.
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-gray-300 text-sm md:text-base leading-relaxed mb-7 max-w-md mx-auto lg:mx-0"
            >
              We create innovative software products that help individuals and businesses simplify
              operations, improve productivity, and accelerate digital transformation.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="flex flex-col sm:flex-row gap-3 mb-8 justify-center lg:justify-start"
            >
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2196F3] text-white text-sm font-semibold rounded-lg hover:bg-[#1976d2] transition-colors shadow-md">
                Explore Our Products <ArrowRight size={15} />
              </Link>
              <Link href="/about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/15 border border-white/50 text-white text-sm font-semibold rounded-lg hover:bg-white/25 hover:border-white/70 transition-colors backdrop-blur-sm">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              {trustPills.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-gray-300">
                  <Icon size={13} className="text-[#60a5fa]" /> {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right — logo ── */}
          <div className="flex flex-1 relative items-center justify-center min-h-[260px] sm:min-h-[340px] lg:min-h-[480px] w-full">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#2196F3]/20 blur-3xl" />
            </div>

            <div className="hidden sm:block">
              {floatingIcons.map(({ icon: Icon, top, left, right, delay, size, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl flex items-center justify-center"
                  style={{ top, left, right }}
                >
                  <Icon size={size} style={{ color }} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 flex items-center justify-center
                         w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64
                         rounded-[2.25rem] bg-white/95 shadow-2xl
                         ring-1 ring-white/40 p-5 sm:p-6"
            >
              <Image
                src="/logo.jpeg"
                alt="Vignova Technologies"
                width={300}
                height={300}
                priority
                className="object-contain w-full h-full drop-shadow-lg"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}