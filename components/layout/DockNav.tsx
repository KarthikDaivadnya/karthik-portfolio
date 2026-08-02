"use client";
import { Home, User, Sparkles, LayoutGrid, Github, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";
import { useToast } from "@/components/ui/Toast";

const links = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: User },
  { href: "#skills", label: "Skills", Icon: Sparkles },
  { href: "#projects", label: "Projects", Icon: LayoutGrid },
  { href: "#github", label: "GitHub", Icon: Github },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function DockNav() {
  const toast = useToast();

  return (
    <div className="fixed top-9 left-0 right-0 z-[500] flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-2 backdrop-blur-2xl shadow-2xl">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full text-inkDim transition-all hover:-translate-y-1 hover:bg-white/5 hover:text-ink"
          >
            <Icon size={17} />
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-bg2 px-2.5 py-1 text-[11px] opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
        <div className="mx-1 h-5.5 w-px bg-white/10" />
        <ThemeToggle />
        <MagneticButton
          type="button"
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="h-11 rounded-full bg-gradient-to-r from-primary to-accent px-4 text-[13px] font-semibold text-white"
        >
          <span>Resume</span>
        </MagneticButton>
      </nav>
    </div>
  );
}
