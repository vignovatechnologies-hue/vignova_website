"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, CheckCircle, Upload, User, BookOpen, Link2, Briefcase } from "lucide-react";
import { supabase, uploadResume } from "@/lib/supabase";

const skillOptions = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Java", "C++",
  "UI/UX Design", "Figma", "Data Analysis", "Machine Learning", "AI/ML", "DevOps",
  "AWS", "Docker", "SQL", "MongoDB", "Flutter", "Mobile Development", "Testing/QA",
  "Digital Marketing", "Content Writing", "Project Management",
];

export default function StudentPortalPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", education: "", institution: "",
    yearOfStudy: "", skills: [] as string[], experience: "", portfolio: "",
    linkedin: "", github: "", lookingFor: "", bio: "", resume: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skillSearch, setSkillSearch] = useState("");
  const [resumeName, setResumeName] = useState("");

  const filteredSkills = skillOptions.filter(
    (s) => s.toLowerCase().includes(skillSearch.toLowerCase()) && !form.skills.includes(s)
  );

  function toggleSkill(skill: string) {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter((s) => s !== skill)
        : [...f.skills, skill],
    }));
  }

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setForm((f) => ({ ...f, resume: file }));
      setResumeName(file.name);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let resumeUrl: string | null = null;
      if (form.resume) {
        resumeUrl = await uploadResume(form.resume, "candidates");
      }
      const { error: dbError } = await supabase
        .from("vconnect_candidates")
        .insert({
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          education: form.education,
          institution: form.institution,
          year_of_study: form.yearOfStudy,
          skills: form.skills,
          experience: form.experience,
          portfolio: form.portfolio,
          linkedin: form.linkedin,
          github: form.github,
          looking_for: form.lookingFor,
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

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 pt-24">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Profile Submitted!</h2>
            <p className="text-gray-500 mb-2 leading-relaxed">
              Thank you, <strong>{form.fullName}</strong>. Your candidate profile has been received.
            </p>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Vignova will review your profile and reach out when a suitable opportunity is found.
              Keep an eye on your email at <strong>{form.email}</strong>.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/vconnect/talent-hire/student"
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
                <User size={18} className="text-purple-300" />
              </div>
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">Talent Hire · Student Portal</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-white mb-2">Create Your Candidate Profile</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Fill in your details below. Vignova will match your profile to relevant internships, jobs, and contract roles.
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
                <User size={16} className="text-blue-500" />
                <h2 className="font-bold text-gray-900">Personal Information</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input required value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="+91 9XXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Looking For *</label>
                  <select required value={form.lookingFor} onChange={e => setForm(f => ({ ...f, lookingFor: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition bg-white appearance-none">
                    <option value="">Select opportunity type</option>
                    <option>Internship</option>
                    <option>Full Time Job</option>
                    <option>Contract / Freelance</option>
                    <option>Any Opportunity</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">About You</label>
                <textarea value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition resize-none"
                  placeholder="Brief intro about yourself, your interests, and career goals..." />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={16} className="text-purple-500" />
                <h2 className="font-bold text-gray-900">Education</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Degree / Course *</label>
                  <input required value={form.education} onChange={e => setForm(f => ({ ...f, education: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. B.Tech Computer Science" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Institution *</label>
                  <input required value={form.institution} onChange={e => setForm(f => ({ ...f, institution: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="College or University name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Year of Study / Graduation</label>
                  <input value={form.yearOfStudy} onChange={e => setForm(f => ({ ...f, yearOfStudy: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="e.g. 3rd Year / 2025" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Experience</label>
                  <select value={form.experience} onChange={e => setForm(f => ({ ...f, experience: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition bg-white">
                    <option value="">Select</option>
                    <option>Fresher (0 years)</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>2–5 years</option>
                    <option>5+ years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={16} className="text-blue-500" />
                <h2 className="font-bold text-gray-900">Skills *</h2>
              </div>
              <input value={skillSearch} onChange={e => setSkillSearch(e.target.value)}
                placeholder="Search and select skills..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition mb-3" />
              {form.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {form.skills.map(s => (
                    <button key={s} type="button" onClick={() => toggleSkill(s)}
                      className="flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors">
                      {s} ×
                    </button>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {(skillSearch ? filteredSkills.slice(0, 8) : skillOptions.filter(s => !form.skills.includes(s)).slice(0, 12)).map(s => (
                  <button key={s} type="button" onClick={() => { toggleSkill(s); setSkillSearch(""); }}
                    className="px-3 py-1 border border-gray-200 text-gray-600 text-xs font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors">
                    + {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-6">
                <Link2 size={16} className="text-blue-500" />
                <h2 className="font-bold text-gray-900">Portfolio & Links</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">LinkedIn URL</label>
                  <input value={form.linkedin} onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="https://linkedin.com/in/yourprofile" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">GitHub / Portfolio URL</label>
                  <input value={form.github} onChange={e => setForm(f => ({ ...f, github: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="https://github.com/yourhandle" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Portfolio Website</label>
                  <input value={form.portfolio} onChange={e => setForm(f => ({ ...f, portfolio: e.target.value }))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                    placeholder="https://yourportfolio.com" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <div className="flex items-center gap-2 mb-4">
                <Upload size={16} className="text-blue-500" />
                <h2 className="font-bold text-gray-900">Resume</h2>
              </div>
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} className="hidden" />
                {resumeName ? (
                  <div className="text-center">
                    <CheckCircle size={24} className="text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-700 font-medium">{resumeName}</p>
                    <p className="text-xs text-gray-400 mt-1">Click to change</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload size={24} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Click to upload your resume</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX accepted</p>
                  </div>
                )}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#1B2A6B] text-white font-semibold rounded-xl hover:bg-[#162258] transition-colors shadow-lg hover:shadow-xl text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit My Profile →"}
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              By submitting, you agree that Vignova may share your profile with relevant companies. Your data is stored securely.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}