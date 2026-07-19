import { Check, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything a new business needs to start taking bookings today.",
    features: [
      "One booking page",
      "QR code",
      "WhatsApp booking",
      "Telegram booking",
      "Google Maps",
      "5 gallery images",
      "3 services",
      "SolidW branding",
    ],
    cta: { label: "Get Started", variant: "secondary" as const },
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$—",
    period: "per month",
    description: "For businesses ready to grow beyond the essentials.",
    features: [
      "Unlimited services",
      "Unlimited images",
      "Analytics",
      "Remove branding",
      "Calendar export",
      "Priority support",
    ],
    cta: { label: "Upgrade via Telegram", variant: "primary" as const, icon: true },
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Upgrade when you're ready."
          description="No hidden fees, no long-term contracts. Pro is designed for businesses that have outgrown the basics."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8",
                  plan.highlighted
                    ? "border-transparent bg-foreground text-background shadow-glow"
                    : "border-border bg-card/50"
                )}
              >
                {plan.highlighted && (
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-brand-gradient opacity-90" />
                )}
                {plan.highlighted && (
                  <span className="absolute -top-3 right-8 rounded-full bg-background px-3 py-1 text-xs font-semibold text-foreground shadow-card">
                    Most popular
                  </span>
                )}

                <h3
                  className={cn(
                    "font-display text-xl font-semibold",
                    plan.highlighted ? "text-white" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.highlighted ? "text-white/80" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "font-display text-4xl font-semibold",
                      plan.highlighted ? "text-white" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-white/70" : "text-muted-foreground"
                    )}
                  >
                    / {plan.period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted ? "text-white" : "text-brand-indigo"
                        )}
                      />
                      <span className={plan.highlighted ? "text-white/90" : "text-foreground/85"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#top"
                  size="lg"
                  variant={plan.highlighted ? "secondary" : plan.cta.variant}
                  className={cn(
                    "mt-8 w-full",
                    plan.highlighted && "border-none bg-background text-foreground hover:bg-background/90"
                  )}
                >
                  {plan.cta.icon && <Send className="h-4 w-4" />}
                  {plan.cta.label}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
