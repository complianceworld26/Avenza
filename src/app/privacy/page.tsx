import type { Metadata } from "next";
import { company } from "@/content/site";
import { PrivacyView } from "@/components/TranslatedPages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.legalName} handles details sent through the enquiry form on this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
