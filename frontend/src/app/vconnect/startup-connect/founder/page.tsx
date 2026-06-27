"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Rocket, Users } from "lucide-react";
import { supabase } from "@/lib/supabase";

const lookingFor = ["Co-Founder", "Technical Co-Founder", "Developer", "UI/UX Designer", "Tester", "Marketing Partner", "MVP Development Partner", "Business Development", "Investor Introduction", "Mentor"];
const stages = ["Idea Stage", "Building MVP", "MVP Ready", "Early Traction", "Pre-Seed", "Seed Stage"];

export default function StartupFounderPage() {
  const [form, setForm] = useState({
    founderName: "", email: "", phone: "", startupName: "", website: "",
    idea: "", stage: "", problem: "", needs: [] as string[],
    equity: "", timeline: "", currentTeam: "", additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleNeed(n: string) {
    setForm(f => ({ ...f, needs: f.needs.includes(n) ? f.needs.filter(x => x !== n) : [...f.needs, n] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase.from("vconnect_founders").insert({
        founder_name: form.founderName,
        email: form.email,
        phone: form.phone,
        startup_name: form.startupName,
        website: form.website,
        idea: form.idea,
        stage: form.stage,
        problem: form.problem,
        needs: form.needs,
        equity: form.equity,
        timeline: form.timeline,
        current_team: form.currentTeam,
        additional_info: form.additionalInfo,
      });
      if (dbError) throw new Error(dbError.message);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 pt-24">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Startup Posted!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            <strong>{form.startupName || "Your startup"}</strong> has been submitted. Vignova will find matching talent and co-founders for your vision. Watch <strong>{form.email}</strong>.
          </p>
          <Link href="/vconnect" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Back to VConnect
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f8fafc] pt-20">
        <div className="bg-gradient-to-r from-[#0a1330] to-[#2d1a00] py-12 px-6">
          <div className="max-w-2xl mx-auto">
            <Link href="/vconnect" className="inline-flex items-center gap-2 text-amber-300 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft size={15} /> Back to VConnect
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Rocket size={18} className="text-amber-300" />
              </div>
              <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">Startup Connect · Founder Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Tell Us About Your Startup</h1>
            <p className="text-gray-400 text-sm">Share your vision and what you need. Vignova will match you with the right people to build it.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Founder Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-6">Founder Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Your Name *", key: "founderName", required: true, placeholder: "Your full name" },
                  { label: "Email *", key: "email", required: true, type: "email", placeholder: "you@startup.com" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                  { label: "Website / Deck URL", key: "website", placeholder: "https://yourstartup.com" },
                ].map(({ label, key, required, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input
                      required={required}
                      type={type || "text"}
                      value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Startup Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Rocket size={16} className="text-amber-500" />
                <h2 className="font-bold text-gray-900">Startup Details</h2>
              </div>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Startup Name *</label>
                    <input
                      required
                      value={form.startupName}
                      onChange={e => setForm(f => ({ ...f, startupName: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                      placeholder="Your startup's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Stage *</label>
                    <select
                      required
                      value={form.stage}
                      onChange={e => setForm(f => ({ ...f, stage: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition bg-white"
                    >
                      <option value="">Select stage</option>
                      {stages.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">What Problem Are You Solving? *</label>
                  <textarea
                    required
                    value={form.problem}
                    onChange={e => setForm(f => ({ ...f, problem: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition resize-none"
                    placeholder="Describe the problem you're solving and for whom..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Idea / Solution *</label>
                  <textarea
                    required
                    value={form.idea}
                    onChange={e => setForm(f => ({ ...f, idea: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition resize-none"
                    placeholder="How does your startup solve the problem?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Team</label>
                  <input
                    value={form.currentTeam}
                    onChange={e => setForm(f => ({ ...f, currentTeam: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                    placeholder="e.g. Solo founder, 1 designer, 1 developer"
                  />
                </div>
              </div>
            </div>

            {/* Looking For */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-amber-500" />
                <h2 className="font-bold text-gray-900">What Are You Looking For? *</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {lookingFor.map(n => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => toggleNeed(n)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.needs.includes(n)
                        ? "bg-amber-500 text-white border-amber-500"
                        : "border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-600"
                      }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Equity Offer</label>
                  <input
                    value={form.equity}
                    onChange={e => setForm(f => ({ ...f, equity: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                    placeholder="e.g. 5–15% equity or salary+equity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                  <select
                    value={form.timeline}
                    onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition bg-white"
                  >
                    <option value="">Select</option>
                    {["Immediately", "Within 1 month", "Within 3 months", "Flexible"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-4">Anything Else?</h2>
              <textarea
                value={form.additionalInfo}
                onChange={e => setForm(f => ({ ...f, additionalInfo: e.target.value }))}
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition resize-none"
                placeholder="Any other details you'd like to share..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Post My Startup →"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}