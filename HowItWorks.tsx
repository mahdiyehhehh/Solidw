import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Create your account",
    description: "Sign up in seconds with just your email. No credit card, no setup calls.",
  },
  {
    number: "02",
    title: "Enter your business information",
    description: "Add your services, hours, location and a few photos. Takes about two minutes.",
  },
  {
    number: "03",
    title: "Share your booking page",
    description: "Get your link and QR code, then share it on social media, in-store or with customers directly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From nothing to bookable in three steps."
          description="No design skills, no developers, no waiting. Most businesses are live before their coffee gets cold."
        />

        <div className="relative mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {/* connecting line, desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent sm:block"
          />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div className="relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-semibold text-brand-indigo">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
