import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CountdownCorner } from "@/components/Countdown";
import { couple, seo, wedding } from "@/content/wedding";
import "./globals.css";

// Fontes herdadas do site anterior: Cinzel para os textos, Lile Dahliya
// Script para o nome dos noivos. O briefing sugere ITC Edwardian Script e
// Exmouth — TODO: trocar quando houver os arquivos (licenciados) das fontes.
const displaySerif = localFont({
  variable: "--font-display",
  src: [
    { path: "../fonts/cinzel-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/cinzel-bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/cinzel-black.ttf", weight: "900", style: "normal" },
  ],
});

const script = localFont({
  variable: "--font-script",
  src: "../fonts/lile-dahliya-script.otf",
  weight: "400",
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL(wedding.siteUrl),
  openGraph: {
    title: couple.names,
    description: seo.shortDescription,
    siteName: couple.names,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${displaySerif.variable} ${script.variable} ${body.variable}`}
    >
      <body className="min-h-full flex flex-col bg-foam text-ink font-body antialiased">
        <Header />
        <CountdownCorner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
