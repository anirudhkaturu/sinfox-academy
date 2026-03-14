"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircuitBoard, Compass, Sparkles } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

const coreCourses = [
  {
    id: "01",
    track: "Distribution",
    label: "Digital Marketing",
    tag: "Full‑Funnel Acquisition Architecture",
    description:
      "Move past basic ads into engineered acquisition ecosystems, backed by attribution math and performance logic.",
    bullets: [
      "Performance Funnel Architecture",
      "Algorithmic SEO & Content Moats",
      "Data‑Driven Ad Optimization",
      "Omnichannel Scale Management",
    ],
  },
  {
    id: "02",
    track: "Technical",
    label: "Powered AI",
    tag: "LLM Systems & Agentic Workflows",
    description:
      "Integrate Large Language Models and generative systems directly into live business and product workflows.",
    bullets: [
      "LLM Pipeline Implementation",
      "AI Agent Orchestration",
      "Generative Workflow Automation",
      "Cognitive Resource Scaling",
    ],
  },
  {
    id: "03",
    track: "Strategy",
    label: "Entrepreneurship",
    tag: "Venture Architecture & Capital Flows",
    description:
      "The institutional science of building ventures: from capital allocation to organizational scaling.",
    bullets: [
      "Venture Design & Market Gaps",
      "Revenue Operations & Finance",
      "Strategic Team Architecture",
      "Exit & Acquisition Frameworks",
    ],
  },
  {
    id: "04",
    track: "Human Interface",
    label: "Communication & PD",
    tag: "Executive Presence Engineering",
    description:
      "Master negotiation, rhetoric, and interpersonal logic required to operate at executive altitude.",
    bullets: [
      "Neuro‑Linguistic Negotiation",
      "Executive Image & Brand Presence",
      "Crisis Management Rhetoric",
      "Interpersonal Dynamics Logic",
    ],
  },
  {
    id: "05",
    track: "Creative",
    label: "Vibe Coding",
    tag: "Aesthetics, Motion & Resonance",
    description:
      "Design software and media that feel inevitable: high‑fidelity visuals, motion, and interaction psychology.",
    bullets: [
      "Aesthetic Sensory Design",
      "Interaction Psychology & UX",
      "Visual Brand Cohesion",
      "Micro‑Experience Engineering",
    ],
  },
  {
    id: "06",
    track: "Intelligence",
    label: "Prompt Engineering",
    tag: "Neural Interface Linguistics",
    description:
      "Learn the logic structures that turn neural networks into leverage engines instead of toy assistants.",
    bullets: [
      "Chain‑of‑Thought Structuring",
      "Few‑Shot & Zero‑Shot Mastery",
      "Context‑Window Optimization",
      "Multi‑Modal Command Design",
    ],
  },
];

export function CoreStackSection() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_minmax(0,2fr)] gap-10 items-start mb-12">
          <div className="space-y-4">
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
              The Core Stack
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
              Six programs. One objective:
              <br />
              <span className="text-accent">architect high‑leverage careers.</span>
            </h2>
            <p className="text-secondary/60 text-sm md:text-base max-w-md">
              Each course is designed as a modular system: stackable, agentic,
              and tuned for the realities of the 2026 market.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono text-secondary/60">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-secondary/15 bg-secondary/5 px-4 py-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                  <Compass className="w-3 h-3 text-accent" />
                </span>
                <p className="tracking-[0.16em] uppercase text-[11px]">Mode</p>
              </div>
              <p className="text-secondary/90 text-sm">Hybrid · Live + Async</p>
              <p className="text-[10px] text-secondary/60">
                Live seminars + asynchronous build labs so you can operate at
                your own velocity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-2xl border border-secondary/15 bg-secondary/5 px-4 py-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                  <Sparkles className="w-3 h-3 text-accent" />
                </span>
                <p className="tracking-[0.16em] uppercase text-[11px]">
                  Duration
                </p>
              </div>
              <p className="text-secondary/90 text-sm">16 Weeks · Per Track</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="h-1.5 w-6 rounded-full bg-accent/80" />
                <span className="h-1.5 w-6 rounded-full bg-secondary/40" />
                <span className="h-1.5 w-6 rounded-full bg-secondary/20" />
              </div>
              <p className="text-[10px] text-secondary/60">
                Structured sprint cycles with compounding weekly deliverables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-secondary/15 bg-secondary/5 px-4 py-4 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10">
                  <CircuitBoard className="w-3 h-3 text-accent" />
                </span>
                <p className="tracking-[0.16em] uppercase text-[11px]">
                  Output
                </p>
              </div>
              <p className="text-secondary/90 text-sm">
                Live Deployments · Case Decks
              </p>
              <p className="text-[10px] text-secondary/60">
                Ship real systems and defend them with investor‑grade strategy
                decks.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {coreCourses.map((course, index) => (
              <TactileCard
                key={course.id}
                delay={index * 0.05}
                className="relative h-full group"
              >
                <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono tracking-[0.22em] uppercase text-accent/80">
                        {course.track} · {course.id}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-secondary/60 uppercase tracking-[0.18em]">
                      <CircuitBoard className="w-4 h-4 text-accent" />
                      Stack Module
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-secondary group-hover:text-accent transition-colors">
                      {course.label}
                    </h3>
                    <p className="text-xs font-mono text-secondary/60 uppercase tracking-[0.18em]">
                      {course.tag}
                    </p>
                  </div>

                  <p className="text-sm text-secondary/70 leading-relaxed">
                    {course.description}
                  </p>

                  <ul className="mt-1 space-y-1.5 text-sm text-secondary/75">
                    {course.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-accent/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-secondary/80 group-hover:text-accent transition-colors"
                    >
                      Explore Module
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </button>
                    <span className="text-[11px] font-mono text-secondary/50 uppercase tracking-[0.16em]">
                      Seats Limited
                    </span>
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

