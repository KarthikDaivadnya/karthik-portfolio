const stack = ["Python", "FastAPI", "React", "LangChain", "LangGraph", "FAISS", "Pandas", "Power BI", "SQL", "Next.js"];

/** Infinite scrolling marquee of the core stack — pure CSS animation, no JS cost. */
export default function TechMarquee() {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-hidden border-y border-white/10 py-6">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10">
        {items.map((t, i) => (
          <span key={i} className="font-mono text-sm tracking-wide text-inkDim">
            {t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
