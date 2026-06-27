"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Building2, Briefcase, DollarSign } from "lucide-react";

export default function CompanyPortalPage() {
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    industry: "",
    position: "",
    roleType: "",
    skills: "",
    salaryMin: "",
    salaryMax: "",
    location: "",
    remote: "",
    description: "",
    requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase
        .from("vconnect_job_posts")
        .insert({
          company_name: form.companyName,
          contact_name: form.contactName,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          position: form.position,
          role_type: form.roleType,
          skills: form.skills,
          salary_min: form.salaryMin,
          salary_max: form.salaryMax,
          location: form.location,
          remote: form.remote,
          description: form.description,
          requirements: form.requirements,
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

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 pt-24">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Job Posted!</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your requirement for <strong>{form.position}</strong> at <strong>{form.companyName}</strong> has been submitted.
              Vignova will review and share matching candidate profiles to <strong>{form.email}</strong>.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/vconnect/talent-hire/company" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Post Another Role
              </Link>
              <Link href="/vconnect" className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Back to VConnect
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="bg-gradient-to-r from-[#0a1330] to-[#1B2A6B] pt-32 pb-12 px-6">
          <div className="max-w-2xl mx-auto">
            <Link href="/vconnect" className="inline-flex items-center gap-2 text-blue-300 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft size={15} /> Back to VConnect
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Building2 size={18} className="text-purple-300" />
              </div>
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Talent Hire · Company Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Post a Job or Internship</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tell us what you're looking for. Vignova will match suitable candidates from our talent pool.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Building2 size={16} className="text-blue-500" />
                <h2 className="font-bold text-gray-900">Company Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Company Name *", key: "companyName", placeholder: "Your company name", required: true },
                  { label: "Contact Person *", key: "contactName", placeholder: "Your name", required: true },
                  { label: "Email Address *", key: "email", placeholder: "hr@company.com", required: true, type: "email" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                ].map(({ label, key, placeholder, required, type }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input
                      required={required} type={type || "text"}
                      value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry</label>
                  <select value={form.industry} onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition bg-white">
                    <option value="">Select industry</option>
                    {["IT / Software", "Finance / FinTech", "Healthcare", "E-commerce", "EdTech", "Startup", "Manufacturing", "Other"].map(i => <option key={i}>{i}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-purple-500" />
                <h2 className="font-bold text-gray-900">Role Details</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Position Title *</label>
                  <input required value={form.position} onChange={e => setForm(f => ({ ...f, position: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. React Developer" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Role Type *</label>
                  <select required value={form.roleType} onChange={e => setForm(f => ({ ...f, roleType: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition bg-white">
                    <option value="">Select type</option>
                    <option>Internship</option>
                    <option>Full Time</option>
                    <option>Contract</option>
                    <option>Part Time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                  <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. Vijayawada, AP" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Mode</label>
                  <select value={form.remote} onChange={e => setForm(f => ({ ...f, remote: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition bg-white">
                    <option value="">Select</option>
                    <option>On-site</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Required Skills *</label>
                <input required value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                  placeholder="e.g. React, TypeScript, Node.js, REST APIs" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Description *</label>
                <textarea required value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition resize-none"
                  placeholder="Describe the role, responsibilities, and what the candidate will work on..." />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign size={16} className="text-green-500" />
                <h2 className="font-bold text-gray-900">Salary / Stipend Range</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Minimum (₹ / month)</label>
                  <input value={form.salaryMin} onChange={e => setForm(f => ({ ...f, salaryMin: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. 5000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Maximum (₹ / month)</label>
                  <input value={form.salaryMax} onChange={e => setForm(f => ({ ...f, salaryMax: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. 15000" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#1B2A6B] text-white font-semibold rounded-xl hover:bg-[#162258] transition-colors shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Post This Role →"}
            </button>
            <p className="text-xs text-gray-400 text-center">Vignova will review your posting and share matching candidate profiles with you.</p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}