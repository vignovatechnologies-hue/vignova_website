// src/constants/about.ts
// ─────────────────────────────────────────────
// Edit company values and team members here.
// ─────────────────────────────────────────────

import { Heart, Award, Eye, Globe, Target, Users, type LucideIcon } from "lucide-react";

export type Value = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type TeamMember = {
  name: string;
  desc: string;
};

export const values: Value[] = [
  { icon: Heart,  title: "Customer First",         desc: "Every product decision starts with the question: does this genuinely help our user? We design with empathy and build with purpose." },
  { icon: Award,  title: "Engineering Excellence", desc: "We hold ourselves to the highest standards of code quality, architecture, and delivery. Good enough is never enough." },
  { icon: Eye,    title: "Transparency",           desc: "We communicate openly with our clients and team. No surprises, no hidden agendas — just honest collaboration." },
  { icon: Globe,  title: "Global Mindset",         desc: "We build for users everywhere. Our products are designed to scale across geographies, cultures, and industries." },
  { icon: Target, title: "Outcome Focused",        desc: "We measure success by the impact we deliver, not the lines of code we write. Your business goals are our goals." },
  { icon: Users,  title: "Team & Inclusion",       desc: "We believe diverse perspectives create stronger products. We foster an environment where everyone can do their best work." },
];

export const team: TeamMember[] = [
  { name: "Founder & CEO",        desc: "Visionary leader with a background in enterprise software and digital transformation." },
  { name: "Chief Technology Officer", desc: "Architect of Vignova's core platform, with expertise in cloud-native and AI systems." },
  { name: "Head of Product",      desc: "Combines deep user empathy with sharp product intuition to ship outcomes that matter." },
  { name: "Head of Engineering",  desc: "Leads our engineering teams with a relentless focus on quality, scalability, and delivery speed." },
];
