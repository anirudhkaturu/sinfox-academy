"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { ScrambleText } from "./ScrambleText";
import { MagneticButton } from "./MagneticButton";

export const Navigation = React.memo(function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Courses", href: "/courses" },
      { name: "Incubations", href: "/incubations" },
      { name: "Contact", href: "/contact" },
    ],
    [],
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navClasses = useMemo(
    () =>
      `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || pathname !== "/"
          ? "bg-primary/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`,
    [isScrolled, pathname],
  );

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="/main_logo/skillbridgelogo.png"
              alt="Skill Bridge Logo"
              className="h-17 w-auto drop-shadow-sm -translate-y-1.5"
            />
            <span className="text-2xl font-bold text-secondary tracking-tight">
              SKILL<span className="text-accent">.</span>BRIDGE
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(link.href)
                  ? "text-secondary"
                  : "text-secondary/70 hover:text-secondary"
              }`}
            >
              <ScrambleText text={link.name} />
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          <div className="flex items-center gap-4 pl-4 border-l border-secondary/10">
            <MagneticButton
              className="bg-secondary text-primary px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-xl transition-shadow"
              ariaLabel="Enroll Now"
            >
              Enroll Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </MagneticButton>

            <motion.a
              href="https://sinfoxmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-secondary/20 flex items-center justify-center text-secondary/60 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label="Exit to All Divisions"
              title="Exit to All Divisions"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.a
            href="https://sinfoxmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border-2 border-secondary/30 flex items-center justify-center text-secondary/50 mr-2"
            whileTap={{ scale: 0.95 }}
            aria-label="Exit to Sinfox Media"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </motion.a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="p-2 text-secondary rounded-lg hover:bg-secondary/5 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary border-t border-tertiary/20 overflow-hidden"
          >
            <nav
              className="px-6 py-4 flex flex-col gap-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-secondary font-medium py-3 px-2 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-secondary/10"
                      : "hover:bg-secondary/5"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-secondary/10 flex items-center justify-between">
                <MagneticButton
                  className="bg-secondary text-primary px-6 py-3 rounded-full font-medium text-sm"
                  ariaLabel="Enroll Now"
                >
                  Enroll Now{" "}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </MagneticButton>

                <a
                  href="https://sinfoxmedia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-secondary/60 hover:text-accent transition-colors"
                >
                  <span className="w-8 h-8 rounded-full border border-secondary/30 flex items-center justify-center">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  sinfoxmedia.com
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});
