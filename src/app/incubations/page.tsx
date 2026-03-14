"use client";

import React from "react";

import { IncubationsHero } from "./_components/IncubationsHero";
import { SelectionProcessSection } from "./_components/SelectionProcessSection";
import { VettingCriteriaSection } from "./_components/VettingCriteriaSection";
import { IncubationSupportSection } from "./_components/IncubationSupportSection";
import { IncubationsCtaSection } from "./_components/IncubationsCtaSection";

export default function IncubationsPage(): React.JSX.Element {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-white">
      <IncubationsHero />
      <SelectionProcessSection />
      <VettingCriteriaSection />
      <IncubationSupportSection />
      <IncubationsCtaSection />
    </main>
  );
}

