import {
  Clock,
  Image as ImageIcon,
  Link2,
  MapPin,
  MessageCircle,
  QrCode,
  Send,
  Share2,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    description: "Customers tap a button and send a booking request straight to your WhatsApp, fully pre-filled.",
    accent: "text-whatsapp",
  },
  {
    icon: Send,
    title: "Telegram Booking",
    description: "Prefer Telegram? Customers can request appointments there instead, no setup required.",
    accent: "text-telegram",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Every page comes with a scannable QR code, ready to print for your counter, window or menu.",
    accent: "text-brand-indigo",
  },
  {
    icon: MapPin,
    title: "Google Maps",
    description: "Show customers exactly where to find you with an embedded map and directions link.",
    accent: "text-brand-violet",
  },
  {
    icon: ImageIcon,
    title: "Gallery",
    description: "Showcase your work with a clean photo gallery, so customers know what to expect.",
    accent: "text-brand-cyan",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    description: "Display your hours clearly, including special hours for holidays and days off.",
    accent: "text-brand-indigo",
  },
  {
    icon: Link2,
    title: "Custom URL",
    description: "Get a clean, memorable link like solidw.app/your-business to share anywhere.",
    accent: "text-brand-violet",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Every page is designed mobile-first, because that's where your customers find you.",
    accent: "text-brand-cyan",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your page on Instagram, WhatsApp status, Google or anywhere else in one tap.",
    accent: "text-whatsapp",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Everything included"
          title="One page. Every way a customer wants to reach you."
          description="SolidW bundles the tools a local business actually needs to get booked, without the complexity of a full booking system."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-indigo/40 hover:shadow-glow">
                <div className="absolute inset-0 -z-10 bg-brand-gradient-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                  <feature.icon className={`h-5 w-5 ${feature.accent}`} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
