// app/about/page.tsx
"use client";

import React from "react";

import { AboutHero } from "./_components/AboutHero";
import { AboutStats } from "./_components/AboutStats";
import { MissionSection } from "./_components/MissionSection";
import { ValuesSection } from "./_components/ValuesSection";
import { TeamSection } from "./_components/TeamSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { AboutCtaSection } from "./_components/AboutCtaSection";

export default function AboutPage(): React.JSX.Element {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-white">
      <AboutHero />
      <AboutStats />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <TestimonialsSection />
      <AboutCtaSection />
    </main>
  );
}
