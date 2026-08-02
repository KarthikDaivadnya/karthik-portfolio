# Karthik — Portfolio (Next.js 15 / React 19 / TypeScript)

A premium, dark-futuristic personal portfolio: glassmorphism, aurora gradients, a
Three.js hero scene, Framer Motion micro-interactions, Lenis smooth scroll, and a
live GitHub stats panel — built around real content, not placeholder text.

## Stack
Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · GSAP-ready ·
Three.js / React Three Fiber · Lucide Icons · Lenis

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in values, see below
npm run dev
```
Open http://localhost:3000.

## Environment variables
See `.env.example`.
- `NEXT_PUBLIC_GITHUB_USERNAME` — used by the live GitHub stats section (public API, no auth needed).
- `NEXT_PUBLIC_EMAILJS_*` — only needed if you wire the contact form to EmailJS (see "What still needs you" below).

## Project structure
```
app/
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             Assembles every section in order
  globals.css          Design tokens (CSS vars), glass-card + spotlight utilities
  sitemap.ts            Auto-generated sitemap.xml
  robots.ts             Auto-generated robots.txt
  api/contact/route.ts  Validates contact form submissions (email sending NOT wired — see TODO)
components/
  layout/               Header, DockNav, Footer, Loader, CustomCursor, ScrollProgress, ThemeToggle
  sections/              One component per page section (Hero, About, Skills, Projects, ...)
  ui/                    Reusable primitives — GlowCard, TiltCard, MagneticButton, Toast
hooks/
  useTypewriter.ts        Hero role-cycling animation
  useSmoothScroll.ts       Lenis init (respects prefers-reduced-motion)
  useRevealOnScroll.ts     IntersectionObserver scroll-reveal
lib/
  data.ts                 All real content — projects, skills, timeline, achievements
  types.ts                 Shared TypeScript interfaces
public/
  manifest.json            PWA manifest (icons not included — see ICONS_TODO.txt)
```

## What's real vs. what's a stub
This project follows one rule throughout: **no fabricated data on a page recruiters
will read.**

| Section | Status |
|---|---|
| Hero, About, Skills, Projects, Services, Contact | Fully real content, fully functional |
| GitHub Activity | **Live** — fetches `api.github.com` client-side at render time, plus a real contribution heatmap image |
| Achievements | Only 2 real, countable metrics shown (projects shipped, flagship systems). Hackathons / certifications / coding-problems-solved counters from the original brief were **left out**, not faked |
| Certifications / Testimonials / Blog | Built and styled, shown as honest empty states — no invented certs, quotes, or posts |
| Contact form | Validates and POSTs to `/api/contact`, which logs the submission server-side. **Does not send an email yet** — see below |
| AI Chat Assistant | UI shell only, clearly marked as not wired to a real model — see `components/sections/AIChatWidget.tsx` |
| Voice command navigation, multi-language, visitor counter, analytics dashboard, LeetCode API integration | **Not built.** Each needs a real backend, third-party API, or credentials this project doesn't have; shipping a fake version would mislead anyone viewing the site |

## What still needs you before this goes live
1. **Resume** — add a real PDF and link it from the two "Download Resume" buttons (`Hero.tsx`, `DockNav.tsx`).
2. **Contact info** — replace the placeholder email, phone, LinkedIn, and X/Twitter links in `Contact.tsx`, `Hero.tsx`, and `Footer.tsx`.
3. **Send real email from the contact form** — `app/api/contact/route.ts` validates but doesn't send. Easiest options:
   - [Resend](https://resend.com) (a few lines, generous free tier)
   - EmailJS client-side (fill `.env.local`, call from `Contact.tsx` instead of `/api/contact`)
4. **App icons** — add `public/icon-192.png` and `public/icon-512.png` for full PWA installability (see `public/ICONS_TODO.txt`).
5. **Domain** — replace the placeholder URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real deployed domain.

## Deployment (Vercel)
```bash
npm install -g vercel
vercel
```
Or connect the GitHub repo directly at vercel.com/new — Vercel auto-detects Next.js,
no config needed. Add the environment variables from `.env.example` in the Vercel
project settings before deploying.

## Deployment (Netlify)
Add a `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Performance & accessibility notes
- The Three.js hero scene loads via `next/dynamic` with `ssr: false` so it never
  blocks first paint.
- All interactive elements are keyboard-reachable; `:focus-visible` styling is set
  globally in `globals.css`.
- Respects `prefers-reduced-motion` in the smooth-scroll hook and CSS.
- Lighthouse scores depend on final image assets, font-loading strategy, and hosting —
  run `npm run build && npx next start` and audit locally before claiming a specific
  number; none is asserted here since it hasn't been measured on this exact build.
