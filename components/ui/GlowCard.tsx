"use client";
import { useRef } from "react";
import clsx from "clsx";

/**
 * Glassmorphic card with an animated gradient border on hover and a
 * cursor-tracked "spotlight" glow. Used as the base surface for nearly
 * every section (bento cells, project cards, panels).
 */
type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
} & Omit<
  React.HTMLAttributes<HTMLElement> & React.FormHTMLAttributes<HTMLFormElement>,
  "className" | "children"
>;

export default function GlowCard({ children, className, as: Tag = "div", ...rest }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    rest.onMouseMove?.(e as unknown as React.MouseEvent<HTMLElement>);
  }

  const Component = Tag as any;
  return (
    <Component
      ref={ref}
      {...rest}
      onMouseMove={handleMouseMove}
      className={clsx("glass-card spotlight", className)}
    >
      {children}
    </Component>
  );
}