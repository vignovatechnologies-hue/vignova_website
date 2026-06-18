// src/components/layout/Footer.tsx
// ─────────────────────────────────────────────────────────
// Site footer — shown on every page.
// To change links: edit src/constants/navigation.ts
// To change contact info: edit src/constants/contact.ts
// ─────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { footerLinks } from "@/constants/navigation";

const socialLinks = [
  { icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/vignova-technologies/" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A6B] text-white pt-16 pb-8">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.jpeg" alt="Vignova" width={40} height={40} className="object-contain rounded" />
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-lg text-white">Vignova</span>
                <span className="text-[0.55rem] tracking-widest text-white/50 uppercase font-medium">
                  Technologies Private Limited
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Building intelligent software for people, businesses and the future.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2196F3] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">Services</h4>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-sm mb-3 text-white">Contact</h4>
            <p className="text-white/60 text-sm">vignova.official@gmail.com</p>
            <p className="text-white/60 text-sm mt-1">+91 9121519893</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            &copy; {year} Vignova Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
  href="/terms-of-use"
  className="text-white/40 hover:text-white/70 text-xs transition-colors"
>
  Terms of Use
</Link>

<Link
  href="/privacy-policy"
  className="text-white/40 hover:text-white/70 text-xs transition-colors"
>
  Privacy Policy
</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
