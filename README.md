# Karthik — Portfolio (Next.js 15 / React 19 / TypeScript)

A premium, dark-futuristic personal portfolio: glassmorphism, aurora gradients, a
Three.js hero scene, Framer Motion micro-interactions, Lenis smooth scroll, a live
GitHub stats panel, and a working contact form — built around real content, not
placeholder text.

## Stack
Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion ·
Three.js / React Three Fiber · Lucide Icons · Lenis · EmailJS

## Getting started
```bash
npm install
cp .env.example .env.local   # fill in values, see below
npm run dev
```
Open http://localhost:3000.

## Environment variables
See `.env.example`.

| Variable | Required? | What it's for |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | No — defaults to `KarthikDaivadnya` | Powers the live GitHub stats section (public API, no auth needed) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | **Yes**, for the contact form to send email | From EmailJS → Email Services |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | **Yes** | From EmailJS → Email Templates → your template's ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | **Yes** | From EmailJS → Account → General → "Public Key" (not the private key) |
| `RESEND_API_KEY` | No — unused by default | Only needed if you switch the contact form back to server-side sending via `app/api/contact/route.ts` (see note below) |

All three EmailJS vars must be set and the dev server restarted after editing
`.env.local` — Next.js only reads env files at server boot, not on hot-reload.

## Project structure
```
app/
  layout.tsx          Root layout, fonts, SEO metadata, JSON-LD
  page.tsx             Assembles every section in order
  globals.css          Design tokens (CSS vars), glass-card + spotlight utilities
  sitemap.ts            Auto-generated sitemap.xml
  robots.ts             Auto-generated robots.txt
  api/contact/route.ts  Resend-based email sending — present but UNUSED by
                         default; Contact.tsx sends via EmailJS client-side
                         instead (see "Contact form" below)
components/
  layout/               Header, DockNav, Footer, Loader, CustomCursor, ScrollProgress, ThemeToggle
  sections/              One component per page section (Hero, About, Skills, Projects, ...)
  ui/                    Reusable primitives — GlowCard, TiltCard, MagneticButton, Toast
hooks/
  useTypewriter.ts        Hero role-cycling animation
  useSmoothScroll.ts       Lenis init (respects prefers-reduced-motion)
  useRevealOnScroll.ts     IntersectionObserver scroll-reveal
lib/
  data.ts                 All real content — profile, projects, skills, timeline, achievements
  types.ts                 Shared TypeScript interfaces
public/
  manifest.json            PWA manifest (icons not included — see ICONS_TODO.txt)
.gitignore                 Excludes node_modules, .next, .env*, and OS/editor files
```

## Contact form — how it's wired
The form (`components/sections/Contact.tsx`) validates client-side, then sends
directly via **EmailJS** using `@emailjs/browser` — no server round-trip, no
`/api/contact` call. It sends both naming conventions for template variables
(`from_name`/`name`, `subject`/`title`, `from_email`/`email`, `message`,
`to_email`) so it works regardless of which set your EmailJS template uses.

**Template field reference** (Content tab of your EmailJS template):

| Field | Value |
|---|---|
| To Email | `{{to_email}}` |
| Reply To | `{{from_email}}` |
| Subject | `New portfolio contact: {{subject}}` (or similar) |
| Body | Reference `{{from_name}}`, `{{from_email}}`, and `{{message}}` |

If you're also using EmailJS's Auto-Reply feature (a confirmation sent back to
the visitor), it needs its own "To" field — use `{{email}}`, which the code
also sends.

**Important for Vercel:** if your EmailJS account has "Allowed Origins"
restrictions under Account → Security, add your production URL there once
deployed — a domain that works locally on `localhost` will silently fail on
your live Vercel URL until it's added to that list.

**Switching to server-side sending instead:** `app/api/contact/route.ts`
already has a working Resend integration if you'd rather send from the server
than the browser — just set `RESEND_API_KEY` and change `Contact.tsx`'s
`handleSubmit` to `fetch("/api/contact", ...)` instead of calling
`emailjs.send(...)` directly.

## What's real vs. what's a stub
This project follows one rule throughout: **no fabricated data on a page recruiters
will read.**

| Section | Status |
|---|---|
| Hero, About, Skills, Projects, Services, Contact | Fully real content, fully functional |
| Contact form | **Working** — sends real email via EmailJS, validated end-to-end |
| GitHub Activity | **Live** — fetches `api.github.com` client-side at render time, plus a real contribution heatmap image |
| Achievements | Only 2 real, countable metrics shown (projects shipped, flagship systems). Hackathons / certifications / coding-problems-solved counters from the original brief were **left out**, not faked |
| Certifications / Testimonials / Blog | Built and styled, shown as honest empty states — no invented certs, quotes, or posts |
| AI Chat Assistant | UI shell only, clearly marked as not wired to a real model — see `components/sections/AIChatWidget.tsx` |
| Voice command navigation, multi-language, visitor counter, analytics dashboard, LeetCode API integration | **Not built.** Each needs a real backend, third-party API, or credentials this project doesn't have; shipping a fake version would mislead anyone viewing the site |

## What still needs you before this goes live
1. **Resume** — add a real PDF and link it from the two "Download Resume" buttons (`Hero.tsx`, `DockNav.tsx`).
2. **Contact info** — `profile.email`, `profile.linkedin`, and `profile.twitter` in `lib/data.ts` are the single source of truth used across Hero, Footer, and Contact — confirm they're your real values.
3. **App icons** — add `public/icon-192.png` and `public/icon-512.png` for full PWA installability (see `public/ICONS_TODO.txt`).
4. **Domain** — replace the placeholder URL in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with your real deployed domain, once you have one.
5. **EmailJS Allowed Origins** — add your production Vercel URL once deployed (see Contact form section above).

## Deployment (Vercel)
**CLI:**
```bash
npm install -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

**Or via GitHub integration** (recommended for ongoing updates):
1. Push this repo to GitHub (`.gitignore` already excludes `.env.local`, so your keys won't leak).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no config needed.
3. Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` under Project Settings → Environment Variables.
4. Deploy. Every future `git push` to `main` auto-deploys.
5. Once live, add the deployed URL to EmailJS's Allowed Origins (see above) — this step is easy to forget and causes the form to work locally but fail in production.

## Performance & accessibility notes
- The Three.js hero scene loads via `next/dynamic` with `ssr: false` so it never
  blocks first paint.
- All interactive elements are keyboard-reachable; `:focus-visible` styling is set
  globally in `globals.css`.
- Respects `prefers-reduced-motion` in the smooth-scroll hook and CSS.
- Lighthouse scores depend on final image assets, font-loading strategy, and hosting —
  run `npm run build && npx next start` and audit locally before claiming a specific
  number; none is asserted here since it hasn't been measured on this exact build.