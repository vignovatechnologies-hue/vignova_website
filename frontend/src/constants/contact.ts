// src/constants/contact.ts
// ─────────────────────────────────────────────
// Update company contact details here.
// ─────────────────────────────────────────────

import { Mail, Phone, MapPin, Clock, type LucideIcon } from "lucide-react";

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const contactDetails: ContactDetail[] = [
  { icon: Mail,   label: "Email",         value: "vignova.official@gmail.com" },
  { icon: Phone,  label: "Phone",         value: "+91 9121519893" },
  { icon: MapPin, label: "Office",        value: "Hyderabad, India" },
  { icon: Clock,  label: "Response Time", value: "Within 24 hours on business days" },
];

// Dropdown options in the contact form
export const contactSubjects = [
  "Software Development",
  "Cloud Solutions",
  "AI & Data",
  "Cybersecurity",
  "Digital Transformation",
  "Product Inquiry (FIM)",
  "Partnership",
  "Careers",
  "Other",
];
