// src/app/products/page.tsx
// ─────────────────────────────────────────────
// Products page — just composes section components.
// ─────────────────────────────────────────────

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ProductsGrid from "@/components/products/ProductsGrid";
import CtaBanner from "@/components/shared/CtaBanner";

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="Our Product Ecosystem"
        title="Products Built to Empower"
        subtitle="Innovative products designed to simplify life and empower businesses — from personal finance to enterprise automation."
      />
      <ProductsGrid />
      <CtaBanner
        heading="Have a product idea?"
        subtext="We partner with businesses to turn ideas into production-grade software products."
        primaryLabel="Let's Build Together"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
      <Footer />
    </div>
  );
}
