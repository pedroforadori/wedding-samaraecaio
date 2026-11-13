import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/SimplePageLayout";
import { PendingNote } from "@/components/PendingNote";
import { padrinhos, pageTitle } from "@/content/wedding";

export const metadata: Metadata = { title: pageTitle("Padrinhos") };

export default function PadrinhosPage() {
  return (
    <SimplePageLayout title={padrinhos.title} intro={padrinhos.intro}>
      <PendingNote note={padrinhos.note} />
    </SimplePageLayout>
  );
}
