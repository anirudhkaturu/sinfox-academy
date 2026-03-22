"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

import {
  Rocket,
  Users,
  Banknote,
  Building2,
  Scale,
  TrendingUp,
  Presentation,
  Network,
  ClipboardCheck,
  Search,
  Handshake,
  Award,
  Target,
  Zap,
  Shield,
  Sparkles,
  BarChart3,
  Users2,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Startup Acceleration",
    description:
      "A structured, milestone-driven program designed to validate, refine, and scale high-potential business models through disciplined execution frameworks.",
    icon: Rocket,
    accent: "accent",
  },
  {
    num: "02",
    title: "Mentorship & Strategic Advisory",
    description:
      "Direct access to experienced founders, operators, and domain specialists providing continuous guidance on product, growth, and business strategy.",
    icon: Users,
    accent: "secondary",
  },
  {
    num: "03",
    title: "Capital Access & Investor Network",
    description:
      "Curated exposure to early-stage investors, angel networks, and funding opportunities with structured support for fundraising readiness.",
    icon: Banknote,
    accent: "tertiary",
  },
  {
    num: "04",
    title: "Workspace & Technical Infrastructure",
    description:
      "Access to collaborative workspaces, development environments, and shared resources to accelerate product building and experimentation.",
    icon: Building2,
    accent: "accent",
  },
  {
    num: "05",
    title: "Legal, Compliance & IP Support",
    description:
      "End-to-end assistance with company formation, intellectual property protection, and regulatory frameworks to ensure long-term stability.",
    icon: Scale,
    accent: "secondary",
  },
  {
    num: "06",
    title: "Go-To-Market Execution",
    description:
      "Strategic guidance on customer acquisition, positioning, and pilot launches to establish strong early market traction.",
    icon: TrendingUp,
    accent: "tertiary",
  },
  {
    num: "07",
    title: "Pitch Readiness & Demo Platforms",
    description:
      "Structured pitch development, storytelling refinement, and exclusive opportunities to present before investors and ecosystem leaders.",
    icon: Presentation,
    accent: "accent",
  },
  {
    num: "08",
    title: "Ecosystem & Strategic Partnerships",
    description:
      "Connections with industry, academia, and institutional partners to unlock collaboration, distribution, and growth opportunities.",
    icon: Network,
    accent: "secondary",
  },
];

// Visual stages for the left column
const selectionStages = [
  { icon: ClipboardCheck, label: "Apply", description: "Initial submission" },
  { icon: Search, label: "Review", description: "Due diligence" },
  { icon: Handshake, label: "Interview", description: "Cultural & technical" },
  { icon: Award, label: "Select", description: "Portfolio fit" },
];

// New: what we look for – four pillars
const selectionPillars = [
  {
    icon: Target,
    title: "Signal",
    description: "Clear problem-solution fit & defensible insight",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Bias toward action & rapid iteration",
  },
  {
    icon: Shield,
    title: "Ethics",
    description: "Integrity, transparency & long-term thinking",
  },
  {
    icon: Sparkles,
    title: "Trajectory",
    description: "Scalability & category-defining ambition",
  },
];

// Program impact stats
const impactStats = [
  { value: "85%", label: "Follow-on funding", icon: BarChart3 },
  { value: "120+", label: "Mentor network", icon: Users2 },
  { value: "10x", label: "Avg. growth (post-program)", icon: TrendingUpIcon },
];

export function SelectionProcessSection() {
  return (
    <section className="pb-24 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] gap-12 items-start">
          {/* LEFT COLUMN – Enhanced with tactile elements and balanced height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 relative group"
          >
            {/* Hover border effect */}
            <div className="absolute -inset-6 rounded-2xl bg-linear-to-r from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative space-y-8">
              {/* Header */}
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50 mb-2">
                  Candidate Selection
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-secondary leading-tight">
                  Join the{" "}
                  <span className="text-accent relative inline-block">
                    Elite Rank
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent/40 rounded-full" />
                  </span>
                  .
                </h2>
                <p className="text-secondary/60 max-w-md mt-4">
                  A vetting sequence that prioritizes signal: execution, logic,
                  ethics, and trajectory.
                </p>
              </div>

              {/* Visual 4‑stage overview */}
              <div className="grid grid-cols-4 gap-2">
                {selectionStages.map((stage, idx) => (
                  <div
                    key={stage.label}
                    className="group/stage relative text-center"
                  >
                    <div className="relative flex justify-center mb-2">
                      <div className="p-2 rounded-xl bg-secondary/5 group-hover/stage:bg-accent/10 transition-all duration-300 ring-1 ring-secondary/10 group-hover/stage:ring-accent/30">
                        <stage.icon className="w-4 h-4 text-secondary/60 group-hover/stage:text-accent transition-colors" />
                      </div>
                      {/* Connector line between stages */}
                      {idx < selectionStages.length - 1 && (
                        <div className="absolute top-1/2 left-[calc(50%+1rem)] w-6 h-px bg-secondary/20 group-hover/stage:bg-accent/30 transition-colors" />
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wide text-secondary/50 group-hover/stage:text-accent transition-colors">
                      {stage.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* What We Look For – four pillars */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/40">
                  What We Look For
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {selectionPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="group/pillar p-3 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <pillar.icon className="w-3.5 h-3.5 text-accent" />
                        <span className="text-xs font-bold text-secondary/80">
                          {pillar.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-secondary/60 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Impact */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/40">
                  Program Impact
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-2 rounded-xl bg-secondary/5 border border-secondary/10"
                    >
                      <div className="flex justify-center mb-1">
                        <stat.icon className="w-4 h-4 text-secondary/40" />
                      </div>
                      <div className="text-lg font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wide text-secondary/50">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive badges + pulse */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.18em] text-secondary/60">
                <div className="flex items-center gap-3">
                  {["4 Stages", "Portfolio‑First", "Fit‑Checked"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full border border-secondary/15 bg-secondary/5 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default"
                      >
                        {badge}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-secondary/40">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                  </span>
                  <span>Active selection</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <button
                  type="button"
                  className="group/cta w-full flex items-center justify-between px-5 py-3 rounded-xl bg-linear-to-r from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-secondary/90 group-hover/cta:text-accent transition-colors">
                    Start your application
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-secondary/60 group-hover/cta:text-accent transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN – Unchanged */}
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
