"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, FileText, Shield, Target } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

const steps = [
  {
    num: "01",
    title: "Module Selection",
    description:
      "Align your technical background with our specialized growth modules to ensure a high-impact learning trajectory.",
    icon: Target,
    accent: "accent",
  },
  {
    num: "02",
    title: "Digital Portfolio",
    description:
      "Submit evidence of previous technical execution, digital projects, or analytical case studies for initial review.",
    icon: FileText,
    accent: "secondary",
  },
  {
    num: "03",
    title: "Aptitude Audit",
    description:
      "A rigorous assessment of your algorithmic logic and psychological profiling to determine institutional fit.",
    icon: Shield,
    accent: "tertiary",
  },
  {
    num: "04",
    title: "Cohort Onboarding",
    description:
      "Finalize enrollment and gain access to the Sinfox internal tech-stack and proprietary methodology archives.",
    icon: CheckCircle2,
    accent: "accent",
  },
];

export function SelectionProcessSection() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
              Candidate Selection
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight">
              Join the <span className="text-accent">Elite Rank</span>.
            </h2>
            <p className="text-secondary/60 max-w-md">
              A vetting sequence that prioritizes signal: execution, logic,
              ethics, and trajectory.
            </p>

            <div className="pt-3 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-secondary/60">
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                4 Stages
              </span>
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                Portfolio‑First
              </span>
              <span className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5">
                Fit‑Checked
              </span>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <TactileCard key={step.num} delay={i * 0.06} className="h-full">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      step.accent === "accent"
                        ? "bg-accent/10"
                        : step.accent === "secondary"
                          ? "bg-secondary/10"
                          : "bg-tertiary/20"
                    }`}
                  >
                    <step.icon
                      className={`w-6 h-6 ${
                        step.accent === "accent"
                          ? "text-accent"
                          : step.accent === "secondary"
                            ? "text-secondary"
                            : "text-tertiary"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-mono tracking-[0.22em] uppercase text-secondary/50">
                        {step.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-secondary/40">
                        Stage
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {step.description}
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-secondary/80 hover:text-accent transition-colors pt-2"
                    >
                      Explore Stage <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </TactileCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

