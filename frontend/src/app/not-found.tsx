// src/app/not-found.tsx
// Custom 404 page shown when a URL doesn't match any route.

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      <p className="text-[#2196F3] text-xs font-semibold uppercase tracking-widest mb-3">404</p>
      <h1 className="text-4xl font-serif font-bold text-[#1B2A6B] mb-4">Page Not Found</h1>
      <p className="text-gray-500 text-sm mb-8 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#1B2A6B] text-white text-sm font-semibold rounded hover:bg-[#162258] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
