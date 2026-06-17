// src/components/layout/PageHeader.tsx
// Pure CSS animations — no Framer Motion = no lag on page load.

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="w-full pt-28 pb-14 bg-gradient-to-br from-[#eef2ff] via-white to-[#e8f4fd]">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center page-enter">
        <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1B2A6B] mb-5">
          {title}
        </h1>
        <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}