<div align="center">

# ✦ Karthik — Portfolio

**AI/ML Engineer & Software Developer**

A dark-futuristic personal portfolio — glassmorphism, aurora gradients, a live
Three.js hero scene, and real project data instead of placeholder text.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com)

</div>

---

## ✨ What's inside

| | |
|---|---|
| 🎬 **Hero** | Typing role animation, interactive Three.js particle scene, magnetic CTA buttons |
| 🧭 **Navigation** | Floating dock nav, scroll progress bar, dark/light theme toggle |
| 🪪 **About** | Real bio, education, animated timeline |
| 🧩 **Skills** | Bento-grid categories (no fabricated proficiency %) |
| 🚀 **Projects** | AeroSense, DocMind, SalesPulse, Multi-Agent AI System, Legal Contract Pipeline — all real, with GitHub links |
| 📊 **GitHub Activity** | **Live** — fetched from `api.github.com` at render time, plus a real contribution heatmap |
| 🏆 **Achievements** | Only real, countable metrics — no invented hackathon/certification counts |
| 🛠️ **Services** | AI Solutions, ML, Data Analysis, Full-Stack Dev, Automation |
| ✉️ **Contact** | Validated form, sends real email via **EmailJS** |
| 🗺️ **Map, Footer, Socials** | OpenStreetMap embed, animated social icons, back-to-top |

Every glass card has a cursor-tracked spotlight glow and an animated gradient
border on hover; project cards tilt in 3D on mousemove; the whole page respects
`prefers-reduced-motion`.

## 🧱 Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Framer Motion ·
Three.js / React Three Fiber · Lenis smooth scroll · Lucide Icons · EmailJS

## 🚀 Getting started

```bash
npm install
cp .env.example .env.local   # fill in your values — see below
npm run dev
```

Open **http://localhost:3000**.

## 🔐 Environment variables

```bash
# lib/data.ts's profile.github already defaults to this — only needed if you fork it
NEXT_PUBLIC_GITHUB_USERNAME=KarthikDaivadnya

# Required for the contact form to actually send email — see EmailJS setup below
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

**EmailJS template setup** — the contact form sends these variables, so your
EmailJS template's Content tab needs matching `{{...}}` placeholders:

| Sent from the form | Use in your template as |
|---|---|
| Sender's name | `{{from_name}}` or `{{name}}` |
| Sender's email | `{{from_email}}` or `{{email}}` |
| Subject line | `{{subject}}` or `{{title}}` |
| Message body | `{{message}}` |
| Where it should land | `{{to_email}}` — set your template's **To Email** field to exactly this |

> If you enable EmailJS's Auto-Reply feature on your template, it needs to be
> **linked to its own template** (Auto-Reply tab → Linked Template) — it's a
> separate feature from the main Content tab, not just another field.

## 📁 Project structure

```
app/
  layout.tsx              Root layout, fonts, SEO metadata, JSON-LD
  page.tsx                 Assembles every section in order
  globals.css              Design tokens, glass-card + spotlight utilities
  sitemap.ts / robots.ts   Auto-generated
  api/contact/route.ts     Optional server-side alternative (Resend-based,
                            currently unused — the form sends via EmailJS
                            client-side instead; see note below)
components/
  layout/    Header, DockNav, Footer, Loader, CustomCursor, ScrollProgress, ThemeToggle
  sections/   One component per page section (Hero, About, Skills, Projects, ...)
  ui/         Reusable primitives — GlowCard, TiltCard, MagneticButton, Toast
hooks/        useTypewriter, useSmoothScroll (Lenis), useRevealOnScroll
lib/          data.ts (all real content), types.ts
public/       manifest.json, ICONS_TODO.txt
```

## 🧭 What's real vs. what's a stub

This project follows one rule throughout: **no fabricated data on a page
recruiters will read.**

| Section | Status |
|---|---|
| Hero, About, Skills, Projects, Services, Contact | Fully real content, fully functional |
| GitHub Activity | **Live** — fetches `api.github.com` client-side, plus a real contribution heatmap image |
| Achievements | Only real, countable metrics shown. Hackathons / certifications / coding-problems-solved counters were **left out**, not faked |
| Certifications / Testimonials / Blog | Built and styled, shown as honest empty states — no invented certs, quotes, or posts |
| Contact form | **Sends real email via EmailJS**, client-side, validated before submit |
| `api/contact/route.ts` | A second, server-side sending path (Resend) — currently **not used** by the form. Safe to delete, or keep as a fallback if you ever want server-side sending instead |
| AI Chat Assistant | UI shell only, clearly marked as not wired to a real model — see `components/sections/AIChatWidget.tsx` |
| Voice nav, multi-language, visitor counter, analytics dashboard, LeetCode API | **Not built** — each needs a real backend or third-party credentials this project doesn't have |

## ✅ Before this goes fully live

- [ ] Add a real resume PDF at `public/resume.pdf` and link it from the two "Download Resume" buttons
- [ ] Fill in `email`, `linkedin`, `twitter` in the `profile` object in `lib/data.ts` (single source of truth — used by Hero, Footer, and Contact)
- [ ] Add `public/icon-192.png` + `icon-512.png` for full PWA installability
- [ ] Replace the placeholder domain in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` with your real Vercel URL or custom domain

## ☁️ Deploying to Vercel

**Fastest — CLI:**
```bash
npm install -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

**Recommended — GitHub integration (auto-deploys on every push):**
1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no config needed
3. Add the three `NEXT_PUBLIC_EMAILJS_*` variables under **Project Settings → Environment Variables**
4. Deploy

> ⚠️ Env vars added in the Vercel dashboard only apply to deployments made
> *after* they're added — trigger a fresh deploy (push a commit, or
> **Deployments → Redeploy**) after adding or changing one.

**Custom domain:** Project Settings → Domains → add it → follow the DNS
instructions Vercel provides, then update `layout.tsx` / `sitemap.ts` /
`robots.ts` to match and redeploy.

## ⚡ Performance & accessibility

- The Three.js hero scene loads via `next/dynamic({ ssr: false })` so it never blocks first paint
- All interactive elements are keyboard-reachable; `:focus-visible` is styled globally
- Respects `prefers-reduced-motion` throughout (smooth scroll, all animations)
- Run `npm run build && npm start` and audit locally with Lighthouse before quoting a specific score — none is asserted here since it hasn't been measured on your final deployed assets

---

<div align="center">
<sub>Built from scratch by Karthik · Deployed on Vercel</sub>
</div>