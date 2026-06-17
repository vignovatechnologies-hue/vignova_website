// src/constants/services.ts
// ─────────────────────────────────────────────────────────
// Add, remove, or edit services here.
// The icon must be a valid lucide-react component name.
// ─────────────────────────────────────────────────────────

import {
  Code2,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Zap,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Custom Software Development",
    tagline: "Built for your exact needs.",
    desc: "We design and build bespoke software solutions — from web applications and mobile apps to complex enterprise platforms. Every line of code is crafted for performance, reliability, and longevity.",
    features: [
      "Web Application Development",
      "Mobile App Development (iOS & Android)",
      "API Design & Development",
      "Legacy System Modernization",
      "SaaS Product Engineering",
    ],
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    tagline: "Modernize. Optimize. Lead.",
    desc: "We partner with organizations to reimagine their operations through technology. From process automation to cultural change management, we deliver end-to-end transformation programs.",
    features: [
      "Business Process Automation",
      "Digital Strategy & Roadmap",
      "Legacy Modernization",
      "Change Management",
      "Technology Adoption Programs",
    ],
  },
  {
    icon: Layers,
    title: "Enterprise Integration",
    tagline: "Connect everything, seamlessly.",
    desc: "Modern enterprises run on dozens of systems. We build integration layers that ensure your tools, platforms, and data sources work together as one cohesive ecosystem.",
    features: [
      "API Gateway & Management",
      "ERP & CRM Integration",
      "Data Synchronization",
      "Middleware Development",
      "Third-Party Integrations",
    ],
  },
];

export const industries = [
  "Finance & Banking",
  "Healthcare",
  "Manufacturing",
  "Retail & E-commerce",
  "Government & Public Sector",
  "Education",
  "Logistics & Supply Chain",
  "Real Estate",
];
