// src/constants/navigation.ts
// ─────────────────────────────────────────────
// Edit this file to change navigation links.
// Add a `children` array to create a dropdown.
// ─────────────────────────────────────────────

export type NavChild = {
  name: string;
  href: string;
};

export type NavLink = {
  name: string;
  href: string;
  children?: NavChild[];
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "VConnect", href: "/vconnect" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "FIM – Financial Intelligence Manager", href: "/products" },
      { name: "Vignova Sheets", href: "/products" },
      { name: "Health Report Tracking", href: "/products" },
      { name: "All Products", href: "/products" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  {
    name: "Resources",
    href: "/resources",
    children: [
      { name: "Blog", href: "/resources" },
      { name: "Case Studies", href: "/resources" },
      { name: "Documentation", href: "/resources" },
    ],
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Values", href: "/about#our-values" },
    { label: "Careers", href: "/careers" },
    { label: "News & Updates", href: "/resources" },
  ],
  products: [
    { label: "FIM", href: "/products" },
    { label: "Vignova Sheets", href: "/products" },
    { label: "Health Platform", href: "/products" },
    { label: "Project Management", href: "/products" },
    { label: "All Products", href: "/products" },
  ],
  services: [
    { label: "Custom Development", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
    { label: "AI Solutions", href: "/services" },
    { label: "Consulting", href: "/services" },
  ],
};
