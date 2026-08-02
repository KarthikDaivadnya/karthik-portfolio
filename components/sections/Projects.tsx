"use client";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, CheckCircle2 } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import TiltCard from "@/components/ui/TiltCard";
import { projects } from "@/lib/data";

const projectArt = {
  aerosense: {
    accent: "from-cyan-400/70 via-sky-500/30 to-violet-500/30",
    colors: ["#67e8f9", "#8b5cf6", "#38bdf8"],
    label: "AeroSense",
    logo: (
      <svg viewBox="0 0 120 120" className="project-visual__logo" aria-hidden="true">
        <path d="M20 76c20-18 40-30 66-34-11 14-18 29-20 46-15 1-35-1-46-12Zm25 3c8-7 17-12 30-13-4 8-9 16-18 21-7-2-10-4-12-8Zm45 4 13-24c9 7 15 16 17 27-8 4-20 6-30-3Z" fill="rgba(255,255,255,0.92)"/>
        <path d="M62 34c8 0 20 5 28 15" stroke="rgba(165,243,252,0.85)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  docmind: {
    accent: "from-emerald-400/60 via-cyan-500/20 to-indigo-500/30",
    colors: ["#34d399", "#22d3ee", "#6366f1"],
    label: "DocMind",
    logo: (
      <svg viewBox="0 0 120 120" className="project-visual__logo" aria-hidden="true">
        <rect x="28" y="18" width="64" height="82" rx="14" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.45)" />
        <path d="M44 42h32M44 56h40M44 70h28" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="80" cy="80" r="16" fill="rgba(34,211,238,0.9)"/>
        <path d="M80 68v24M68 80h24" stroke="rgba(8,15,28,0.9)" strokeWidth="5" strokeLinecap="round"/>
      </svg>
    ),
  },
  salespulse: {
    accent: "from-amber-400/60 via-orange-500/20 to-rose-500/30",
    colors: ["#fbbf24", "#f97316", "#fb7185"],
    label: "SalesPulse",
    logo: (
      <svg viewBox="0 0 120 120" className="project-visual__logo" aria-hidden="true">
        <path d="M28 82h64" stroke="rgba(255,255,255,0.65)" strokeWidth="7" strokeLinecap="round"/>
        <path d="M38 80l16-22 18 13 22-31" stroke="rgba(255,255,255,0.95)" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="80" r="6" fill="rgba(251,191,36,0.9)"/>
        <circle cx="54" cy="58" r="6" fill="rgba(251,191,36,0.9)"/>
        <circle cx="72" cy="71" r="6" fill="rgba(251,191,36,0.9)"/>
        <circle cx="94" cy="40" r="6" fill="rgba(251,191,36,0.9)"/>
      </svg>
    ),
  },
  "multi-agent-ai-system": {
    accent: "from-violet-500/60 via-fuchsia-500/30 to-sky-500/20",
    colors: ["#a78bfa", "#ec4899", "#38bdf8"],
    label: "Multi-Agent AI",
    logo: (
      <svg viewBox="0 0 120 120" className="project-visual__logo" aria-hidden="true">
        <circle cx="38" cy="38" r="14" fill="rgba(192,132,252,0.9)"/>
        <circle cx="82" cy="38" r="14" fill="rgba(34,211,238,0.9)"/>
        <circle cx="60" cy="78" r="16" fill="rgba(167,139,250,0.9)"/>
        <path d="M48 48l-8 18m38-18l8 18m-22 12h16" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
  },
  "legal-contract-pipeline": {
    accent: "from-rose-500/60 via-pink-500/20 to-orange-400/25",
    colors: ["#fb7185", "#f97316", "#facc15"],
    label: "Legal AI",
    logo: (
      <svg viewBox="0 0 120 120" className="project-visual__logo" aria-hidden="true">
        <path d="M35 22h34l18 18v58a12 12 0 0 1-12 12H35a12 12 0 0 1-12-12V34a12 12 0 0 1 12-12Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)"/>
        <path d="M69 22v18h18" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="6" strokeLinejoin="round"/>
        <path d="M42 58h28M42 72h36M42 86h28" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M82 52l12 12-12 12" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            Featured Projects
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            Five systems, built and pushed end-to-end.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-inkDim">
            Every project ships with a real repo. None are deployed to a live URL yet, so demo links
            open a contact prompt instead of a broken link.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const art = projectArt[p.slug as keyof typeof projectArt] ?? projectArt.aerosense;

            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                className={i === projects.length - 1 ? "md:col-span-2" : ""}
              >
                <TiltCard>
                  <GlowCard className="flex h-full flex-col overflow-hidden">
                    <div
                      className={`project-visual bg-gradient-to-br ${art.accent}`}
                      style={{
                        ["--project-a" as any]: art.colors[0],
                        ["--project-b" as any]: art.colors[1],
                        ["--project-c" as any]: art.colors[2],
                      }}
                    >
                      <div className="project-visual__glow" />
                      <div className="project-visual__grid" />
                      <div className="project-visual__float project-visual__float--one" />
                      <div className="project-visual__float project-visual__float--two" />
                      <div className="project-visual__content">
                        <div className="project-visual__logo-wrap">
                          {art.logo}
                        </div>
                        <span className="project-visual__name">{art.label}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-[19px] font-semibold">{p.name}</h3>
                      <div className="mt-1 font-mono text-[11px] text-secondary">{p.tag}</div>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-inkDim">{p.description}</p>

                      <ul className="mt-4 space-y-1.5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-[12.5px] text-inkDim">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-secondary" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="rounded-md bg-white/[0.08] px-2 py-1 font-mono text-[11px] text-inkDim">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-2.5 pt-5">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:border-secondary hover:text-secondary"
                        >
                          <Github size={13} /> GitHub
                        </a>
                        <a
                          href="#contact"
                          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-[12.5px] font-semibold transition-colors hover:border-secondary hover:text-secondary"
                        >
                          Ask for a demo <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  </GlowCard>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
