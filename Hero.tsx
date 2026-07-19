"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/landing/PhoneMockup";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-radial-fade blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-indigo" />
              Built for barbers, salons, studios &amp; local businesses
            </motion.div>

            <motion.h1
              variants={item}
              className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Create your booking page{" "}
              <span className="text-gradient animate-gradient-pan">in under 2 minutes.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
            >
              Create a beautiful business page with WhatsApp booking, Telegram
              booking, QR codes and easy sharing. No app to install, nothing
              for your customers to sign up for.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing" size="lg" className="group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                <PlayCircle className="h-4 w-4" />
                Live Demo
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-2.5"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-muted-foreground">
                solidw.app/<span className="text-foreground">bella-barber</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
