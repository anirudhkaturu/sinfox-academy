"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/app/components/MagneticButton";
import { TactileCard } from "@/app/components/TactileCard";

// Replace with your actual WhatsApp number (include country code, no '+' or spaces)
const WHATSAPP_NUMBER = "1234567890"; // e.g., "1234567890"

export function ContactFormSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;

    // Build a custom message with form data
    let message = `*New transmission from Skill Bridge portal*\n\n`;
    if (fullName) message += `*Name:* ${fullName}\n`;
    if (email) message += `*Email:* ${email}\n`;
    if (details) message += `\n*Details:*\n${details}\n`;
    message += `\n— Sent via Sinfox website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-[0.22em] text-secondary/50">
              Digital Transmission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
              Initiate a{" "}
              <span className="text-accent">Secure Transmission</span>.
            </h2>
            <p className="text-secondary/60 text-sm md:text-base max-w-md">
              Use this channel for admission vetting, portfolio reviews, or
              technical queries about the SKILLBRIDGE stack. Responses are handled by
              our Growth Advisors.
            </p>
          </motion.div>

          <TactileCard className="bg-secondary/5 border-secondary/15">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full legal name"
                    className="w-full rounded-xl border border-secondary/20 bg-primary/5 px-3 py-2.5 text-sm text-secondary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition-shadow"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60"
                  >
                    Institutional Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@institution.edu / .com"
                    className="w-full rounded-xl border border-secondary/20 bg-primary/5 px-3 py-2.5 text-sm text-secondary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition-shadow"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="details"
                  className="text-xs font-mono uppercase tracking-[0.2em] text-secondary/60"
                >
                  Transmission Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  placeholder="Share links to portfolios, questions about modules, or details about your venture."
                  className="w-full rounded-xl border border-secondary/20 bg-primary/5 px-3 py-2.5 text-sm text-secondary placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/60 transition-shadow resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <MagneticButton
                  type="submit"
                  className="bg-secondary text-primary px-7 py-3 rounded-full font-semibold text-sm shadow-[0_10px_30px_-10px_rgba(1,50,32,0.4)]"
                  ariaLabel="Initiate connection"
                >
                  Initiate Connection →
                </MagneticButton>
                <p className="text-[11px] text-secondary/50 font-mono tracking-[0.16em] uppercase">
                  Response window: 24–48 hours · Priority given to vetted
                  portfolios
                </p>
              </div>
            </form>
          </TactileCard>
        </div>
      </div>
    </section>
  );
}
