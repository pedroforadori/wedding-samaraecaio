import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/SimplePageLayout";
import { PendingNote } from "@/components/PendingNote";
import { fornecedores, pageTitle } from "@/content/wedding";

export const metadata: Metadata = { title: pageTitle("Fornecedores") };

export default function FornecedoresPage() {
  return (
    <SimplePageLayout title={fornecedores.title} intro={fornecedores.intro}>
      <PendingNote note={fornecedores.note} />
    </SimplePageLayout>
  );
}
