// src/components/services/IndustriesGrid.tsx
// ─────────────────────────────────────────────────────────
// Pill cloud of industries Vignova serves.
// To add an industry: edit the `industries` array in
// src/constants/services.ts
// ─────────────────────────────────────────────────────────

import { industries } from "@/constants/services";

export default function IndustriesGrid() {
  return (
    <section className="py-14 bg-[#f8faff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-2">
          Industries We Serve
        </p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B] mb-8">
          Built for Your Industry
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind) => (
            <span
              key={ind}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#1B2A6B] font-medium"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
