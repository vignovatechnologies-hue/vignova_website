"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Users, Rocket } from "lucide-react";
import { supabase } from "@/lib/supabase";

const roles = ["Co-Founder", "Technical Co-Founder", "Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer", "Mobile Developer", "AI/ML Engineer", "DevOps", "QA / Tester", "Marketing", "Business Development", "Product Manager"];
const domains = ["FinTech", "HealthTech", "EdTech", "E-commerce", "SaaS", "AI / ML", "Social Impact", "Gaming", "Deep Tech", "Climate Tech", "Any Domain"];

export default function StartupTalentPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", skills: "", experience: "",
    interestedRoles: [] as string[], interestedDomains: [] as string[],
    linkedin: "", github: "", portfolio: "", expectation: "", availability: "", bio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleItem(key: "interestedRoles" | "interestedDomains", val: string) {
    setForm(f => ({
      ...f,
      [key]: (f[key] as string[]).includes(val)
        ? (f[key] as string[]).filter(x => x !== val)
        : [...(f[key] as string[]), val],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase.from("vconnect_startup_talent").insert({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        skills: form.skills,
        experience: form.experience,
        interested_roles: form.interestedRoles,
        interested_domains: form.interestedDomains,
        linkedin: form.linkedin,
        github: form.github,
        portfolio: form.portfolio,
        expectation: form.expectation,
        availability: form.availability,
        bio: form.bio,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Profile Submitted!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            You're now in the Startup Talent pool! Vignova will reach out when a startup matches your interests. Check <strong>{form.email}</strong>.
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
                <Users size={18} className="text-amber-300" />
              </div>
              <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">Startup Connect · Talent Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Join the Startup Talent Pool</h1>
            <p className="text-gray-400 text-sm">Register your interest in startup opportunities. We'll connect you with founders who need your skills.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-6">Personal Info</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name *", key: "fullName", required: true, placeholder: "Your name" },
                  { label: "Email *", key: "email", required: true, type: "email", placeholder: "you@email.com" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                  { label: "Experience", key: "experience", placeholder: "e.g. 2 years in React" },
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
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Skills</label>
                <input
                  value={form.skills}
                  onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                  placeholder="e.g. React, Node.js, Python, Figma"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">About You</label>
                <textarea
                  value={form.bio}
                  onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition resize-none"
                  placeholder="What excites you about startups? What have you built?"
                />
              </div>
            </div>

            {/* Roles */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-4">
                <Rocket size={16} className="text-amber-500" />
                <h2 className="font-bold text-gray-900">Roles You're Open To *</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {roles.map(r => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => toggleItem("interestedRoles", r)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.interestedRoles.includes(r)
                        ? "bg-amber-500 text-white border-amber-500"
                        : "border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-600"
                      }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Domains */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-4">Preferred Domains</h2>
              <div className="flex flex-wrap gap-2">
                {domains.map(d => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleItem("interestedDomains", d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.interestedDomains.includes(d)
                        ? "bg-amber-500 text-white border-amber-500"
                        : "border-gray-200 text-gray-600 hover:border-amber-400 hover:text-amber-600"
                      }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Links & Expectations */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-6">Links & Expectations</h2>
              <div className="space-y-4">
                {[
                  { label: "LinkedIn", key: "linkedin", placeholder: "https://linkedin.com/in/yourprofile" },
                  { label: "GitHub", key: "github", placeholder: "https://github.com/yourhandle" },
                  { label: "Portfolio", key: "portfolio", placeholder: "https://yourportfolio.com" },
                ].map(({ label, key, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input
                      value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Expectation</label>
                    <select
                      value={form.expectation}
                      onChange={e => setForm(f => ({ ...f, expectation: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition bg-white"
                    >
                      <option value="">Select</option>
                      <option>Equity only</option>
                      <option>Salary + equity</option>
                      <option>Salary only</option>
                      <option>Open to discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Availability</label>
                    <select
                      value={form.availability}
                      onChange={e => setForm(f => ({ ...f, availability: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition bg-white"
                    >
                      <option value="">Select</option>
                      <option>Full time</option>
                      <option>Part time</option>
                      <option>Weekends</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-all shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Join Startup Talent Pool →"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}