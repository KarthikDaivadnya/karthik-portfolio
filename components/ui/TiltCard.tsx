"use client";
import { useRef } from "react";

/**
 * Wraps children in a subtle 3D tilt-on-mousemove effect (project cards).
 * Disabled automatically for touch/reduced-motion via CSS media query in globals.
 */
export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 18;
    const y = (e.clientX - rect.left - rect.width / 2) / -18;
    el.style.transform = `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) translateY(-4px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(.16,1,.3,1)" }}
    >
      {children}
    </div>
  );
}
