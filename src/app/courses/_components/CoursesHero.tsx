"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { ScrambleText } from "@/app/components/ScrambleText";

export function CoursesHero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#013220 1px, transparent 1px), linear-gradient(90deg, #013220 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-4"
        >
          <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] uppercase text-secondary/60">
            <span>SKILLBRIDGE / Academy</span>
            <span className="h-px w-10 bg-accent/70" />
            <span>2026 Curriculum</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
            The{" "}
            <span className="inline-flex items-center gap-2">
              <ScrambleText
                text="New Era"
                className="text-accent"
                alwaysAnimate
              />
              <Sparkles className="w-5 h-5 text-accent" aria-hidden="true" />
            </span>{" "}
            Stack.
          </h1>
          <p className="text-lg text-secondary/60 leading-relaxed max-w-xl">
            Beyond traditional learning. We provide the technical and
            psychological infrastructure required to lead in a high‑performance
            digital economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

