"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Smartphone, Globe } from "lucide-react";

const features = [
  { label: "Expense Tracking" },
  { label: "Financial Reports & Analytics" },
  { label: "Budget Management" },
  { label: "Business Finance Management" },
  { label: "Income Management" },
];

const platforms = [
  { icon: Smartphone, label: "Android" },
  { icon: Smartphone, label: "iOS" },
  { icon: Globe,      label: "Web App" },
];

export default function FeaturedProduct() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#dbeafe]/40 via-[#eff6ff] to-[#e0f2fe]/60 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full lg:w-[420px] shrink-0"
          >
            <span className="inline-block px-4 py-1.5 bg-[#2196F3] text-white text-[11px] font-bold rounded-full uppercase tracking-widest mb-6">
              Featured Product
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0f1f5c] mb-4 leading-tight">
              FIM – Financial<br />Intelligence Manager
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              A powerful platform to track expenses, manage budgets, analyze financial data,
              and take control of your personal and business finances.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-[#2196F3] shrink-0" />
                  {f.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {platforms.map(({ icon: Icon, label }) => (
                <span key={label}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 shadow-sm">
                  <Icon size={13} /> {label}
                </span>
              ))}
            </div>

            <Link href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1B2A6B] text-white text-sm font-bold rounded-lg hover:bg-[#162258] transition-colors shadow-md">
              Learn More About FIM <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* ── Right — devices ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 flex justify-center items-end relative min-h-[360px] md:min-h-[420px]"
          >

            {/* ── LAPTOP ── */}
            <div className="relative w-full max-w-[560px]">

              {/* Screen */}
              <div className="bg-[#1B2A6B] rounded-2xl p-[10px] shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden">

                  {/* Title bar */}
                  <div className="bg-[#1B2A6B] px-5 py-2.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#2196F3] flex items-center justify-center shrink-0">
                      <span className="text-white text-[9px] font-bold">V</span>
                    </div>
                    <span className="text-white text-xs font-semibold">FIM Dashboard</span>
                    <div className="ml-auto flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Dashboard */}
                  <div className="p-5 bg-[#f8faff]">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Overview</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white rounded-xl p-3.5 shadow-sm">
                        <p className="text-[10px] text-gray-400 mb-1">Total Balance</p>
                        <p className="text-lg font-bold text-[#0f1f5c]">₹ 2,45,800</p>
                        <p className="text-[9px] text-green-500 mt-0.5">↑ 12.5% from last month</p>
                      </div>
                      <div className="bg-[#fff8f0] rounded-xl p-3.5 shadow-sm">
                        <p className="text-[10px] text-gray-400 mb-1">Expenses</p>
                        <p className="text-lg font-bold text-orange-500">₹ 85,200</p>
                        <p className="text-[9px] text-orange-400 mt-0.5">₹ 85,1os this month</p>
                      </div>
                    </div>

                    {/* Donut + Transactions */}
                    <div className="grid grid-cols-5 gap-3">

                      {/* Donut */}
                      <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-[10px] text-gray-500 font-medium mb-3">Expense by Category</p>
                        <div className="flex justify-center mb-3">
                          <svg viewBox="0 0 80 80" className="w-24 h-24">
                            {/* Background circle */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#f1f5f9" strokeWidth="12"/>
                            {/* Food - blue 30% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#2196F3" strokeWidth="12"
                              strokeDasharray="52.8 123.2" strokeDashoffset="0"
                              transform="rotate(-90 40 40)"/>
                            {/* Transport - amber 20% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#f59e0b" strokeWidth="12"
                              strokeDasharray="35.2 140.8" strokeDashoffset="-52.8"
                              transform="rotate(-90 40 40)"/>
                            {/* Shopping - green 15% */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#10b981" strokeWidth="12"
                              strokeDasharray="26.4 149.6" strokeDashoffset="-88"
                              transform="rotate(-90 40 40)"/>
                            {/* Others - light */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#e0e7ff" strokeWidth="12"
                              strokeDasharray="61.6 114.4" strokeDashoffset="-114.4"
                              transform="rotate(-90 40 40)"/>
                            {/* Center text */}
                            <text x="40" y="37" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0f1f5c">₹1,50,000</text>
                          </svg>
                        </div>
                        {/* Legend */}
                        <div className="flex flex-col gap-1.5">
                          {[
                            ["#2196F3","Food","30%"],
                            ["#f59e0b","Transport","20%"],
                            ["#10b981","Shopping","15%"],
                          ].map(([c,l,p]) => (
                            <div key={l} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full shrink-0" style={{backgroundColor:c}}/>
                              <span className="text-[9px] text-gray-500 flex-1">{l}</span>
                              <span className="text-[9px] text-gray-400 font-medium">{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Transactions */}
                      <div className="col-span-3 bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-[10px] font-semibold text-gray-600 mb-3">Recent Transactions</p>
                        <div className="flex flex-col gap-2.5">
                          {[
                            ["Grocery Store",   "-₹2,400",  false],
                            ["Freelance Work",  "+₹15,000", true],
                            ["Electricity Bill","-₹1,200",  false],
                            ["Restaurant",      "-₹800",    false],
                          ].map(([name, amt, pos]) => (
                            <div key={name as string} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center shrink-0">
                                  <div className="w-2 h-2 rounded-full bg-[#2196F3]"/>
                                </div>
                                <span className="text-[9px] text-gray-600">{name as string}</span>
                              </div>
                              <span className={`text-[9px] font-bold ${pos ? "text-green-500" : "text-red-400"}`}>
                                {amt as string}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop hinge */}
              <div className="bg-[#c8cdd6] h-2 w-full rounded-b" />
              {/* Laptop base */}
              <div className="bg-[#d8dde6] h-4 rounded-b-2xl mx-6 shadow-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-[#c0c5ce] rounded-full"/>
              </div>

              {/* ── PHONE ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="absolute -bottom-2 -right-6 w-36 bg-[#1B2A6B] rounded-[28px] shadow-2xl border-2 border-white/10 overflow-hidden"
              >
                {/* Notch */}
                <div className="flex justify-center pt-2 pb-1">
                  <div className="w-10 h-1.5 bg-[#162258] rounded-full"/>
                </div>

                {/* Phone screen */}
                <div className="bg-white mx-1.5 rounded-2xl overflow-hidden">
                  <div className="bg-[#1B2A6B] px-3 py-2">
                    <p className="text-white text-[8px] font-semibold">Monthly Overview</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[8px] text-gray-400 mb-0.5">Savings</p>
                    <p className="text-base font-bold text-[#0f1f5c] mb-2">₹64,800</p>

                    {/* Line chart */}
                    <div className="bg-[#f0f7ff] rounded-lg p-2 mb-2">
                      <svg viewBox="0 0 100 40" className="w-full">
                        <defs>
                          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2196F3" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#2196F3" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <polyline
                          points="0,32 15,25 28,28 42,14 55,20 70,10 85,15 100,8"
                          fill="none" stroke="#2196F3" strokeWidth="2.5"
                          strokeLinejoin="round" strokeLinecap="round"
                        />
                        <polyline
                          points="0,32 15,25 28,28 42,14 55,20 70,10 85,15 100,8 100,40 0,40"
                          fill="url(#lineGrad)"
                        />
                        {/* Dot on peak */}
                        <circle cx="70" cy="10" r="3" fill="#2196F3"/>
                      </svg>
                    </div>

                    {/* Progress */}
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-1">
                      <div className="h-full w-[75%] bg-[#2196F3] rounded-full"/>
                    </div>
                    <p className="text-[8px] text-gray-500">
                      Budget 75% <span className="text-green-500 font-semibold">On Track</span>
                    </p>
                  </div>
                </div>

                {/* Home bar */}
                <div className="flex justify-center py-2">
                  <div className="w-10 h-1 bg-[#162258] rounded-full"/>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}