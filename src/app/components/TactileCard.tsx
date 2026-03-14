// app/components/TactileCard.tsx
"use client";

import React, { useState, useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";

interface TactileCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TactileCard = React.memo<TactileCardProps>(function TactileCard({
  children,
  className = "",
  delay = 0,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    setRotation({
      x: (mouseY / (rect.height / 2)) * -10,
      y: (mouseX / (rect.width / 2)) * 10,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const cardStyle = useMemo(
    () => ({
      transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
      transition: "transform 0.1s ease-out",
    }),
    [rotation.x, rotation.y, isHovered],
  );

  const highlightStyle = useMemo(
    () => ({
      background: isHovered
        ? `radial-gradient(circle at ${50 + rotation.y * 2}% ${50 + rotation.x * 2}%, rgba(230,126,34,0.1) 0%, transparent 60%)`
        : "none",
      opacity: isHovered ? 1 : 0,
    }),
    [isHovered, rotation.x, rotation.y],
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`relative bg-primary rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(1,50,32,0.15)] border border-tertiary/20 backdrop-blur-sm ${className}`}
    >
      <div
        className="absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none"
        style={highlightStyle}
      />
      {children}
    </motion.div>
  );
});
