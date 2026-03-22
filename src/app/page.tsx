// app/page.tsx
import React from "react";
import { Hero } from "@/app/sections/Hero";
import { Features } from "@/app/sections/Features";
import { Methodology } from "@/app/sections/Methodology";
import { Community } from "@/app/sections/Community";
import { CTA } from "@/app/sections/Cta";
import { CollegesServed } from "./sections/CollegesServed";

export default function SinfoxAcademy(): React.JSX.Element {
  return (
    <main
      className="min-h-screen selection:bg-accent selection:text-white"
      style={{ backgroundColor: "#F3F4F1" }}
    >
      <Hero />
      <Features />
      <Methodology />
      <Community />
      <CollegesServed />
      <CTA />
    </main>
  );
}
