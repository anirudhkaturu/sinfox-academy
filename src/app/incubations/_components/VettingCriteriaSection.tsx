"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Brain, LockKeyhole } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

const criteria = [
  {
    title: "Technical Proficiency",
    icon: BadgeCheck,
    bullets: [
      "Understanding of digital distribution models",
      "Basic data literacy & analytical skills",
      "Familiarity with tracking architectures",
      "Experience with digital creative assets",
    ],
    tint: "secondary",
  },
  {
    title: "Strategic Mindset",
    icon: Brain,
    bullets: [
      "High-level problem-solving aptitude",
      "Ability to interpret behavioral data",
      "Interest in algorithmic discoverability",
      "Commitment to technical excellence",
    ],
    tint: "accent",
  },
  {
    title: "Institutional Access",
    icon: LockKeyhole,
    bullets: [
      "Completed application dossier",
      "Validated identity documentation",
      "Adherence to ethical execution codes",
      "Professional trajectory alignment",
    ],
    tint: "tertiary",
  },
];

export function VettingCriteriaSection() {
  return (
    <section className="py-20 bg-secondary text-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(243,244,241,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12 space-y-3"
        >
          <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary/60">
            Institutional Requirements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Vetting Criteria</h2>
          <p className="text-primary/75 max-w-2xl mx-auto">
            The bar is intentional. We build operators who can grow high‑impact
            products and serve the market and society in a positive way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {criteria.map((c, i) => (
            <TactileCard
              key={c.title}
              delay={i * 0.06}
              className="bg-primary/5 border-primary/15"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    c.tint === "accent"
                      ? "bg-accent/20"
                      : c.tint === "secondary"
                        ? "bg-primary/15"
                        : "bg-tertiary/25"
                  }`}
                >
                  <c.icon
                    className={`w-6 h-6 ${
                      c.tint === "accent"
                        ? "text-accent"
                        : c.tint === "secondary"
                          ? "text-primary"
                          : "text-tertiary"
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <ul className="space-y-2 text-sm text-primary/80">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TactileCard>
          ))}
        </div>
      </div>
    </section>
  );
}

