# Vignova Technologies — Website (Next.js)

A clean, well-structured company website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Quick Start (Run in 3 commands)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/                  ← One folder per page (Next.js routing)
│   ├── page.tsx          ← Home  →  localhost:3000/
│   ├── about/page.tsx    ← About →  localhost:3000/about
│   ├── services/page.tsx
│   ├── products/page.tsx
│   ├── careers/page.tsx
│   ├── resources/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx     ← 404 page
│
├── components/
│   ├── layout/           ← Navbar, Footer, PageHeader (used on every page)
│   ├── shared/           ← CtaBanner (reused on multiple pages)
│   ├── home/             ← Sections only on the Home page
│   ├── about/            ← Sections only on the About page
│   ├── services/         ← Sections only on the Services page
│   ├── products/         ← Sections only on the Products page
│   ├── careers/          ← Sections only on the Careers page
│   ├── resources/        ← Sections only on the Resources page
│   └── contact/          ← Sections only on the Contact page
│
├── constants/            ← ✅ ALL text/data lives here (edit here, not components)
│   ├── navigation.ts     ← Nav links & footer links
│   ├── about.ts          ← Values & team members
│   ├── services.ts       ← Services list + industries
│   ├── products.ts       ← Products list
│   ├── careers.ts        ← Job openings & perks
│   ├── resources.ts      ← Blog posts & case studies
│   └── contact.ts        ← Contact details & form subjects
│
└── lib/
    ├── animations.ts     ← Shared Framer Motion variants
    └── utils.ts          ← cn() Tailwind helper
```

---

## 🗂️ Where to Make Changes

| I want to change...         | Open this file                        |
|-----------------------------|---------------------------------------|
| Navigation links            | `src/constants/navigation.ts`         |
| A service description       | `src/constants/services.ts`           |
| A product card              | `src/constants/products.ts`           |
| A job opening               | `src/constants/careers.ts`            |
| A blog post                 | `src/constants/resources.ts`          |
| Contact email / phone       | `src/constants/contact.ts`            |
| Company values              | `src/constants/about.ts`              |
| Team members                | `src/constants/about.ts`              |
| The top navigation bar      | `src/components/layout/Navbar.tsx`    |
| The footer                  | `src/components/layout/Footer.tsx`    |
| Hero section (Home)         | `src/components/home/HeroSection.tsx` |
| Page banner (inner pages)   | `src/components/layout/PageHeader.tsx`|
| Dark CTA strip              | `src/components/shared/CtaBanner.tsx` |
| Animation speed             | `src/lib/animations.ts`               |
| Global colors / fonts       | `src/app/globals.css`                 |

---

## 🛠️ Tech Stack

| Technology      | Purpose                        |
|-----------------|-------------------------------|
| Next.js 14      | Framework + routing           |
| React 18        | UI library                    |
| TypeScript      | Type safety                   |
| Tailwind CSS 3  | Styling                       |
| Framer Motion   | Animations                    |
| React Hook Form | Form state                    |
| Zod             | Form validation               |
| lucide-react    | Icons                         |

---

## 🚀 Build for Production

```bash
npm run build    # Creates optimized production build
npm run start    # Runs the production server
```

---

## 🌐 Deploy to Vercel (Free, Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

Vercel auto-detects Next.js and handles everything.
