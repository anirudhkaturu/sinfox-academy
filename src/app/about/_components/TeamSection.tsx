import { motion } from "framer-motion";

import { TactileCard } from "@/app/components/TactileCard";

const steps = [
  {
    step: "01",
    title: "Deconstruction",
    description:
      "Breaking down complex market successes into repeatable logic-stacks.",
  },
  {
    step: "02",
    title: "System Design",
    description:
      'Building the automation and AI workflows to handle the "heavy lifting."',
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Deploying high-fidelity assets into live, competitive environments.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "Using terminal-level analytics to refine both the vibe and the math.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">
            Operational Flow
          </span>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            The 4-Step Engineering Cycle
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            A closed-loop system for turning abstract ideas into market-grade
            architectures that compound over time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TactileCard className="text-center group h-full">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-secondary to-tertiary flex items-center justify-center text-primary text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform font-mono">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-1">
                  {item.title}
                </h3>
                <p className="text-secondary/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </TactileCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

