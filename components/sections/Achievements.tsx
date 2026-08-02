"use client";
import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import GlowCard from "@/components/ui/GlowCard";
import { achievements } from "@/lib/data";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 24, stiffness: 90 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

/**
 * Only two real, countable metrics are shown. The original brief asked for
 * Hackathons / Certifications / Coding-problems-solved counters too — those
 * are left out entirely rather than filled with invented numbers.
 */
export default function Achievements() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlowCard className="p-8 text-center">
                <div className="font-grotesk text-[clamp(32px,4vw,48px)] font-bold text-secondary">
                  <Counter value={a.value} />+
                </div>
                <div className="mt-2 font-mono text-[13px] text-inkDim">{a.label}</div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
