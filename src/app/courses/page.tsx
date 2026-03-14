"use client";

import React from "react";

import { CoursesHero } from "./_components/CoursesHero";
import { CoreStackSection } from "./_components/CoreStackSection";
import { MicroExtensionsSection } from "./_components/MicroExtensionsSection";
import { CoursesCtaSection } from "./_components/CoursesCtaSection";

export default function CoursesPage(): React.JSX.Element {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-white">
      <CoursesHero />
      <CoreStackSection />
      <MicroExtensionsSection />
      <CoursesCtaSection />
    </main>
  );
}

