import type { Metadata } from "next";
import { company } from "@/content/site";
import { DisclaimerView } from "@/components/TranslatedPages";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for property information published by ${company.legalName}.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return <DisclaimerView />;
}
