"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Radar } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

export function ContactDetailsSection() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
                Institutional Node 01
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Knowledge City Corridor, Sector 4
                <br />
                <span className="text-accent">Guntur, Andhra Pradesh</span>
              </h2>
            </div>

            <TactileCard className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Radar className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60">
                  Primary Hub · Andhra Pradesh Node
                </p>
                <p className="text-sm text-secondary/70">
                  Our central intelligence unit for candidate vetting, technical
                  curriculum engineering, and incubation oversight.
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-secondary/80 hover:text-accent transition-colors"
                >
                  Launch Navigation Interface ↗
                </button>
              </div>
            </TactileCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <TactileCard className="h-full">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60">
                    Physical Node
                  </p>
                  <p className="text-sm text-secondary/80">
                    Knowledge City Corridor, Sector 4
                    <br />
                    Guntur, Andhra Pradesh
                  </p>
                </div>
              </div>
            </TactileCard>

            <TactileCard className="h-full">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60">
                    Digital Transmission
                  </p>
                  <div className="space-y-1 text-sm">
                    <a
                      href="mailto:admissions@sinfoxacademics.com"
                      className="text-secondary/80 hover:text-accent transition-colors"
                    >
                      admissions@sinfoxacademics.com
                    </a>
                    <br />
                    <a
                      href="mailto:support@sinfoxglobal.com"
                      className="text-secondary/80 hover:text-accent transition-colors"
                    >
                      support@sinfoxglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </TactileCard>
          </div>
        </div>
      </div>
    </section>
  );
}

