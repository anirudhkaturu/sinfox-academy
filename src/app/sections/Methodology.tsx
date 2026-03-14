// app/sections/Methodology.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export const Methodology = React.memo(function Methodology() {
  return (
    <section
      id="methodology"
      className="py-32 bg-secondary text-primary relative overflow-hidden"
      aria-labelledby="methodology-heading"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(243,244,241,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2
              id="methodology-heading"
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Academic Integration
              <br />
              <span className="text-accent">Tailored Progression.</span>
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed max-w-lg">
              Our curriculum adapts to your stage, providing leverage for both
              first‑time career seekers and advanced venture founders. You
              choose the path; we provide the architecture.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono uppercase tracking-[0.18em] text-primary/60">
              <span className="px-3 py-1 rounded-full border border-primary/25 bg-primary/5">
                Undergraduate
              </span>
              <span className="px-3 py-1 rounded-full border border-primary/25 bg-primary/5">
                Graduate
              </span>
              <span className="px-3 py-1 rounded-full border border-primary/25 bg-primary/5">
                Alumni / Operators
              </span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-primary/15 bg-primary/5 p-6 flex flex-col gap-3"
            >
              <span className="text-xs font-mono tracking-[0.2em] text-accent/80 uppercase">
                Undergraduate
              </span>
              <h3 className="text-xl font-bold">Career Launchpad</h3>
              <p className="text-primary/70 text-sm">
                Bypass the entry‑level grind. Enter the market as a high‑value
                architect with a portfolio of live AI deployments.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-primary/80">
                <li>• Vibe Coding &amp; UI Resonance</li>
                <li>• Algorithmic Distribution Logic</li>
                <li>• Market‑Ready Unit Economics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-primary/15 bg-primary/5 p-6 flex flex-col gap-3"
            >
              <span className="text-xs font-mono tracking-[0.2em] text-accent/80 uppercase">
                Graduate / Alumni
              </span>
              <h3 className="text-xl font-bold">Venture Leadership</h3>
              <p className="text-primary/70 text-sm">
                Scale your influence. Focus on organizational architecture,
                high‑stakes rhetoric, and venture design.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-primary/80">
                <li>• Executive Crisis Management</li>
                <li>• Venture Design &amp; Scaling</li>
                <li>• Sinfox Global Network Access</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
