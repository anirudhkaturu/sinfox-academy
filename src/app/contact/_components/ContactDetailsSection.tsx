"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Radar, ExternalLink, Navigation } from "lucide-react";

import { TactileCard } from "@/app/components/TactileCard";

export function ContactDetailsSection() {
  return (
    <section className="pb-20 relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] gap-10 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
                Andhra Pradesh Nodes
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                Guntur <span className="text-accent">·</span> Tirupathi
              </h2>
              <p className="text-secondary/60 text-sm max-w-md">
                Twin hubs for incubation, curriculum engineering, and candidate
                vetting across the region.
              </p>
            </div>

            <TactileCard className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Radar className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60">
                  Primary Hubs · Andhra Pradesh Corridor
                </p>
                <p className="text-sm text-secondary/70">
                  Our central intelligence units are strategically placed in
                  Guntur and Tirupathi to manage candidate vetting, technical
                  curriculum engineering, and incubation oversight.
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <a
                    href="https://maps.google.com/?q=Knowledge+City+Corridor+Sector+4+Guntur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-secondary/20 bg-secondary/5 hover:bg-accent/10 hover:border-accent/30 text-xs font-medium text-secondary/80 hover:text-accent transition-all duration-300"
                  >
                    <Navigation className="w-3 h-3" />
                    Guntur Node
                  </a>
                  <a
                    href="https://maps.google.com/?q=Smart+City+Block+Near+SV+University+Tirupathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-secondary/20 bg-secondary/5 hover:bg-accent/10 hover:border-accent/30 text-xs font-medium text-secondary/80 hover:text-accent transition-all duration-300"
                  >
                    <Navigation className="w-3 h-3" />
                    Tirupathi Node
                  </a>
                </div>
              </div>
            </TactileCard>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Physical Nodes Card */}
            <TactileCard className="h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin
                      className="w-4 h-4 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60">
                      Physical Nodes
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      Guntur
                    </p>
                    <p className="text-sm text-secondary/80">
                      Knowledge City Corridor, Sector 4
                    </p>
                    <a
                      href="https://maps.google.com/?q=Knowledge+City+Corridor+Sector+4+Guntur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs text-secondary/60 hover:text-accent transition-colors"
                    >
                      Get directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-secondary">
                      Tirupathi
                    </p>
                    <p className="text-sm text-secondary/80">
                      Smart City Block, Near SV University
                    </p>
                    <a
                      href="https://maps.google.com/?q=Smart+City+Block+Near+SV+University+Tirupathi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs text-secondary/60 hover:text-accent transition-colors"
                    >
                      Get directions <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </TactileCard>

            {/* Digital Transmission Card */}
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
                      className="text-secondary/80 hover:text-accent transition-colors block"
                    >
                      admissions@sinfoxacademics.com
                    </a>
                    <a
                      href="mailto:support@sinfoxglobal.com"
                      className="text-secondary/80 hover:text-accent transition-colors block"
                    >
                      support@sinfoxglobal.com
                    </a>
                  </div>
                  <p className="text-[10px] font-mono text-secondary/40 mt-2">
                    Response within 24h
                  </p>
                </div>
              </div>
            </TactileCard>
          </div>
        </div>
      </div>
    </section>
  );
}
