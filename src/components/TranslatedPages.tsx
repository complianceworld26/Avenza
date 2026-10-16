"use client";

import Link from "next/link";
import { company } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { useI18n } from "@/components/Language";
import { SiteFrame } from "@/components/SiteFrame";
import { buttonClass } from "@/components/ui";

export function PrivacyView() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.privacy.title} lede={t.privacy.lede}>
      {t.privacy.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </LegalPage>
  );
}

export function TermsView() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.terms.title} lede={t.terms.lede}>
      {t.terms.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </LegalPage>
  );
}

export function DisclaimerView() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.disclaimerPage.title} lede={t.disclaimerPage.lede}>
      {t.disclaimerPage.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </LegalPage>
  );
}

export function CertificateView() {
  const { t } = useI18n();
  const rows = [
    { label: t.certificate.name, value: company.legalName },
    { label: t.certificate.cin, value: company.cin },
    { label: t.certificate.date, value: t.facts.date },
    { label: t.certificate.type, value: t.facts.companyType },
    { label: t.certificate.office, value: t.facts.registeredOffice },
    { label: t.certificate.source, value: t.facts.source },
  ];

  return (
    <SiteFrame>
      <main className="pb-24">
        <div className="bg-olive-deep px-4 pb-10 pt-28 text-ivory sm:px-6 md:pt-32">
          <article className="mx-auto max-w-3xl">
            <p className="text-base">
              <Link href="/#documents" className="font-semibold text-gold hover:text-white">
                {t.certificate.back}
              </Link>
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">{t.certificate.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory/95">{t.certificate.lede}</p>
          </article>
        </div>
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="border-4 border-olive-deep bg-paper px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-base font-semibold text-bronze">{t.certificate.record}</p>
            <dl className="mt-8">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-t border-line py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="text-base font-semibold text-muted">
                    {row.label}
                  </dt>
                  <dd className="text-lg">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-ink">{t.certificate.ownership}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={company.mcaUrl}
              className={`${buttonClass("primary")} w-full sm:w-auto`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.certificate.verify}
            </a>
            {company.certificatePdf ? (
              <a
                href={company.certificatePdf}
                className={`${buttonClass("secondary")} w-full sm:w-auto`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.certificate.openFile}
              </a>
            ) : null}
          </div>

          {company.certificatePdf ? (
            <iframe
              title={t.certificate.title}
              src={company.certificatePdf}
              className="mt-10 h-[70vh] w-full border border-line"
            />
          ) : (
            <p className="mt-8 border-l-4 border-bronze bg-cream px-4 py-3 text-base text-ink">{t.certificate.missing}</p>
          )}
        </article>
      </main>
    </SiteFrame>
  );
}

export function NotFoundView() {
  const { t } = useI18n();

  return (
    <SiteFrame>
      <main className="px-4 pb-24 pt-32 sm:px-6">
        <div className="mx-auto max-w-xl border-l-8 border-bronze bg-paper px-6 py-8">
          <p className="text-base font-semibold text-bronze">404</p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-olive-deep">{t.notFound.title}</h1>
          <p className="mt-6 text-ink/85">{t.notFound.body}</p>
          <Link href="/" className={`${buttonClass("primary")} mt-8`}>
            {t.notFound.back}
          </Link>
        </div>
      </main>
    </SiteFrame>
  );
}
