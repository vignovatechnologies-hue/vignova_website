"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Bot, DollarSign } from "lucide-react";
import { supabase } from "@/lib/supabase";

const productTypes = ["AI Chatbot", "AI Agent", "Automation Workflow", "CRM Integration", "Lead Generation Tool", "WhatsApp Bot", "Data Dashboard", "Template", "Other"];

export default function AICreatorPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", productName: "", productType: "",
    description: "", features: "", demoLink: "", pricingModel: "", price: "",
    industries: "", techStack: "", portfolio: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { error: dbError } = await supabase.from("vconnect_ai_creators").insert({
        full_name: form.fullName,
        email: form.email,
        phone: form.phone,
        product_name: form.productName,
        product_type: form.productType,
        description: form.description,
        features: form.features,
        demo_link: form.demoLink,
        pricing_model: form.pricingModel,
        price: form.price,
        industries: form.industries,
        tech_stack: form.techStack,
        portfolio: form.portfolio,
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Product Listed!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            <strong>"{form.productName}"</strong> has been submitted to the AI Marketplace. Vignova will connect you with buyers who match your solution.
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
              <span className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">AI Marketplace · Creator Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">List Your AI Product</h1>
            <p className="text-gray-400 text-sm">Showcase your AI tools, agents, or automation workflows to businesses looking for solutions.</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Creator Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h2 className="font-bold text-gray-900 mb-6">Creator Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name *", key: "fullName", required: true, placeholder: "Your name" },
                  { label: "Email *", key: "email", required: true, type: "email", placeholder: "you@email.com" },
                  { label: "Phone", key: "phone", placeholder: "+91 9XXXXXXXXX" },
                  { label: "Portfolio / Website", key: "portfolio", placeholder: "https://yourwebsite.com" },
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
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Bot size={16} className="text-cyan-500" />
                <h2 className="font-bold text-gray-900">Product Details</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Name *</label>
                  <input
                    required
                    value={form.productName}
                    onChange={e => setForm(f => ({ ...f, productName: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="e.g. LeadFlow AI Agent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Type *</label>
                  <div className="flex flex-wrap gap-2">
                    {productTypes.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, productType: t }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${form.productType === t
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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Description *</label>
                  <textarea
                    required
                    value={form.description}
                    onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition resize-none"
                    placeholder="What does your product do? Who is it for?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Key Features</label>
                  <textarea
                    value={form.features}
                    onChange={e => setForm(f => ({ ...f, features: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition resize-none"
                    placeholder="List 3–5 key features or capabilities..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Industries / Use Cases</label>
                  <input
                    value={form.industries}
                    onChange={e => setForm(f => ({ ...f, industries: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="e.g. E-commerce, Healthcare, Real Estate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tech Stack / Built With</label>
                  <input
                    value={form.techStack}
                    onChange={e => setForm(f => ({ ...f, techStack: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="e.g. n8n, Make.com, Python, OpenAI API"
                  />
                </div>
              </div>
            </div>

            {/* Pricing & Demo */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <DollarSign size={16} className="text-green-500" />
                <h2 className="font-bold text-gray-900">Pricing & Demo</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Pricing Model</label>
                  <select
                    value={form.pricingModel}
                    onChange={e => setForm(f => ({ ...f, pricingModel: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition bg-white"
                  >
                    <option value="">Select</option>
                    <option>One-time</option>
                    <option>Monthly subscription</option>
                    <option>Per use / API calls</option>
                    <option>Custom / Contact me</option>
                    <option>Free</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Price (₹)</label>
                  <input
                    value={form.price}
                    onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="e.g. 2,999 / month"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Demo Link</label>
                  <input
                    value={form.demoLink}
                    onChange={e => setForm(f => ({ ...f, demoLink: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition"
                    placeholder="https://demo.yourtool.com"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#0d3a4a] text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "List My Product →"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}