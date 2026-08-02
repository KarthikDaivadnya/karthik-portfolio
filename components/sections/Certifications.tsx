import { Award } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

/** Honest empty state — no real certifications exist yet, so none are invented. */
export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            Certifications
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            Verified credentials, listed as earned.
          </h2>
        </div>
        <GlowCard className="mx-auto max-w-xl p-12 text-center">
          <div className="mx-auto mb-4.5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/[0.08] text-secondary" style={{ width: 52, height: 52 }}>
            <Award size={22} />
          </div>
          <h3 className="text-[17px] font-semibold">No certifications listed yet</h3>
          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-inkDim">
            This section is wired up and ready — each credential will appear here as an interactive
            card with a live verification link the moment it&apos;s earned.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
