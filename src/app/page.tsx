import type { Metadata } from "next";
import { AboutCompany } from "@/components/AboutCompany";
import { Directors } from "@/components/Directors";
import { DocumentsSection } from "@/components/DocumentsSection";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { PropertyDetails } from "@/components/PropertyDetails";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyOverview } from "@/components/PropertyOverview";
import { WhyThisProperty } from "@/components/WhyThisProperty";
import { SiteFrame } from "@/components/SiteFrame";
import { listingJsonLd } from "@/content/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
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
