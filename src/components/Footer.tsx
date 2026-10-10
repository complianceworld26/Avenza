"use client";

import Link from "next/link";
import { useI18n } from "@/components/Language";
import { company, legalNav, navigation } from "@/content/site";

export function Footer() {
  const { t } = useI18n();
  const pageLabels = [
    t.nav.property,
    t.nav.location,
    t.nav.aboutShort,
    t.nav.documents,
    t.nav.contact,
  ];
  const legalLabels = [t.footer.privacy, t.footer.terms, t.footer.disclaimer];

  return (
    <footer className="border-t border-line bg-[#ebe6dc] pb-24 sm:pb-0">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-[0.12em]">AVENZA</p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em]">Realtech</p>
          <p className="mt-6 text-sm leading-relaxed">{company.legalName}</p>
          <p className="mt-4 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            {t.footer.office}
          </p>
          <p className="mt-2 text-sm text-muted">{t.facts.cityLine}</p>
        </div>
        <nav className="md:col-span-3" aria-label={t.footer.onThisPage}>
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            {t.footer.onThisPage}
          </p>
          <ul className="mt-4 space-y-2">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-olive">
                  {pageLabels[index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-4" aria-label={t.footer.legal}>
          <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">{t.footer.legal}</p>
          <ul className="mt-4 space-y-2">
            {legalNav.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-olive">
                  {legalLabels[index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm leading-relaxed text-muted md:col-span-12">{t.footer.disclaimerText}</p>
        <p className="text-xs text-muted md:col-span-12">© 2026 {company.legalName}</p>
      </div>
    </footer>
  );
}
