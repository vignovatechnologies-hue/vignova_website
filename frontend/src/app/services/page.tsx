// src/app/services/page.tsx
// ─────────────────────────────────────────────
// Services page — just composes section components.
// ─────────────────────────────────────────────

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ServicesList from "@/components/services/ServicesList";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="From strategy to execution, we provide end-to-end technology services that help businesses build, scale, and transform."
      />
      <ServicesList />
      <IndustriesGrid />
      <CtaBanner
        heading="Ready to start a project?"
        subtext="Tell us what you're building and we'll get back to you within 24 hours."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="See Our Products"
        secondaryHref="/products"
      />
      <Footer />
    </div>
  );
}
