/**
 * AVENZA REALTECH — site content
 *
 * Edit this file to update the website. Components read from here.
 * Leave a string empty when a fact is not confirmed. The page will show
 * “To be confirmed” rather than invent a figure.
 *
 * Do not add PAN, TAN, or any other tax identifier.
 * Do not point images at stock photography of a different place.
 * Photographs belong in `public/images/` and are referenced as `/images/filename.jpg`.
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

export const property = {
  /** Published land / project name. Leave empty until confirmed. */
  name: "",
  /**
   * Approved line. Replace it here if the wording should change.
   */
  tagline: "Land that gives you room to build what comes next.",
  /** Full property location. Not the company’s registered office unless they are the same. */
  location: "",
  /** Example shape once known: "12,000 sq. ft" or "2.5 acres" or "4 bigha". */
  landArea: "",
  /** Residential, commercial, agricultural, or whatever the records actually say. */
  propertyType: "",
  plotSize: "",
  /** Availability or status. Leave empty until it is confirmed. */
  availability: "",
  /**
   * A published price, or the words "Price on request".
   * Do not invent a figure.
   */
  price: "Price on request",
  /**
   * Photograph of this property only.
   * src example: "/images/land-approach.jpg"
   */
  heroImage: {
    src: "",
    alt: "",
  },
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

/**
 * Replace `src` and `alt` when a real photograph exists.
 * Empty `src` keeps an honest placeholder. Do not use a picture of another site.
 */
export const gallery: GalleryImage[] = [
  {
    src: "",
    alt: "",
    category: "Property",
  },
  {
    src: "",
    alt: "",
    category: "Road / Approach",
  },
  {
    src: "",
    alt: "",
    category: "Surroundings",
  },
  {
    src: "",
    alt: "",
    category: "Nearby Area",
  },
  {
    src: "",
    alt: "",
    category: "Location",
  },
];

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

/** Short notes that are actually known. Leave empty rather than writing amenities that are not on site. */
export const amenities: string[] = [];

export type NearbyPlace = {
  name: string;
  /** Distance or travel note supplied by the owner. Do not estimate. */
  detail: string;
};

export const locationInfo = {
  /**
   * Property address used for the map and the location section.
   * Leave empty until the plot address is confirmed.
   * Do not copy the registered office here unless the land is at that address.
   */
  address: "",
  /** Optional. Decimal degrees, for example "29.372". */
  latitude: "",
  longitude: "",
  /**
   * Used for the map if coordinates are not set.
   * A precise place name or plus code. Do not use a nearby city as a stand-in.
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
  whatsapp: "",
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
    body: "Area, frontage, the road that reaches the plot, facing, utilities, and land use belong in this list. A line is added only when that fact has been supplied. Nothing below is inferred from the company’s city of registration.",
  },
  location: {
    heading: "Connected to where it matters.",
    pending:
      "A map pin, nearby places, and distances will appear here after the property’s location is confirmed. The company’s registered office is in Bijnor. That office is not marked as the land unless the two addresses are the same, which has not been stated.",
    known:
      "The location below is the property address supplied for this page. Read it with the papers, and confirm it on a visit.",
  },
  matters: {
    heading: "Things that matter when you buy land.",
    items: [
      {
        index: "01",
        title: "Location",
        body: "Where the land sits is the fact to settle first. The full address has not been published on this page yet. When it is confirmed, it will be written here, and the map will mark that place rather than a nearby town used as a substitute.",
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
    : hasText(locationInfo.address)
      ? locationInfo.address.trim()
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
