"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Skip on touch devices — matches the "no fake affordances" principle:
    // a custom cursor with no pointer to drive it is just a UI bug.
    const isTouch = window.matchMedia("(hover: none)").matches;
    setEnabled(!isTouch);
    if (isTouch) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    function onMove(e: MouseEvent) {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) { dotRef.current.style.left = mx + "px"; dotRef.current.style.top = my + "px"; }
    }
    let raf: number;
    function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      if (ringRef.current) { ringRef.current.style.left = rx + "px"; ringRef.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    function activate() { ringRef.current?.classList.add("scale-150", "border-secondary"); }
    function deactivate() { ringRef.current?.classList.remove("scale-150", "border-secondary"); }
    const interactive = document.querySelectorAll("a, button, input, textarea");
    interactive.forEach((el) => { el.addEventListener("mouseenter", activate); el.addEventListener("mouseleave", deactivate); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => { el.removeEventListener("mouseenter", activate); el.removeEventListener("mouseleave", deactivate); });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_12px_#00F5D4]" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 transition-all duration-300" />
    </>
  );
}
