// src/components/about/OurStory.tsx
// ─────────────────────────────────────────────
// Centered text block telling the company story.
// ─────────────────────────────────────────────

export default function OurStory() {
  return (
    <section className="py-16 bg-[#f8faff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A6B] mb-6">How Vignova Began</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          Vignova was founded with a simple but powerful belief: great software should be accessible to
          everyone — not just large corporations with massive IT budgets. We started by building tools for
          small businesses and individuals to manage their finances, work, and health more effectively.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed">
          As we grew, so did our ambition. Today, Vignova Technologies builds enterprise-grade products,
          offers custom development services, and partners with organizations across industries to drive
          meaningful digital transformation. We remain committed to our founding principle: technology
          that works for people.
        </p>
      </div>
    </section>
  );
}
