"use client";

import { company } from "@/content/site";
import { useI18n } from "@/components/Language";
import { Eyebrow, buttonClass } from "@/components/ui";

export function AboutCompany() {
  const { t } = useI18n();
  const rows = [
    { label: t.facts.cin, value: company.cin },
    { label: t.facts.incorporated, value: t.facts.date },
    { label: t.documents.labels.type, value: t.facts.companyType },
    { label: t.facts.office, value: t.facts.registeredOffice },
  ];

  return (
    <section id="about" className="bg-paper">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-5">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-olive-deep sm:text-4xl">
            {t.about.heading}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink sm:text-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href="#contact" className={`${buttonClass("primary")} mt-6`}>
            {t.visit.schedule}
          </a>
        </div>

        <div className="border border-olive-deep/20 bg-ivory lg:col-span-7">
          <div className="border-b-4 border-bronze bg-olive-deep px-5 py-5 text-ivory sm:px-7">
            <p className="text-sm font-semibold tracking-wide text-gold uppercase">{t.facts.legalName}</p>
            <p className="mt-2 font-serif text-2xl font-bold leading-snug sm:text-[1.7rem]">{company.legalName}</p>
          </div>
          <dl>
            {rows.map((item, index) => (
              <div
                key={item.label}
                className={`grid gap-1 px-5 py-4 sm:grid-cols-[12rem_1fr] sm:items-baseline sm:gap-6 sm:px-7 ${
                  index % 2 === 1 ? "bg-paper" : "bg-ivory"
                }`}
              >
                <dt className="text-sm font-semibold tracking-wide text-bronze-ink uppercase">{item.label}</dt>
                <dd className="text-lg font-semibold leading-snug text-charcoal">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted sm:px-7">{t.about.sourceNote}</p>
        </div>
      </div>
    </section>
  );
}
