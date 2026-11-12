import type { Metadata } from "next";
import { AboutCompany } from "@/components/AboutCompany";
import { Directors } from "@/components/Directors";
import { DocumentsSection } from "@/components/DocumentsSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { MaintenancePage } from "@/components/MaintenancePage";
import { PropertyDetails } from "@/components/PropertyDetails";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyOverview } from "@/components/PropertyOverview";
import { WhyThisProperty } from "@/components/WhyThisProperty";
import { SiteFrame } from "@/components/SiteFrame";
import { maintenanceMode } from "@/content/maintenance";
import { listingJsonLd } from "@/content/seo";
import { company } from "@/content/site";

export const metadata: Metadata = maintenanceMode
  ? {
      title: `Under maintenance | ${company.shortName}`,
      description: `${company.legalName} website is under maintenance.`,
      robots: { index: false, follow: false },
    }
  : {
      alternates: { canonical: "/" },
    };

export default function HomePage() {
  if (maintenanceMode) {
    return <MaintenancePage />;
  }

  const listing = listingJsonLd();
  const listingJson = listing
    ? JSON.stringify(listing).replace(/</g, "\\u003c")
    : null;

  return (
    <SiteFrame overlay>
      {listingJson ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: listingJson }}
        />
      ) : null}
      <main>
        <Hero />
        <PropertyOverview />
        <PropertyGallery />
        <PropertyDetails />
        <LocationSection />
        <WhyThisProperty />
        <DocumentsSection />
        <AboutCompany />
        <Directors />
        <EnquiryForm />
      </main>
    </SiteFrame>
  );
}
