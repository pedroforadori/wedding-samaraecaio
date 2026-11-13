import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/SimplePageLayout";
import { PendingNote } from "@/components/PendingNote";
import { chaBar, pageTitle } from "@/content/wedding";

export const metadata: Metadata = { title: pageTitle("Chá Bar") };

export default function ChaBarPage() {
  return (
    <SimplePageLayout title={chaBar.title} intro={chaBar.intro}>
      <PendingNote note={chaBar.note} />
    </SimplePageLayout>
  );
}
