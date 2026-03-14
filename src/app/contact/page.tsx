"use client";

import React from "react";

import { ContactHero } from "./_components/ContactHero";
import { ContactDetailsSection } from "./_components/ContactDetailsSection";
import { ContactFormSection } from "./_components/ContactFormSection";

export default function ContactPage(): React.JSX.Element {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-white">
      <ContactHero />
      <ContactDetailsSection />
      <ContactFormSection />
    </main>
  );
}

