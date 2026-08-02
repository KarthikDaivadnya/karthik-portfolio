"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { profile } from "@/lib/data";
import { useToast } from "@/components/ui/Toast";
import MagneticButton from "@/components/ui/MagneticButton";

// 3D scene is client-only and fairly heavy — load it without SSR and only
// once the browser is idle, so it never blocks first paint / LCP.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const socials = [
  { href: `https://github.com/${profile.github}`, label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/karthikdaivadnya", label: "LinkedIn", Icon: Linkedin },
  { href: "#", label: "X / Twitter", Icon: Twitter },
  { href: "karthikdaivanya27@gmail.com", label: "Email", Icon: Mail },
];

export default function Hero() {
  const typed = useTypewriter(profile.typingRoles);
  const toast = useToast();

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28">
      <HeroScene />
      <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -35, rotateY: 18 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="order-2 flex w-full justify-center lg:order-1 lg:w-[42%] lg:justify-start"
        >
          <div className="portrait-3d group">
            <div className="portrait-3d__glow" />
            <div className="portrait-3d__card">
              <div className="portrait-3d__badge">Welcome to my portfolio</div>
              <div className="portrait-3d__label">Karthik Daivadnya</div>
            </div>
          </div>
        </motion.div>

        <div className="order-1 w-full text-center lg:order-2 lg:w-[58%] lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 font-mono text-xs text-inkDim"
          >
            🎓 B.E CSE · Graduate {profile.gradYear}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-grotesk text-[clamp(44px,7.5vw,88px)] font-bold leading-[1.02] tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <div className="mt-5 flex h-8 items-center justify-center font-grotesk text-[clamp(16px,2.4vw,22px)] text-inkDim lg:justify-start">
            {typed}
            <span className="ml-0.5 h-[1em] w-0.5 animate-pulse bg-secondary" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-inkDim lg:mx-0"
          >
            I build end-to-end ML systems — from predictive maintenance models to RAG pipelines and
            full-stack dashboards...
          </motion.p>

          <div className="mt-9 flex flex-wrap justify-center gap-3.5 lg:justify-start">
            <MagneticButton
              type="button"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-primary/40"
            >
              <Download size={15} /> Download Resume
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.045] px-7 py-3.5 text-sm font-semibold hover:bg-white/[0.08]"
            >
              Contact Me
            </MagneticButton>
          </div>

          <div className="mt-11 flex justify-center gap-3.5 lg:justify-start">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10.5 w-10.5 items-center justify-center px-1 py-1 rounded-full border border-white/10 bg-white/[0.045] transition-all hover:-translate-y-1 hover:border-secondary hover:text-secondary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
