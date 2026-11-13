import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/SimplePageLayout";
import { PendingNote } from "@/components/PendingNote";
import { cerimonia, pageTitle } from "@/content/wedding";

export const metadata: Metadata = { title: pageTitle("Cerimônia") };

export default function CerimoniaPage() {
  return (
    <SimplePageLayout title={cerimonia.title} intro={cerimonia.intro}>
      <PendingNote note={cerimonia.note} />
    </SimplePageLayout>
  );
}
