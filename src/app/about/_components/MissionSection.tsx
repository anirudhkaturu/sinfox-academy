import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { MagneticButton } from "@/app/components/MagneticButton";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { COLORS } from "@/app/lib/constants";

export function MissionSection() {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const springConfig = { stiffness: 60, damping: 25 };
  const rawY = useTransform(scrollY, [0, 500], [0, -80]);
  const y = useSpring(rawY, springConfig);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-secondary">Our Objective</h2>
            <p className="text-sm font-mono text-accent/70 tracking-[0.25em] uppercase">
              Replacing Theory With Architecture
            </p>
            <p className="text-lg text-secondary/60 leading-relaxed">
              The digital economy evolves monthly, while traditional education
              updates every decade. We have stripped away the &quot;How-To&quot;
              tutorials to focus on high-leverage systems.
            </p>
            <p className="text-lg text-secondary/60 leading-relaxed">
              Our graduates don&apos;t just &quot;do social media&quot; or
              &quot;write code.&quot; They engineer distribution logic,
              orchestrate agentic workflows, and design resonant digital vibes.
            </p>
            <div className="flex gap-4 pt-4">
              <MagneticButton
                className="bg-secondary text-primary px-6 py-3 rounded-full font-medium"
                ariaLabel="Apply to Sinfox Academy"
              >
                Apply <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </motion.div>

          {!isMobile && (
            <motion.div style={{ y }} className="relative">
              <div className="aspect-square rounded-3xl bg-primary/80 border border-secondary/20 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, ${COLORS.secondary} 1px, transparent 0)`,
                      backgroundSize: "18px 18px",
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-secondary/20 bg-primary/60 backdrop-blur-sm">
                    <span className="text-xs font-mono text-secondary/60">
                      SINFOX_PROTOCOL
                    </span>
                    <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(214,255,0,0.8)]" />
                  </div>

                  <div className="flex-1 px-6 py-4 text-xs font-mono text-secondary/80 grid grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)] gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="h-1 w-4 rounded-full bg-accent/80" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-secondary/60">
                          Mission_Log
                        </span>
                      </div>
                      <div className="space-y-2 border-l border-secondary/30 pl-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-accent/80">[01]</span>
                            <span className="truncate">
                              Eliminating the{" "}
                              <span className="text-accent">Theory_Gap</span>
                            </span>
                            <span className="text-[10px] text-accent/70">
                              DONE
                            </span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-secondary/20 overflow-hidden">
                            <div className="h-full w-full bg-accent/70" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-accent/80">[02]</span>
                            <span className="truncate">
                              Integrating{" "}
                              <span className="text-accent">
                                Agentic_Workflows
                              </span>
                            </span>
                            <span className="text-[10px] text-tertiary/80">
                              ACTIVE
                            </span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-secondary/20 overflow-hidden">
                            <div className="h-full w-2/3 bg-tertiary/80" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-accent/80">[03]</span>
                            <span className="truncate">
                              Scaling{" "}
                              <span className="text-accent">
                                Individual_Leverage
                              </span>
                            </span>
                            <span className="text-[10px] text-secondary/70">
                              MAX
                            </span>
                          </div>
                          <div className="h-1 w-full rounded-full bg-secondary/20 overflow-hidden">
                            <div className="h-full w-5/6 bg-secondary/80" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="rounded-lg border border-secondary/30 bg-primary/40 px-2 py-1.5">
                          <div className="text-[9px] uppercase tracking-[0.16em] text-secondary/60">
                            Latency
                          </div>
                          <div className="text-[11px] text-secondary/90">
                            12ms
                          </div>
                        </div>
                        <div className="rounded-lg border border-secondary/30 bg-primary/40 px-2 py-1.5">
                          <div className="text-[9px] uppercase tracking-[0.16em] text-secondary/60">
                            Throughput
                          </div>
                          <div className="text-[11px] text-secondary/90">
                            3.4x
                          </div>
                        </div>
                        <div className="rounded-lg border border-secondary/30 bg-primary/40 px-2 py-1.5">
                          <div className="text-[9px] uppercase tracking-[0.16em] text-secondary/60">
                            Confidence
                          </div>
                          <div className="text-[11px] text-secondary/90">
                            98%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="relative h-32 w-32 rounded-full border border-secondary/40 bg-radial from-accent/20 via-primary/10 to-primary/0">
                        <div className="absolute inset-3 rounded-full border border-secondary/30" />
                        <div className="absolute inset-6 rounded-full border border-secondary/20" />
                        <motion.div
                          className="absolute inset-0"
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <span className="absolute -top-1 left-1 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(214,255,0,0.9)]" />
                          <span className="absolute bottom-3 right-0 h-1.5 w-1.5 rounded-full bg-tertiary shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
                          <span className="absolute top-6 right-6 h-1.5 w-1.5 rounded-full bg-secondary/80" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[9px] text-secondary/70 tracking-[0.2em] uppercase">
                            Vibe_Map
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-5 pt-3 border-t border-secondary/20 flex items-center justify-between bg-primary/70 backdrop-blur-sm">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-secondary/50">
                        # PHILOSOPHY_MANIFESTO
                      </span>
                      <span className="text-[10px] text-secondary/70">
                        &quot;Tools are temporary. Systems are permanent.&quot;
                      </span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-linear-to-br from-secondary to-accent/80 flex items-center justify-center text-[10px] font-mono text-primary">
                      SX_24
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute -top-4 -right-6 h-24 w-24 rounded-full bg-accent/15 blur-2xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-tertiary/20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1.2 }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

