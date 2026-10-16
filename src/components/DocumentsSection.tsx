"use client";

import Link from "next/link";
import { company, kycForms, propertyDocuments } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Eyebrow, buttonClass } from "@/components/ui";

export function DocumentsSection() {
  const { t } = useI18n();
  const papers = propertyDocuments.filter((item) => item.title.trim() && item.href.trim());
  const particulars = [
    { label: t.documents.labels.company, value: company.legalName },
    { label: t.documents.labels.cin, value: company.cin },
    { label: t.documents.labels.incorporated, value: t.facts.date },
    { label: t.documents.labels.type, value: t.facts.companyType },
    { label: t.documents.labels.office, value: t.facts.registeredOffice },
    { label: t.documents.labels.source, value: t.facts.source },
  ];

  return (
    <section id="documents" className="bg-cream">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Eyebrow tone="gold">{t.documents.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl">
          {t.documents.heading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink sm:text-lg">{t.documents.body}</p>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-12">
          <article className="flex flex-col border-4 border-olive-deep bg-paper lg:col-span-7">
            <div className="bg-olive-deep px-5 py-4 text-ivory">
              <p className="text-sm font-semibold text-gold">{t.documents.company}</p>
              <h3 className="mt-1 font-serif text-2xl font-bold">{t.documents.certificate}</h3>
            </div>
            <dl className="px-5 py-2">
              {particulars.map((item) => (
                <div key={item.label} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[9.5rem_1fr]">
                  <dt className="text-base font-semibold text-muted">{item.label}</dt>
                  <dd className="text-base font-semibold text-charcoal">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto px-5 pt-4 pb-6">
              <p className="text-base leading-relaxed text-ink">{t.documents.note}</p>
              <Link href="/documents/certificate" className={`${buttonClass("primary")} mt-5`}>
                {t.documents.view}
              </Link>
            </div>
          </article>

          <div className="flex h-full flex-col gap-6 lg:col-span-5">
            {papers.length > 0 ? (
              <article className="border-4 border-bronze bg-paper">
                <div className="bg-bronze px-5 py-4 text-charcoal">
                  <p className="text-sm font-semibold">{t.documents.eyebrow}</p>
                  <h3 className="mt-1 font-serif text-2xl font-bold">{t.documents.propertyDocs}</h3>
                </div>
                <ul className="divide-y divide-line px-5">
                  {papers.map((item) => (
                    <li key={item.href} className="py-4">
                      <a
                        href={item.href}
                        className="text-lg font-semibold text-olive-deep underline decoration-olive/40 underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                      {item.note ? <p className="mt-1 text-base text-ink">{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}

            <article className="flex h-full flex-1 flex-col border-4 border-olive bg-paper">
              <div className="bg-olive px-5 py-4 text-white">
                <p className="text-sm font-semibold text-gold">{t.documents.forms}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold">{t.documents.formsHeading}</h3>
              </div>
              <p className="px-5 pt-5 text-base leading-relaxed text-ink">{t.documents.formsBody}</p>
              <ul className="flex flex-1 flex-col gap-4 px-5 py-5">
                {kycForms.map((form) => (
                  <li
                    key={form.id}
                    className="flex flex-1 flex-col justify-between border-l-4 border-bronze bg-ivory p-4"
                  >
                    <div>
                      <h4 className="font-serif text-xl font-bold leading-snug text-olive-deep">
                        {t.documents.kyc[form.id].title}
                      </h4>
                      <p className="mt-2 text-base leading-relaxed text-ink">{t.documents.kyc[form.id].note}</p>
                    </div>
                    <a
                      href={form.href}
                      download={form.fileName}
                      className={`${buttonClass("secondary")} mt-4 w-fit`}
                    >
                      {t.documents.download}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
