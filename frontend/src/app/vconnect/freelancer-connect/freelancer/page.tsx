"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Wrench, Link2, DollarSign, Upload, User } from "lucide-react";
import { supabase, uploadResume } from "@/lib/supabase";

const categories = ["Developer", "UI/UX Designer", "Tester / QA", "Digital Marketer", "AI Engineer", "Content Writer", "Other"];
const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Java", "Flutter", "Figma", "Adobe XD", "Selenium", "Cypress", "SEO", "Google Ads", "Meta Ads", "Machine Learning", "AI Agents", "n8n", "Make.com", "Zapier"];

export default function FreelancerPortalPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", category: "", selectedSkills: [] as string[],
    experience: "", portfolio: "", linkedin: "", github: "", availability: "", pricingType: "",
    priceMin: "", priceMax: "", bio: "", resume: null as File | null,
  });
  const [resumeName, setResumeName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function toggleSkill(s: string) {
    setForm(f => ({ ...f, selectedSkills: f.selectedSkills.includes(s) ? f.selectedSkills.filter(x => x !== s) : [...f.selectedSkills, s] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let resumeUrl: string | null = null;
      if (form.resume) resumeUrl = await uploadResume(form.resume, "freelancers");

      const { error: dbError } = await supabase.from("vconnect_freelancers").insert({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        category: form.category,
        skills: form.selectedSkills,
        experience: form.experience,
        portfolio: form.portfolio,
        linkedin: form.linkedin,
        github: form.github,
        availability: form.availability,
        pricing_type: form.pricingType,
        price_min: form.priceMin,
        price_max: form.priceMax,
        bio: form.bio,
        resume_name: resumeName,
        resume_url: resumeUrl,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Profile Created!</h2>
          <p className="text-gray-500 mb-2 leading-relaxed">
            Welcome, <strong>{form.fullName}</strong>! Your freelancer profile is now live.
          </p>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Vignova will match you with relevant client projects and notify you at <strong>{form.email}</strong>.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/vconnect/freelancer-connect/freelancer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Submit Another Profile
            </Link>
            <Link href="/vconnect"
              className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
              Back to VConnect
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f8fafc]">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0a1330] to-[#1B2A6B] pt-32 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <Link href="/vconnect" className="inline-flex items-center gap-2 text-blue-300 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft size={15} /> Back to VConnect
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Wrench size={18} className="text-blue-300" />
              </div>
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Freelancer Connect · Freelancer Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Build Your Freelancer Profile</h1>
            <p className="text-gray-400 text-sm leading-relaxed">Showcase your skills and let Vignova connect you with the right clients.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Personal Info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <User size={15} className="text-blue-500" />
                </div>
                <h2 className="font-bold text-gray-900">Personal Info</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name *", key: "fullName", placeholder: "Your name", required: true },
                  { label: "Email *", key: "email", placeholder: "you@email.com", required: true, type: "email" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                ].map(({ label, key, placeholder, required, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input required={required} type={type || "text"} value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                      placeholder={placeholder} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
                  <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                    <option value="">Select your category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">About You *</label>
                <textarea required value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} rows={3}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition resize-none bg-gray-50/50"
                  placeholder="What you do, your specialties, and what kind of projects you enjoy..." />
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Wrench size={15} className="text-purple-500" />
                </div>
                <h2 className="font-bold text-gray-900">Skills *</h2>
              </div>
              <p className="text-xs text-gray-400 mb-3">Tap to select your skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <button key={s} type="button" onClick={() => toggleSkill(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.selectedSkills.includes(s)
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 bg-gray-50"
                      }`}>
                    {s}
                  </button>
                ))}
              </div>
              {form.selectedSkills.length > 0 && (
                <p className="text-xs text-blue-600 mt-3 font-medium">{form.selectedSkills.length} skill(s) selected</p>
              )}
            </div>

            {/* Experience & Pricing */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <DollarSign size={15} className="text-green-500" />
                </div>
                <h2 className="font-bold text-gray-900">Experience & Pricing</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Experience</label>
                  <select value={form.experience} onChange={e => setForm(f => ({ ...f, experience: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                    <option value="">Select</option>
                    {["Fresher", "0–1 year", "1–3 years", "3–5 years", "5+ years"].map(e => <option key={e}>{e}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Availability</label>
                  <select value={form.availability} onChange={e => setForm(f => ({ ...f, availability: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                    <option value="">Select</option>
                    {["Full time", "Part time", "Weekends only", "Available from next month"].map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Pricing Type</label>
                  <select value={form.pricingType} onChange={e => setForm(f => ({ ...f, pricingType: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                    <option value="">Select</option>
                    <option>Per hour</option>
                    <option>Per project</option>
                    <option>Per month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Rate Range (₹)</label>
                  <div className="flex gap-2">
                    <input value={form.priceMin} onChange={e => setForm(f => ({ ...f, priceMin: e.target.value }))}
                      placeholder="Min" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50" />
                    <input value={form.priceMax} onChange={e => setForm(f => ({ ...f, priceMax: e.target.value }))}
                      placeholder="Max" className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio & Links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <Link2 size={15} className="text-indigo-500" />
                </div>
                <h2 className="font-bold text-gray-900">Portfolio & Links</h2>
              </div>
              <div className="space-y-4">
                {[
                  { label: "LinkedIn", key: "linkedin", placeholder: "https://linkedin.com/in/yourprofile" },
                  { label: "GitHub", key: "github", placeholder: "https://github.com/yourhandle" },
                  { label: "Portfolio Website", key: "portfolio", placeholder: "https://yourportfolio.com" },
                ].map(({ label, key, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input value={(form as any)[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                      placeholder={placeholder} />
                  </div>
                ))}

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume (optional)</label>
                  <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all">
                    <input type="file" accept=".pdf,.doc,.docx"
                      onChange={e => { const f = e.target.files?.[0]; if (f) { setForm(x => ({ ...x, resume: f })); setResumeName(f.name); } }}
                      className="hidden" />
                    {resumeName ? (
                      <div className="text-center">
                        <CheckCircle size={20} className="text-green-500 mx-auto mb-1" />
                        <p className="text-sm text-gray-700 font-medium">{resumeName}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Click to change</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload size={20} className="text-gray-300 mx-auto mb-1" />
                        <p className="text-sm text-gray-500">Upload Resume</p>
                        <p className="text-xs text-gray-400">PDF / DOC accepted</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#1B2A6B] text-white font-semibold rounded-xl hover:bg-[#162258] transition-colors shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Create My Profile →"}
            </button>
            <p className="text-xs text-gray-400 text-center">Vignova will match you with relevant client projects.</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}