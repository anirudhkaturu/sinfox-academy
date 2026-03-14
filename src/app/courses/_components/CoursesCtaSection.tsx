"use client";

import { ArrowUpRight, Palette } from "lucide-react";

import { MagneticButton } from "@/app/components/MagneticButton";
import { TactileCard } from "@/app/components/TactileCard";

export function CoursesCtaSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <TactileCard className="bg-linear-to-br from-secondary to-tertiary text-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6 py-10 px-4 md:px-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-[11px] font-mono uppercase tracking-[0.2em]">
              <Palette className="w-3 h-3" />
              Ready to Level Up?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Cohort sizes are{" "}
              <span className="text-accent">strictly limited</span>.
            </h2>
            <p className="text-primary/80 text-sm md:text-base max-w-xl mx-auto">
              To preserve signal, we cap each intake and prioritize applicants
              who are already operating or ready to operate at a
              high‑performance standard.
            </p>
            <MagneticButton
              className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl"
              ariaLabel="Apply for next cohort"
            >
              Apply for Next Cohort{" "}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </MagneticButton>
            <p className="text-[11px] text-primary/70 font-mono tracking-[0.18em] uppercase pt-2">
              © 2026 Sinfox Academics · Built for the Bold · A Division of
              Sinfox Global Holdings
            </p>
          </div>
        </TactileCard>
      </div>
    </section>
  );
}

