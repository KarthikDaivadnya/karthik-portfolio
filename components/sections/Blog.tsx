import { Newspaper } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

/** Honest empty state — no published posts exist yet. */
export default function Blog() {
  return (
    <section id="blog" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary after:h-px after:w-5.5 after:bg-secondary">
          Writing
        </div>
        <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
          Notes on AI systems, as I write them.
        </h2>
        <GlowCard className="mx-auto mt-10 max-w-xl p-12">
          <div className="mx-auto mb-4.5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/[0.08] text-secondary" style={{ width: 52, height: 52 }}>
            <Newspaper size={22} />
          </div>
          <h3 className="text-[17px] font-semibold">Nothing published yet</h3>
          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-inkDim">
            This grid is ready for MDX posts — drop files into <code>content/blog/</code> and they&apos;ll
            render here automatically (see README).
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
