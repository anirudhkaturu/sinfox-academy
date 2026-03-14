// app/sections/Features.tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Code2, TrendingUp, Users, Target, ChevronRight } from "lucide-react";
import { TactileCard } from "@/app/components/TactileCard";
import { ScrambleText } from "@/app/components/ScrambleText";
import { COLORS } from "@/app/lib/constants";

export const Features = React.memo(function Features() {
  const features = useMemo(
    () => [
      {
        icon: Code2,
        title: "Vibe Coding & UI Resonance",
        description:
          "Design interfaces and content that feel native to the future, not recycled from 2015 Dribbble boards.",
        color: COLORS.secondary,
      },
      {
        icon: TrendingUp,
        title: "Algorithmic Distribution Logic",
        description:
          "Understand discovery engine math in real time and engineer systems that win attention on purpose.",
        color: COLORS.accent,
      },
      {
        icon: Users,
        title: "Market-Ready Unit Economics",
        description:
          "Build offers, funnels, and pricing models that survive contact with real customers and real CAC.",
        color: COLORS.tertiary,
      },
      {
        icon: Target,
        title: "Executive Crisis Management",
        description:
          "Learn to think like a venture operator under pressure: high-stakes rhetoric, clear decisions, clean math.",
        color: COLORS.secondary,
      },
      {
        icon: Users,
        title: "Venture Design & Scaling",
        description:
          "Architect SaaS, media, and product ecosystems that compound instead of plateauing at 10K MRR.",
        color: COLORS.accent,
      },
      {
        icon: Target,
        title: "Sinfox Global Network Access",
        description:
          "Plug into a vetted network of operators, founders, and investors aligned around leverage, not vanity.",
        color: COLORS.tertiary,
      },
    ],
    [],
  );

  return (
    <section
      id="curriculum"
      className="py-32 bg-primary relative overflow-hidden"
      aria-labelledby="curriculum-heading"
    >
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-tertiary/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            The 6 Pillars
          </span>
          <h2
            id="curriculum-heading"
            className="text-4xl md:text-5xl font-bold text-secondary"
          >
            Student <ScrambleText text="Paths" className="text-accent" />
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto text-lg">
            Systems over tools. Every pillar compounds into a high‑leverage profile instead of a generic resume.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <TactileCard key={feature.title} delay={i * 0.1} className="group">
              <div className="flex items-start gap-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-7 h-7"
                    style={{ color: feature.color }}
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-secondary/70 leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent transition-colors pt-2"
                    whileHover={{ x: 5 }}
                    aria-label={`Learn more about ${feature.title}`}
                  >
                    Learn more{" "}
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                </div>
              </div>
            </TactileCard>
          ))}
        </div>
      </div>
    </section>
  );
});
