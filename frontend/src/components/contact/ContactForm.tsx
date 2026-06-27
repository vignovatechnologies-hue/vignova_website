"use client";

// src/components/contact/ContactForm.tsx

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { contactSubjects } from "@/constants/contact";

// Validation schema
const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().min(20, "Message must be at least 20 characters."),
});

type FormData = z.infer<typeof schema>;

// Reusable field wrapper
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded focus:outline-none focus:border-[#2196F3] transition-colors";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // put this in .env.local
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,

          subject: "New Contact Form Submission",
          from_name: "Vignova Website",

          name: data.name,
          email: data.email,
          company: data.company,
          inquiry_type: data.subject,
          message: data.message,
        }),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lg:col-span-2 bg-[#f8faff] rounded-xl border border-gray-100 p-8">
      <h2 className="font-serif font-bold text-xl text-[#1B2A6B] mb-6">
        Send Us a Message
      </h2>

      {/* Success message */}
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 font-medium">
          ✓ Message sent! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Full Name *" error={errors.name?.message}>
            <input
              {...register("name")}
              placeholder="John Smith"
              className={inputClass}
            />
          </Field>

          <Field label="Email Address *" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className={inputClass}
            />
          </Field>
        </div>

        {/* Company + Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Company" error={errors.company?.message}>
            <input
              {...register("company")}
              placeholder="Acme Corp (optional)"
              className={inputClass}
            />
          </Field>

          <Field label="Subject *" error={errors.subject?.message}>
            <select {...register("subject")} className={inputClass}>
              <option value="">Select a topic</option>
              {contactSubjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Message */}
        <Field label="Message *" error={errors.message?.message}>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us about your project or question..."
            className={`${inputClass} resize-none`}
          />
        </Field>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1B2A6B] text-white text-sm font-bold rounded hover:bg-[#162258] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
            <ArrowRight size={15} />
          </button>
        </div>
      </form>
    </div>
  );
}