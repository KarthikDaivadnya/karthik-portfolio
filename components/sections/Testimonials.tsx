import { MessageSquareQuote } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

/** Honest empty state — no real client/recruiter quotes exist yet. */
export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary after:h-px after:w-5.5 after:bg-secondary">
          Testimonials
        </div>
        <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
          Recommendations, coming as I earn them.
        </h2>
        <GlowCard className="mx-auto mt-10 max-w-xl p-12">
          <div className="mx-auto mb-4.5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/[0.08] text-secondary" style={{ width: 52, height: 52 }}>
            <MessageSquareQuote size={22} />
          </div>
          <h3 className="text-[17px] font-semibold">No testimonials yet</h3>
          <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-inkDim">
            This carousel is built and ready to go — real quotes from mentors, professors, or clients
            will slot in here as they come in.
          </p>
        </GlowCard>
      </div>
    </section>
  );
}
