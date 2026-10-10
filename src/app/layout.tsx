import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Noto_Sans_Devanagari, Noto_Serif_Devanagari, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/components/Language";
import { organizationJsonLd } from "@/content/seo";
import { rootMetadata } from "@/content/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-source",
});

const hindiSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hindi-sans",
});

const hindiSerif = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-hindi-serif",
});

export const metadata: Metadata = rootMetadata();

export const viewport: Viewport = {
  themeColor: "#1c1b18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c");

  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${sans.variable} ${hindiSans.variable} ${hindiSerif.variable} h-full`}
    >
      <body className="min-h-full bg-ivory font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
