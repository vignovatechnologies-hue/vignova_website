"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase, Users, Bot, Rocket,
  Building2, GraduationCap, Wrench, Star,
  ClipboardList, Search, Handshake, Zap,
} from "lucide-react";

const modules = [
  {
    id: "freelancer-connect",
    emoji: "💼",
    icon: Briefcase,
    title: "Freelancer Connect",
    tagline: "Projects meet talent.",
    description:
      "Businesses post requirements. Skilled freelancers apply. Vignova finds the right match across development, design, testing, AI, and marketing.",
    color: "#2196F3",
    glow: "rgba(33,150,243,0.12)",
    border: "rgba(33,150,243,0.2)",
    portals: [
      { label: "I need a freelancer", sub: "Post a project requirement", href: "/vconnect/freelancer-connect/client", icon: Building2 },
      { label: "I'm a freelancer", sub: "Build your profile & find work", href: "/vconnect/freelancer-connect/freelancer", icon: Wrench },
    ],
  },
  {
    id: "talent-hire",
    emoji: "🎓",
    icon: GraduationCap,
    title: "Talent Hire",
    tagline: "Careers start here.",
    description:
      "Students and candidates showcase skills. Companies post internships, jobs, and contracts. Vignova matches the right people to the right roles.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.2)",
    portals: [
      { label: "I'm a student / candidate", sub: "Upload profile & get discovered", href: "/vconnect/talent-hire/student", icon: GraduationCap },
      { label: "I'm hiring", sub: "Post jobs & find candidates", href: "/vconnect/talent-hire/company", icon: Building2 },
    ],
  },
  {
    id: "ai-marketplace",
    emoji: "🤖",
    icon: Bot,
    title: "AI Marketplace",
    tagline: "Automation on demand.",
    description:
      "Businesses submit AI needs. Creators list agents, automations, and templates. Vignova connects the right solution to the right problem.",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.2)",
    portals: [
      { label: "I need an AI solution", sub: "Describe your automation needs", href: "/vconnect/ai-marketplace/buyer", icon: Star },
      { label: "I build AI tools", sub: "List your agent or workflow", href: "/vconnect/ai-marketplace/creator", icon: Bot },
    ],
  },
  {
    id: "startup-connect",
    emoji: "🚀",
    icon: Rocket,
    title: "Startup Connect",
    tagline: "Build your founding team.",
    description:
      "Founders find co-founders, early engineers, and partners. Talent discovers exciting startup opportunities. Ideas find the people to build them.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.2)",
    portals: [
      { label: "I'm a founder", sub: "Find co-founders & team", href: "/vconnect/startup-connect/founder", icon: Rocket },
      { label: "I want startup roles", sub: "Discover early-stage opportunities", href: "/vconnect/startup-connect/talent", icon: Users },
    ],
  },
];

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    title: "Submit Your Need",
    desc: "Fill in what you're looking for — a role, project, AI tool, or startup opportunity. Takes under 3 minutes.",
  },
  {
    n: "02",
    icon: Search,
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    title: "Vignova Reviews",
    desc: "Our team manually reviews your requirement and searches across our talent & solution network for the best fit.",
  },
  {
    n: "03",
    icon: Zap,
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
    title: "Receive Matches",
    desc: "We curate and share profiles or solutions that match your exact criteria — no spam, only relevant results.",
  },
  {
    n: "04",
    icon: Handshake,
    color: "#10b981",
    bg: "rgba(16,185,129,0.1)",
    title: "Connect & Close",
    desc: "Engage directly with your match. Agreements and execution remain between the parties involved.",
  },
];

export default function VConnectPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f5f7ff] text-gray-900 min-h-screen">

        {/* ── HERO ── */}
        <section
          className="relative pt-24 pb-14 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #020617 0%, #0a1330 55%, #0d1f4e 100%)" }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.035]" style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          {/* Glow blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Vignova Connect Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-4"
            >
              Where Talent Meets{" "}
              <span style={{
                background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Opportunity.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-7"
            >
              VConnect is a discovery and networking platform. We collect requirements from one side,
              gather profiles from the other, and create the right connections — across freelancing,
              hiring, AI, and startups.
            </motion.p>

            {/* Module pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              {modules.map(m => (
                <span
                  key={m.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border"
                  style={{ color: m.color, borderColor: m.border, background: m.glow }}
                >
                  <span>{m.emoji}</span> {m.title}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="text-xs text-gray-600 max-w-xl mx-auto"
            >
              ⚠️ Vignova acts as an introduction platform. Execution, payments, and agreements remain between the involved parties.
            </motion.p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-14 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                How VConnect Works
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Four simple steps from requirement to connection — no back-and-forth, no guesswork.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              {/* Connector line — desktop */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-100 via-purple-100 to-green-100" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.n}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 }}
                      className="relative flex flex-col"
                    >
                      {/* Arrow between steps — mobile/tablet */}
                      {i < steps.length - 1 && (
                        <div className="lg:hidden flex items-center justify-center my-1 sm:hidden">
                          <ArrowRight size={14} className="text-gray-300 rotate-90" />
                        </div>
                      )}

                      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                        {/* Step number + icon */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center"
                            style={{ background: step.bg }}
                          >
                            <Icon size={20} style={{ color: step.color }} />
                          </div>
                          {/* Visible step number badge */}
                          <span
                            className="text-sm font-bold px-2.5 py-1 rounded-lg"
                            style={{ color: step.color, background: step.bg }}
                          >
                            {step.n}
                          </span>
                        </div>

                        <h4 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed flex-1">{step.desc}</p>

                        {/* Progress dot */}
                        <div className="mt-5 flex items-center gap-1.5">
                          {steps.map((_, j) => (
                            <div
                              key={j}
                              className="h-1.5 rounded-full transition-all"
                              style={{
                                width: j === i ? 24 : 8,
                                background: j === i ? step.color : "#e5e7eb",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Arrow on desktop — between cards */}
                      {i < steps.length - 1 && (
                        <div
                          className="hidden lg:flex absolute -right-5 top-8 z-10 w-10 h-10 rounded-full items-center justify-center shadow-md border-2 border-white"
                          style={{ background: step.color }}
                        >
                          <ArrowRight size={16} className="text-white" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 MODULES ── */}
        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Four Modules
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3">
                Choose Your Path
              </h2>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Each module has two sides — pick the one that matches what you need or offer.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((mod, i) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-3xl border bg-[#fafafa] hover:bg-white transition-all duration-300 hover:shadow-xl overflow-hidden"
                  style={{ borderColor: mod.border }}
                >
                  {/* Coloured top strip */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${mod.color}, transparent)` }}
                  />

                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border"
                        style={{ background: mod.glow, borderColor: mod.border }}
                      >
                        {mod.emoji}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{mod.title}</h3>
                        <p className="text-sm font-medium mt-0.5" style={{ color: mod.color }}>
                          {mod.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{mod.description}</p>

                    {/* Portal buttons */}
                    <div className="flex flex-col gap-3">
                      {mod.portals.map((portal) => {
                        const PIcon = portal.icon;
                        return (
                          <Link
                            key={portal.href}
                            href={portal.href}
                            className="group/btn flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl border border-gray-100 bg-white hover:border-current transition-all duration-200"
                            style={{ "--hover-color": mod.color } as React.CSSProperties}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                                style={{ background: mod.glow }}
                              >
                                <PIcon size={14} style={{ color: mod.color }} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-800 group-hover/btn:text-gray-900 transition-colors leading-tight">
                                  {portal.label}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{portal.sub}</p>
                              </div>
                            </div>
                            <div
                              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover/btn:scale-110 transition-transform"
                              style={{ background: mod.glow }}
                            >
                              <ArrowRight size={12} style={{ color: mod.color }} />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTICE ── */}
        <section className="py-10 px-4 sm:px-6 bg-amber-50 border-y border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-amber-700 font-semibold text-xs uppercase tracking-widest mb-2">
              <span>⚠️</span> Platform Notice
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              Vignova Connect acts as a <strong>discovery and networking platform</strong>. Our role is to collect
              requirements, identify suitable matches, and facilitate introductions. Project execution, employment
              agreements, startup partnerships, purchases, payments, and ongoing engagements remain the
              responsibility of the involved parties unless Vignova is separately engaged.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}