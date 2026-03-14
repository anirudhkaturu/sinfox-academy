"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Factory, Lightbulb, Rocket } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

const lanes = [
  {
    title: "Tech Products",
    icon: Rocket,
    description:
      "SaaS, AI agents, developer tools, consumer apps, workflow automation—built with distribution in mind.",
    bullets: [
      "Product architecture & MVP velocity",
      "Agentic workflows & automation",
      "Distribution math & discovery engines",
    ],
    tint: "accent",
  },
  {
    title: "Non‑Tech Programs",
    icon: Lightbulb,
    description:
      "Education, services, communities, media products—packaged as systems with measurable outcomes.",
    bullets: [
      "Offer design & value articulation",
      "Brand resonance & messaging systems",
      "Operational playbooks & scale loops",
    ],
    tint: "secondary",
  },
  {
    title: "Professional Training",
    icon: Factory,
    description:
      "Career acceleration and operator training—so teams ship faster, communicate better, and scale responsibly.",
    bullets: [
      "Executive communication & presence",
      "Hiring, interviews & portfolio defense",
      "Ethical execution & market impact",
    ],
    tint: "tertiary",
  },
];

export function IncubationSupportSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
              Incubation Support
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight">
              Grow high‑impact products that{" "}
              <span className="text-accent">serve society</span>.
            </h2>
            <p className="text-secondary/60 max-w-md">
              We support incubations for both tech‑based and non‑tech products
              and programmes. The objective is positive market impact—built with
              modern systems.
            </p>
            <div className="pt-4 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-secondary/60">
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                Product
              </span>
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                Program
              </span>
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                Training
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {lanes.map((lane, i) => (
              <TactileCard key={lane.title} delay={i * 0.06} className="h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`h-11 w-11 rounded-2xl flex items-center justify-center ${
                        lane.tint === "accent"
                          ? "bg-accent/10"
                          : lane.tint === "secondary"
                            ? "bg-secondary/10"
                            : "bg-tertiary/20"
                      }`}
                    >
                      <lane.icon
                        className={`w-6 h-6 ${
                          lane.tint === "accent"
                            ? "text-accent"
                            : lane.tint === "secondary"
                              ? "text-secondary"
                              : "text-tertiary"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/50">
                      Lane
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-secondary">
                      {lane.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {lane.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-sm text-secondary/75">
                    {lane.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-accent/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-secondary/80 hover:text-accent transition-colors"
                  >
                    Explore lane <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </TactileCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

