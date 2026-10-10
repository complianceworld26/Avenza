import type { Metadata } from "next";
import { company } from "@/content/site";
import { CertificateView } from "@/components/TranslatedPages";

export const metadata: Metadata = {
  title: "Company Certificate",
  description: `Incorporation particulars of ${company.legalName}, CIN ${company.cin}. Incorporation is not proof of title to any land.`,
  alternates: { canonical: "/documents/certificate" },
};

export default function CertificatePage() {
  return <CertificateView />;
}
