// app/sections/Hero.tsx
"use client";

import React, { useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import {
  BookOpen,
  Code2,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Play,
  Target,
  Layers,
} from "lucide-react";
import { MagneticButton } from "@/app/components/MagneticButton";
import { FloatingShapes } from "@/app/components/FloatingShapes";
import { COLORS } from "@/app/lib/constants";

export const Hero = React.memo(function Hero() {
  const { scrollY } = useScroll();

  // Smooth spring config for parallax
  const springConfig = { stiffness: 60, damping: 25, restDelta: 0.001 };
  const rawY1 = useTransform(scrollY, [0, 600], [0, 60]);
  const rawY2 = useTransform(scrollY, [0, 600], [0, -60]);
  const y1 = useSpring(rawY1, springConfig);
  const y2 = useSpring(rawY2, springConfig);

  const orbitingElements = useMemo(
    () =>
      [0, 90, 180, 270].map((deg, i) => ({
        deg,
        duration: 42 + i * 6,
        iconIndex: i,
      })),
    [],
  );

  const iconComponents = useMemo(
    () => [
      <Zap key="zap" className="w-6 h-6 text-accent" aria-hidden="true" />,
      <Target
        key="target"
        className="w-6 h-6 text-secondary"
        aria-hidden="true"
      />,
      <Layers
        key="layers"
        className="w-6 h-6 text-tertiary"
        aria-hidden="true"
      />,
      <TrendingUp
        key="trending"
        className="w-6 h-6 text-accent"
        aria-hidden="true"
      />,
      <BookOpen
        key="book"
        className="w-6 h-6 text-secondary"
        aria-hidden="true"
      />,
      <Users
        key="users"
        className="w-6 h-6 text-tertiary"
        aria-hidden="true"
      />,
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { value: "500+", label: "Students Trained" },
      { value: "94%", label: "Course Completion Rate" },
      { value: "30+", label: "Startups Incubated" },
    ],
    [],
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-24"
      aria-label="Hero section"
    >
      <FloatingShapes />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#013220 1px, transparent 1px), linear-gradient(90deg, #013220 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:items-start">
          {/* Left Content */}
          <motion.div
            style={{ y: y2 }}
            className="space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
            >
              <span className="text-[11px] uppercase tracking-[0.25em] text-secondary/40">
                Sinfox / Academy
              </span>
              <span className="h-1 w-10 rounded-full bg-accent/80" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-secondary/60">
                Academic Excellence 2026
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary leading-[1.05] tracking-tight"
            >
              <span className="block text-secondary/60 text-base md:text-lg mb-4 font-mono tracking-[0.28em] uppercase">
                Built for Digital Architects
              </span>
              The foundation for{" "}
              <span className="sm:block md:inline relative">
                High‑Leverage Individuals
                <svg
                  className="absolute -bottom-1 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M0,6 Q150,0 300,6"
                    fill="none"
                    stroke={COLORS.accent}
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 0.7, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1] as const,
                    }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary/60 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              Bridging the gap between university theory and market reality. We
              equip undergraduate and graduate students with the high-fidelity
              skills to lead where others merely follow.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start flex-wrap gap-6"
            >
              <MagneticButton
                className="bg-secondary text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_-10px_rgba(1,50,32,0.3)] hover:shadow-[0_20px_60px_-15px_rgba(1,50,32,0.4)] transition-all w-full sm:w-auto"
                ariaLabel="Secure your admission"
                magneticStrength={0.15}
                maxOffset={8}
              >
                Secure Admission{" "}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </MagneticButton>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-secondary/20 text-secondary font-medium hover:border-secondary/40 hover:bg-secondary/5 transition-all w-full sm:w-auto justify-center"
                aria-label="Watch Demo Video"
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Play
                    className="w-4 h-4 ml-0.5 fill-current"
                    aria-hidden="true"
                  />
                </motion.div>
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-secondary/10 justify-center md:justify-start"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="space-y-1"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="text-2xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - BIGGER spinning circle */}
          <motion.div
            style={{ y: y1 }}
            className="relative hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              {/* Central sphere - INCREASED from w-60 h-60 (240px) to w-80 h-80 (320px) */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.secondary} 0%, ${COLORS.tertiary} 50%, ${COLORS.accent} 100%)`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  y: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Inner circle - scaled proportionally from inset-3 to inset-4 */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-primary flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(230, 126, 34, 0)",
                      "0 0 40px 8px rgba(230, 126, 34, 0.2)",
                      "0 0 0 0 rgba(230, 126, 34, 0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Icon - increased from w-20 h-20 (80px) to w-28 h-28 (112px) */}
                  <Code2
                    className="w-28 h-28 text-secondary"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              {/* Orbiting elements - scaled up */}
              {orbitingElements.map((item) => (
                <motion.div
                  key={item.deg}
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  initial={{ rotate: item.deg }}
                  animate={{ rotate: item.deg + 360 }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  <motion.div
                    className="absolute w-12 h-12 rounded-xl bg-primary shadow-lg flex items-center justify-center border border-tertiary/30"
                    style={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    {iconComponents[item.iconIndex]}
                  </motion.div>
                </motion.div>
              ))}

              {/* Decorative rings - scaled up */}
              <motion.div
                className="absolute inset-0 border border-secondary/10 rounded-full"
                animate={{ scale: [1, 1.04, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-14 border border-secondary/5 rounded-full"
                animate={{ scale: [1, 1.02, 1], opacity: [0.05, 0.12, 0.05] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
              <div className="absolute inset-28 border border-dashed border-tertiary/25 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-secondary/25 flex items-start justify-center p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-secondary/50"
            animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
});
