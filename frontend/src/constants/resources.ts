// src/constants/resources.ts
// ─────────────────────────────────────────────
// Edit blog posts and case studies here.
// ─────────────────────────────────────────────

import { BookOpen, FileText, Video, Download, type LucideIcon } from "lucide-react";

export type BlogPost = {
  title: string;
  category: string;
  date: string;
  read: string;
};

export type CaseStudy = {
  title: string;
  industry: string;
  outcome: string;
};

export type ResourceType = {
  icon: LucideIcon;
  label: string;
  count: string;
};

export const blogPosts: BlogPost[] = [
  { title: "The Future of Enterprise Software in 2026", category: "Technology", date: "May 28, 2026", read: "5 min read" },
  { title: "How AI is Transforming Business Decision-Making", category: "AI & Data", date: "May 15, 2026", read: "7 min read" },
  { title: "Why Cloud-Native Architecture Matters for Growing Businesses", category: "Cloud", date: "May 2, 2026", read: "6 min read" },
  { title: "Building Secure Software from Day One: A Developer's Guide", category: "Security", date: "April 20, 2026", read: "8 min read" },
  { title: "Digital Transformation: Beyond the Buzzword", category: "Strategy", date: "April 8, 2026", read: "5 min read" },
  { title: "What Makes a Great SaaS Product in 2026?", category: "Product", date: "March 25, 2026", read: "6 min read" },
];

export const caseStudies: CaseStudy[] = [
  { title: "Automating Financial Reporting for a Mid-Size Enterprise", industry: "Finance", outcome: "60% reduction in reporting time" },
  { title: "Cloud Migration for a Healthcare Provider", industry: "Healthcare", outcome: "40% infrastructure cost savings" },
  { title: "AI-Powered Inventory Management for Retail", industry: "Retail", outcome: "30% decrease in stockouts" },
];

export const resourceTypes: ResourceType[] = [
  { icon: BookOpen, label: "Blog Articles", count: "20+" },
  { icon: FileText, label: "Case Studies", count: "10+" },
  { icon: Video, label: "Webinars", count: "Coming Soon" },
  { icon: Download, label: "Whitepapers", count: "Coming Soon" },
];
