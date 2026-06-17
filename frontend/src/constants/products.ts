// src/constants/products.ts
// ─────────────────────────────────────────────────────────
// Add or edit products here.
// tag: "Current" shows a blue badge; "Coming Soon" shows gray.
// ─────────────────────────────────────────────────────────

import {
  Smartphone,
  FileSpreadsheet,
  Activity,
  Briefcase,
  Bot,
  Settings2,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  icon: LucideIcon;
  tag: "Current" | "Coming Soon";
  title: string;
  desc: string;
  platforms: string[];
  features: string[];
};

export const products: Product[] = [
  {
    icon: Smartphone,
    tag: "Current",
    title: "FIM – Financial Intelligence Manager",
    desc: "A powerful platform to track expenses, manage budgets, and take control of your personal and business finances. FIM gives you real-time insights into your financial health with beautiful, intuitive dashboards.",
    platforms: ["Android", "iOS", "Web App"],
    features: [
      "Expense Tracking",
      "Budget Management",
      "Income Management",
      "Financial Reports & Analytics",
      "Business Finance Management",
    ],
  },
  {
    icon: FileSpreadsheet,
    tag: "Coming Soon",
    title: "Vignova Sheets",
    desc: "Smart, cloud-based spreadsheets for modern teams. Collaborate in real time, automate repetitive tasks, and connect your data across all your business tools — without leaving the spreadsheet.",
    platforms: ["Web App"],
    features: [
      "Real-time Collaboration",
      "Formula Engine",
      "Data Connectors",
      "Automation Rules",
      "Version History",
    ],
  },
  {
    icon: Activity,
    tag: "Coming Soon",
    title: "Health Report Tracking Platform",
    desc: "Track, manage, and store health reports securely. A personal health management system for individuals and families to monitor medical history, lab reports, and doctor visits over time.",
    platforms: ["Android", "iOS", "Web App"],
    features: [
      "Report Storage & OCR",
      "Health Timeline",
      "Family Health Management",
      "Doctor Appointment Tracking",
      "Reminder System",
    ],
  },
  {
    icon: Briefcase,
    tag: "Coming Soon",
    title: "Project Management Platform",
    desc: "Task, team, and productivity management made simple. A clean, fast project management tool for teams of all sizes — with kanban boards, timelines, and smart workload views built in.",
    platforms: ["Web App", "Mobile"],
    features: [
      "Kanban & List Views",
      "Timeline / Gantt",
      "Team Workload",
      "Time Tracking",
      "Integrations",
    ],
  },
  {
    icon: Bot,
    tag: "Coming Soon",
    title: "AI Business Assistant",
    desc: "AI-powered insights and automation for smarter decisions. An intelligent assistant that reads your business data and surfaces actionable recommendations, automates reporting, and answers business questions instantly.",
    platforms: ["Web App"],
    features: [
      "Natural Language Queries",
      "Automated Reports",
      "Predictive Insights",
      "Data Source Integrations",
      "Custom AI Workflows",
    ],
  },
  {
    icon: Settings2,
    tag: "Coming Soon",
    title: "SaaS Automation Suite",
    desc: "Automate workflows and streamline business processes. A no-code/low-code automation platform that connects your apps, triggers actions, and eliminates manual work across your entire organization.",
    platforms: ["Web App"],
    features: [
      "Visual Workflow Builder",
      "100+ Integrations",
      "Scheduled Triggers",
      "Error Handling",
      "Audit Logs",
    ],
  },
];
