import markedPlots from "@/assets/plot-1.jpg";
import approachRoad from "@/assets/plot-2.jpg";
import aerialPlots from "@/assets/plot-3.jpg";
import fieldPlots from "@/assets/plot-4.jpg";
import openPlot from "@/assets/plot-5.jpg";
import correspondentKyc from "@/assets/docs/cor kyc.jpeg";
import memberKyc from "@/assets/docs/Member-kyc-form.jpeg";

/**
 * AVENZA REALTECH — site content
 *
 * Edit this file to update the website. Components read from here.
 * Leave a string empty when a fact is not confirmed. The page will show
 * “To be confirmed” rather than invent a figure.
 *
 * Do not add PAN, TAN, or any other tax identifier.
 * The five plot photographs live in `src/assets/` and are imported at the top of this file.
 * They are Unsplash library pictures of open land, used as illustration. They are not a survey of one parcel.
 */

export const company = {
  legalName: "AVENZA REALTECH PRIVATE LIMITED",
  shortName: "Avenza Realtech",
  cin: "U68200UP2026PTC253333",
  incorporationDate: "30 September 2026",
  incorporationDateIso: "2026-09-30",
  companyType: "Company limited by shares",
  registeredOffice:
    "Near Sant Marry School, Bijnor, Bijnor, Bijnor-246701, Uttar Pradesh",
  cityLine: "Bijnor, Uttar Pradesh",
  source: "Ministry of Corporate Affairs / Central Registration Centre",
  mcaUrl:
    "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html",
  /**
   * Optional file placed in `public/`, for example `/documents/certificate-of-incorporation.pdf`.
   * Leave empty until the actual certificate file is added.
   */
  certificatePdf: "",
} as const;

/**
 * Five illustrative land photographs from Unsplash.
 * Unsplash License: https://unsplash.com/license
 * plot-1 Qad7evtAV0A · plot-2 e-b6CntFTUs · plot-3 32hGYh_7gn4
 * plot-4 qD7tpy_VozY · plot-5 hc8VRgDj4Ik
 */
export const photos = {
  plots: { src: markedPlots.src, alt: "Grassed plots laid out along new roads" },
  road: { src: approachRoad.src, alt: "A narrow road running between open fields toward a town" },
  aerial: { src: aerialPlots.src, alt: "An aerial view of farmland divided into plots" },
  fields: { src: fieldPlots.src, alt: "A patchwork of green and brown plots beside a lane" },
  openPlot: { src: openPlot.src, alt: "An open field with trees along the far edge" },
} as const;

export const propertyGallery = [
  { ...photos.plots, caption: "Property" },
  { ...photos.road, caption: "Road / Approach" },
  { ...photos.aerial, caption: "Surroundings" },
  { ...photos.fields, caption: "Nearby Area" },
  { ...photos.openPlot, caption: "Open plot" },
] as const;

export const property = {
  /** Published land / project name. Leave empty until confirmed. */
  name: "",
  /**
   * Approved line. Replace it here if the wording should change.
   */
  tagline: "Land that gives you room to build what comes next.",
  /** City only, until a street address is supplied. */
  location: "Bijnor",
  /** Example shape once known: "12,000 sq. ft" or "2.5 acres" or "4 bigha". */
  landArea: "Revealing soon",
  /** Residential, commercial, agricultural, or whatever the records actually say. */
  propertyType: "Plot",
  plotSize: "",
  /** Availability or status. Leave empty until it is confirmed. */
  availability: "",
  /**
   * A published price, or the words "Price on request".
   * Do not invent a figure.
   */
  price: "Price on request",
  /**
   * Illustrative land photograph for the hero. Not a survey of this parcel.
   */
  heroImage: {
    src: photos.plots.src,
    alt: photos.plots.alt,
  },
};

export type Fact = {
  label: string;
  value: string;
};

/**
 * Measured characteristics of the land.
 * Add a row only when the owner has supplied the fact.
 *
 * Examples (do not uncomment with guessed values):
 * { label: "Total area", value: "" },
 * { label: "Plot dimensions", value: "" },
 * { label: "Road frontage", value: "" },
 * { label: "Approach road", value: "" },
 * { label: "Facing", value: "" },
 * { label: "Land use", value: "" },
 * { label: "Utilities", value: "" },
 * { label: "Boundaries", value: "" },
 */
export const landFacts: Fact[] = [];

/**
 * Measurements and records for the land section.
 * Leave `value` empty until that fact is confirmed. The page shows “To be confirmed”.
 * Area, plot size, and land use fall back to the matching fields on `property` when those are filled.
 */
export const landSpecFields = [
  { id: "area", value: "" },
  { id: "dimensions", value: "" },
  { id: "frontage", value: "" },
  { id: "approach", value: "" },
  { id: "facing", value: "" },
  { id: "use", value: "" },
  { id: "boundaries", value: "" },
  { id: "utilities", value: "" },
  { id: "ownership", value: "" },
] as const;

export type LandSpecId = (typeof landSpecFields)[number]["id"];

export function landSpecValue(id: LandSpecId): string {
  const row = landSpecFields.find((item) => item.id === id);
  if (row && hasText(row.value)) return row.value.trim();
  if (id === "area" && hasText(property.landArea)) return property.landArea.trim();
  if (id === "dimensions" && hasText(property.plotSize)) return property.plotSize.trim();
  if (id === "use" && hasText(property.propertyType)) return property.propertyType.trim();
  return "";
}

/** Short notes that are actually known. Leave empty rather than writing amenities that are not on site. */
export const amenities: string[] = [];

export type NearbyPlace = {
  name: string;
  /** Distance or travel note supplied by the owner. Do not estimate. */
  detail: string;
};

export const locationInfo = {
  /**
   * Place name shown in the location section.
   * The map uses coordinates or `mapQuery` only, so a city name is not pinned as the plot.
   */
  address: "Bijnor",
  /** Optional. Decimal degrees, for example "29.372". */
  latitude: "",
  longitude: "",
  /**
   * Used for the map if coordinates are not set.
   * Leave empty while the published place is only the city.
   */
  mapQuery: "",
  nearby: [] as NearbyPlace[],
  /** Roads, cities, stations, or airports — each with a detail the owner has confirmed. */
  connectivity: [] as NearbyPlace[],
};

export type ListedDocument = {
  title: string;
  note: string;
  /** Path in `public/`, for example "/documents/sale-deed.pdf". */
  href: string;
};

/**
 * Property papers actually available for a reader of this website.
 * An empty list is correct until files are ready. Do not list a deed that is not on file.
 */
export const propertyDocuments: ListedDocument[] = [];

/**
 * Blank KYC forms kept in `src/assets/docs/`.
 * These are forms to fill in. They are not property papers.
 */
export const kycForms = [
  {
    id: "correspondent",
    href: correspondentKyc.src,
    fileName: "Avenza-Agent-Business-Correspondent-KYC.jpeg",
  },
  {
    id: "member",
    href: memberKyc.src,
    fileName: "Avenza-Member-KYC-Form.jpeg",
  },
] as const;

export type KycFormId = (typeof kycForms)[number]["id"];

export type Director = {
  name: string;
  designation: string;
};

/**
 * Names and designations from the company’s official records only.
 * Example: { name: "Full name", designation: "Director" }
 */
export const directors: Director[] = [];

export const contact = {
  /** Displayed only when filled. Example: "+91 98765 43210" */
  phone: "",
  /** Displayed, and used as the enquiry mailbox when no endpoint is set. */
  email: "",
  /**
   * WhatsApp number with country code, digits only.
   * Example: "919876543210"
   * Leave empty to hide the WhatsApp button.
   */
  whatsapp: "919286529959",
  /**
   * Optional URL that receives a JSON POST of the enquiry.
   * Leave empty until a real inbox or form service is connected.
   */
  enquiryEndpoint: "",
};

export const navigation = [
  { href: "/#property", label: "Property" },
  { href: "/#location", label: "Location" },
  { href: "/#about", label: "About Us" },
  { href: "/#documents", label: "Documents" },
  { href: "/#contact", label: "Contact" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
] as const;

export const disclaimerText =
  "Property information displayed on this website is provided for informational purposes and should be independently verified before any transaction. Availability, pricing and other property details may change.";

export const copy = {
  intro: {
    heading: "A place worth seeing in person.",
    body: "Avenza Realtech Private Limited is presenting a piece of land on this page. What you can read here is limited to the company’s registration and to property particulars once they are confirmed. Area, boundaries, price, and permissions are not filled in from guesswork. The useful way to judge the land is to walk it and to read the papers that belong to it.",
  },
  gallery: {
    heading: "Photographs",
    body: "These frames are reserved for pictures of the property, the approach, and the surroundings. They stay empty until those pictures are added. They are not photographs of another place.",
  },
  land: {
    heading: "More than a piece of land.",
    body: "Area, frontage, the road that reaches the plot, facing, utilities, and land use belong with this land. A line is shown only when that fact has been supplied.",
  },
  location: {
    heading: "Connected to where it matters.",
    pending: "The property is in Bijnor.",
    known: "The property is in Bijnor.",
  },
  matters: {
    heading: "Things that matter when you buy land.",
    items: [
      {
        index: "01",
        title: "Location",
        body: "The land is in Bijnor, Uttar Pradesh.",
      },
      {
        index: "02",
        title: "Accessibility",
        body: "The approach, the frontage, and the roads that actually reach the plot will be described from confirmed information. No distance and no travel time is shown until that information is supplied.",
      },
      {
        index: "03",
        title: "Documentation",
        body: "Avenza Realtech Private Limited has a certificate of incorporation dated 30 September 2026, from the Ministry of Corporate Affairs / Central Registration Centre. That certificate identifies the company. It is not a title document for the land. Property papers are listed on their own, and only when a copy is available to show.",
      },
      {
        index: "04",
        title: "Potential",
        body: "What the land can be used for depends on its area, its land use, and the permissions that apply to it. Those points are not stated as promises. This page does not estimate appreciation, rent, or any return.",
      },
      {
        index: "05",
        title: "Ownership",
        body: "Who holds the land should be read from the title and revenue records, not assumed from the company’s registration. Those records will be named when copies are available. Until then, ownership is something to verify, not something already claimed here.",
      },
    ],
  },
  documents: {
    heading: "Clear information. Straightforward dealing.",
    body: "The company’s incorporation is a public record. The land’s own papers are a different record. Each should be read for what it actually says.",
    propertyEmpty:
      "No property documents have been placed on this website for public view. On a visit, ask which title, revenue, map, and approval papers can be inspected. Incorporation papers do not replace them.",
  },
  about: {
    heading: "Built around straightforward real estate.",
    paragraphs: [
      "Avenza Realtech Private Limited is a company limited by shares, incorporated on 30 September 2026. Its registered office is near Sant Marry School, Bijnor, Bijnor, Bijnor-246701, Uttar Pradesh.",
      "The company was incorporated recently. There is no long record of completed work to present here, and this page does not invent one.",
      "What the site is for is plain: publish the registration details, publish property facts only when they are known, and make it possible to arrange a visit.",
    ],
  },
  directors: {
    heading: "Directors",
    empty:
      "Names and designations from the company’s official records will be listed here. They have not been added to this page yet.",
  },
  visit: {
    heading: "See the property for yourself.",
    body: "Photos can show a place. A visit lets you understand it.",
  },
  enquiry: {
    heading: "Tell us when you can visit.",
    body: "Leave your name, a phone number, and a day that suits you. The request is for a site visit. It is not a booking confirmation until the office replies.",
  },
};

export function hasText(value: string | undefined | null): value is string {
  return Boolean(value && value.trim());
}

/** Maps stored English property phrases to the active language. */
export function displayPropertyValue(
  value: string,
  labels: { revealingSoon: string; plot: string },
): string {
  const text = value.trim();
  if (text === "Revealing soon") return labels.revealingSoon;
  if (/^plot$/i.test(text)) return labels.plot;
  return text;
}

export function pageTitle(): string {
  if (hasText(property.name)) {
    return `${property.name.trim()} | ${company.legalName}`;
  }
  return company.legalName;
}

export function pageDescription(): string {
  const parts: string[] = [];
  if (hasText(property.name)) parts.push(property.name.trim());
  if (hasText(property.propertyType)) parts.push(property.propertyType.trim());
  if (hasText(property.location)) parts.push(`in ${property.location.trim()}`);

  const subject = parts.length > 0 ? parts.join(" ") : "A land property";
  const area = hasText(property.landArea)
    ? ` Land area: ${property.landArea.trim()}.`
    : "";

  return `${subject} offered by ${company.legalName}, a private limited company with its registered office in Bijnor, Uttar Pradesh.${area} Details on this page are limited to confirmed information. The company’s incorporation is not proof of title to the land.`;
}

export function whatsappHref(text?: string): string | null {
  const digits = contact.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return null;
  const name = hasText(property.name) ? property.name.trim() : "the land";
  const message =
    text?.trim() ||
    `Hello, I would like to enquire about ${name} listed by ${company.legalName}.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function mapEmbedUrl(): string | null {
  const lat = locationInfo.latitude.trim();
  const lng = locationInfo.longitude.trim();
  const query = hasText(locationInfo.mapQuery)
    ? locationInfo.mapQuery.trim()
    : lat && lng
      ? `${lat},${lng}`
      : "";

  if (!query) return null;
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain before publishing,
 * for example https://example.com — no trailing slash.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");
