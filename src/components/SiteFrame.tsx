"use client";

import { Footer } from "@/components/Footer";
import { useI18n } from "@/components/Language";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function SiteFrame({
  overlay = false,
  children,
}: {
  overlay?: boolean;
  children: React.ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2"
      >
        {t.skip}
      </a>
      <Navbar overlay={overlay} />
      <div id="content">{children}</div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
