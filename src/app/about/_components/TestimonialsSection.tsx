import { motion } from "framer-motion";

const paradoxBlocks = [
  {
    heading: "Traditional Academia",
    bullets: [
      "Learning tools like Photoshop or Python in isolation without market context.",
      "Memorizing distribution frameworks from the 2010s that no longer apply.",
    ],
  },
  {
    heading: "Sinfox Methodology",
    bullets: [
      "Stack integration: using AI to generate assets while Python handles the logic.",
      "Live algorithmic testing: understanding discovery engine math in real time.",
    ],
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary text-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(243,244,241,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">
            The Education Paradox
          </span>
          <h2 className="text-4xl font-bold mb-2">Theory vs. Reality</h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            We mapped the exact friction points where traditional academic
            models fail against the demands of the 2026 economy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paradoxBlocks.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                <h3 className="font-bold text-lg mb-3">{item.heading}</h3>
                <ul className="space-y-2 text-sm text-primary/80">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

