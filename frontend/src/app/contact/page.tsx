// src/app/contact/page.tsx
// ─────────────────────────────────────────────
// Contact page — just composes section components.
// ─────────────────────────────────────────────

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      <Navbar />
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Have a project in mind, a question about our products, or just want to say hello? We'd love to hear from you."
      />
      <section className="py-16 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
