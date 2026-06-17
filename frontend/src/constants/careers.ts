// src/constants/careers.ts
// ─────────────────────────────────────────────
// Add or remove job openings and perks here.
// ─────────────────────────────────────────────

import { Globe, Lightbulb, Heart, Users, type LucideIcon } from "lucide-react";

export type JobOpening = {
  title: string;
  dept: string;
  location: string;
  type: string;
};

export type Perk = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const openings: JobOpening[] = [
  { title: "Full Stack Engineer (React + Node.js)", dept: "Engineering", location: "Remote / India", type: "Full-time" },
  { title: "Mobile App Developer (React Native)", dept: "Engineering", location: "Remote / India", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Design", location: "Remote", type: "Full-time" },
  { title: "Product Manager", dept: "Product", location: "Remote / India", type: "Full-time" },
  { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Business Development Executive", dept: "Sales", location: "India", type: "Full-time" },
];

export const perks: Perk[] = [
  { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world. We believe outcomes matter more than office hours." },
  { icon: Lightbulb, title: "Innovation Culture", desc: "We encourage bold ideas, fast experiments, and learning from failure." },
  { icon: Heart, title: "Wellbeing Support", desc: "Flexible hours, mental health days, and a team that genuinely cares about you." },
  { icon: Users, title: "Great Team", desc: "Work alongside passionate, talented people who push you to grow every day." },
];
