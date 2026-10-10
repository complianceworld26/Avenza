import type { Metadata } from "next";
import { company } from "@/content/site";
import { TermsView } from "@/components/TranslatedPages";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for using the website of ${company.legalName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsView />;
}
