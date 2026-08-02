"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  target,
}:{
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.32}px)`;
  }
  function handleLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.96 }}
      className={clsx("inline-flex items-center justify-center gap-2 will-change-transform", className)}
      style={{ transition: "transform 0.35s cubic-bezier(.16,1,.3,1)" }}
    >
      {children}
    </motion.div>
  );

  if (href) return <a href={href}>{content}</a>;
  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
