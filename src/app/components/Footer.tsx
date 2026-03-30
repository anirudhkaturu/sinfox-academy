// app/sections/Footer.tsx
"use client";

import React, { useMemo } from "react";

export const Footer = React.memo(function Footer() {
  const footerLinks = useMemo(
    () => [
      {
        title: "Program",
        links: ["Curriculum", "Mentorship", "Projects", "Certification"],
      },
      {
        title: "Company",
        links: ["About", "Careers", "Blog", "Contact"],
      },
      {
        title: "Connect",
        links: ["Twitter", "LinkedIn", "YouTube", "Discord"],
      },
    ],
    [],
  );

  return (
    <footer className="bg-secondary text-primary py-16 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            {/* Logo area */}
            <div className="flex items-center gap-2">
              {/* Replace with your actual logo image */}
              <div className="relative w-8 h-8">
                <img
                  src="/main_logo/skillbridgelogo.png"
                  alt="Skill Bridge Logo"
                  className="w-32 drop-shadow-sm"
                />
              </div>
              <span className="text-xl font-bold">SKILL.BRIDGE</span>
            </div>
            <p className="text-primary/60 text-sm leading-relaxed">
              Engineering growth strategists through rigorous technical
              education.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-bold text-accent">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary/40 text-sm">
            © 2026 SKILL BRIDGE ACADEMY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary/40">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
