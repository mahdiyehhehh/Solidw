"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do my customers need to install anything?",
    answer:
      "No. Customers just visit your page in their browser and tap a button. WhatsApp or Telegram opens automatically with the booking message already written.",
  },
  {
    question: "Does SolidW handle payments or appointment scheduling?",
    answer:
      "No. SolidW is not a payment processor or an appointment management system. It simply opens a pre-filled chat so the customer and business can confirm details directly, the way most small businesses already prefer to work.",
  },
  {
    question: "Can I use both WhatsApp and Telegram at the same time?",
    answer:
      "Yes. Add both numbers and your page shows a button for each, so customers can book through whichever app they already use.",
  },
  {
    question: "Do I need any technical or design skills?",
    answer:
      "None. You fill in your business details through a simple form, and SolidW handles the layout, styling and mobile responsiveness for you.",
  },
  {
    question: "Can I change my page URL after creating it?",
    answer:
      "Yes, you can update your custom URL at any time from your dashboard, as long as the new one is available.",
  },
  {
    question: "What happens when I reach the Free plan limits?",
    answer:
      "Your page keeps working exactly as it does today. You can upgrade to Pro whenever you need more services, images or analytics, there's no forced interruption.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="Can't find what you're looking for? Reach out and we'll get back to you quickly."
        />

        <div className="mt-14 divide-y divide-border rounded-2xl border border-border bg-card/40">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-medium text-foreground">
                      {faq.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-45 text-brand-indigo"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
