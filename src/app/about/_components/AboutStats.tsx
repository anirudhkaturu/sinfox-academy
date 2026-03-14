import { motion } from "framer-motion";

const stats = [
  {
    value: "[01]",
    label: "Eliminating the Theory_Gap",
    suffix: "... DONE",
  },
  {
    value: "[02]",
    label: "Integrating Agentic_Workflows",
    suffix: "... ACTIVE",
  },
  {
    value: "[03]",
    label: "Scaling Individual_Leverage",
    suffix: "... MAX",
  },
];

export function AboutStats() {
  return (
    <section className="py-12 border-y border-secondary/10 bg-secondary/2 font-mono">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-secondary/50">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

