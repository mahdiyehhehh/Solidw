import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SolidW — Create your booking page in under 2 minutes",
  description:
    "SolidW lets any business create a beautiful booking page with WhatsApp, Telegram, QR codes and easy sharing. No app, no setup calls, no payment system.",
  openGraph: {
    title: "SolidW — Create your booking page in under 2 minutes",
    description:
      "A beautiful business page with WhatsApp booking, Telegram booking, QR codes and easy sharing.",
    type: "website",
  },
  metadataBase: new URL("https://solidw.vercel.app"),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
