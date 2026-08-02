"use client";
import { motion } from "framer-motion";
import GlowCard from "@/components/ui/GlowCard";
import { profile, timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.18em] text-secondary before:h-px before:w-5.5 before:bg-secondary">
            About
          </div>
          <h2 className="font-grotesk text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
            Grounded in fundamentals, shipped end-to-end.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-inkDim">
            I like taking a model past the notebook — into an API, a UI, and a repo someone else could actually run.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <GlowCard className="p-8" as="div">
            <p className="text-[15px] leading-loose text-inkDim">
              I&apos;m a {profile.gradYear} Computer Science &amp; Engineering graduate from Bapuji Institute of Engineering and Technology, Bangalore, Karnataka —
              CGPA <b>{profile.cgpa}</b>.
            </p>
            <p className="mt-3.5 text-[15px] leading-loose text-inkDim">
              My focus is building complete systems: a predictive maintenance platform trained on NASA&apos;s
              CMAPSS dataset, a retrieval-augmented document assistant, and ETL pipelines that end in a
              dashboard someone can actually read. I&apos;m currently interviewing for AI/ML, data science, and
              software engineering roles.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.strengths.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 font-mono text-[11.5px] text-secondary">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px]">
              <div>
                <div className="font-mono uppercase tracking-wide text-inkDim text-[11px] mb-1.5">Interests</div>
                <div className="text-inkDim">{profile.interests.join(" · ")}</div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wide text-inkDim text-[11px] mb-1.5">Languages</div>
                <div className="text-inkDim">{profile.languages.join(" · ")}</div>
              </div>
            </div>
          </GlowCard>

          <div className="flex flex-col gap-8 border-l border-white/10 pl-7">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-secondary bg-bg shadow-[0_0_10px_#00F5D4]" />
                <div className="font-mono text-[11.5px] text-secondary">{item.date}</div>
                <h3 className="mt-1.5 text-[17px] font-semibold">{item.title}</h3>
                <div className="mt-0.5 text-[13px] text-inkDim">{item.org}</div>
                {item.description && <p className="mt-2 text-[13.5px] leading-relaxed text-inkDim">{item.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
