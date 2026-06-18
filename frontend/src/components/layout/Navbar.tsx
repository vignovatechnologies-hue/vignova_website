"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/constants/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" prefetch={true} className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Vignova Logo"
            width={40}
            height={40}
            priority
            className="object-contain rounded"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-lg text-[#1B2A6B]">Vignova</span>
            <span className="text-[0.55rem] tracking-widest text-gray-400 uppercase font-medium">
              Technologies Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname.startsWith(link.href) && link.href !== "/"
                    ? "text-[#1B2A6B]"
                    : "text-gray-600 hover:text-[#1B2A6B]"
                }`}>
                  {link.name} <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.1 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 shadow-lg rounded py-2 z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          prefetch={true}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#1B2A6B] hover:bg-gray-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                prefetch={true}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors relative ${
                  pathname === link.href ? "text-[#1B2A6B]" : "text-gray-600 hover:text-[#1B2A6B]"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2196F3] rounded-full" />
                )}
              </Link>
            )
          )}
          <Link
            href="/contact"
            prefetch={true}
            className="ml-3 px-5 py-2 text-sm font-semibold bg-[#1B2A6B] text-white rounded hover:bg-[#162258] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden w-full"
          >
            <div className="w-full max-w-full mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`py-3 text-base font-medium border-b border-gray-50 ${
                    pathname === link.href ? "text-[#1B2A6B]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                prefetch={true}
                className="mt-3 py-3 text-center font-semibold bg-[#1B2A6B] text-white rounded"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}