// src/components/shared/CtaBanner.tsx
// ─────────────────────────────────────────────────────────
// Dark blue call-to-action strip used at the bottom of pages.
// All props have sensible defaults so you can drop it in with
// zero configuration, or customise per-page.
// ─────────────────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaBannerProps = {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBanner({
  heading = "Let's build the future together.",
  subtext = "Partner with Vignova Technologies to turn your ideas into powerful digital solutions.",
  primaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryLabel = "Explore Our Products",
  secondaryHref = "/products",
}: CtaBannerProps) {
  return (
    <section className="py-14 bg-[#1B2A6B]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">{heading}</h2>
          <p className="text-white/60 text-sm">{subtext}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Link
            href={primaryHref}
            className="px-6 py-3 bg-white text-[#1B2A6B] text-sm font-bold rounded hover:bg-gray-100 transition-colors"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-bold rounded hover:bg-white/10 transition-colors"
          >
            {secondaryLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
