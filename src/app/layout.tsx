import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "MemePulse Memecoin Landing Page — Fun, Community Crypto",
  description: "MemePulse is a playful memecoin landing page with clear buy steps, transparent tokenomics, and a community-first vibe. Quick actions, friendly visuals.",
  keywords: ["memecoin","landing-page","buy-meme","tokenomics","community-crypto","crypto-onboarding","fun-crypto","memes","wallet","exchange"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemePulse",
    title: "MemePulse Memecoin Landing Page — Fun, Community Crypto",
    description: "MemePulse is a playful memecoin landing page with clear buy steps, transparent tokenomics, and a community-first vibe. Quick actions, friendly visuals.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759142432550-6b29b95e.jpg", width: 1200, height: 630, alt: "Neon MemePulse mascot with glow on gradient background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin Landing Page — Fun, Community Crypto",
    description: "MemePulse is a playful memecoin landing page with clear buy steps, transparent tokenomics, and a community-first vibe. Quick actions, friendly visuals.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759142432550-6b29b95e.jpg" }],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}