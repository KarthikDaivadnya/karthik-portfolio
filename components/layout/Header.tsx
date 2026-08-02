export default function Header() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[400] flex items-center justify-between px-8 py-6">
      <div className="pointer-events-auto flex items-center gap-2 font-grotesk text-lg font-bold">
        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_#00F5D4]" />
        Karthik's Portfolio
      </div>
      <div className="pointer-events-auto hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 font-mono text-[11.5px] text-inkDim backdrop-blur-xl sm:flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary shadow-[0_0_8px_#00F5D4]" />
        Open to AI/ML &amp; SDE roles
      </div>
    </header>
  );
}
