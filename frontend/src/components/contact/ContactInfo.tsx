// src/components/contact/ContactInfo.tsx
// ─────────────────────────────────────────────────
// Email, phone, address tiles on the Contact page.
// To update contact details: src/constants/contact.ts
// ─────────────────────────────────────────────────

import { contactDetails } from "@/constants/contact";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-1">
      <h2 className="font-serif font-bold text-xl text-[#1B2A6B] mb-6">Let&apos;s Talk</h2>
      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Whether you&apos;re looking to build a product, transform your technology infrastructure,
        or explore a partnership — we are ready to help.
      </p>
      <div className="flex flex-col gap-5">
        {contactDetails.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4 items-start">
            <div className="w-9 h-9 rounded bg-[#eef2ff] flex items-center justify-center shrink-0 mt-0.5">
              <Icon size={15} className="text-[#1B2A6B]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-sm text-[#1B2A6B] font-medium whitespace-pre-line">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
