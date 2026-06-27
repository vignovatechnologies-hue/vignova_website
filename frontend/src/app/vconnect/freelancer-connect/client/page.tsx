"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Building2, Briefcase, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ClientPortalPage() {
  const [form, setForm] = useState({
    companyName: "", contactName: "", email: "", phone: "",
    projectTitle: "", category: "", skills: "", budget: "", timeline: "",
    description: "", deliverables: "", remote: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase.from("vconnect_client_projects").insert({
        company_name: form.companyName,
        contact_name: form.contactName,
        email: form.email,
        phone: form.phone,
        project_title: form.projectTitle,
        category: form.category,
        skills: form.skills,
        budget: form.budget,
        timeline: form.timeline,
        description: form.description,
        deliverables: form.deliverables,
        remote: form.remote,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Requirement Submitted!</h2>
          <p className="text-gray-500 mb-2 leading-relaxed">
            Your project <strong>"{form.projectTitle}"</strong> has been received.
          </p>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Vignova will identify matching freelancers and share profiles to <strong>{form.email}</strong>.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/vconnect/freelancer-connect/client"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Post Another Project
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
                <Building2 size={18} className="text-blue-300" />
              </div>
              <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Freelancer Connect · Client Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Post a Project Requirement</h1>
            <p className="text-gray-400 text-sm">Tell us what you need. We'll find the right freelancer for you.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Your Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Building2 size={15} className="text-blue-500" />
                </div>
                <h2 className="font-bold text-gray-900">Your Details</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Company / Your Name *", key: "companyName", required: true, placeholder: "Company or your name" },
                  { label: "Contact Person *", key: "contactName", required: true, placeholder: "Your name" },
                  { label: "Email *", key: "email", required: true, type: "email", placeholder: "you@company.com" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                ].map(({ label, key, required, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input required={required} type={type || "text"} value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                      placeholder={placeholder} />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Briefcase size={15} className="text-purple-500" />
                </div>
                <h2 className="font-bold text-gray-900">Project Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Title *</label>
                  <input required value={form.projectTitle} onChange={e => setForm(f => ({ ...f, projectTitle: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                    placeholder="e.g. Build an E-commerce Website" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Category *</label>
                    <select required value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                      <option value="">Select category</option>
                      {["Website Development", "App Development", "UI/UX Design", "Testing / QA", "Digital Marketing", "AI Development", "Other"].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Mode</label>
                    <select value={form.remote} onChange={e => setForm(f => ({ ...f, remote: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                      <option value="">Select</option>
                      <option>Remote</option>
                      <option>On-site</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Skills Needed *</label>
                  <input required value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                    placeholder="e.g. React, Node.js, MongoDB" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Project Description *</label>
                  <textarea required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition resize-none bg-gray-50/50"
                    placeholder="Describe what you need built, the purpose, features, and any specific requirements..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Expected Deliverables</label>
                  <textarea value={form.deliverables} onChange={e => setForm(f => ({ ...f, deliverables: e.target.value }))} rows={2}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition resize-none bg-gray-50/50"
                    placeholder="e.g. Fully working website, source code, deployment..." />
                </div>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Clock size={15} className="text-orange-500" />
                </div>
                <h2 className="font-bold text-gray-900">Budget & Timeline</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget (₹)</label>
                  <input value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50"
                    placeholder="e.g. 10,000 – 50,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                  <select value={form.timeline} onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition bg-gray-50/50">
                    <option value="">Select timeline</option>
                    {["Less than 1 week", "1–2 weeks", "1 month", "2–3 months", "Ongoing"].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 bg-[#1B2A6B] text-white font-semibold rounded-xl hover:bg-[#162258] transition-colors shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Submit Requirement →"}
            </button>
            <p className="text-xs text-gray-400 text-center">Vignova will review your requirement and share matching freelancer profiles.</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}