// app/sections/CTA.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/app/components/MagneticButton";

export const CTA = React.memo(function CTA() {
  return (
    <section
      className="py-32 bg-primary relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-secondary rounded-3xl p-12 md:p-16 text-primary relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-tertiary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-8">
            <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold">
              Built for the <span className="text-accent">Bold</span>.
            </h2>
            <p className="text-primary/80 text-lg max-w-xl mx-auto">
              Our curriculum is updated monthly. We don&apos;t teach what worked
              yesterday; we engineer what works tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <MagneticButton
                className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                ariaLabel="Secure Admission"
              >
                Secure Admission{" "}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </MagneticButton>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all"
                aria-label="View Program Stack"
              >
                View Stack
              </motion.button>
            </div>

            <p className="text-xs text-primary/60 pt-4 font-mono tracking-[0.18em] uppercase">
              © 2026 SKILL BRIDGE ACADEMY · A Division of Sinfox Global Holdings
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});
