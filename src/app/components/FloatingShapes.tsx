// app/components/FloatingShapes.tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { COLORS } from "@/app/lib/constants";

// Seeded random number generator for consistent SSR/CSR
function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export const FloatingShapes = React.memo(function FloatingShapes() {
  const shapes = useMemo(
    () =>
      [...Array(5)].map((_, i) => {
        // Reduced from 6 to 5
        const seed = i * 1000;
        return {
          id: i,
          isSecondary: i % 2 === 0,
          // Smaller size range for less GPU load
          width: Math.floor(seededRandom(seed) * 200) + 300, // 300-500px
          height: Math.floor(seededRandom(seed + 1) * 200) + 300,
          left: `${Math.floor(seededRandom(seed + 2) * 70) + 15}%`,
          top: `${Math.floor(seededRandom(seed + 3) * 70) + 15}%`,
          // Longer durations = fewer keyframe calculations
          duration: 45 + Math.floor(seededRandom(seed + 4) * 20), // 45-65s
          xRange: Math.floor(seededRandom(seed + 5) * 30) + 20, // Reduced range
          yRange: Math.floor(seededRandom(seed + 6) * 30) + 20,
          delay: i * 3, // Longer stagger
          scaleMin: 0.92 + seededRandom(seed + 7) * 0.08,
          scaleMax: 1.05 + seededRandom(seed + 8) * 0.05,
        };
      }),
    [],
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none contain-strict" // Added contain-strict
      aria-hidden="true"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full will-change-transform"
          style={{
            background: shape.isSecondary ? COLORS.secondary : COLORS.accent,
            width: shape.width,
            height: shape.height,
            left: shape.left,
            top: shape.top,
            // Reduced blur for better performance
            filter: "blur(40px)",
            opacity: 0.22,
            // GPU acceleration hints
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
          initial={{ scale: shape.scaleMin, x: 0, y: 0, opacity: 0 }}
          animate={{
            // Simplified 3-point animation instead of 5
            x: [0, shape.xRange, 0],
            y: [0, -shape.yRange, 0],
            scale: [shape.scaleMin, shape.scaleMax, shape.scaleMin],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
            // Reduced keyframe points
            times: [0, 0.5, 1],
            // Performance: reduced motion sampling
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Optimized vignette - single layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(243, 244, 241, 0.4) 100%)",
        }}
      />
    </div>
  );
});
