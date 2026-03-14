// app/components/MagneticButton.tsx
"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  magneticStrength?: number; // Add this
  maxOffset?: number; // Add this
}

export const MagneticButton = React.memo<MagneticButtonProps>(
  function MagneticButton({
    children,
    className = "",
    onClick,
    type = "button",
    ariaLabel,
    magneticStrength = 0.2, // Default value
    maxOffset = 12, // Default value
  }) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = (e.clientX - centerX) * magneticStrength;
        const distY = (e.clientY - centerY) * magneticStrength;

        // Clamp to max offset
        const clampedX = Math.max(-maxOffset, Math.min(maxOffset, distX));
        const clampedY = Math.max(-maxOffset, Math.min(maxOffset, distY));

        setPosition({ x: clampedX, y: clampedY });
      },
      [magneticStrength, maxOffset],
    );

    const handleMouseLeave = useCallback(() => {
      setPosition({ x: 0, y: 0 });
    }, []);

    return (
      <motion.button
        ref={buttonRef}
        type={type}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
          restDelta: 0.001,
        }}
        style={{
          position: "relative",
          display: "inline-flex",
        }}
        className={className}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>
    );
  },
);
