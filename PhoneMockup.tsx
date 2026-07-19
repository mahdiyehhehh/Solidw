"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, CheckCheck, MapPin, Star } from "lucide-react";

type Stage = "page" | "chat";

export function PhoneMockup() {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = React.useState<Stage>("page");

  React.useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => {
      setStage((s) => (s === "page" ? "chat" : "page"));
    }, 3400);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  return (
    <div className="relative mx-auto w-[280px] select-none sm:w-[300px]">
      {/* Ambient glow behind the device */}
      <div className="absolute inset-0 -z-10 scale-125 rounded-[3rem] bg-brand-gradient-soft blur-2xl" />

      {/* Phone frame */}
      <div className="relative animate-float rounded-[2.5rem] border border-border bg-card/80 p-2.5 shadow-glow">
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-background" />
        <div className="relative h-[560px] w-full overflow-hidden rounded-[2rem] bg-background">
          <AnimatePresence mode="wait" initial={false}>
            {stage === "page" ? (
              <motion.div
                key="page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col"
              >
                <BookingPagePreview />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col"
              >
                <ChatPreview />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating status chip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -right-6 top-16 hidden items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-card sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-whatsapp" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-whatsapp" />
        </span>
        <span className="text-xs font-medium text-foreground">New booking request</span>
      </motion.div>
    </div>
  );
}

function BookingPagePreview() {
  return (
    <div className="flex h-full flex-col">
      <div className="relative h-28 w-full bg-brand-gradient">
        <div className="absolute -bottom-8 left-5 h-16 w-16 rounded-2xl border-4 border-background bg-card shadow-card" />
      </div>
      <div className="flex-1 px-5 pb-5 pt-11">
        <p className="font-display text-base font-semibold text-foreground">Bella Barber</p>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3 w-3 fill-brand-violet text-brand-violet" />
          <span>4.9 · Fades &amp; classic cuts</span>
        </div>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>Rua Augusta, São Paulo</span>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { name: "Classic haircut", price: "$25" },
            { name: "Beard trim", price: "$12" },
            { name: "Haircut + beard", price: "$32" },
          ].map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5"
            >
              <span className="text-xs font-medium text-foreground">{service.name}</span>
              <span className="text-xs text-muted-foreground">{service.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <div className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-whatsapp py-2.5 text-xs font-semibold text-white">
            Book on WhatsApp
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          <div className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-telegram py-2.5 text-xs font-semibold text-white">
            Book on Telegram
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="flex h-full flex-col bg-[#0b141a]">
      <div className="flex items-center gap-3 bg-[#1f2c34] px-4 py-3">
        <div className="h-8 w-8 rounded-full bg-brand-gradient" />
        <div>
          <p className="text-xs font-semibold text-white">Bella Barber</p>
          <p className="text-[10px] text-white/50">online</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 p-4">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bubble-tail-right relative ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#005c4b] px-3.5 py-2.5 text-[11px] leading-relaxed text-white"
        >
          <p className="font-medium">New booking via SolidW</p>
          <p className="mt-1 text-white/85">Service: Haircut + beard</p>
          <p className="text-white/85">Date: Sat, 10:30 AM</p>
          <p className="text-white/85">Name: Marina Costa</p>
          <div className="mt-1.5 flex items-center justify-end gap-1 text-[9px] text-white/60">
            <span>10:32</span>
            <CheckCheck className="h-3 w-3 text-[#53bdeb]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.35 }}
          className="relative max-w-[75%] rounded-2xl rounded-bl-sm bg-[#1f2c34] px-3.5 py-2.5 text-[11px] leading-relaxed text-white/90"
        >
          <p>Confirmed! See you Saturday ✂️</p>
          <div className="mt-1.5 flex items-center gap-1 text-[9px] text-white/50">
            <span>10:33</span>
            <Check className="h-3 w-3" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
