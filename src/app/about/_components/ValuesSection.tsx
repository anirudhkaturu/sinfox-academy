import { motion } from "framer-motion";
import { Cpu, Network, RadioTower } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

const values = [
  {
    icon: RadioTower,
    title: "Algorithmic Distribution",
    description:
      "Mastering the mathematical discovery engines that determine reach. We treat visibility as an engineering problem.",
    color: "accent",
  },
  {
    icon: Network,
    title: "Vibe Resonance",
    description:
      'The study of visual linguistics and psychological triggers. Designing content that "feels" native to the future.',
    color: "secondary",
  },
  {
    icon: Cpu,
    title: "Agentic Orchestration",
    description:
      "Learning to manage teams of AI agents to perform the labor of ten people, scaling your individual output.",
    color: "tertiary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ValuesSection() {
  return (
    <section className="py-24 bg-secondary/2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">
            The Architecture of Leverage
          </span>
          <h2 className="text-4xl font-bold text-secondary">
            Core Strategic Pillars
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants}>
              <TactileCard className="h-full group">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                      value.color === "secondary"
                        ? "bg-secondary/10"
                        : value.color === "accent"
                          ? "bg-accent/10"
                          : "bg-tertiary/20"
                    }`}
                  >
                    <value.icon
                      className={`w-6 h-6 ${
                        value.color === "secondary"
                          ? "text-secondary"
                          : value.color === "accent"
                            ? "text-accent"
                            : "text-tertiary"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-secondary/60 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </TactileCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

