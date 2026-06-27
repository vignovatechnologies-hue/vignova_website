"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Bot, Building2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

const aiNeedTypes = ["Chatbot", "AI Agent", "Automation Workflow", "CRM Automation", "Lead Generation Agent", "Customer Support Bot", "Invoice Automation", "Recruitment AI", "Data Extraction", "Other"];
const industries = ["E-commerce", "Healthcare", "Real Estate", "Finance / FinTech", "EdTech", "HR / Recruitment", "SaaS", "Retail", "Manufacturing", "Other"];

export default function AIBuyerPage() {
  const [form, setForm] = useState({
    companyName: "", contactName: "", email: "", phone: "", industry: "",
    needType: "", useCase: "", budget: "", timeline: "", existingTools: "", additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase.from("vconnect_ai_buyers").insert({
        company_name: form.companyName,
        contact_name: form.contactName,
        email: form.email,
        phone: form.phone,
        industry: form.industry,
        need_type: form.needType,
        use_case: form.useCase,
        budget: form.budget,
        timeline: form.timeline,
        existing_tools: form.existingTools,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Requirement Submitted!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Your AI requirement has been received. Vignova will find matching AI tools and creators and share them to <strong>{form.email}</strong>.
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
        <div className="bg-gradient-to-r from-[#0a1330] to-[#0d3a4a] py-12 px-6">
          <div className="max-w-2xl mx-auto">
            <Link href="/vconnect" className="inline-flex items-center gap-2 text-cyan-300 text-sm mb-6 hover:text-white transition-colors">
              <ArrowLeft size={15} /> Back to VConnect
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Bot size={18} className="text-cyan-300" />
              </div>
              <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">AI Marketplace · Buyer Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Describe Your AI Need</h1>
            <p className="text-gray-400 text-sm">Tell us what automation or AI solution you need. We'll match you with the right creator or ready-made tool.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Your Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Building2 size={16} className="text-cyan-500" />
                <h2 className="font-bold text-gray-900">Your Details</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Company Name *", key: "companyName", required: true, placeholder: "Your company" },
                  { label: "Contact Person *", key: "contactName", required: true, placeholder: "Your name" },
                  { label: "Email *", key: "email", required: true, type: "email", placeholder: "you@company.com" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                ].map(({ label, key, required, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
                    <input
                      required={required}
                      type={type || "text"}
                      value={(form as any)[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Industry</label>
                  <select
                    value={form.industry}
                    onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition bg-white"
                  >
                    <option value="">Select your industry</option>
                    {industries.map(i => <option key={i}>{i}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* AI Requirement */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Bot size={16} className="text-cyan-500" />
                <h2 className="font-bold text-gray-900">AI Requirement</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What kind of AI solution do you need? *</label>
                  <div className="flex flex-wrap gap-2">
                    {aiNeedTypes.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, needType: t }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.needType === t
                            ? "bg-cyan-600 text-white border-cyan-600"
                            : "border-gray-200 text-gray-600 hover:border-cyan-400 hover:text-cyan-600"
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Describe Your Use Case *</label>
                  <textarea
                    required
                    value={form.useCase}
                    onChange={e => setForm(f => ({ ...f, useCase: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition resize-none"
                    placeholder="e.g. I need a WhatsApp chatbot that answers customer queries about our products and books appointments..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Existing Tools / Platforms</label>
                  <input
                    value={form.existingTools}
                    onChange={e => setForm(f => ({ ...f, existingTools: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="e.g. WhatsApp Business, Zoho CRM, Google Sheets..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Info</label>
                  <textarea
                    value={form.additionalInfo}
                    onChange={e => setForm(f => ({ ...f, additionalInfo: e.target.value }))}
                    rows={2}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition resize-none"
                    placeholder="Any other details..."
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget (₹)</label>
                    <input
                      value={form.budget}
                      onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                      placeholder="e.g. 5,000 – 25,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition bg-white"
                    >
                      <option value="">Select</option>
                      {["ASAP", "Within 2 weeks", "Within 1 month", "Flexible"].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#0d3a4a] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit AI Requirement →"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}