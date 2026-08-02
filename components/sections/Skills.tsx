"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import { skillGroups } from "@/lib/data";

const skillKey = (skill: string) => skill.toLowerCase().replace(/[^a-z0-9]/g, "");

function SkillLogo({ skill }: { skill: string }) {
  const key = skillKey(skill);

  const baseSvg = "h-full w-full";

  switch (key) {
    case "python":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <defs>
            <linearGradient id="pyGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4cc9ff" />
              <stop offset="100%" stopColor="#2767d6" />
            </linearGradient>
          </defs>
          <path d="M24 8c-7 0-6 3-6 3v7h12v4H18c-5 0-9 3-9 9v7c0 6 4 9 9 9h6v-8h-4v-7h10v-10c0-5-3-8-9-8h-4c-2 0-2-2 0-2h8c2 0 4 1 4 4v2h9V11c0-3-2-3-7-3h-9Z" fill="#3f7ef0"/>
          <path d="M40 8c7 0 6 3 6 3v7H34v4h12c5 0 9 3 9 9v7c0 6-4 9-9 9h-6v-8h4v-7H34v-10c0-5 3-8 9-8h4c2 0 2-2 0-2h-8c-2 0-4 1-4 4v2H20V11c0-3 2-3 7-3h13Z" fill="#ffd34d"/>
          <path d="M25 24h14v7H25zm0 15h14v7H25z" fill="url(#pyGrad)"/>
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M20 18h24c4 0 8 3 8 8v10c0 8-6 15-15 15H27c-9 0-15-7-15-15V26c0-5 4-8 8-8Zm3 9h18v9H23zm-1 15h20v4H22zm19-18h4v12h-4z" fill="#e76f00"/>
          <path d="M18 46c0 5 5 9 11 9h6c6 0 11-4 11-9v-3H18v3Z" fill="#f6c177" opacity="0.8"/>
          <path d="M23 10c5 0 7 5 7 5h4s2-5 7-5" stroke="#f5d57a" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        </svg>
      );
    case "sql":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M18 20c0-4 6-8 14-8s14 4 14 8v24c0 4-6 8-14 8s-14-4-14-8V20Zm28 0c0 3-5 6-14 6s-14-3-14-6 5-6 14-6 14 3 14 6Zm0 12c0 3-5 6-14 6S18 35 18 32v-4c0 3 5 6 14 6s14-3 14-6v4Zm0 12c0 3-5 6-14 6S18 47 18 44v-4c0 3 5 6 14 6s14-3 14-6v4Z" fill="#12b5ff"/>
          <path d="M32 26v18" stroke="#0d2a45" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 30h12M26 36h12" stroke="#dff9ff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M14 16h36v32H14z" fill="#1f2937"/>
          <path d="M22 28c0-6 4-10 10-10 5 0 8 3 9 7l-5 2c-1-2-3-3-5-3-3 0-4 2-4 4v2c0 2 1 4 4 4 2 0 4-1 5-3l5 2c-1 4-4 7-9 7-6 0-10-4-10-10zm16 15h7v-5h-6v-5h6v-5h-12v20h6v-5Z" fill="#facc15"/>
        </svg>
      );
    case "scikitlearn":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M32 10c-11 0-20 9-20 20 0 11 9 20 20 20 11 0 20-9 20-20S43 10 32 10Zm0 10c6 0 11 5 11 11s-5 11-11 11-11-5-11-11 5-11 11-11Z" fill="#f5f7ff" opacity="0.9"/>
          <path d="M20 25h24v6H20zm0 8h24v6H20z" fill="#4cc9ff"/>
          <circle cx="32" cy="32" r="7" fill="#50e3c2"/>
        </svg>
      );
    case "langchain":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M18 18h12v12H18zm16 0h12v12H34zm-16 16h12v12H18zm16 0h12v12H34z" fill="#7c3aed"/>
          <path d="M30 18v28M18 30h28" stroke="#f4f0ff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "langgraph":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <circle cx="21" cy="22" r="7" fill="#7c3aed"/>
          <circle cx="43" cy="22" r="7" fill="#c084fc"/>
          <circle cx="32" cy="42" r="7" fill="#22d3ee"/>
          <path d="M26 25l-3 11m15-11l3 11M28 42h8" stroke="#f5f3ff" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "ragfaiss":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M16 18h32v28H16z" fill="#1d4ed8"/>
          <path d="M22 26h20v12H22z" fill="#93c5fd"/>
          <path d="M28 18v28M36 18v28" stroke="#dbeafe" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M26 42l6 6 6-6" stroke="#e0f2fe" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "mistralai":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M10 42V22h8v20h-8Zm12 0V18h8v24h-8Zm12 0V28h8v14h-8Zm12 0V12h8v30h-8Z" fill="#6d5efc"/>
        </svg>
      );
    case "groq":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M16 22c0-5 4-9 9-9h14c5 0 9 4 9 9v20c0 5-4 9-9 9H25c-5 0-9-4-9-9V22Zm10 5h12v6H26zm0 10h12v6H26z" fill="#f8fafc"/>
          <path d="M22 18c6-6 14-9 22-10-4 5-7 10-9 16-7 1-12 0-13-6Z" fill="#36d399"/>
        </svg>
      );
    case "pandas":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <rect x="14" y="12" width="10" height="40" rx="4" fill="#2f8ef7"/>
          <rect x="40" y="12" width="10" height="40" rx="4" fill="#46c1ff"/>
          <rect x="24" y="20" width="16" height="10" rx="3" fill="#0f172a" opacity="0.8"/>
          <rect x="24" y="35" width="16" height="10" rx="3" fill="#0f172a" opacity="0.7"/>
        </svg>
      );
    case "numpy":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M20 18h8v28h-8zm16 0h8v28h-8zM16 26h32v8H16zM16 38h32v8H16z" fill="#4ade80"/>
          <path d="M28 18v28M36 18v28" stroke="#d1fae5" strokeWidth="2"/>
        </svg>
      );
    case "powerbi":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <rect x="12" y="34" width="10" height="18" rx="3" fill="#f59e0b"/>
          <rect x="25" y="24" width="10" height="28" rx="3" fill="#fbbf24"/>
          <rect x="38" y="14" width="10" height="38" rx="3" fill="#fcd34d"/>
          <path d="M18 12h28v8H18z" fill="#fbbf24" opacity="0.9"/>
        </svg>
      );
    case "chartjs":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M14 46h36v4H14zm4-24h6v20h-6zm10-8h6v28h-6zm10 12h6v16h-6z" fill="#ff6384"/>
          <path d="M18 32h6v14h-6zm10-8h6v22h-6zm10 12h6v10h-6z" fill="#36a2eb" opacity="0.8"/>
        </svg>
      );
    case "sqlite":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <ellipse cx="32" cy="18" rx="18" ry="8" fill="#4ade80"/>
          <path d="M14 18v20c0 5 8 8 18 8s18-3 18-8V18" fill="#22c55e"/>
          <path d="M14 30v20c0 5 8 8 18 8s18-3 18-8V30" fill="#10b981"/>
          <path d="M14 42v6c0 5 8 8 18 8s18-3 18-8v-6" fill="#065f46"/>
        </svg>
      );
    case "fastapi":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M16 32c0-10 8-18 18-18 10 0 18 8 18 18s-8 18-18 18c-8 0-15-5-17-12h14l7-12-12 2v10H24v-8h-8Z" fill="#0ea5e9"/>
          <path d="M29 20l-9 18h9l-2 14 13-20h-8l3-12Z" fill="#ecfeff"/>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <circle cx="32" cy="32" r="6" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="3" fill="none" strokeLinecap="round">
            <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(0 32 32)"/>
            <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(60 32 32)"/>
            <ellipse cx="32" cy="32" rx="18" ry="7" transform="rotate(120 32 32)"/>
          </g>
        </svg>
      );
    case "nodejsexpress":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M18 24 32 14l14 10v16L32 50 18 40V24Z" fill="#22c55e"/>
          <path d="M32 20v24M20 30h24M20 34h24" stroke="#ecfdf5" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "streamlit":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M18 20c0-4 3-7 7-7h14c4 0 7 3 7 7v24c0 4-3 7-7 7H25c-4 0-7-3-7-7V20Zm7 10h14v6H25zm0 10h10v6H25z" fill="#4f46e5"/>
          <path d="M24 16c4 7 7 12 8 17 1-5 4-10 8-17" stroke="#9ae6ff" strokeWidth="3" strokeLinecap="round" fill="none"/>
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M32 10c9 0 16 7 16 16 0 12-8 20-16 28-8-8-16-16-16-28 0-9 7-16 16-16Zm0 8c-5 0-9 4-9 9 0 8 6 13 9 18 3-5 9-10 9-18 0-5-4-9-9-9Z" fill="#34d399"/>
          <path d="M27 28c2 3 5 4 5 8 0 3-2 5-5 7-3-2-5-4-5-7 0-4 3-5 5-8Z" fill="#d1fae5"/>
        </svg>
      );
    case "postgresql":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <ellipse cx="32" cy="18" rx="12" ry="8" fill="#336791"/>
          <path d="M20 18v24c0 3 5 6 12 6s12-3 12-6V18" fill="#2a7de1"/>
          <path d="M27 18c2 3 3 5 5 5s3-2 5-5" stroke="#dbeafe" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M29 28c2 3 4 5 3 10M35 28c-2 3-4 5-3 10" stroke="#dbeafe" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "mysql":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M16 22c0-5 6-9 16-9s16 4 16 9v20c0 5-6 9-16 9s-16-4-16-9V22Zm8 0c0 4 4 6 8 6s8-2 8-6-4-6-8-6-8 2-8 6Zm0 12c0 4 4 6 8 6s8-2 8-6-4-6-8-6-8 2-8 6Z" fill="#f59e0b"/>
          <path d="M26 36h12" stroke="#fff7ed" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "gitgithub":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M24 14c-7 0-12 6-12 13v8c0 7 6 13 13 13h8l4 10 4-10h1c7 0 13-6 13-13v-8c0-7-6-13-13-13h-17Z" fill="#f5f5f5" opacity="0.96"/>
          <path d="M24 20v18m8-18v18M20 34h16" stroke="#111827" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      );
    case "vscode":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="m18 20 28 12v-8L18 20Zm0 24 28-12v8L18 44Zm9-12 12 8-12 8-6-8 6-8Z" fill="#0ea5e9"/>
          <path d="m18 20 11 12-11 12 7 5 20-17L25 15l-7 5Z" fill="#1f9cf0"/>
        </svg>
      );
    case "streamlitcloud":
      return (
        <svg viewBox="0 0 64 64" className={baseSvg} aria-hidden="true">
          <path d="M16 36c0-10 8-18 18-18 10 0 18 8 18 18 0 10-8 18-18 18-10 0-18-8-18-18Z" fill="#7dd3fc" opacity="0.35"/>
          <path d="M20 36c0-9 7-16 16-16s16 7 16 16" fill="none" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round"/>
          <path d="M31 20v16l10 5" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <div className="flex h-full w-full items-center justify-center text-[10px] font-black tracking-[0.12em] text-slate-100">
          {skill.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="skill-badge group">
      <span className="skill-badge__logo">
        <SkillLogo skill={skill} />
      </span>
      <span className="skill-badge__label">{skill}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            Skills
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            Tools I reach for, organized by what they&apos;re for.
          </h2>
          <p className="mt-4 text-[13.5px] text-inkDim">
            Note: proficiency bars are intentionally skipped — a specific % here would be a made-up
            number, not a measured one. Categories reflect real, applied experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = (Icons as any)[group.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className={i < 2 ? "sm:col-span-2" : "sm:col-span-1 lg:col-span-2"}
              >
                <GlowCard className="h-full p-6">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.08] text-secondary">
                      <Icon size={16} />
                    </span>
                    <h3 className="text-[15px] font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((s) => (
                      <SkillBadge key={s} skill={s} />
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
