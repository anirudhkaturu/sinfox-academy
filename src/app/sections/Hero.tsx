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

  // Simplified stats – reduced to two key metrics for cleaner presentation
  const stats = useMemo(
    () => [
      { value: "500+", label: "Students Trained" },
      { value: "94%", label: "Course Completion" },
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
                Skill / Bridge
              </span>
              <span className="h-1 w-10 rounded-full bg-accent/80" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-secondary/60">
                Academic Excellence 2026
              </span>
            </motion.div>

            {/* Simplified heading – removed the extra sub-line and made the main message more direct */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary leading-[1.05] tracking-tight"
            >
              Building{" "}
              <span className="relative inline-block">
                High‑Leverage Individuals
                {/* Static underline – simpler than animated SVG */}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/60 rounded-full" />
              </span>
            </motion.h1>

            {/* Shorter, punchier description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary/60 max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              From theory to market reality. We equip students with the skills
              to lead, not just follow.
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

          {/* Right Visual – kept the design but simplified a few animations */}
          <motion.div
            style={{ y: y1 }}
            className="relative hidden lg:flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              {/* Central sphere */}
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
                {/* Inner circle */}
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
                  <Code2
                    className="w-28 h-28 text-secondary"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>

              {/* Orbiting elements */}
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

              {/* Decorative rings – kept but simplified animation */}
              <motion.div
                className="absolute inset-0 border border-secondary/10 rounded-full"
                animate={{ scale: [1, 1.02, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-14 border border-secondary/5 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator – kept as it's subtle and useful */}
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
