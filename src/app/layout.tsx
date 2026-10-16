import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari, Outfit, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/components/Language";
import { organizationJsonLd } from "@/content/seo";
import { rootMetadata } from "@/content/seo";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source",
});

const hindiSans = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hindi-sans",
});

export const metadata: Metadata = rootMetadata();

export const viewport: Viewport = {
  themeColor: "#0c3b2c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c");

  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${sans.variable} ${hindiSans.variable} h-full`}
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
