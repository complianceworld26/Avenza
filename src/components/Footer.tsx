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
    <footer className="bg-navy pb-24 text-ivory sm:pb-0">
      <div className="h-2 bg-bronze" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 lg:px-8 lg:py-14">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl font-bold tracking-wide">AVENZA</p>
          <p className="text-base font-semibold text-gold">Realtech</p>
          <p className="mt-4 text-base leading-relaxed">{company.legalName}</p>
          <p className="mt-3 text-base">
            <span className="font-semibold text-gold">CIN </span>
            {company.cin}
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.office}</p>
          <p className="mt-1 text-base leading-relaxed text-ivory/90">{t.facts.registeredOffice}</p>
        </div>
        <nav className="md:col-span-3" aria-label={t.footer.onThisPage}>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.onThisPage}</p>
          <ul className="mt-3 space-y-2">
            {navigation.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base text-ivory/90 hover:text-gold">
                  {pageLabels[index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:col-span-4" aria-label={t.footer.legal}>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">{t.footer.legal}</p>
          <ul className="mt-3 space-y-2">
            {legalNav.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base text-ivory/90 hover:text-gold">
                  {legalLabels[index]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="border-t border-white/15 pt-6 text-base leading-relaxed text-ivory/85 md:col-span-12">
          {t.footer.disclaimerText}
        </p>
        <p className="text-sm text-ivory/70 md:col-span-12">© 2026 {company.legalName}</p>
      </div>
    </footer>
  );
}
