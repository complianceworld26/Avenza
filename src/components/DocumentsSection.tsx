"use client";

import Link from "next/link";
import { company, propertyDocuments } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Reveal } from "@/components/Reveal";
import { Container, Eyebrow, buttonClass } from "@/components/ui";

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
    <section id="documents" className="border-t border-line bg-[#e9e3d6] py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <Eyebrow>{t.documents.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[16ch] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            {t.documents.heading}
          </h2>
          <p className="mt-8 max-w-2xl text-ink/85">{t.documents.body}</p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <article className="border border-line bg-paper p-7 sm:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-bronze">
                {t.documents.company}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-medium leading-tight">
                {t.documents.certificate}
              </h3>
              <dl className="mt-8">
                {particulars.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-1 border-t border-line py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4"
                  >
                    <dt className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-muted">{t.documents.note}</p>
              <Link
                href="/documents/certificate"
                className={`${buttonClass("primary")} mt-8 w-full sm:w-auto`}
              >
                {t.documents.view}
              </Link>
            </article>

            <div>
              <h3 className="font-serif text-3xl font-medium">{t.documents.propertyDocs}</h3>
              {papers.length > 0 ? (
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {papers.map((item) => (
                    <li key={item.href} className="py-5">
                      <a
                        href={item.href}
                        className="font-medium hover:text-olive"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                      {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-6 max-w-md text-ink/85">{t.documents.propertyEmpty}</p>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
