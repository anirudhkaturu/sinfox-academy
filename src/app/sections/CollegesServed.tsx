// app/sections/CollegesServed.tsx
"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { TactileCard } from "@/app/components/TactileCard";
import { COLORS } from "@/app/lib/constants";

export const CollegesServed = React.memo(function CollegesServed() {
  const colleges = useMemo(
    () => [
      {
        name: "Vignan University",
        location: "Vadlamudi, Andhra Pradesh",
        focus: "AI & Emerging Technologies",
        logo: "/college_logos/vignan_uni.jpeg",
        color: COLORS.secondary,
        website: "https://vignan.ac.in",
      },
      {
        name: "Sri Venkateswara University",
        location: "Tirupati, Andhra Pradesh",
        focus: "Research & Innovation",
        logo: "/college_logos/svu.png",
        color: COLORS.accent,
        website: "https://svuniversity.edu.in",
      },
      {
        name: "KL University",
        location: "Vijayawada, Andhra Pradesh",
        focus: "Entrepreneurship & Startups",
        logo: "/college_logos/klu.jpg",
        color: COLORS.tertiary,
        website: "https://kluniversity.in",
      },
    ],
    [],
  );

  return (
    <section
      id="colleges"
      className="py-20 bg-primary relative overflow-hidden" // Reduced from py-32 to py-20
      aria-labelledby="colleges-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(243,244,241,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div
        className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-accent/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 space-y-4"
        >
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">
            Partner Institutions
          </span>
          <h2
            id="colleges-heading"
            className="text-4xl md:text-5xl font-bold text-secondary"
          >
            Colleges <span className="text-accent">Served</span>
          </h2>
          <p className="text-secondary/60 max-w-2xl mx-auto text-lg">
            We partner with leading universities to equip students with
            real‑world venture skills and AI‑driven project experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college, i) => (
            <TactileCard key={college.name} delay={i * 0.1} className="group">
              <div className="flex items-start gap-4">
                {/* College Logo with Next.js Image */}
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 border border-white/10">
                  <Image
                    src={college.logo}
                    alt={`${college.name} logo`}
                    fill
                    className="object-contain p-1"
                    sizes="56px"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors">
                    {college.name}
                  </h3>
                  <p className="text-secondary/50 text-sm">
                    {college.location}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: college.color }}
                  >
                    {college.focus}
                  </p>
                  <motion.a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-accent transition-colors pt-1"
                    whileHover={{ x: 5 }}
                    aria-label={`Visit ${college.name} website`}
                  >
                    Visit website
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </motion.a>
                </div>
              </div>
            </TactileCard>
          ))}
        </div>

        {/* Optional call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Partner with us
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
});
