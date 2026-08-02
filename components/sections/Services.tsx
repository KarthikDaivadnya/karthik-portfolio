"use client";
import { motion } from "framer-motion";
import { Sparkles, LineChart, BarChart4, Layers3, Cog } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

const services = [
  { Icon: Sparkles, title: "AI Solutions", desc: "Retrieval-augmented systems, agent orchestration, and applied ML that ships past the prototype stage." },
  { Icon: LineChart, title: "Machine Learning", desc: "Model training, evaluation, and deployment — from feature engineering to a served prediction endpoint." },
  { Icon: BarChart4, title: "Data Analysis", desc: "ETL pipelines, SQL reporting, and dashboards in Power BI or a custom web UI, built on real data." },
  { Icon: Layers3, title: "Full-Stack Development", desc: "FastAPI or Node backends paired with React front ends — one repo, one deploy, no glue code left behind." },
  { Icon: Cog, title: "Automation", desc: "Multi-agent workflows and scripted pipelines that take a repetitive process off someone's plate." },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            Services
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            What I can help you build.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlowCard className="h-full p-7">
                <div className="mb-4.5 flex h-10.5 w-10.5 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white" style={{ width: 42, height: 42 }}>
                  <s.Icon size={18} />
                </div>
                <h3 className="text-[16.5px] font-semibold">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-inkDim">{s.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
