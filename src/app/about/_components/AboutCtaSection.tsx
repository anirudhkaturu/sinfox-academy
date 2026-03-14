import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/app/components/MagneticButton";

export function AboutCtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-secondary to-tertiary rounded-3xl p-12 md:p-16 text-primary relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Join the 1%.
            </h2>
            <p className="text-primary/80 text-lg mb-8 max-w-xl mx-auto">
              Our curriculum is updated monthly. We don&apos;t teach what worked
              yesterday; we engineer what works tomorrow.
            </p>
            <MagneticButton
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              ariaLabel="Apply now"
            >
              Secure Admission <ArrowUpRight className="w-5 h-5" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

