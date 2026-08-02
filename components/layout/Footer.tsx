import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const socials = [
  { href: "https://github.com/KarthikDaivadnya", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/karthikdaivadnya", label: "LinkedIn", Icon: Linkedin }, // TODO: add real LinkedIn URL
  { href: "#", label: "X / Twitter", Icon: Twitter }, // TODO: add real X URL
  { href: "karthikdaivanya27@gmail.com", label: "Email", Icon: Mail }, // TODO: real email
];

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-white/10 px-6 pb-32 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-inkDim">© 2026 Karthik. Built from scratch, deployed on Vercel.</p>

        <div className="flex flex-wrap gap-5 text-sm">
          <a href="#about" className="text-inkDim transition-colors hover:text-secondary">About</a>
          <a href="#projects" className="text-inkDim transition-colors hover:text-secondary">Projects</a>
          <a href="#skills" className="text-inkDim transition-colors hover:text-secondary">Skills</a>
          <a href="#contact" className="text-inkDim transition-colors hover:text-secondary">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:-translate-y-1 hover:border-secondary hover:text-secondary"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all hover:-translate-y-1 hover:border-secondary hover:text-secondary"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
