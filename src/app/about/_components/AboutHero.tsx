import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
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
          className="max-w-3xl"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block">
            SKILL BRIDGE / Academy
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary leading-[1.05] mb-6">
            We Build the{" "}
            <span className="relative inline-block">
              Engineers of Choice
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </span>
          </h1>
          <p className="text-xl text-secondary/60 leading-relaxed max-w-2xl">
            SKILL BRIDGE Academy is not a school; it is a technical environment
            designed to bridge the gap between abstract university theory and
            the high-fidelity reality of modern markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

