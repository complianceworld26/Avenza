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
      <main className="px-5 pb-24 pt-28 sm:px-8 md:pt-36">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/#documents" className="hover:text-olive">
              {t.certificate.back}
            </Link>
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            {t.certificate.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/85">{t.certificate.lede}</p>

          <div className="mt-12 border border-line bg-paper px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-bronze">
              {t.certificate.record}
            </p>
            <dl className="mt-8">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-t border-line py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                    {row.label}
                  </dt>
                  <dd className="text-lg">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-8 text-ink/85">{t.certificate.ownership}</p>

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
            <p className="mt-8 text-sm text-muted">{t.certificate.missing}</p>
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
      <main className="px-5 pb-24 pt-36 sm:px-8">
        <div className="mx-auto max-w-xl">
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-bronze">404</p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-tight">{t.notFound.title}</h1>
          <p className="mt-6 text-ink/85">{t.notFound.body}</p>
          <Link href="/" className={`${buttonClass("primary")} mt-8`}>
            {t.notFound.back}
          </Link>
        </div>
      </main>
    </SiteFrame>
  );
}
