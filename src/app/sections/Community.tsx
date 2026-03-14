// app/sections/Community.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { TactileCard } from "@/app/components/TactileCard";

export const Community = React.memo(function Community() {
  return (
    <section
      id="community"
      className="py-32 bg-primary relative"
      aria-labelledby="community-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            id="community-heading"
            className="text-4xl md:text-5xl font-bold text-secondary mb-4"
          >
            The Sinfox <span className="text-accent">Venture Lab</span>
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            We don&apos;t do homework. We build projects that get funded.
            Students collaborate on real‑world infrastructure in a live lab
            setting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <TactileCard className="h-full">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent/80">
                01 · Rapid Prototyping
              </span>
              <h3 className="text-xl font-bold text-secondary">
                Logic‑Stacks to SaaS
              </h3>
              <p className="text-secondary/70 text-sm leading-relaxed">
                Convert architecture diagrams into market‑ready SaaS prototypes
                in under 14 days, using AI agents as your engineering bench.
              </p>
            </div>
          </TactileCard>

          <TactileCard className="h-full">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent/80">
                02 · AI Orchestration
              </span>
              <h3 className="text-xl font-bold text-secondary">
                Agentic Workflows
              </h3>
              <p className="text-secondary/70 text-sm leading-relaxed">
                Deploy custom‑trained agent teams into live business ecosystems
                that write copy, analyze data, and execute playbooks on
                autopilot.
              </p>
            </div>
          </TactileCard>

          <TactileCard className="h-full">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-accent/80">
                03 · Venture Defense
              </span>
              <h3 className="text-xl font-bold text-secondary">
                Fundable Narratives
              </h3>
              <p className="text-secondary/70 text-sm leading-relaxed">
                Top graduates pitch their business models to institutional
                investors, defending the math, the architecture, and the vibe.
              </p>
            </div>
          </TactileCard>
        </div>
      </div>
    </section>
  );
});
