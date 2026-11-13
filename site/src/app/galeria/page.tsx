import type { Metadata } from "next";
import { pageTitle } from "@/content/wedding";
import { Gallery } from "@/components/Gallery";

export const metadata: Metadata = { title: pageTitle("Galeria") };

export default function GaleriaPage() {
  return <Gallery />;
}
