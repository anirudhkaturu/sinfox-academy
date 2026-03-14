"use client";

import { MessageCircle } from "lucide-react";

const microCourses = [
  "Personality Development",
  "Corporate Communication",
  "Interview & Resume Training",
  "Presentation Skills",
];

export function MicroExtensionsSection() {
  return (
    <section className="py-20 bg-secondary text-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(243,244,241,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] gap-12 items-start">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary/60">
              Human Interface Extensions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Soft Skills, Hard Advantage.
            </h2>
            <p className="text-primary/75 text-sm md:text-base max-w-md">
              These micro‑programs plug into any core track to amplify your
              ability to communicate, present, and negotiate in high‑stakes
              rooms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {microCourses.map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-4 flex items-start gap-3"
              >
                <div className="mt-1">
                  <MessageCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-primary/70 mt-1">
                    Applied communication drills, live feedback, and tactical
                    frameworks for persuasive presence.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

